//  загрузка уровней
function LoadLevel(level_load)
{
	
//  обнуление всех таймеров, интервалов, переменных
if(level_load == 0)
{
	MainBGmov = 0;
	
	audioBG.pause();
	audioBG.currentTime = 0;
	audioBG = new Audio('music/nothing.mp3');
	MusicPlay = false;
	
	PlatformDelete();
	MobDelete();
	
	MobArray = [];
	PlatSpawned = [-1];
	
	clearInterval(rigInt);
	clearInterval(leftInt);
	clearInterval(MainInt);
	clearInterval(BarInt);
	clearInterval(GenInt);
	clearInterval(FinalBossInt);
	clearInterval(FinalTimer);
	
	canvasElement.style.background = "url('images/startBG.png') no-repeat";
	canvasElement.style.backgroundSize = '160%';
	
	groundElement.style.display = "none";
	knightElement.style.display = "none";
	EndPortal.style.display = "none";
	document.getElementById('enemy_kill').style.display = 'none';
	
	Skill1_cd = 0;
	Skill2_cd = 0;
	Skill3_cd = 0;
	Skill4_cd = 0;
	
	document.getElementById("SkillP-1").style.display = 'none';
	document.getElementById("SkillP-2").style.display = 'none';
	document.getElementById("SkillP-3").style.display = 'none';
	document.getElementById("SkillP-4").style.display = 'none';
	document.getElementById("cd1").innerHTML = "";
	document.getElementById("cd2").innerHTML = "";
	document.getElementById("cd3").innerHTML = "";
	document.getElementById("cd4").innerHTML = "";
	
	PosX = 0;
	PosY = 0;
	ClearAnimation();
	EndAnim();
	
	if(HardCore == false)
	{
		CurHP = MaxHP;
		CurMP = MaxMP;
		CurEND = MaxEND;
	}
	
}	
	
if(level_load == 1)
{
	TextAdd('middle',10,'О, ты выжил. Похоже, что моего подчиненного взяли в плен, помоги ему. И я помогу тебе сузить круг поиска Малакая. - Твой мистер Ки');
	
	SkillPoint = 0;
	GroundDistance = 0;
	
	MobArray = [];
	PlatSpawned = [-1];
	MainBGmov = 50;
	GroundPos = 50;
	PosX = 400;
	PosY = GroundPos;
	GravityValue = 12;
	jumpSpeedX = speed + 2;
	AniMAXvalue = 220;
	AniMAXvalue2 = 220;
	// платформы
	PlatPosX = [800,1100,1900,2300,2500,2700,3050,3300,3700,4500,4500,4800];
	PlatPosY = [200, 350, 200, 300, 300, 300, 350, 400, 200, 200, 400, 500];
	PlatformWidth = 200;
	PlatformHeight = 40;
	Level = 1;
	
	audioBG = new Audio('music/BG 1.mp3');
	MusicSetting();
			
	PlatformSpawn();
	
	LeftBorder = -500;
	RightBorder = 7000;
	
	EndPortalLen = 5800 + WindWidth;
	EndPortal.style.display = "block";
	EndPortal.style.left = EndPortalLen + "px";
	EndPortal.style.bottom = "0px";
	
	canvasElement.style.background = "url('images/background1.jpg') no-repeat";
	canvasElement.style.backgroundSize = '260%';
	canvasElement.style.backgroundPosition = - MainBGmov + 'px';

	document.getElementById("SkillP-1").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill1_ico + ".png')";
	document.getElementById("SkillP-2").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill2_ico + ".png')";
	document.getElementById("SkillP-3").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill3_ico + ".png')";
	document.getElementById("SkillP-4").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill4_ico + ".png')";

	PassEnemyKill = 10;
	CurEnemyKill = 0;
	
	document.getElementById('skillPanel').style.display = 'block';
	
	knightElement.style.display = "block";
	document.getElementById('enemy_kill').style.display = 'block';
	document.getElementById('enemy_kill').innerHTML = "Убито: " + CurEnemyKill + " / " + PassEnemyKill;

	groundElement.style.background = "url('images/grounds.png') repeat";
	groundElement.style.backgroundSize = "cover";
	groundElement.style.left = '0px';
	groundElement.style.bottom = '-620px';
	groundElement.style.backgroundPosition = '0px';
	groundElement.style.display = 'block';
	
	MainInt = setInterval(MainTick, 30); // главный таймер
	BarInt = setInterval(BarChange, 1000); // таймер изменения хп/мп/ед
	GenInt = setInterval(GeneralInterval, 1000); //общий интервал
	
	WarriorGIF("idle");
	
	VampSpawn(520,50,false,0,0,1);
	VampSpawn(720,50,false,0,0,1);
	VampSpawn(1400,50,true,1,0,1);
	VampSpawn(1700,50,false,0,0,1);
	VampSpawn(1750,50,false,0,0,1);
	VampSpawn(1400,50,true,2,0,1);
	VampSpawn(1400,50,true,4,0,1);
	VampSpawn(1400,50,true,5,0,1);
	VampSpawn(1400,50,true,7,0,1);
	VampSpawn(1400,50,true,8,0,1);
	VampSpawn(3050,50,false,8,0,1);
	VampSpawn(3450,50,false,8,0,1);
	VampSpawn(3450,50,true,9,0,1);
	VampSpawn(3450,50,true,10,0,1);
	VampSpawn(5400,50,false,10,0,1);
}

if(level_load == 2)
{
	TextAdd('middle',10,'Кажется ты опоздал, Малакай уже улетел. Я тут разузнал, что его творение - Голем находится на ледяной планете Зиост. - Твой мистер Ки');
	Level = 2;
	
	audioBG = new Audio('music/BG 2.mp3');
	MusicSetting();
	
	MobArray = [];
	PlatSpawned = [-1];
	
	GroundDistance = 0;
	MainBGmov = 50;
	GroundPos = 50;
	PosX = 400;
	PosY = GroundPos;
	
	GravityValue = 12;		//гравитация
	jumpSpeedX = speed + 2;	//скорость прыжка
	AniMAXvalue = 220;		//длинна прыжка
	AniMAXvalue2 = 220;		//длинна переката
	
	LeftBorder = -500;
	RightBorder = 9000;
	
	PlatPosX = [1500,1500,3000,3200,3400,3100,3300,4300,4300,5300,5900];
	PlatPosY = [  50, 263,  50,  50,  50, 263, 263,  50, 263,  50,  50];
	PlatformWidth = 200;
	PlatformHeight = 210;
	
	PlatformSpawn();
	
	EndPortalLen = 7700 + WindWidth;
	EndPortal.style.display = "block";
	EndPortal.style.left = EndPortalLen + "px";
	EndPortal.style.bottom = "0px";
	
	canvasElement.style.background = "url('images/background2.jpg') no-repeat";
	canvasElement.style.backgroundSize = '168%';
	canvasElement.style.backgroundPosition = - MainBGmov + 'px';
	
	document.getElementById("SkillP-1").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill1_ico + ".png')";
	document.getElementById("SkillP-2").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill2_ico + ".png')";
	document.getElementById("SkillP-3").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill3_ico + ".png')";
	document.getElementById("SkillP-4").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill4_ico + ".png')";
	
	PassEnemyKill = 12;
	CurEnemyKill = 0;
	document.getElementById('enemy_kill').style.display = 'block';
	document.getElementById('enemy_kill').innerHTML = "Убито: " + CurEnemyKill + " / " + PassEnemyKill;
	
	groundElement.style.background = "url('images/grounds2.png') repeat";
	groundElement.style.backgroundSize = "300% 100%";
	groundElement.style.height = "300px";
	groundElement.style.left = '0px';
	groundElement.style.bottom = '-400px';
	groundElement.style.backgroundPosition = '0px';
	groundElement.style.display = 'block';
	
	knightElement.style.display = "block";
	
	document.getElementById("SkillP-1").style.display = 'inline-block';
	document.getElementById("SkillP-2").style.display = 'inline-block';
	document.getElementById("SkillP-3").style.display = 'inline-block';
	document.getElementById("SkillP-4").style.display = 'inline-block';
	document.getElementById("hpProgress").style.marginTop = '-300px';
	
	MainInt = setInterval(MainTick, 25); // главный таймер
	BarInt = setInterval(BarChange, 1000); // таймер изменения хп/мп/ед
	GenInt = setInterval(GeneralInterval, 1000); //общий интервал

	WarriorGIF("idle");
	
	VampSpawn(520,50,false,0,0,2);
	SkeletSpawn(1000,50,false,0,0,1);
	SkeletSpawn(1500,50,true,1,0,1); //вторая платформа
	VampSpawn(1900,50,false,0,0,1);
	VampSpawn(2300,50,false,0,0,2);
	VampSpawn(2450,50,false,0,0,2);
	SkeletSpawn(3200,50,true,3,0,1); //4 платформа
	SkeletSpawn(3200,50,false,0,0,1);
	VampSpawn(1900,50,true,5,0,1); //6 платформа
	SkeletSpawn(3200,50,true,6,0,1); //7 платформа
	VampSpawn(3600,50,false,0,0,1);
	VampSpawn(3900,50,false,0,0,2);
	VampSpawn(4300,50,true,7,0,2); //8
	VampSpawn(4300,50,true,8,0,2); //9
	SkeletSpawn(4900,50,false,0,0,1);
	SkeletSpawn(5300,50,true,9,0,1); //10 платформа
	SkeletSpawn(3200,50,true,10,0,1); //11 платформа
	VampSpawn(5900,50,false,0,0,1);
	VampSpawn(6100,50,false,0,0,1);
	SkeletSpawn(7000,50,false,0,0,1);
	SkeletSpawn(7200,50,false,0,0,1);
}

if(level_load == 3)
{
	TextAdd('middle',10,'Итак, ты на Зиосте, доберись до Голема и лиши Малакая его верного подчиненного. - Твой мистер Ки');
	Level = 3;
	
	audioBG = new Audio('music/BG 3.mp3');
	MusicSetting();
	
	MobArray = [];
	PlatSpawned = [-1];
	
	GroundDistance = 0;
	MainBGmov = 50;
	GroundPos = 50;
	PosX = 400;
	PosY = GroundPos;
	
	GravityValue = 12;		//гравитация
	jumpSpeedX = speed + 2;	//скорость прыжка
	AniMAXvalue = 220;		//длинна прыжка
	AniMAXvalue2 = 220;		//длинна переката
	
	LeftBorder = -500;
	RightBorder = 7000;
	
	PlatPosX = [1000,1500,1800,2100,2600,3200,3600,4200,4500,4800,5100];
	PlatPosY = [ 200, 200, 300, 200, 200, 200, 200, 200, 300, 200, 300];
	PlatformWidth = 200;
	PlatformHeight = 40;
	
	PlatformSpawn();
	
	EndPortalLen = 5900 + WindWidth;
	EndPortal.style.display = "block";
	EndPortal.style.left = EndPortalLen + "px";
	EndPortal.style.bottom = "0px";
	
	canvasElement.style.background = "url('images/background3.jpg') no-repeat";
	canvasElement.style.backgroundSize = '168% 100%';
	canvasElement.style.backgroundPosition = - MainBGmov + 'px';
	
	document.getElementById("SkillP-1").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill1_ico + ".png')";
	document.getElementById("SkillP-2").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill2_ico + ".png')";
	document.getElementById("SkillP-3").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill3_ico + ".png')";
	document.getElementById("SkillP-4").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill4_ico + ".png')";
	
	PassEnemyKill = 12;
	CurEnemyKill = 0;
	document.getElementById('enemy_kill').style.display = 'block';
	document.getElementById('enemy_kill').innerHTML = "Убито: " + CurEnemyKill + " / " + PassEnemyKill;
	
	groundElement.style.background = "url('images/grounds3.png') repeat";
	groundElement.style.backgroundSize = "200% 100%";
	groundElement.style.height = "400px";
	groundElement.style.left = '0px';
	groundElement.style.bottom = '-305px';
	groundElement.style.backgroundPosition = '0px';
	groundElement.style.display = 'block';
	
	knightElement.style.display = "block";
	document.getElementById("SkillP-1").style.display = 'inline-block';
	document.getElementById("SkillP-2").style.display = 'inline-block';
	document.getElementById("SkillP-3").style.display = 'inline-block';
	document.getElementById("SkillP-4").style.display = 'inline-block';
	document.getElementById("hpProgress").style.marginTop = '-400px';
	
	MainInt = setInterval(MainTick, 30); // главный таймер
	BarInt = setInterval(BarChange, 1000); // таймер изменения хп/мп/ед
	GenInt = setInterval(GeneralInterval, 1000); //общий интервал
	
	WarriorGIF("idle");
	
	SkeletSpawn(520,50,false,0,0,2);
	VampSpawn(1000,50,false,0,0,2);
	VampSpawn(1000,50,true,0,0,3);//1 платформа
	VampSpawn(1500,50,true,1,0,2);//2 платформа
	VampSpawn(1800,50,true,2,0,3);//3 платформа
	VampSpawn(2100,50,true,3,0,2);//4 платформа
	VampSpawn(3000,50,false,0,0,3);
	SkeletSpawn(3200,50,true,5,0,2);//6 платформа
	SkeletSpawn(3600,50,true,6,0,2);//7 платформа
	VampSpawn(4200,50,true,7,0,3);//8 платформа
	VampSpawn(4500,50,true,8,0,3);//9 платформа
	VampSpawn(4800,50,true,9,0,3);//10 платформа
	VampSpawn(5100,50,true,10,0,3);//11 платформа
	VampSpawn(4500,50,false,0,0,2);
	VampSpawn(4550,50,false,0,0,2);
	SkeletSpawn(5400,50,false,0,0,2);
	SkeletSpawn(5450,50,false,0,0,2);
	GolemSpawn(5500,50,false,0,1); //лох, ставить в конце чтобы почти по всей карте кидал гавно
}

if(level_load == 4)
{
	TextAdd('middle',10,'Вот он, победи его! И путь к Малакаю будет открыт! - Твой мистер Ки');
	Level = 4;
	
	audioBG = new Audio('music/BG 4.mp3');
	MusicSetting();
	
	MobArray = [];
	PlatSpawned = [-1];
	
	GroundDistance = 0;
	MainBGmov = 50;
	GroundPos = 50;
	PosX = 400;
	PosY = GroundPos;
	
	GravityValue = 12;		//гравитация
	jumpSpeedX = speed + 2;	//скорость прыжка
	AniMAXvalue = 220;		//длинна прыжка
	AniMAXvalue2 = 220;		//длинна переката
	
	LeftBorder = -600;
	RightBorder = 1200;
	
	PlatPosX = [-550, 200];
	PlatPosY = [ 200, 200];
	PlatformWidth = 200;
	PlatformHeight = 40;
	
	PlatformSpawn();
	
	EndPortalLen = 5900 + WindWidth;
	EndPortal.style.display = "block";
	EndPortal.style.left = EndPortalLen + "px";
	EndPortal.style.bottom = "0px";
	
	canvasElement.style.background = "url('images/background3.jpg') no-repeat";
	canvasElement.style.backgroundSize = '168% 100%';
	canvasElement.style.backgroundPosition = - MainBGmov + 'px';
	
	document.getElementById("SkillP-1").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill1_ico + ".png')";
	document.getElementById("SkillP-2").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill2_ico + ".png')";
	document.getElementById("SkillP-3").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill3_ico + ".png')";
	document.getElementById("SkillP-4").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill4_ico + ".png')";
	
	PassEnemyKill = 1;
	CurEnemyKill = 0;
	document.getElementById('enemy_kill').style.display = 'block';
	document.getElementById('enemy_kill').innerHTML = "Убито: " + CurEnemyKill + " / " + PassEnemyKill;
	
	groundElement.style.background = "url('images/grounds3.png') repeat";
	groundElement.style.backgroundSize = "200% 100%";
	groundElement.style.height = "400px";
	groundElement.style.left = '0px';
	groundElement.style.bottom = '-305px';
	groundElement.style.backgroundPosition = '0px';
	groundElement.style.display = 'block';
	
	knightElement.style.display = "block";
	document.getElementById("SkillP-1").style.display = 'inline-block';
	document.getElementById("SkillP-2").style.display = 'inline-block';
	document.getElementById("SkillP-3").style.display = 'inline-block';
	document.getElementById("SkillP-4").style.display = 'inline-block';
	document.getElementById("hpProgress").style.marginTop = '-400px';
	
	MainInt = setInterval(MainTick, 30); // главный таймер
	BarInt = setInterval(BarChange, 1000); // таймер изменения хп/мп/ед
	GenInt = setInterval(GeneralInterval, 1000); //общий интервал
	
	WarriorGIF("idle");
	
	setTimeout(() => { GolemSpawn(-200,50,false,0,2); }, 5000);
}
if(level_load == 5){
	TextAdd('middle',10,'Да, тут жарковато, я слышал, что Малакай прячется в одном из вулканов, ты уже очень близок, хе-хе. - Твой мистер Ки');
	Level = 5;
	
	audioBG = new Audio('music/BG 5.mp3');
	MusicSetting();
	
	MobArray = [];
	PlatSpawned = [-1];
	GroundDistance = 0;
	MainBGmov = 50;
	GroundPos = 100;
	PosX = 400;
	PosY = GroundPos + 40;
	
	GravityValue = 12;		//гравитация
	jumpSpeedX = speed + 2;	//скорость прыжка
	AniMAXvalue = 220;		//длинна прыжка
	AniMAXvalue2 = 220;		//длинна переката
	
	LeftBorder = -1000;
	RightBorder = 9500;
	
	PlatPosX = [1000,1500,2000,2600,3200,3800,5000,5500,5900,6300,6850,7300,7300,7900,-700];
	PlatPosY = [ 450, 250, 450, 250, 250, 250, 250, 450, 450, 450, 450, 250, 450, 250,  100];
	PlatformWidth = 400;
	PlatformHeight = 40;
	
	PlatformSpawn();
	
	EndPortalLen = 8400 + WindWidth;
	EndPortal.style.display = "block";
	EndPortal.style.left = EndPortalLen + "px";
	EndPortal.style.bottom = "0px";
	
	canvasElement.style.background = "url('images/background4.jpg') no-repeat";
	canvasElement.style.backgroundSize = '164% 100%';
	canvasElement.style.backgroundPosition = - MainBGmov + 'px';
	
	document.getElementById("SkillP-1").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill1_ico + ".png')";
	document.getElementById("SkillP-2").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill2_ico + ".png')";
	document.getElementById("SkillP-3").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill3_ico + ".png')";
	document.getElementById("SkillP-4").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill4_ico + ".png')";
	
	PassEnemyKill = 15;
	CurEnemyKill = 0;
	document.getElementById('enemy_kill').style.display = 'block';
	document.getElementById('enemy_kill').innerHTML = "Убито: " + CurEnemyKill + " / " + PassEnemyKill;
	
	groundElement.style.background = "url('images/grounds4.gif') repeat";
	groundElement.style.backgroundSize = "60% 120%";
	groundElement.style.height = "200px";
	groundElement.style.left = '0px';
	groundElement.style.bottom = '-595px';
	groundElement.style.backgroundPosition = '0px';
	groundElement.style.display = 'block';
	
	knightElement.style.display = "block";
	document.getElementById("SkillP-1").style.display = 'inline-block';
	document.getElementById("SkillP-2").style.display = 'inline-block';
	document.getElementById("SkillP-3").style.display = 'inline-block';
	document.getElementById("SkillP-4").style.display = 'inline-block';
	document.getElementById("hpProgress").style.marginTop = '-200px';
	
	MainInt = setInterval(MainTick, 30); // главный таймер
	BarInt = setInterval(BarChange, 1000); // таймер изменения хп/мп/ед
	GenInt = setInterval(GeneralInterval, 1000); //общий интервал
	
	WarriorGIF("idle");
	
	SkeletSpawn(520,100,false,0,0,4);
	VampSpawn(1000,100,true,0,0,4); //Платформа 1
	VampSpawn(1200,100,true,1,0,3); //Платформа 2
	SkeletSpawn(1400,100,true,2,0,4); //Платформа 3
	GolemSpawn(1800,100,false,0,1); 
	VampSpawn(2400,100,false,0,0,4);
	VampSpawn(2400,100,false,0,0,4);
	SkeletSpawn(2600,50,true,3,0,3); //Платформа 4
	SkeletSpawn(2800,50,true,4,0,3); //Платформа 5
	VampSpawn(3000,50,true,5,0,3); //Платформа 6
	SkeletSpawn(3400,100,false,0,0,4);
	SkeletSpawn(3600,100,false,0,0,4);
	VampSpawn(3800,100,false,0,0,4);
	VampSpawn(5200,100,true,8,0,3); //Платформа 9
	GolemSpawn(5400,100,false,0,1); 
	VampSpawn(5600,100,false,0,0,3);
	SkeletSpawn(2800,100,true,10,0,3); //Платформа 11
	VampSpawn(6000,100,false,0,0,4);
	VampSpawn(6100,100,false,0,0,4);
	SkeletSpawn(2800,100,true,11,0,4); //Платформа 12
	VampSpawn(5200,50,true,13,0,4); //Платформа 14
}
if(level_load == 6){
	TextAdd('middle',12,'Ха-ха, ты попался в мою ловушку, я и есть мистер Ки. Я специально привел тебя сюда, твоя смерть уже близка, готовься! - Малакай');
	Level = 6;
	
	audioBG = new Audio('music/BG 6.mp3');
	MusicSetting();
	
	MobArray = [];
	PlatSpawned = [-1];
	
	GroundDistance = 1350;
	MainBGmov = 50;
	GroundPos = 100;
	PosX = 400;
	PosY = GroundPos;
	
	GravityValue = 12;		//гравитация
	jumpSpeedX = speed + 2;	//скорость прыжка
	AniMAXvalue = 220;		//длинна прыжка
	AniMAXvalue2 = 220;		//длинна переката
	
	LeftBorder = -500;
	RightBorder = 3100;
	
	PlatPosX = [-550, -100, 300, 700, 1100, 1500, 1950];
	PlatPosY = [ 450,  400, 260, 260,  260,  400,  450];
	PlatformWidth = 300;
	PlatformHeight = 40;
	
	PlatformSpawn();
	
	EndPortalLen = 5900 + WindWidth;
	EndPortal.style.display = "block";
	EndPortal.style.left = EndPortalLen + "px";
	EndPortal.style.bottom = "0px";
	
	canvasElement.style.background = "url('images/background4.jpg') no-repeat";
	canvasElement.style.backgroundSize = '158% 100%';
	canvasElement.style.backgroundPosition = - MainBGmov + 'px';
	
	document.getElementById("SkillP-1").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill1_ico + ".png')";
	document.getElementById("SkillP-2").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill2_ico + ".png')";
	document.getElementById("SkillP-3").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill3_ico + ".png')";
	document.getElementById("SkillP-4").style.backgroundImage = "url('images/IconSkill/Skill-"+ Skill4_ico + ".png')";
	
	PassEnemyKill = 99999;
	
	CurEnemyKill = 0;
	
	document.getElementById('enemy_kill').style.display = 'none';
	//document.getElementById('enemy_kill').innerHTML = "Убито: " + CurEnemyKill + " / " + PassEnemyKill;
	
	groundElement.style.background = "url('images/grounds4.gif') repeat";
	groundElement.style.backgroundSize = "60% 120%";
	groundElement.style.height = "200px";
	groundElement.style.left = '0px';
	groundElement.style.bottom = '-595px';
	groundElement.style.backgroundPosition = '0px';
	groundElement.style.display = 'block';
	
	knightElement.style.display = "block";
	document.getElementById("SkillP-1").style.display = 'inline-block';
	document.getElementById("SkillP-2").style.display = 'inline-block';
	document.getElementById("SkillP-3").style.display = 'inline-block';
	document.getElementById("SkillP-4").style.display = 'inline-block';
	document.getElementById("hpProgress").style.marginTop = '-200px';
	
	MainInt = setInterval(MainTick, 30); // главный таймер
	BarInt = setInterval(BarChange, 1000); // таймер изменения хп/мп/ед
	GenInt = setInterval(GeneralInterval, 1000); //общий интервал
	FinalBossInt = setInterval(BossInt, 30);
	FinalTimer = setInterval(FinalInt,1000);
	
	WarriorGIF("idle");

	if(HardCore == false)
	setTimeout(() => { MalakaiSpawn(600,100,true,0,2,500); }, 5000);

	if(HardCore == true)
	setTimeout(() => { MalakaiSpawn(600,100,true,0,2,600); }, 5000);
	
}
if(level_load == 7){
	
	AnimationAccess = 0;

	audioBG.pause();
	audioBG.currentTime = 0;
	audioBG = new Audio('music/BG 7.mp3');
	MusicSetting();
	
	knightElement.style.display = "block";
	WarriorGIF("idle");
	knightElement.style.left = '0px';
	knightElement.style.bottom = '380px';
	
	document.getElementById('hpProgress').style.display = 'none';
	document.getElementById('mpProgress').style.display = 'none';
	document.getElementById('endProgress').style.display = 'none';
	document.getElementById('skillPanel').style.display = 'none';
	let S_int;
	let S_margin = 600;
	canvasElement.style.background = "url('images/background5.gif') no-repeat";
	function startSub()
	{
		let SUB = document.getElementById('subtitles');
		SUB.style.display = "block";
		SUB.style.marginTop = S_margin + "px";
		SUB.style.width = "600px";
		SUB.style.marginRight = "50px";
		SUB.innerHTML = "";
		SUB.innerHTML += "Вы смогли отомстить за свою семью";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Ваша месть исполнена";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Вы достигли своей цели, но что дальше?";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "У самурая нет цели, есть только путь...";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Но увы - вы не самурай";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Победа - лишь краткая вспышка, оставляющая после себя только грусть и пустоту";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Какая ирония: пустотный воин с пустотой в душе";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Конец.";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Разработчики: Мантуленко Владислав, Щеголев Сергей";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Дизайнеры: Мантуленко Владислав, Щеголев Сергей";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Сценарий: Мантуленко Владислав, Щеголев Сергей";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Режиссёры: Мантуленко Владислав, Щеголев Сергей";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Подборка музыки: Мантуленко Владислав, Щеголев Сергей";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += "Благодарим за уделенное время, ждите вторую часть!";
		S_int = setInterval(moveSub,80);
		
			
	}
		
	function moveSub()
	{
		
		S_margin = S_margin - 5;
		document.getElementById('subtitles').style.marginTop = S_margin + 'px';
			
		if(S_margin < -1800)
		{
			clearInterval(S_int);
			let S_int2 = setTimeout(endSub, 4000);
			
		}

	}
		
	function endSub()
	{
		document.getElementById('subtitles').style.display = "none";

		var max_x = 400, x_animation_end = 0;
		let shuba_move_interval = setInterval(shuba_warrior_move,50);
		function shuba_warrior_move(){
			x_animation_end += 20;
			if (x_animation_end < max_x){
				document.getElementById('subaru').style.left = x_animation_end + "px";
				knightElement.style.left = x_animation_end + 20 +"px";
			}
			else {
				clearInterval(shuba_move_interval);
			}
		}
	}
	//
	//knightElement.style.display = "none";
	//ClearAnimation();
	//EndAnim();
	startSub();
	knightElement.style.bottom = "250px";
	
	document.getElementById('subaru').style.display = "block";
	document.getElementById('subaru').src = "images/Mobs/Subaru/sub.gif";
}
}

