//  свойства мобов
function MobProperties(agr, x, y, type, hp, speed, range, anirange, onplat, platind, key, damg, acdb, acda, dcd, mindt, maxdt, mxp, diff)
{
	this.SpawnPosX = x;  
	this.SpawnPosY = y;  
	this.Type = type;   
	this.HP = hp;
	this.Speed = speed;
	this.AtkRange = range;
	this.AtkDamage = damg;
	this.AtkAnimRange = anirange;
	this.MobXP = mxp;	
	this.Aggro = agr;
	this.DIFF = diff;
		
	this.Status = 'None'; // статус (атака/смерть/ничего)
	this.CD = 0;    // длительность текущей анимации 
	this.AtkCdBefore = acdb;   // кд до использования атаки (типо замах)
	this.AtkCdAfter = acda;   // кд на продолжительность замаха и стояния после него
	this.DeathCD = dcd; // кд на длительность смерти
	
	this.MinDmgTimer = mindt; // когда начнёт проходить урон по гг
	this.MaxDmgTimer = maxdt; // когда закончит проходить урон по гг
	this.DmgSide = 0;
	
	this.Invul = false; // неуязвимость = фолс
	this.InvulTime = 0; // при получении урона = 10
	
	this.OnPlatform = onplat;	
	this.PlatIndex = platind;
	this.PlatRCheck = 0;
	this.Anim = 'idle';
	this.Side = 0;
	this.Key = key;
		
	this.PosX = x;
	this.PosY = y;
		
	this.X1 = 1;
	this.X2 = 2;
	this.Y1 = 1;
	this.Y2 = 2;
	
	this.MalakaiProj = 0;
	this.MalakaiSpawn = 0;
}

//  движение мобов при ходьбе рыцаря
function EnemyMoveByWarrior(speeds)
{
	
	for (var i = 0; i < MobArray.length; i++) {
		if (MobArray[i] != null)
		{
			let mobas = MobArray[i].data;
			
			mobas.mob.PosX = mobas.mob.PosX + speeds;
			mobas.style.left = mobas.mob.PosX + 'px';
		}
	}
	
	for (var i = 0; i < MassObj.length; i++) {
		if (MassObj[i] != null)
		{
			let mobas = MassObj[i];
			
			mobas.style.left = parseInt(mobas.style.left) + speeds + 'px';
		}
	}
	
}

//  движение моба при толкании
function OneEnemyMBW(e_mobas,e_speed)
{
	
	e_mobas.mob.PosX = e_mobas.mob.PosX + e_speed;
	e_mobas.style.left = e_mobas.mob.PosX + 'px';
	
}

//  спавн вампира
function VampSpawn(SpawnXpos, SpawnYpos, onplat, PlatIndex, iskey, m_diff)
{
	
	let m_xp;
	let m_dmg;
	let m_speed;
	let m_hp;
	let m_acdb = 25; // ??? мс до атаки
	let m_acda = 25; // ??? мс удар и стояние после него
	let m_dcd = 22; // ??? мс длительность смерти
	let m_dmgtimeMIN = 8;
	let m_dmgtimeMAX = 14;
	
	if(onplat == true)
	{
		SpawnXpos = PlatPosX[PlatIndex] + (PlatformWidth / 2);
		SpawnYpos = PlatPosY[PlatIndex] + PlatformHeight;
	}
	
	if (m_diff == 1)
	{
		m_hp = 10;
		m_speed = 4;
		m_dmg = 2;
		m_xp = 60;
	}
	if (m_diff == 2)
	{
		m_hp = 15;
		m_speed = 4;
		m_dmg = 2.5;
		m_acdb = 20;
		m_xp = 120;
	}
	if (m_diff == 3)
	{
		m_hp = 25;
		m_speed = 4;
		m_dmg = 4;
		m_xp = 180;
	}
	if (m_diff == 4)
	{
		m_hp = 50;
		m_speed = 4;
		m_dmg = 6;
		m_acdb = 17;
		m_xp = 240;
	}
	
	SpawnXpos = WindWidth + SpawnXpos;
	
	var Mob = new MobProperties(700, SpawnXpos, SpawnYpos, 'vampire', m_hp, m_speed, 120, 120, onplat, PlatIndex, iskey, m_dmg, m_acdb, m_acda, m_dcd, m_dmgtimeMIN, m_dmgtimeMAX, m_xp, m_diff);
	var data = document.createElement("img");  // создание моба
			
	data.className = 'enemy vampire';	//добавление класса к дивке
	data.style.left = SpawnXpos + 'px';   //размешение по х
	data.style.bottom = SpawnYpos + 'px'; //размешение по у
	
	if (m_diff == 1)
		data.style.filter = 'hue-rotate(0deg)';	// красный

	if (m_diff == 2)
		data.style.filter = 'hue-rotate(120deg)'; // зелёный
	
	if (m_diff == 3)
		data.style.filter = 'hue-rotate(240deg)'; // синий
	
	if (m_diff == 4)
		data.style.filter = 'hue-rotate(50deg)';  // коричневый
	
	data.mob = Mob;
	canvasElement.appendChild(data);	
	
	var CurrentEnemy = {};
	CurrentEnemy.data = data;			//data который мы создавали, является свойством
	MobArray.push(CurrentEnemy); 
	
}

