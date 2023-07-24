function ShipControl()
{

document.onkeydown = function(e) 
{
	
if(e.repeat != true)
{
	if (e.keyCode == s_ButtonRight)
	{
		s_RBK = 1;
		if (s_RightExeption == false)
		s_rigInt = setInterval(MovRigt, 25);
	}
	if (e.keyCode == s_ButtonLeft)
	{
		s_LBK = 1;
		if (s_LeftExeption == false)
		s_lefInt = setInterval(MovLeft, 25);
	}
	if (e.keyCode == s_ButtonDown)
	{
		s_DBK = 1;
		if(s_DownExeption == false)
		s_dowInt = setInterval(MovDown, 25);
	}
	if (e.keyCode == s_ButtonUp)
	{
		s_UBK = 1;
		if(s_UpperExeption == false)
		s_uppInt = setInterval(MovUpper, 25);
	}
	if (e.keyCode == s_ButtonSkil1 && s_cd1 < 1 && S_mp >= 15)
	{
		S_mp -= 15;
		CurS_Speed = 8;
		let sk1Time = setTimeout(Sk1end, 7000);
		s_cd1 = 15;
	}
	if (e.keyCode == s_ButtonSkil2 && s_cd2 < 1 && S_mp >= 20)
	{
		S_mp -= 20;
		S_immortal = true;
		let sk2Time = setTimeout(Sk2end, 5000);
		s_cd2 = 20;
		document.getElementById('shield').style.display = 'block';
	}
	
}

}

document.onkeyup = function(f) 
{
	
	if (f.keyCode == s_ButtonLeft)
	{
		clearInterval(s_lefInt);
		clearTimeout(s_moveEndInt);
		ShipGIF('idle');
		s_LRcheck = 0;
		s_LeftExeption = false;
		s_LBK = 0;
	}
	if (f.keyCode == s_ButtonRight)
	{
		clearInterval(s_rigInt);
		clearTimeout(s_moveEndInt);
		ShipGIF('idle');
		s_LRcheck = 0;
		s_RightExeption = false;
		s_RBK = 0;
	}
	if (f.keyCode == s_ButtonDown)
	{
		clearInterval(s_dowInt);
		s_DownExeption = false;
		s_DBK = 0;
	}
	if (f.keyCode == s_ButtonUp)
	{
		clearInterval(s_uppInt);
		s_UpperExeption = false;
		s_UBK = 0;
	}
	
}
	
}

//движение вправо
function MovRigt(){
if(shipposx < 880)
shipposx += CurS_Speed;
ShipGIF('right');
s_LRcheck = 1;

if (s_RightExeption == false)
s_RightExeption = true;
}

//движение влево
function MovLeft(){
if(shipposx > -20)
shipposx -= CurS_Speed;
ShipGIF('left');
s_LRcheck = 1;

if (s_LeftExeption == false)
s_LeftExeption = true;
}

//движение вниз
function MovDown(){
if(shipposy > 0)
shipposy -= CurS_Speed;
if(s_LRcheck == 0)
ShipGIF('idle');

if (s_DownExeption == false)
s_DownExeption = true;
}

//движение вверх
function MovUpper(){
if(shipposy < 580)
shipposy += CurS_Speed;
if(s_LRcheck == 0)
ShipGIF('idle');

if (s_UpperExeption == false)
s_UpperExeption = true;
}

//длительное движение влево
function MovEndLeft(){
if(shipposx > -20)
shipposx -= CurS_Speed + 1;
ShipGIF('leftend');
s_LRcheck = 1;
}

//длительное движение вправо
function MovEndRight(){
if(shipposx < 880)
shipposx += CurS_Speed + 1;
ShipGIF('rightend');
s_LRcheck = 1;
}

//начало длительного движения вправо
function EndRight(){
clearInterval(s_rigInt);
MovEndRight();
s_rigInt = setInterval(MovEndRight, 25);
}

//начало длительного движения влево
function EndLeft(){
clearInterval(s_lefInt);
MovEndLeft();
s_lefInt = setInterval(MovEndLeft, 25);
}