//  движение платформ при беге
function PlatformMove()
{
	let plat = document.getElementsByClassName('platform');
	for (let i = 0; i < plat.length; i++) {
		document.getElementsByClassName('platform')[i].style.left = PlatPosX[i] + WindWidth - GroundDistance + 'px';
		document.getElementsByClassName('platform')[i].style.bottom = PlatPosY[i] + 'px';
		document.getElementsByClassName('platform')[i].style.display = "block";
	}
}

//  создание платформ
function PlatformSpawn()
{
	
for (let i = 0; i < PlatPosX.length; i++) {
	if (PlatPosX[i] != null)
	{	
		var data = document.createElement("div");
		data.className = 'platform plat' + i + ' platform-' + Level;
		data.style.left = PlatPosX[i] + 'px';   //размешение по х
		data.style.bottom = PlatPosY[i] + 'px'; //размешение по у
		canvasElement.appendChild(data);	
		
		var CurrentPlat = {};
		CurrentPlat.data = data;			//data который мы создавали, является свойством
		PlatSpawned.push(CurrentPlat.data); 
				
		PlatformMove();
	}
}
	
}

//  удаление платформ
function PlatformDelete(){

	if (PlatSpawned.length > 1)
	{
		for (let j = 1; j < PlatSpawned.length; j++){
			if (PlatSpawned[j] != null)
			{
				let elem = document.getElementsByClassName('platform')[0];
					elem.remove();
					delete PlatSpawned[j];
			}
		}
	}
	
}