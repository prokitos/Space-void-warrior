//  механика и отрисовка основных анимаций
function Animation(types)
{
	
AnimationAccess = 0;
let Interval_1;
let Interval_2;

ClearAnimation();
clearInterval(rigInt);
clearInterval(leftInt);
	
if(types == "AttackAir")
{
	JumpCheck = 1;
	
	if(WarriorSide == 0)
	WarriorGIF("attack");
	else
	WarriorGIF("attackinv");	
	
	Interval_1 = setTimeout(AttackEndAir, 1000); 
	
	function AttackEndAir(){
		AnimationAccess = 1;
		ClearIntervals();
		JumpCheck = 2;
	}

}
	
if(types == "Attack1")
{
		
	if(WarriorSide == 0)
	WarriorGIF("attack");
	else
	WarriorGIF("attackinv");	
		
	Interval_1 = setTimeout(AttackEnd, 1000); 
		
	function AttackEnd(){
		AnimationAccess = 1;
		ClearIntervals();
	}
		
}	

if(types == "Roll")
{
	//Gravity = false;
	Interval_1 = setInterval(RollInt, 50);
	let AniMINvalue = 0;
	let RollSpeed = 12;
	
	if(WarriorSide == 0)
	WarriorGIF("roll");
	else
	WarriorGIF("rollinv");
	
	function RollInt(){

		if(WarriorSide == 0)
		{
			WarriorGIF("roll");
			BgMove(RollSpeed);
		}
		
		if(WarriorSide == 1)
		{
			WarriorGIF("rollinv");
			BgMove(-RollSpeed);
		}
	
		AniMINvalue += RollSpeed;
		
		if(AniMINvalue > AniMAXvalue2)
		{
			AnimationAccess = 1;
			ClearIntervals();
			HeroImmortal = false;
		}
	
		if (onPLATFORM == false && onGROUND == false)
		{
			AnimationAccess = 1;
			ClearIntervals();
			HeroImmortal = false;
		}
		
	}
	
}
	
if(types == "Jump")
{
	Gravity = false; //чтобы пока гг взлетал, его не притягивало вниз
	
	if(WarriorSide == 0)
	WarriorGIF("jump");
	else
	WarriorGIF("jumpinv");

	let jumpSpeedY = 8; //скорость набора высоты
	let AniMINvalue = 0;
	let jumpSpeedX = 7;
	
	Interval_1 = setInterval(JumpInt, 25);
	
	function JumpInt(){
		if (JumpCheck == 0)
		{
			PosY += jumpSpeedY;
			
			if(WarriorSide == 0)
			WarriorGIF("jump");
			else
			WarriorGIF("jumpinv");
			
			if(LeftButtonPress == 1)
			{
				BgMove(-jumpSpeedX);
				WarriorGIF("jumpinv");
			}
				
			if(RightButtonPress == 1)
			{
				BgMove(jumpSpeedX);
				WarriorGIF("jump");
			}
			
			AniMINvalue += jumpSpeedY;
			
			if(AniMINvalue > AniMAXvalue)
			{				
				ClearIntervals();
			}
		}
		if (JumpCheck == 2)
		{
			clearInterval(Interval_1);
			Gravity = true;
			EndAnim();
			JumpCheck = 0;
			AnimationAccess = 1;
		}
	}
	
}

// очистка интервалов, и движение после анимации
function ClearIntervals(){
	clearInterval(Interval_1);
			
	EndAnim();
	
	Gravity = true;
	Physics();
	
	RightExeption = false;
	LeftExeption = false;
	
	if(WarriorSide == 0 && isRUN == true)
	document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': ButtonRight} ));
		
	if(WarriorSide == 1 && isRUN == true)
	document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': ButtonLeft} ));
	
}
	
}

