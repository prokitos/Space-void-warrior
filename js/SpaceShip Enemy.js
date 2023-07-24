function MetSpawn()
{

	var data = document.createElement("div");
	let randos = rand(1,10);
	let Lrand = rand(0,920);
			
	if(Lrand > shipposx + 100 && randos > 8)
	Lrand += 100;	
	if(Lrand < shipposx - 100 && randos > 8)
	Lrand -= 100;			
			
	data.className = 'meteor';
	data.style.left = Lrand + 'px';
	data.style.bottom = 650 + 'px';
	data.S_Speed = rand(3,6);
	
	document.getElementById('gamefield').appendChild(data);	
	
	var CurrentMeteo = {};
	CurrentMeteo.data = data;			
	Meteor.push(CurrentMeteo); 
	
}

function MeteoMove()
{
	
	for (var i = 0; i < Meteor.length; i++) {
	if (Meteor[i] != null)
	{
		Meteor[i].data.style.bottom = parseInt(Meteor[i].data.style.bottom) - Meteor[i].data.S_Speed + 'px';
		let mx1 = parseInt(Meteor[i].data.style.left) + 10;
		let mx2 = mx1 + 50;
		let my1 = parseInt(Meteor[i].data.style.bottom);
		let my2 = my1 + 70;
		
		if( (Sx1 <= mx1 && Sx2 >= mx1)||(Sx1 <= mx2 && Sx2 >= mx2) ){
		if( (Sy1 <= my1 && Sy2 >= my1)||(Sy1 <= my2 && Sy2 >= my2) ){
		if(S_immortal == false){
			S_hp = S_hp - 35;
			S_immortal = true;
			let sk1Time = setTimeout(Sk2end, 2000);
			document.getElementById('shield').style.display = 'block';
			if(S_hp < 1)
			S_hp = 0;
		}}}
		
	}}
	
}

function Sk1end(){
	CurS_Speed = S_Speed;
}

function Sk2end(){
	S_immortal = false;
	document.getElementById('shield').style.display = 'none';
}

function MeteoDelete()
{
	
	if (Meteor.length > 0)
	{
		for (let j = 0; j < Meteor.length; j++){
			if (Meteor[j] != null)
			{
				let elem = document.getElementsByClassName('meteor')[0];
					elem.remove();
					delete Meteor[j];
			}
		}
	}
	
}

function SpecSpawn()
{
	
	var type = rand(1,3);
	var data = document.createElement("div");
	
	if(type == 1)
	{
	data.className = 'senemy en1';
	data.S_Speed = 12;
	data.style.left = rand(0,920) + 'px';
	data.style.bottom = 650 + 'px';
	}
	
	if(type == 2)
	{
	data.className = 'senemy en2';
	data.S_Speed = 6;
	data.style.left = rand(0,920) + 'px';
	data.style.bottom = 650 + 'px';
	}
	
	if(type == 3)
	{
	data.className = 'senemy en3';
	data.S_Speed = 4;
	data.style.left = rand(0,920) + 'px';
	data.style.bottom = -50 + 'px';
	}
	
	data.type = type;
	
	document.getElementById('gamefield').appendChild(data);	
	
	var CurrentEnemy = {};
	CurrentEnemy.data = data;			
	Senemy.push(CurrentEnemy); 
	
}

function SpecMove()
{
	
	for (var i = 0; i < Senemy.length; i++) {
	if (Senemy[i] != null)
	{
		let Spc = Senemy[i].data;
		let Sbot = Spc.style.bottom;
		let Slef = Spc.style.left;
		
		if(Spc.type == 1)
		{
			Spc.style.bottom = parseInt(Sbot) - Spc.S_Speed + 'px';
		}
		
		if(Spc.type == 2)
		{
			Spc.style.bottom = parseInt(Sbot) - Spc.S_Speed + 'px';
			let randos = rand(1,4);
			let randos2 = rand(1,10);
			
			if(parseInt(Slef) > 400 && randos2 > 5)
			randos = 1;
			if(parseInt(Slef) < 400 && randos2 > 5)
			randos = 3;
			
			if(shipposx < parseInt(Slef) && randos2 > 8)
			randos = 1;
			if(shipposx > parseInt(Slef) && randos2 > 8)
			randos = 3;
		
			if(parseInt(Sbot) < 10)
			randos = 3;
			if(parseInt(Sbot) > 900)
			randos = 1;
			
			if(randos == 1 || randos == 2)
			Spc.style.left = parseInt(Slef) - Spc.S_Speed + 'px';
			if(randos == 3 || randos == 4)
			Spc.style.left = parseInt(Slef) + Spc.S_Speed + 'px';
		}
		if(Spc.type == 3)
		{
			Spc.style.bottom = parseInt(Sbot) + Spc.S_Speed + 'px';
		}
		
		let mx1 = parseInt(Senemy[i].data.style.left);
		let mx2 = mx1 + 60;
		let my1 = parseInt(Senemy[i].data.style.bottom);
		let my2 = my1 + 60;
		
		if( (Sx1 <= mx1 && Sx2 >= mx1)||(Sx1 <= mx2 && Sx2 >= mx2) ){
		if( (Sy1 <= my1 && Sy2 >= my1)||(Sy1 <= my2 && Sy2 >= my2) ){
		if(S_immortal == false){
			S_hp = S_hp - 35;
			S_immortal = true;
			let sk1Time = setTimeout(Sk2end, 2000);
			document.getElementById('shield').style.display = 'block';
			if(S_hp < 1)
			S_hp = 0;
		}}}
		
		
	}}
	
}

function SpecDelete()
{
	
	if (Senemy.length > 0)
	{
		for (let j = 0; j < Senemy.length; j++){
			if (Senemy[j] != null)
			{
				let elem = document.getElementsByClassName('senemy')[0];
				elem.remove();
				delete Senemy[j];
			}
		}
	}
	
}

function LongDistance()
{

for (var i = 0; i < Senemy.length; i++) {
if (Senemy[i] != null)
{
	let bot = parseInt(Senemy[i].data.style.bottom);
	if(bot > 1000 || bot < -50)
	{
		Senemy[i].data.remove();
		delete Senemy[i];
	}
	
}}

for (var i = 0; i < Meteor.length; i++) {
if (Meteor[i] != null)
{
	let bot = parseInt(Meteor[i].data.style.bottom);
	if(bot > 1000 || bot < -50)
	{
		Meteor[i].data.remove();
		delete Meteor[i];
	}		
		
}}

}