// спавн скелета
function SkeletSpawn(SpawnXpos, SpawnYpos, onplat, PlatIndex, iskey, m_diff)
{
	
	let m_dmg;
	let m_speed;
	let m_hp;
	let m_xp;
	
	let m_dcd = 25; // длительность анимации смерти
	
	let m_acdb = 10; // задержка перед каждой атакой
	let m_acda = 30; // длительность анимации атаки
	// чем dmgtime ближе к acda = тем быстрее нанесётся урон
	let m_dmgtimeMIN = 17; // когда будет проходить урон 1, меньше чем acda
	let m_dmgtimeMAX = 19; // когда будет проходить урон 2, меньше чем acda
	
	if(onplat == true)
	{
		SpawnXpos = PlatPosX[PlatIndex] + (PlatformWidth / 2);
		SpawnYpos = PlatPosY[PlatIndex] + PlatformHeight;
	}
	
	if (m_diff == 1)
	{
		m_hp = 15;
		m_speed = 4;
		m_dmg = 15;
		m_xp = 150;
	}
	if (m_diff == 2)
	{
		m_hp = 30;
		m_speed = 4;
		m_dmg = 22;
		m_acdb = 8;
		m_xp = 160;
		if(HardCore == true) m_dmg = 25;
	}
	if (m_diff == 3)
	{
		m_hp = 45;
		m_speed = 4;
		m_dmg = 27;
		m_acdb = 8;
		m_xp = 240;
		if(HardCore == true) m_dmg = 30;
	}
	if (m_diff == 4)
	{
		m_hp = 100;
		m_speed = 4;
		m_dmg = 32;
		
		m_acdb = 12;
		
		m_acda = 14;
		m_dmgtimeMIN = 6;
		m_dmgtimeMAX = 8;
		m_xp = 320;
		if(HardCore == true) m_dmg = 50;

		
	}
	
	SpawnXpos = WindWidth + SpawnXpos;
	
	var Mob = new MobProperties(700, SpawnXpos, SpawnYpos, 'skeleton', m_hp, m_speed, 50, 100, onplat, PlatIndex, iskey, m_dmg, m_acdb, m_acda, m_dcd, m_dmgtimeMIN, m_dmgtimeMAX, m_xp, m_diff);
	var data = document.createElement("img");  // создание моба
			
	data.className = 'enemy skeleton';	//добавление класса к дивке
	data.style.left = SpawnXpos + 'px';   //размешение по х
	data.style.bottom = SpawnYpos + 'px'; //размешение по у
	
	if (m_diff == 1)
	data.style.filter = 'hue-rotate(0deg)';	// красный

	if (m_diff == 2)
	data.style.filter = 'hue-rotate(120deg)'; // зелёный
	
	if (m_diff == 3)
	data.style.filter = 'hue-rotate(240deg)'; // синий
	
	if (m_diff == 4)
	data.style.filter = 'hue-rotate(50deg)';  // коричневый
	
	data.mob = Mob;
	canvasElement.appendChild(data);	
	
	var CurrentEnemy = {};
	CurrentEnemy.data = data;			//data который мы создавали, является свойством
	MobArray.push(CurrentEnemy); 
	
}

