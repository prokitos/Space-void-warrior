//  проверка на захождение в моба
function WarriorInMob(spd)
{
	
	for (var i = 0; i < MobArray.length; i++) {
	if (MobArray[i] != null)
	{
		let mob = MobArray[i].data.mob;
		
		let M_Middle = mob.X1 + ((mob.X2 - mob.X1) / 2);
		
		if(HitboX2 > mob.X1 && HitboX2 <= M_Middle)
		{
		if( (mob.Y1 <= HitboY1 && mob.Y2 >= HitboY1) || (mob.Y2 >= HitboY2 && mob.Y1 <= HitboY2) )
		{
			OneEnemyMBW(MobArray[i].data,5);
		}}			
		
		if (HitboX1 < mob.X2 && HitboX1 > M_Middle)
		{
		if( (mob.Y1 <= HitboY1 && mob.Y2 >= HitboY1) || (mob.Y2 >= HitboY2 && mob.Y1 <= HitboY2) )
		{
			OneEnemyMBW(MobArray[i].data,-5);
		}}
		
	}}
	
}



//  просчёт хитбоксов и урона для атаки мо мобу
function MobDamaged(type)
{
	
// переменные для передачи хитбоксов
var hitX1;
var hitX2;
var hitY1;
var hitY2;
var d_dmg;
	
	if(type == "Attack1")
	{
		if (WarriorSide == 0)
		{
		hitX1 = HitboX2;
		hitX2 = HitboX2 + 140;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 100;
		}
			
		if (WarriorSide == 1)
		{
		hitX1 = HitboX1 - 140;
		hitX2 = HitboX1;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 100;
		}
			
		d_dmg = CurDMG * 1.5;
		interval = setTimeout(HitBoxCheck, 600, hitX1,hitX2,hitY1,hitY2,d_dmg); 
	}
	
	if(type == "Attack2")
	{
		if (WarriorSide == 0)
		{
		hitX1 = HitboX2;
		hitX2 = HitboX2 + 160;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 100;
		}
			
		if (WarriorSide == 1)
		{
		hitX1 = HitboX1 - 160;
		hitX2 = HitboX1;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 100;
		}
			
		d_dmg = CurDMG * 2.5;
		interval = setTimeout(HitBoxCheck, 1000, hitX1,hitX2,hitY1,hitY2,d_dmg); 
	}
	
	if(type == "Skill-1")
	{
		let sk1_obj = document.getElementsByClassName('fireball_skill')[0];

		hitX1 = parseInt(sk1_obj.style.left);
		hitX2 = parseInt(sk1_obj.style.left) + 120;
		hitY1 = parseInt(sk1_obj.style.bottom);
		hitY2 = parseInt(sk1_obj.style.bottom) + 60;
			
		d_dmg = (CurMP * 0.05).toFixed(2);
		HitBoxCheck(hitX1,hitX2,hitY1,hitY2,d_dmg);
	}
	if(type == "Skill-2")
	{
		
		if (WarriorSide == 0)
		{
		hitX1 = HitboX2;
		hitX2 = HitboX2 + 200;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 100;
		}
			
		if (WarriorSide == 1)
		{
		hitX1 = HitboX1 - 200;
		hitX2 = HitboX1;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 100;
		}
		
		d_dmg = CurDMG * 0.5;
		HitBoxCheck(hitX1,hitX2,hitY1,hitY2,d_dmg);
	}
	if(type == "Skill-5")
	{
		if (CastedSkillSide == 0)
		{
		hitX1 = HitboX2;
		hitX2 = HitboX2 + 320;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 170;
		}
			
		if (CastedSkillSide == 1)
		{
		hitX1 = HitboX1 - 320;
		hitX2 = HitboX1;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 170;
		}
		
		d_dmg = CurDMG * 3.5;
		HitBoxCheck(hitX1,hitX2,hitY1,hitY2,d_dmg);
	}
	if(type == "Skill-7")
	{
		if (CastedSkillSide == 0)
		{
		hitX1 = HitboX2 + 180;
		hitX2 = HitboX2 + 340;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 570;
		}
			
		if (CastedSkillSide == 1)
		{
		hitX1 = HitboX1 - 340;
		hitX2 = HitboX1 - 180;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 570;
		}
		
		d_dmg = 8;
		HitBoxCheck(hitX1,hitX2,hitY1,hitY2,d_dmg);
	}
	if(type == "Skill-9")
	{
		if (CastedSkillSide == 0)
		{
		hitX1 = HitboX2 + 160;
		hitX2 = HitboX2 + 390;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 160;
		}
			
		if (CastedSkillSide == 1)
		{
		hitX1 = HitboX1 - 350;
		hitX2 = HitboX1 - 120;
		hitY1 = HitboY1;
		hitY2 = HitboY1 + 160;
		}
		
		d_dmg = CurDMG * 0.8;
		HitBoxCheck(hitX1,hitX2,hitY1,hitY2,d_dmg);
	}
	if(type == "Skill-10")
	{

		hitX1 = HitboX2 - 420;
		hitX2 = HitboX2 + 550;
		hitY1 = 0;
		hitY2 = HitboY1 + 870;
		
		d_dmg = 11;
		HitBoxCheck(hitX1,hitX2,hitY1,hitY2,d_dmg);
	}
	if(type == "Skill-11")
	{

		hitX1 = HitboX2 - 420;
		hitX2 = HitboX2 + 420;
		hitY1 = 0;
		hitY2 = HitboY1 + 870;		
		d_dmg = 90;
		HitBoxCheck(hitX1,hitX2,hitY1,hitY2,d_dmg);
	}
	if(type == "Skill-12")
	{
		if (CastedSkillSide == 0)
		{
		hitX1 = HitboX1 - 280;
		hitX2 = HitboX2 + 550;
		hitY1 = 0;
		hitY2 = HitboY1 + 600;
		}
			
		if (CastedSkillSide == 1)
		{
		hitX1 = HitboX1 - 420;
		hitX2 = HitboX2 + 280;
		hitY1 = 0;
		hitY2 = HitboY1 + 600;
		}
		
		d_dmg = 70;
		HitBoxCheck(hitX1,hitX2,hitY1,hitY2,d_dmg);
	}
	
}

