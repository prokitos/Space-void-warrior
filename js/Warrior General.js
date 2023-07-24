//  герой только что был в полёте 
var AfterAir = false;

//  физика героя
function Physics()
{
	
// если на земле
if (PosY == GroundPos)	
{
	onGROUND = true;
}

//горение на земле
if(Level == 5 && PosY == GroundPos)
{
CurHP = CurHP - 0.03;
HeroDamageShow(0.03,'enemy','');
}
	
// если в полёте
if (Gravity == true && PosY > GroundPos)
{
	let check = true;
	
	let plat = document.getElementsByClassName('platform');
	let WarMiddle = HitboX1 + ((HitboX2 - HitboX1) / 2);
	for (let i = 0; i < plat.length; i++) {
		let PlatLeft = parseInt(plat[i].style.left);
		let PlatRight = PlatLeft + PlatformWidth;
		let PlatBottom = parseInt(plat[i].style.bottom);
		let PlatTop = PlatBottom + PlatformHeight;
					
		if(WarMiddle + 10 > PlatLeft && WarMiddle - 10 < PlatRight)
		{
			if(PosY >= PlatTop - 10 && PosY <= PlatTop + 10)
			{
				check = false;
				PosY = PlatTop;
				onPLATFORM = true;
				WarriorPlatID = i;
		}}
	}
	
	if(check == true)
	{
		
		AnimationAccess = 0;
		onGROUND = false;
		onPLATFORM = false;
		
		PosY -= GravityValue;
		if (PosY < GroundPos)
		PosY = GroundPos;
		
		clearInterval(rigInt);
		clearInterval(leftInt);
		
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
		
		AfterAir = true;
		
	}
	
}

// вызов события на платформе или на земле
if ((onGROUND == true || onPLATFORM == true) && AfterAir == true)
{
	OnPlot();
}
	
// на платформе или на земле
function OnPlot(){
	AfterAir = false;
	RightExeption = false;
	LeftExeption = false;
			
	EndAnim();
	
	AnimationAccess = 1;
	
	if(WarriorSide == 0 && isRUN == true)
	document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': ButtonRight} ));
		
	if(WarriorSide == 1 && isRUN == true)
	document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': ButtonLeft} ));
}
	
}

//  основной таймер, вызывает движение мобов и физику гг
function MainTick()
{
	Physics();
	MobMovment();
}

//  хп/мп/ед реген, отображение в полосках
function BarChange()
{
		
	let temp = 0;
	
	var elemHP = document.getElementById("hpBar"); 
	temp = CurHP * 100/ MaxHP;
	if (temp > 50)
	temp = temp - 4; // для нормального отображения
	elemHP.style.width = temp + '%';
	
	var elemHP = document.getElementById("mpBar"); 
	temp = CurMP * 100/ MaxMP;
	if (temp > 50)
	temp = temp - 7; // для нормального отображения
	elemHP.style.width = temp + '%';
	
	var elemHP = document.getElementById("endBar"); 
	temp = CurEND * 100/ MaxEND;
	if (temp > 50)
	temp = temp - 7; // для нормального отображения
	elemHP.style.width = temp + '%';
	
	//  начало уровня заного
	if(CurHP < 1 && HardCore == false)
	{
		LoadLevel(0);
		CurHP = MaxHP;
		CurMP = MaxHP;
		CurEND = MaxEND;
		alert("Вы умерли, но к счастью это игра, и вы можете начать этот уровень сначала");
		LoadLevel(Level);
	}
	
	//  конец игры в хардкоре
	if(CurHP < 1 && HardCore == true)
	{
		LoadLevel(0);
		alert("Ты проиграл, может сыграешь на лёгком уровне сложности?");
	}
}

//  показывает нанесённый героем/врагом урон
function HeroDamageShow(h_dmg,h_type,h_ID)
{
	
	var data = document.createElement("div"); 
	
	if(h_type == 'hero')
	{
	let mobas = MobArray[h_ID].data.mob;
	data.className = 'dmgTextHero';	//добавление класса к дивке
	data.style.left = rand(mobas.X1,mobas.X2) + 'px';   //размешение по х
	data.style.bottom = rand(mobas.Y1 + 50,mobas.Y2) + 'px'; //размешение по у
	}

	if(h_type == 'enemy')
	{
	data.className = 'dmgTextEnemy';	//добавление класса к дивке
	data.style.left = rand(HitboX1,HitboX2) + 'px';   //размешение по х
	data.style.bottom = rand(HitboY1 + 50,HitboY2) + 'px'; //размешение по у
	}
	data.innerHTML = h_dmg;
	
	canvasElement.appendChild(data);	
	
	let boxDel = setTimeout(DamageBoxDel,1500,data);
	
}

//  удаление надписи с уроном
function DamageBoxDel(d_obj){
	d_obj.remove();
}