//  спавн голема
function GolemSpawn(SpawnXpos, SpawnYpos, onplat, PlatIndex, m_diff)
{
	
	let m_dmg = 20;
	let m_speed = 3;
	let m_hp = 300;
	let m_xp = 1500;
	
	let m_dcd = 28;
	
	let m_acdb = 56;
	let m_acda = 30; 

	let m_dmgtimeMIN = 17; 
	let m_dmgtimeMAX = 19; 
	
	if(HardCore == true)
		m_hp = 400;
	
	if (m_diff == 1)
	{
		m_hp = 40;
		m_xp = 450
		m_dmg = 15;
	}
	
	SpawnXpos = WindWidth + SpawnXpos;
	
	var Mob = new MobProperties(4000, SpawnXpos, SpawnYpos, 'golem', m_hp, m_speed, 230, 300, onplat, PlatIndex, 0, m_dmg, m_acdb, m_acda, m_dcd, m_dmgtimeMIN, m_dmgtimeMAX, m_xp, m_diff);
	var data = document.createElement("img");  // создание моба
			
	data.className = 'enemy golem';	//добавление класса к дивке
	data.style.left = SpawnXpos + 'px';   //размешение по х
	data.style.bottom = SpawnYpos + 'px'; //размешение по у
	
	if (m_diff == 1)
	data.style.filter = 'opacity(0.75) sepia(90%) brightness(23%)';
	
	data.mob = Mob;
	canvasElement.appendChild(data);	
	
	var CurrentEnemy = {};
	CurrentEnemy.data = data;			//data который мы создавали, является свойством
	MobArray.push(CurrentEnemy); 
}


//  спавн малакая
function MalakaiSpawn(SpawnXpos, SpawnYpos, onplat, PlatIndex, m_diff, hpnow)
{
	
	let m_dmg = 4;
	let m_speed = 5;
	let m_hp = hpnow;
	let m_xp = 1500;
	
	let m_dcd = 138;
	
	let m_acdb = 10;
	let m_acda = 90; 

	let m_dmgtimeMIN = [22,30,38,50,74]; 
	let m_dmgtimeMAX = [24,32,40,52,76]; 
	
	let m_AnimRange = 150;
	let m_RealRange = 140;
	
	if(HardCore == true)
	{
	m_dmg = 5;
	m_AnimRange = 160;
	m_RealRange = 150;
	}

	if (m_diff == 1)
	{
		m_hp = hpnow;
		m_xp = 280;
		m_dmg = 5;
		m_dcd = 34;
	}

	if(onplat == true)
	{
		SpawnXpos = PlatPosX[PlatIndex] + (PlatformWidth / 2) - 50;
		SpawnYpos = PlatPosY[PlatIndex] + PlatformHeight;
	}
	
	SpawnXpos = WindWidth + SpawnXpos;
	

	
	var Mob = new MobProperties(2000, SpawnXpos, SpawnYpos, 'malakai', m_hp, m_speed, m_RealRange, m_AnimRange, onplat, PlatIndex, 0, m_dmg, m_acdb, m_acda, m_dcd, m_dmgtimeMIN, m_dmgtimeMAX, m_xp, m_diff);
	var data = document.createElement("img");  // создание моба
			
	data.className = 'enemy malakai';	//добавление класса к дивке
	data.style.left = SpawnXpos + 'px';   //размешение по х
	data.style.bottom = SpawnYpos + 'px'; //размешение по у
	
	data.mob = Mob;
	canvasElement.appendChild(data);	
	
	var CurrentEnemy = {};
	CurrentEnemy.data = data;	
	MobArray.push(CurrentEnemy); 
}

//  спавн сфер
function SphereSpawn(SpawnXpos, SpawnYpos, onplat, PlatIndex, m_diff)
{
	
	let m_dmg = 5;
	let m_speed = 4;
	let m_hp = 1;
	let m_xp = 0;
	
	let m_dcd = 3;
	
	if(HardCore == true)
	m_dmg = 8;
	
	let m_acdb = 1;
	let m_acda = 4; 

	let m_dmgtimeMIN = 1; 
	let m_dmgtimeMAX = 3; 
	
	var Mob = new MobProperties(2000, SpawnXpos, SpawnYpos, 'sphere', m_hp, m_speed, 40, 40, onplat, PlatIndex, 0, m_dmg, m_acdb, m_acda, m_dcd, m_dmgtimeMIN, m_dmgtimeMAX, m_xp, m_diff);
	var data = document.createElement("img");  // создание моба
	data.style.filter = 'hue-rotate(100deg)';  // коричневый
	data.className = 'enemy sphere';	//добавление класса к дивке
	data.style.left = SpawnXpos + 'px';   //размешение по х
	data.style.bottom = SpawnYpos + 'px'; //размешение по у
	data.mob = Mob;
	canvasElement.appendChild(data);	
	
	var CurrentEnemy = {};
	CurrentEnemy.data = data;	
	MobArray.push(CurrentEnemy); 
}