//  атака по мобу
function HitBoxCheck(hitX1,hitX2,hitY1,hitY2,d_dmg)
{
			
	for (var i = 0; i < MobArray.length; i++) {
	if (MobArray[i] != null)
	{
	let mobas = MobArray[i].data.mob;
			
	if((hitX1 <= mobas.X1 && hitX2 >= mobas.X1)||(hitX1 <= mobas.X2 && hitX2 >= mobas.X2))
	{
	if(hitY1 <= mobas.Y2 && hitY2 >= mobas.Y1)
	{				
	let enemyID = i;
	EnemyDamageDeal(enemyID,d_dmg);
	HeroDamageShow(d_dmg,'hero',enemyID);
	}}
			
	}}
			
}

//  хитбоксы мобов
function MobHitBox(MobObj)
{
	
let MobProp = MobObj.mob;

if (MobProp.Type == 'vampire')
{
	MobProp.X1 = -5 + MobProp.PosX;
	MobProp.X2 = 85 + MobProp.PosX;
	MobProp.Y1 = MobProp.PosY;
	MobProp.Y2 = 120 + MobProp.PosY;
}

if (MobProp.Type == 'skeleton')
{
	MobProp.X1 = -5 + MobProp.PosX;
	MobProp.X2 = 125 + MobProp.PosX;
	MobProp.Y1 = MobProp.PosY;
	MobProp.Y2 = 160 + MobProp.PosY;
}
if (MobProp.Type == 'golem')
{
	MobProp.X1 = -5 + MobProp.PosX;
	MobProp.X2 = 205 + MobProp.PosX;
	MobProp.Y1 = MobProp.PosY;
	MobProp.Y2 = 220 + MobProp.PosY;
}
if (MobProp.Type == 'malakai')
{
	MobProp.X1 = 10 + MobProp.PosX;
	MobProp.X2 = 150 + MobProp.PosX;
	MobProp.Y1 = MobProp.PosY;
	MobProp.Y2 = 155 + MobProp.PosY;
}
if (MobProp.Type == 'sphere')
{
	MobProp.X1 = 10 + MobProp.PosX;
	MobProp.X2 = 55 + MobProp.PosX;
	MobProp.Y1 = MobProp.PosY + 5;
	MobProp.Y2 = 55 + MobProp.PosY;
}
	
}

//  нанесение урона по герою
function HeroDamaged(mob)
{
	
if (HeroImmortal == false)
{
	let M_Middle = mob.X1 + ((mob.X2 - mob.X1) / 2);
	
	if (mob.DmgSide == 0)
	{
		if(M_Middle <= HitboX2 && mob.X2 + mob.AtkRange >= HitboX1)
		{
		if( (mob.Y1 <= HitboY1 && mob.Y2 >= HitboY1) || (mob.Y2 >= HitboY2 && mob.Y1 <= HitboY2) )
		{
							
		if(ShielDur - mob.AtkDamage < 1)
		{
		ShielDur = ShielDur - mob.AtkDamage;
		CurHP = CurHP + ShielDur;
		ShielDur = 0;
		}
		else
		ShielDur = ShielDur - mob.AtkDamage;
		
		BarChange();
		HeroDamageShow(mob.AtkDamage,'enemy','');
					
		}}
	}
	
	if (mob.DmgSide == 1)
	{
		if(M_Middle >= HitboX1 && mob.X1 - mob.AtkRange <= HitboX2)
		{
		if( (mob.Y1 <= HitboY1 && mob.Y2 >= HitboY1) || (mob.Y2 >= HitboY2 && mob.Y1 <= HitboY2) )
		{
							
		if(ShielDur - mob.AtkDamage < 1)
		{
		ShielDur = ShielDur - mob.AtkDamage;
		CurHP = CurHP + ShielDur;
		ShielDur = 0;
		}
		else
		ShielDur = ShielDur - mob.AtkDamage;
	
		BarChange();
		HeroDamageShow(mob.AtkDamage,'enemy','');
							
		}}
	}
}
	
}