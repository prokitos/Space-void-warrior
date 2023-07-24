//Глобальные переменные для врагов
var Meteor = [];
var Senemy = [];
var shipposy = 200;
var shipposx = 200;	
var Sx1 = 0, Sx2 = 0, Sy1 = 0, Sy2 = 0;
var S_immortal = false;
var ShipComplete = false;
var S_hp = 100, S_mp = 100;
var S_Speed = 5;
var CurS_Speed = 5;

//Глобальные переменные для управления
var s_rigInt, s_lefInt, s_uppInt, s_dowInt, s_moveEndInt;
var s_ButtonLeft = 37, s_ButtonRight = 39, s_ButtonUp = 38, s_ButtonDown = 40; 
var s_ButtonSkil1 = 49, s_ButtonSkil2 = 50;
var s_RightExeption = false, s_LeftExeption = false;
var s_UpperExeption = false, s_DownExeption = false;
var Ship = document.getElementById('ship');
var s_LRcheck = 0;
var s_LBK = 0, s_RBK = 0, s_UBK = 0, s_DBK = 0;
var s_cd1 = 0;
var s_cd2 = 0;
var ShipGIF;

var audioBGship = new Audio('music/BG ship.mp3');

//вызов метода корабля
function ShipGame()
{

TextAdd('middle',7,'О нет, на вас напали пираты и вы попали в астеройдное поле. Вам необходимо выжить, чтобы отомстить за свой народ...');

audioBGship.volume  = 0.1;
audioBGship.play();
audioBGship.loop = true;

var TimeSurvive = 60; //60

if(HardCore == true)
TimeSurvive = 90;	//90

ShipBasic();
ShipControl();

var mainInt;
var TimeInt;
var MetInt;
var SpecInt;
var Ldelete;
	
mainInt = setInterval(ShipTick,25);
TimeInt = setInterval(ShipTime,1000);
MetInt = setInterval(MetSpawn, 600);
SpecInt = setInterval(SpecSpawn, 1800);
Ldelete = setInterval(LongDistance,4000);

//основные графические настройки корабля
function ShipBasic()
{
	
document.getElementById('gamefield').style.background = "url('images/background-5.jpg')";
Ship.style.display = "block";
Ship.src = "images/SpaceShip/ship.png";
Ship.style.left = shipposx + 'px';
Ship.style.bottom = shipposy + 'px';

document.getElementsByClassName('panel-xp')[0].style.display = "block";
document.getElementsByClassName('panel-mp')[0].style.display = "block";

document.getElementById("SkillP-1").style.background = "url('images/IconSkill/Skill-666.png')";
document.getElementById("SkillP-1").className = "ship";
document.getElementById("SkillP-1").style.backgroundSize = "cover";
document.getElementById("SkillP-2").style.background = "url('images/IconSkill/Skill-777.png')";
document.getElementById("SkillP-2").className = "ship";
document.getElementById("SkillP-2").style.backgroundSize = "cover";

document.getElementById('enemy_kill').style.display = 'block';	
document.getElementById('enemy_kill').innerHTML = "осталось прожить: " + TimeSurvive;

}

//таймер движение мобов
function ShipTick()
{
	
if(s_LBK == 0 && s_RBK == 0 && s_UBK == 0 && s_DBK == 0)
{
clearInterval(s_rigInt);
clearInterval(s_lefInt);	
clearInterval(s_uppInt);
clearInterval(s_dowInt);
clearTimeout(s_moveEndInt);
}

document.getElementById('hpv').innerHTML = S_hp;
document.getElementById('hp').style.width = S_hp + "%"
document.getElementById('mpv').innerHTML = S_mp;	
document.getElementById('mp').style.width = S_mp + "%"

let shieldx;
shieldx = shipposx - 14;

if(Ship.className == 'rightend' || Ship.className == 'leftend')
shieldx = shipposx + 5;
	
document.getElementById('shield').style.bottom = shipposy + 'px';
document.getElementById('shield').style.left = shieldx + 'px';	

MeteoMove();
SpecMove();

}

//таймер каждую секунду
function ShipTime()
{
	
TimeSurvive -= 1;
document.getElementById('enemy_kill').innerHTML = "осталось прожить: " + TimeSurvive;
	
if(TimeSurvive < 1)
{
	ShipComplete = true;
	ShipeEnd();
}

if(s_cd1 > 0)
{
	s_cd1 -= 1;
	document.getElementById("cd1").innerHTML = s_cd1;
}

if(s_cd1 < 1)
document.getElementById("cd1").innerHTML = "";

if(s_cd2 > 0)
{
	s_cd2 -= 1;
	document.getElementById("cd2").innerHTML = s_cd2;
}

if(s_cd2 < 1)
document.getElementById("cd2").innerHTML = "";

if(S_hp < 1)
{
	ShipComplete = false;
	ShipeEnd();
}

}

//отрисовка гифок 
ShipGIF = function (NameGIF)
{
		
Ship.style.left = shipposx + 'px';
Ship.style.bottom = shipposy + 'px';
		
Sx1 = shipposx + 20;	
Sx2 = shipposx + 90;
Sy1 = shipposy + 10;
Sy2 = shipposy + 130;		
		
switch (NameGIF) {
		
	case 'idle':
		Ship.src = "images/SpaceShip/ship.png";
		Ship.className = 'idle';
	break;
	case 'right':
		if(Ship.className != 'right')
		{
		Ship.className = 'right';
		Ship.src = "images/SpaceShip/rotate.gif";
		clearTimeout(s_moveEndInt);
		s_moveEndInt = setTimeout(EndRight,600);
		}
	break;
	case 'left':
		if(Ship.className != 'left')
		{
		Ship.className = 'left';
		Ship.src = "images/SpaceShip/rotate.gif";
		clearTimeout(s_moveEndInt);
		s_moveEndInt = setTimeout(EndLeft,600);
		}
	break;
	case 'rightend':
		Ship.src = "images/SpaceShip/move.png";
		Ship.className = 'rightend';
		Sx1 = shipposx + 40;	
	break;
	case 'leftend':
		Ship.src = "images/SpaceShip/move.png";
		Ship.className = 'leftend';
		Sx1 = shipposx + 40;	
	break;
	
}}	

ShipGIF('idle'); //  чтобы фиксировал коорды в начале игры

//КонецКорабля
function ShipeEnd()
{
	
clearInterval(s_rigInt);
clearInterval(s_lefInt);	
clearInterval(s_uppInt);
clearInterval(s_dowInt);
clearInterval(MetInt);
clearInterval(SpecInt);
clearInterval(Ldelete);
clearTimeout(s_moveEndInt);
clearInterval(mainInt);
clearInterval(TimeInt);
	
audioBGship.pause();
audioBGship.currentTime = 0;	
	
s_cd1 = 0;
s_cd2 = 0;
	
document.getElementById('shield').style.display = 'none';
document.getElementById("SkillP-1").style.background = "";
document.getElementById("SkillP-2").style.background = "";
Ship.style.display = "none";
	
document.getElementsByClassName('panel-xp')[0].style.display = "none";
document.getElementsByClassName('panel-mp')[0].style.display = "none";
document.getElementById('enemy_kill').style.display = 'none';	
document.getElementById("SkillP-1").className = "";
document.getElementById("SkillP-2").className = "";
document.getElementById("cd1").innerHTML = "";
document.getElementById("cd2").innerHTML = "";
	
MeteoDelete();
SpecDelete();
	
if(ShipComplete == true)
WarriorGame();

}

}