//  поведение мобов
function MobMovment()
{
	
	for (var i = 0; i < MobArray.length; i++) {
		if (MobArray[i] != null && (MobArray[i].data.mob.Type != "sphere" && MobArray[i].data.mob.Type != "malakai"))
		{
			let mobas = MobArray[i].data;
			let mobX1 = mobas.mob.PosX;
			let Agr = MobArray[i].data.mob.Aggro;
			
			//мобы двигаются только если минимум в 700 пикселях от гг, иначе просто стоят
			if ( (HitboX1 < mobX1 && HitboX1 + Agr > mobX1) || (HitboX1 > mobX1 && HitboX1 < mobX1 + Agr) )
			{

				//счётчик кд у мобов (при атаке / смерти / замахе)
				if (mobas.mob.CD > 0)
					mobas.mob.CD = mobas.mob.CD - 1;
				
				//нанесение урона про гг
				if (mobas.mob.Status == 'AttackEnd' && (mobas.mob.MinDmgTimer < mobas.mob.CD && mobas.mob.CD < mobas.mob.MaxDmgTimer))
				{
					HeroDamaged(mobas.mob);
				}
				
				//моб стреляет
				if (mobas.mob.Status == 'Throw' && mobas.mob.CD < 1)
				{
					if (mobas.mob.Side == 0)
					mobas.mob.Anim = 'throw';
					if (mobas.mob.Side == 1)
					mobas.mob.Anim = 'throwinv';
				
					mobas.src = "";
					mobas.mob.CD = 30;
					if(mobas.mob.HP < 130 && mobas.mob.DIFF == 2)
					{
					mobas.mob.CD = 20;
					mobas.mob.AtkCdBefore = 30;
					mobas.mob.AtkCdAfter = 25;
					mobas.mob.MinDmgTimer = 10;
					mobas.mob.MaxDmgTimer = 12;
					mobas.style.filter = 'hue-rotate(250deg)';	// красный
					}
				
					mobas.mob.Status = 'ThrowEnd';
				}
				if (mobas.mob.Status == 'ThrowEnd' && mobas.mob.CD < 1)
				{
					ProjectSpawn(mobas);
					mobas.mob.CD = 0;
					mobas.mob.Status = 'None';
				}
						
				//моб атакует
				if (mobas.mob.Status == 'Attack' && mobas.mob.CD < 1)
				{

					if (mobas.mob.Side == 0)
					{
						mobas.mob.Anim = 'attack';
						mobas.mob.DmgSide = 0;
					}
					
					if (mobas.mob.Side == 1)
					{
						mobas.mob.Anim = 'attackinv';
						mobas.mob.DmgSide = 1;
					}
					
					mobas.src = "";
					mobas.mob.CD = mobas.mob.AtkCdAfter;
					mobas.mob.Status = 'AttackEnd';
					
				}
				
				//моб заканчивает атаковать
				if (mobas.mob.Status == 'AttackEnd' && mobas.mob.CD < 1)
				{
					mobas.mob.CD = 0;
					mobas.mob.Status = 'None';
				}
				
				//моб умирает
				if (mobas.mob.Status == 'Death' && mobas.mob.CD < 1)
				{
					EnemyKill(i);
				}


				let PlatfLeft = parseInt(PlatSpawned[mobas.mob.PlatIndex + 1].style.left);
				let M_Middle;
						
				M_Middle = (mobas.mob.X2 - mobas.mob.X1) + mobas.mob.X1;
				//падение моба с платформы
				if(M_Middle - 50 > PlatfLeft + PlatformWidth && M_Middle > 1)
				MobFallOut(mobas);
				
				M_Middle = (mobas.mob.X1 - mobas.mob.X2) + mobas.mob.X2;
				//падение моба с платформы
				if(M_Middle + 50 < PlatfLeft && M_Middle > 1)
				MobFallOut(mobas);
				
				if (mobas.mob.Status == 'None')
				{
					
					//моб стоит
					if (mobas.mob.Side == 0)
						mobas.mob.Anim = 'idle';
					
					if (mobas.mob.Side == 1)
						mobas.mob.Anim = 'idleinv';
					
					let MobAtkRange = mobas.mob.AtkAnimRange;
					
					//моб не на платформе
					if (mobas.mob.OnPlatform == false)
					{
						
						//моб бежит
						if (HitboX1 + MobAtkRange < mobas.mob.X1 && HitboX1 + 600 > mobas.mob.X1)
						{
							mobas.mob.Anim = 'runinv';
						
							mobas.mob.PosX = mobas.mob.PosX - mobas.mob.Speed;
							mobas.style.left = mobas.mob.PosX + 'px';
							
							mobas.mob.Side = 1;
						}
						
						if (HitboX1 > mobas.mob.X1 + MobAtkRange && HitboX1 < mobas.mob.X1 + 600)
						{
							mobas.mob.Anim = 'run';
						
							mobas.mob.PosX = mobas.mob.PosX + mobas.mob.Speed;
							mobas.style.left = mobas.mob.PosX + 'px';
							
							mobas.mob.Side = 0;
						}
					}
					
					//моб на платформе
					if (mobas.mob.OnPlatform == true)
					{
						PlatfLeft = parseInt(PlatSpawned[mobas.mob.PlatIndex + 1].style.left);
						M_Middle;
						
						M_Middle = (mobas.mob.X2 - mobas.mob.X1) + mobas.mob.X1;
						
						if(mobas.mob.PlatRCheck == 0)
						{
							mobas.mob.Anim = 'run';
							mobas.mob.PosX = mobas.mob.PosX + mobas.mob.Speed;
							mobas.style.left = mobas.mob.PosX + 'px';
							mobas.mob.Side = 0;
							
							if (M_Middle - 30 > PlatfLeft + PlatformWidth)
							{
								mobas.mob.PlatRCheck = 1;
							}
							
						}
						
						M_Middle = (mobas.mob.X1 - mobas.mob.X2) + mobas.mob.X2;
						
						if(mobas.mob.PlatRCheck == 1)
						{
							
							mobas.mob.Anim = 'runinv';
							mobas.mob.PosX = mobas.mob.PosX - mobas.mob.Speed;
							mobas.style.left = mobas.mob.PosX + 'px';
							mobas.mob.Side = 1;
							
							if (M_Middle + 30 < PlatfLeft)
							{
								mobas.mob.PlatRCheck = 0;
							}
						
						}
						
					}
					
					//моб хочет атаковать
					if (HitboX1 <= mobas.mob.X2 && HitboX1 + MobAtkRange >= mobas.mob.X1)
					{
						mobas.mob.CD = mobas.mob.AtkCdBefore;
						mobas.mob.Status = 'Attack';
						
						if (HitboX1 <= mobX1)
						{
							mobas.mob.Side = 1;
							mobas.mob.Anim = 'idleinv';
							
						}
						if (HitboX1 > mobX1)
						{
							mobas.mob.Side = 0;
							mobas.mob.Anim = 'idle';
							
						}
						
						if(mobas.mob.Type == "golem")
						{
							GolemAttackRange(mobas);
						}
						
					}
					else{
						
						if (HitboX1 < mobas.mob.X1 && HitboX1 + Agr > mobas.mob.X1 && mobas.mob.Type == "golem")
						{
							mobas.mob.CD = 50;
							if(mobas.mob.HP < 130 && mobas.mob.DIFF == 2)
							mobas.mob.CD = 30;
						
							mobas.mob.Status = 'Throw';
							
							if (HitboX1 <= mobX1)
								mobas.mob.Side = 1;
							if (HitboX1 > mobX1)
								mobas.mob.Side = 0;
						}
						
					}
					
					if (HitboX2 >= mobas.mob.X1 && HitboX2 <= mobas.mob.X2 + MobAtkRange)
					{
						mobas.mob.CD = mobas.mob.AtkCdBefore;
						mobas.mob.Status = 'Attack';
						
						if (HitboX1 <= mobX1)
						{
							mobas.mob.Side = 1;
							mobas.mob.Anim = 'idleinv';
						}
						if (HitboX1 > mobX1)
						{
							mobas.mob.Side = 0;
							mobas.mob.Anim = 'idle';
						}
						
						if(mobas.mob.Type == "golem")
						{
							GolemAttackRange(mobas);
						}
						
					}
					else{
						
						if (HitboX1 > mobas.mob.X1 && HitboX1 < mobas.mob.X1 + Agr && mobas.mob.Type == "golem")
						{
							mobas.mob.CD = 50;
							if(mobas.mob.HP < 130 && mobas.mob.DIFF == 2)
							mobas.mob.CD = 30;
						
							mobas.mob.Status = 'Throw';
							
						if (HitboX1 <= mobX1)
							mobas.mob.Side = 1;
						if (HitboX1 > mobX1)
							mobas.mob.Side = 0;
						
						}
						
					}

				}
				
				if(mobas.mob.Status != 'Death')		
				if (mobas.mob.HP < 1)
				{
					mobas.mob.CD = mobas.mob.DeathCD;
					mobas.mob.Status = 'Death';
						
					if (HitboX1 > mobX1)
						mobas.mob.Anim = 'appear';
						
					if (HitboX1 <= mobX1)
						mobas.mob.Anim = 'appearinv';
						
					mobas.src = "";
				}
				
				// если моб всётаки бегает по воздуху, что врятли
				if(mobas.mob.PosY > GroundPos && mobas.mob.OnPlatform == false)
				{
					mobas.mob.PosY = mobas.mob.PosY - 20;
					
					if(mobas.mob.PosY < GroundPos)
						mobas.mob.PosY = GroundPos;
					
					mobas.style.bottom = mobas.mob.PosY + 'px';
				}

				//отрисовка гифок и хитбоксов для всех мобов
				
				if (mobas.mob.Type == "vampire")
				VampireGIF(mobas);
		
				if (mobas.mob.Type == "skeleton")
				SkeletonGIF(mobas); 
			
				if (mobas.mob.Type == "golem")
				GolemGIF(mobas); 
				
				MobHitBox(mobas);
			}
			
		}}
	
}