//  механика и отрисовка скилов
function SkillAnimation(Skills)
{
	
AnimationAccess = 0;
let Interval_1;
let Interval_2;
let CurLen = 0;

ClearAnimation();
clearInterval(rigInt);
clearInterval(leftInt);

if(Skills == 1)
{
	let s_side = WarriorSide;
	let Skill_range;
	let Skill_speed;
	
	if(WarriorSide == 0)
	WarriorGIF("scast");
	else
	WarriorGIF("scastinv");

	Interval_1 = setTimeout(FireBall, 600); 
	
	function FireBall(){
	
		var data = document.createElement("div");  
		data.className = 'fireball_skill';	
		
		if(s_side == 1)
		{
			data.style.transform = "scaleX(-1)";
			data.style.left = HitboX1 - 100 + 'px';  
			Skill_range = -360;
			Skill_speed = -18;
		}
		if(s_side == 0)
		{
			data.style.transform = "scaleX(1)";
			data.style.left = HitboX2 + 'px';  
			Skill_range = 360;
			Skill_speed = 18;
		}
		 
		data.style.bottom = HitboY1 + 50 + 'px'; 
		canvasElement.appendChild(data);
		MassObj.push(data); 		
		
		Interval_2 = setInterval(FireBallMove, 55, Skill_range, Skill_speed);
		
		AnimationAccess = 1;
		ClearIntervals();
		HeroImmortal = false;
		
	}
	
	function FireBallMove(f_maxLen,f_speed){
		
		for (var i = 0; i < MassObj.length; i++) {
		if (MassObj[i] != null && MassObj[i].className == "fireball_skill")
		{
			CurLen = CurLen + f_speed;
			MassObj[i].style.left = parseInt(MassObj[i].style.left) + f_speed + 'px'; 
			MobDamaged('Skill-1');
			
			if( (CurLen >= f_maxLen && f_maxLen > 0) || (f_maxLen < 0 && CurLen < f_maxLen) )
			{
				
				document.getElementsByClassName('fireball_skill')[0].remove();
				delete MassObj[i];
				clearInterval(Interval_2);
				
			}
		}}
		
	}
	
	
}

if(Skills == 2)
{
	let s_side = WarriorSide;
	
	if(WarriorSide == 0)
	WarriorGIF("scast");
	else
	WarriorGIF("scastinv");

	Interval_1 = setTimeout(Blink, 50); 
	Interval_1 = setTimeout(Blink, 100); 
	Interval_1 = setTimeout(Blink, 150); 
	Interval_1 = setTimeout(Blink, 200);
	Interval_1 = setTimeout(BlinkEnd, 400);	
	Interval_2 = setTimeout(BlinkEnd2, 800);			
	
	function Blink(){
	
		MobDamaged("Skill-2");
		HeroImmortal = true;
		ClearAnimation();
		
		var data = document.createElement("div");  
		data.className = 'void_slash_skill';	
		
		if(s_side == 1)
		{
			data.style.transform = "scaleX(1)";
			data.style.left = HitboX1 + 50 + 'px';  
			BgMove(-60);
		}
		if(s_side == 0)
		{
			data.style.transform = "scaleX(-1)";
			data.style.left = HitboX2 - 250 + 'px';  
			BgMove(60);
		}
		 
		data.style.bottom = HitboY1 + 'px'; 
		canvasElement.appendChild(data);
		MassObj.push(data); 	

	}
	
	function BlinkEnd(){
		
		DelObjSkill('void_slash_skill');
		
		AnimationAccess = 1;
		ClearIntervals();
		
		if (AfterAir == true)
		ClearIntervals();
	}
	
	function BlinkEnd2(){
		
		HeroImmortal = false;
		clearInterval(Interval_2);
		
	}
	
	
}

if(Skills == 3)
{
	MobDamaged("Attack2");
	
	if(WarriorSide == 0)
	WarriorGIF("attack2");
	else
	WarriorGIF("attack2inv");	
		
	Interval_1 = setTimeout(Attack2End, 1400); 
		
	function Attack2End(){
		AnimationAccess = 1;
		ClearIntervals();
	}
		
}

if(Skills == 4)
{
	let Dur = 6000 + (BonusSkil6 * 1000);
	let Rdmg = 1.4;
	
	if(WarriorSide == 0)
	WarriorGIF("lcast");
	else
	WarriorGIF("lcastinv");

	let DealTime = setTimeout(MainRain, 1000);
	
	function MainRain(){
		
		var data = document.createElement("div");  
		data.className = 'rain_skill';	
		data.style.filter = 'opacity(0.1)';
		data.style.bottom =  GroundPos + 'px'; 
		canvasElement.appendChild(data);
		MassObj.push(data); 	
		
		ClearIntervals();
		
		let IntOpac = setTimeout(RainOpac,1000,0.3);
		IntOpac = setTimeout(RainOpac,2000,0.5);
		IntOpac = setTimeout(RainOpac,3000,0.7);
		IntOpac = setTimeout(RainOpac,4000,1);
		IntOpac = setTimeout(EndRain,Dur);
		Interval_1 = setInterval(RainDamaged,400);
		
		AnimationAccess = 1;
		
	}

	
	function RainDamaged(){
		
		for (var i = 0; i < MobArray.length; i++) {
		if (MobArray[i] != null)
		{
			let Lmob = parseInt(MobArray[i].data.style.left);
			if(Lmob > -200 && Lmob < 950)
			{
				MobArray[i].data.mob.HP -= Rdmg;
				HeroDamageShow(Rdmg,'hero',i);
			}
			
		}}
		
	}
	
	function RainOpac(r_opa){
		for (var i = 0; i < MassObj.length; i++) {
		if (MassObj[i] != null && MassObj[i].className == "rain_skill")
		{
			MassObj[i].style.filter = 'opacity(' + r_opa + ')';
		}}
	}
	
	function EndRain(){
		DelObjSkill('rain_skill');
		clearInterval(Interval_1);
	}
	
}
	
if(Skills == 5)
{
	let s_side = WarriorSide;
	
	if(s_side == 0)
	WarriorGIF("lcast");
	else
	WarriorGIF("lcastinv");

	let DealTime = setTimeout(MainVoidHit, 600);
	
	function MainVoidHit(){
		
		var data = document.createElement("div");  
		data.className = 'void_hit_skill';	
		data.style.bottom = HitboY1 + 'px'; 
		
		if (s_side == 0)
		{
		data.style.left = HitboX2 + 'px'; 
		data.style.transform = "scaleX(-1)";
		}
		if (s_side == 1)
		{
		data.style.left = HitboX1 - 350 + 'px';
		data.style.transform = "scaleX(1)";
		}		
	
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		AnimationAccess = 1;
		ClearIntervals();
		
		CastedSkillSide = s_side;
		let DelTime = setTimeout(DelObjSkill,500,'void_hit_skill');
		let VoidDamagTime = setTimeout(MobDamaged,200,'Skill-5');
	}
	
}

if(Skills == 6)
{
	let s_side = WarriorSide;
	
	if(s_side == 0)
	WarriorGIF("lcast");
	else
	WarriorGIF("lcastinv");

	let DealTime = setTimeout(MainSui, 1030);
	
	function MainSui(){
		
		var data = document.createElement("img");  
		data.className = 'suicide_clone_skill';	
		data.style.bottom = GroundPos + 'px'; 
		data.src = "images/warrior/Death.gif?rand=" + rand(1,9999);
		
		data.style.filter = 'opacity(0.85) sepia(100%)';
		
		if (s_side == 0)
		{
		data.style.left = HitboX2 + 'px'; 
		data.style.transform = "scaleX(-1)";
		}
		if (s_side == 1)
		{
		data.style.left = HitboX1 - 450 + 'px';
		data.style.transform = "scaleX(1)";
		}		
		
		canvasElement.appendChild(data);
		MassObj.push(data); 
			
		AnimationAccess = 1;
		ClearIntervals();
		
		let DelTime = setTimeout(DelObjSkill,1700,'suicide_clone_skill');
		let buffTime = setTimeout(buffS,1700);
	}
	
	function buffS(){

		if(BonusSkil20 == 1)
		{
			Bonus20TIME = 10;
		}
		
		CurHP = CurHP + 15;
		CurMP = CurMP + 15;
		CurEND = CurEND + 15;
		
		if(CurHP > MaxHP)
		CurHP = MaxHP;
		if(CurMP > MaxMP)
		CurMP = MaxMP;
		if(CurEND > MaxEND)
		CurEND = MaxEND;
	}
	
}

if(Skills == 7)
{
	let s_side = WarriorSide;
	
	if(s_side == 0)
	WarriorGIF("lcast");
	else
	WarriorGIF("lcastinv");

	let time1 = setTimeout(step1, 300);
	
	function step1()
	{		
		var data = document.createElement("div");  
		data.className = 'light_skill__effect_black';	
		data.style.bottom = GroundPos + 'px'; 
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		let time2 = setTimeout(step2, 500);
	}
	
	function step2()
	{
		DelObjSkill('light_skill__effect_black');
	
		var data = document.createElement("div");  
		data.className = 'light_skill__effect_white';	
		data.style.bottom = GroundPos + 'px'; 
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		data = document.createElement("div");  
		data.className = 'light_skill';	
		
		if (s_side == 0)
		data.style.left = HitboX2 - 80 + 'px'; 
		
		if (s_side == 1)
		data.style.left = HitboX1 - 600 + 'px';
		
		data.style.bottom = GroundPos + 'px'; 
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		CastedSkillSide = s_side;
		
		let ThundDmg1 = setTimeout(MobDamaged,50,'Skill-7');
		let ThundDmg2 = setTimeout(MobDamaged,100,'Skill-7');
		let ThundDmg3 = setTimeout(MobDamaged,150,'Skill-7');
		let ThundDmg4 = setTimeout(MobDamaged,200,'Skill-7');
		let ThundDmg5 = setTimeout(MobDamaged,250,'Skill-7');
		
		let time3 = setTimeout(step3, 300);
	}
	
	function step3()
	{
		DelObjSkill('light_skill__effect_white');
		DelObjSkill('light_skill');
		
		var data = document.createElement("div");  
		data.className = 'light_skill__effect_black';	
		data.style.bottom = GroundPos + 'px'; 
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		let time4 = setTimeout(step4, 300);
	}
	
	function step4()
	{
		DelObjSkill('light_skill__effect_black');
		
		AnimationAccess = 1;
		ClearIntervals();
	}

}
if(Skills == 8)
{
	let s_side = WarriorSide;
	
	if(s_side == 0)
	WarriorGIF("scast");
	else
	WarriorGIF("scastinv");

	let time1 = setTimeout(step1, 600);
	
	function step1()
	{		
		AnimationAccess = 1;
		ClearIntervals();
		
		var data = document.createElement("div");  
		data.className = 'void_shield_skill';
		
		data.style.bottom = HitboY1 + 'px';
		data.style.left = HitboX1 + 'px'; 
		
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		ShielDur = 35;
		
		if(BonusSkil15 == 1)
		ShielDur = 60;
		
		let time2 = setTimeout(step2, 15000);
		let time3 = setInterval(ShieldPox,50);
		
		function ShieldPox()
		{
			data.style.bottom = HitboY1 - 10 + 'px';
			data.style.left = HitboX1 - 50 + 'px'; 
			
			if(ShielDur < 1)
			{
			clearInterval(time3);
			DelObjSkill('void_shield_skill');
			}
		}
		
		function step2()
		{
		ShielDur = 0;
		DelObjSkill('void_shield_skill');
		}	
		
	}

}
if(Skills == 9)
{
	let s_side = WarriorSide;
	
	if(s_side == 0)
	WarriorGIF("scast");
	else
	WarriorGIF("scastinv");

	let time1 = setTimeout(step1, 600);
	
	function step1()
	{		
		SpawnClone(0,90);
		SpawnClone(0,120);
		SpawnClone(0,150);
		SpawnClone(1,300);
		SpawnClone(1,330);
		SpawnClone(1,360);
		
		let time2 = setTimeout(step2, 900);
		CastedSkillSide = s_side;
		
		AnimationAccess = 1;
		ClearIntervals();
	}
	
	function SpawnClone(scx, smarg)
	{
		
		var data = document.createElement("div"); 
		
		data.className = 'KnightIllusion';	
		data.style.filter = 'opacity(0.85) sepia(100%)';
		data.style.bottom = GroundPos + 'px';
		
		if(s_side == 1)
		data.style.left = HitboX1 - smarg - 230 + 'px'; 
		if(s_side == 0)
		data.style.left = HitboX2 + smarg - 170 + 'px'; 
		
		if( (scx == 0 && s_side == 1) || (scx == 1 && s_side == 0) )
		data.style.transform = "scaleX(-1)";
	
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
	}
	
	function step2()
	{
		
		if(BonusSkil22 == 1)
		{
			Bonus22ATK = 1;
			let time3 = setTimeout(step3, 500);
		}
		
		DelObjSkill('KnightIllusion');
		MobDamaged('Skill-9');
		MobDamaged('Skill-9');
		MobDamaged('Skill-9');
		MobDamaged('Skill-9');
		MobDamaged('Skill-9');
		MobDamaged('Skill-9');
		
		function step3()
		{
			Bonus22ATK = 0;
		}

	}

}

if(Skills == 10)
{
	let s_side = WarriorSide;
	
	if(s_side == 0)
	WarriorGIF("scast");
	else
	WarriorGIF("scastinv");

	let time0 = setTimeout(step0, 1400);
	
	function step0()
	{
		knightElement.src = "";
		
		if(s_side == 0)
		WarriorGIF("lcast");
		else
		WarriorGIF("lcastinv");

		let time1 = setTimeout(step1, 1600);
	}
	
	function step1()
	{	
		AnimationAccess = 1;
		ClearIntervals();
		
		var data = document.createElement("div");  
		data.className = 'storm_black';
		data.style.bottom = GroundPos + 'px';
		data.style.left = 0 + 'px'; 
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		var data = document.createElement("div");  
		data.className = 'storm_skill';
		data.style.bottom = GroundPos + 'px';
		data.style.left = 0 + 'px'; 
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		let time2 = setTimeout(step2, 4000);
		
		let intdmg1 = setTimeout(step3,600);
		let intdmg2 = setTimeout(step3,1400);
		let intdmg3 = setTimeout(step3,2000);
		let intdmg4 = setTimeout(step3,2700);
		let intdmg5 = setTimeout(step3,3500);
	}
	
	function step3()
	{
		MobDamaged('Skill-10');
	}
	
	function step2()
	{
		DelObjSkill('storm_black');
		DelObjSkill('storm_skill');
	}

}

if(Skills == 11)
{
	let s_side = WarriorSide;
	
	if(s_side == 0)
	WarriorGIF("scast");
	else
	WarriorGIF("scastinv");

	let time0 = setTimeout(step0, 1400);
	
	function step0()
	{
		knightElement.src = "";
		
		if(s_side == 0)
		WarriorGIF("lcast");
		else
		WarriorGIF("lcastinv");

		let time1 = setTimeout(step1, 1600);
	}
	
	function step1()
	{	
		AnimationAccess = 1;
		ClearIntervals();
		
		var data = document.createElement("div");  
		data.className = 'storm_black';
		data.style.bottom = GroundPos + 'px';
		data.style.left = 0 + 'px'; 
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		var data = document.createElement("img");  
		data.className = 'void_hole_skill';
		data.style.bottom = GroundPos + 'px';
		data.style.left = 0 + 'px'; 
		data.src = "images/Skill/Void-hole.gif?rand=" + rand(1,9999);
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		let time2 = setTimeout(step2, 4000);
		
		let intdmg5 = setTimeout(MobDamaged,3500,'Skill-11');
	}
	
	function step2()
	{
		DelObjSkill('storm_black');
		DelObjSkill('void_hole_skill');
	}

}

if(Skills == 12)
{
	let s_side = WarriorSide;
	
	if(s_side == 0)
	WarriorGIF("scast");
	else
	WarriorGIF("scastinv");

	let time0 = setTimeout(step0, 1400);
	
	function step0()
	{
		var data = document.createElement("div");  
		data.className = 'gret_sword_portal';
		data.style.bottom = GroundPos - 15 + 'px';
		
		if(s_side == 0)
		data.style.left = -90 + 'px'; 
		if(s_side == 1)
		data.style.left = 700 + 'px'; 
		
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		knightElement.src = "";
		
		if(s_side == 0)
		WarriorGIF("lcast");
		else
		WarriorGIF("lcastinv");

		let time1 = setTimeout(step1, 1600);
	}
	
	function step1()
	{	
		AnimationAccess = 1;
		ClearIntervals();
		
		var data = document.createElement("img");  
		data.className = 'great_sword_skill';
		data.style.bottom = GroundPos + 10 + 'px';
		data.src = "images/Skill/Berserk-sword.gif?rand=" + rand(1,9999);
		
		if(s_side == 0)
		data.style.left = 10 + 'px'; 
		if(s_side == 1)
		{
		data.style.left = 10 + 'px'; 
		data.style.transform = "scaleX(-1)";
		}
		
		canvasElement.appendChild(data);
		MassObj.push(data); 
		
		let time2 = setTimeout(step2, 1680);
		
		CastedSkillSide = s_side;
		let intdmg5 = setTimeout(MobDamaged,1700,'Skill-12');
	}
	
	function step2()
	{
		DelObjSkill('gret_sword_portal');
		DelObjSkill('great_sword_skill');
	}

}




function DelObjSkill(d_className)
{
	
	for (var i = 0; i < MassObj.length; i++) {
	if (MassObj[i] != null && MassObj[i].className == d_className)
	{
		document.getElementsByClassName(d_className)[0].remove();
		delete MassObj[i];
	}}
	
}
	
function ClearIntervals(){
	clearInterval(Interval_1);
			
	EndAnim();
	
	Gravity = true;
	Physics();
	
	RightExeption = false;
	LeftExeption = false;
	
	if(WarriorSide == 0 && isRUN == true)
	document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': ButtonRight} ));
		
	if(WarriorSide == 1 && isRUN == true)
	document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': ButtonLeft} ));
}
	
}