//  общий интервал для проверки прохождения уровня, и кд скилов
function GeneralInterval(){
	
if(Bonus20TIME > 1)
Bonus20TIME = Bonus20TIME - 1;	
	
if(CurHP < MaxHP)
CurHP = CurHP + CurHPReg;
if(CurHP > MaxHP)
CurHP = MaxHP;

if(CurMP < MaxMP)
CurMP = CurMP + CurMPReg; 
if(CurMP > MaxMP)
CurMP = MaxMP;

if(CurEND < MaxEND)
CurEND = CurEND + CurENDReg; 
if(CurEND > MaxEND)
CurEND = MaxEND;	
	
if(EndPortalLen < PosX + 120 && EndPortalLen > PosX - 200)
	InPortal = 1;
else if(InPortal == 1)
	InPortal = 0;

if(CurEnemyKill >= PassEnemyKill && InPortal == 1)
{
	BossKill = false; 
	Level = Level + 1;
	LoadLevel(0);
	LoadLevel(Level);
}

if(BossKill == true)
{
	BossKill = false; 
	
	setTimeout(() => { 
		Level = Level + 1;
		LoadLevel(0);
		LoadLevel(Level);
	}, 5000);
}

if(Skill1_cd > 0)
{
	Skill1_cd = Skill1_cd - 1;
	document.getElementById("cd1").innerHTML = Skill1_cd;
	if(Skill1_cd == 0)
	document.getElementById("cd1").innerHTML = "";
}
if(Skill2_cd > 0)
{
	Skill2_cd = Skill2_cd - 1;
	document.getElementById("cd2").innerHTML = Skill2_cd;
	if(Skill2_cd == 0)
	document.getElementById("cd2").innerHTML = "";
}
if(Skill3_cd > 0)
{
	Skill3_cd = Skill3_cd - 1;
	document.getElementById("cd3").innerHTML = Skill3_cd;
	if(Skill3_cd == 0)
	document.getElementById("cd3").innerHTML = "";
}
if(Skill4_cd > 0)
{
	Skill4_cd = Skill4_cd - 1;
	document.getElementById("cd4").innerHTML = Skill4_cd;
	if(Skill4_cd == 0)
	document.getElementById("cd4").innerHTML = "";
}
	
}

// движение фона при беге
function BgMove(spd)
{
		
	if(GroundDistance >= LeftBorder && GroundDistance <= RightBorder)
	{
	WarriorInMob(spd);
	GroundDistance += spd;
	EndPortalLen -= spd;
	EndPortal.style.left = EndPortalLen + "px";
	groundElement.style.backgroundPosition = - GroundDistance + 'px';
	
	PlatformMove();
	EnemyMoveByWarrior(-spd);
	
	if (MainBGmov > 50 && spd < 0)
		MainBGmov -= 0.5;
		
	if (MainBGmov < 600 && spd > 0)
		MainBGmov += 0.5;
	
	canvasElement.style.backgroundPosition = - MainBGmov + 'px';
		
	}
	
	if(GroundDistance <= LeftBorder)
	{
	GroundDistance += 4;
	PlatformMove();
	EnemyMoveByWarrior(-4);
	EndPortalLen -= 4;
	MainBGmov += 0.4;
	}
	if(GroundDistance >= RightBorder)
	{
	GroundDistance -= 4;
	PlatformMove();
	EnemyMoveByWarrior(4);
	EndPortalLen += 4;
	MainBGmov -= 0.4;
	}

}

//  повышение уровня героя
function HeroLevelUp()
{

if(HeroXP > 200 && HeroLevel < 6)
{
	HeroXP = HeroXP - 200;
	
	HeroLevel = HeroLevel + 1;
	SkillPoint = SkillPoint + 1;
	
	if(HeroLevel == 2)
	CurMPReg = CurMPReg + 0.15;

	if(HeroLevel == 4)
	CurENDReg = CurENDReg + 0.25;

	if(HeroLevel == 5)
	CurDMG = CurDMG + 1;
}

if(HeroXP > 500 && HeroLevel < 14 && HeroLevel > 5)
{
	HeroXP = HeroXP - 500;
	
	HeroLevel = HeroLevel + 1;
	SkillPoint = SkillPoint + 1;
	
	if(HeroLevel == 6)
	MaxMP = MaxMP + 15;

	if(HeroLevel == 8)
	CurENDReg = CurENDReg + 0.15;

	if(HeroLevel == 10)
	MaxHP = MaxHP + 15;

	if(HeroLevel == 13)
	MaxEND = MaxEND + 20;

	if(HeroLevel > 10)
	{
	CurENDReg = CurENDReg + 0.10;
	CurHPReg = CurHPReg + 0.10;
	CurMPReg = CurMPReg + 0.10;
	}
}

if(HeroXP > 1000 && HeroLevel > 13)
{
	HeroXP = HeroXP - 1000;
	
	HeroLevel = HeroLevel + 1;
	SkillPoint = SkillPoint + 1;
	
	if(HeroLevel == 15)
	CurDMG = CurDMG + 1;

	if(HeroLevel > 17)
	{
	MaxHP = MaxHP + 3;
	MaxMP = MaxMP + 3;
	MaxEND = MaxEND + 3;
	}
}

}

//  старотовая анимация героя
function EndAnim()
{
	if(WarriorSide == 0)
	WarriorGIF("idle");
	else
	WarriorGIF("idleinv");
}

function MusicSetting()
{
	audioBG.volume  = 0.1;
	audioBG.play();
	MusicPlay = true;
	audioBG.loop = true;
}