//  таймер подения моба
let MobFall;

//  моб падает
function MobFallOut(mobas){
	mobas.mob.OnPlatform = false;
	GlobalTemp = mobas;
	MobFall = setInterval(MobFallTimer, 50, mobas)
}

//  моб перестает падать
function MobFallTimer(mobas){
	mobas.mob.PosY = mobas.mob.PosY - 8;
	mobas.style.bottom = mobas.mob.PosY + 'px';
	
	if (mobas.mob.PosY <= GroundPos)
	{
		mobas.mob.PosY = GroundPos;
		mobas.style.bottom = GroundPos + 'px';
		clearInterval(MobFall);
		mobas = "";
	}
}

//  удаление мобов
function MobDelete()
{
	
	if (MobArray.length > 0)
	{
		for (let j = 0; j < MobArray.length; j++){
			if (MobArray[j] != null)
			{
				let elem = document.getElementsByClassName('enemy')[0];
					elem.remove();
					delete MobArray[j];
			}
		}
	}
	
}

//  нанесение урона врагу
function EnemyDamageDeal(enemyID,damage)
{

	MobArray[enemyID].data.mob.HP = MobArray[enemyID].data.mob.HP - damage;
	
	if(Bonus22ATK == 1 && MobArray[enemyID].data.mob.HP - damage < 1)
	MaxHP = MaxHP + 0.1;
	
	if(Bonus20TIME > 0)
	{
		CurHP = CurHP + (damage * 0.2);
		
		if(CurHP > MaxHP)
		CurHP = MaxHP;
	}
		
}

//  убийство моба
function EnemyKill(enemyID)
{
	
	if (MobArray[enemyID].data.mob.HP <= 1)
	{
		if( (MobArray[enemyID].data.mob.Type == 'golem' && MobArray[enemyID].data.mob.DIFF == 2) || (MobArray[enemyID].data.mob.Type == 'malakai' && MobArray[enemyID].data.mob.DIFF == 2))
		BossKill = true;	
			
		HeroXP = HeroXP + MobArray[enemyID].data.mob.MobXP;
		HeroLevelUp();
		MobArray[enemyID].data.style.left = "-10000px";
		MobArray[enemyID].data.remove();
		delete MobArray[enemyID];
		
		CurEnemyKill = CurEnemyKill + 1;
		
		document.getElementById('enemy_kill').innerHTML = "Убито: " + CurEnemyKill + " / " + PassEnemyKill;
		if(CurEnemyKill >= PassEnemyKill)
		document.getElementById('enemy_kill').innerHTML = "Уровень пройден";
	}
	
}