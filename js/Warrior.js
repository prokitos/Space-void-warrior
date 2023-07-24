//  глобальные переменные
var MainBGmov; // сдвиг главного фона
var GroundDistance = 0;
var GroundPos; // позиция земли
var PosX = 0, PosY = 0; // позиция гг
var HitboX1 = 0, HitboX2 = 0;
var HitboY1 = 0, HitboY2 = 0;
var ButtonLeft = 37, ButtonRight = 39, ButtonUp = 38, ButtonDown = 40; 
var ButtonSprint = 16, ButtonAttack = 70;
var ButtonSkil1 = 49, ButtonSkil2 = 50, ButtonSkil3 = 51, ButtonSkil4 = 52;
var ButtonESC = 27, ESCvisible = false;
var speed = 5;
var rigInt, leftInt;  // интервалы ходьбы
var KeyAccess = 1;
var WarriorSide = 0, CastedSkillSide;
var Gravity = true;
var GravityValue;
var isRUN = false, onGROUND = true, onPLATFORM = false;
var AnimationAccess = 1;
var RightButtonPress = 0, LeftButtonPress = 0;	// нажатие клавиш в полёте
var jumpSpeedX;
var AniMAXvalue;
var AniMAXvalue2;
var RightExeption = false, LeftExeption = false;
var WindWidth = 980;
var Level;
var MobArray;
var LeftBorder, RightBorder;
var BossKill = false;
var ShielDur = 0;
var WarriorPlatID;

var BonusSkil6 = 0;
var BonusSkil8 = 0;
var BonusSkil12 = 0;
var BonusSkil15 = 0;
var BonusSkil20 = 0;
var Bonus20TIME = 0;
var BonusSkil22 = 0;
var Bonus22ATK = 0;

var Skill1_id = 0;
var Skill2_id = 0;
var Skill3_id = 0;
var Skill4_id = 0;

var Skill1_cd = 0;
var Skill2_cd = 0;
var Skill3_cd = 0;
var Skill4_cd = 0;

var Skill1_ico = 0;
var Skill2_ico = 0;
var Skill3_ico = 0;
var Skill4_ico = 0;

var HeroXP = 0;
var HeroLevel = 1;
var MaxHP = 30;
var CurHP = 30;
var MaxMP = 30;
var CurMP = 30;
var MaxEND = 30;
var CurEND = 30;

var CurDMG = 4;
var CurHPReg = 0.25;
var CurMPReg = 0.45;
var CurENDReg = 0.75;

var SkillPoint = 0;
var InPortal = 0;

var CurEnemyKill = 0;
var PassEnemyKill = 0;

var HeroImmortal = false;
var ImmortalTimer = 0;
var ImmortalMax = 20;
var JumpCheck = 0;

var EndPortal = document.getElementById("end_portal");
var EndPortalLen = 0;

var ButtonMusic = 77; // буква M
var MusicPlay = false;

var bleh = new Audio('music/bleh.mp3');

var PlatformWidth;
var PlatformHeight;
var PlatPosX; // массив с кордами х
var PlatPosY; // массив с кордами у
var PlatSpawned; // массив с заспавнеными платформами
var MassObj = [];

var canvasElement = document.getElementById('gamefield');
var groundElement = document.getElementById('ground');
var knightElement = document.getElementById('knight');

var GlobalTemp;

var MainInt; // главный таймер
var BarInt; // таймер изменения хп/мп/ед
var GenInt; //общий таймер
var FinalBossInt;
var FinalTimer;

//  вызов метода варриора
function WarriorGame()
{

if(HardCore == false)
{
MaxHP = 35;
CurHP = 35;
MaxMP = 35;
CurMP = 35;
MaxEND = 35;
CurEND = 35;
CurENDReg = 1;
CurDMG = 5;
}
	

//  создание всех иконок для скилов
for (let i = 1; i < 25; i++) {
	
	var data = document.createElement("div");  // создание иконки скила
			
	data.className = 'Sicon unavail sk-' + i;	//добавление класса к дивке
	
	document.getElementById("sk-container").appendChild(data);	
	
}
document.getElementsByClassName("sk-1")[0].className = "Sicon avail sk-1"; //доступность 1 скила

LoadLevel(1);
BasicConfig();
WarriorControls();

// MaxHP = 900;
// CurHPReg = 50;
// CurDMG = 50;
// SkillPoint = 20;

//  начальные визуальные настройки
function BasicConfig()
{
	
knightElement.style.display = 'block';
WarriorGIF("idle");
document.getElementById('hpProgress').style.display = 'block';
document.getElementById('mpProgress').style.display = 'block';
document.getElementById('endProgress').style.display = 'block';
document.getElementById('skillPanel').style.display = 'block';

}
	
}