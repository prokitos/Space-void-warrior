
var MalakaiChp = 450;

//  спавн бомб у голема
function ProjectSpawn(mobas)
{
	
	var data = document.createElement("img");  
	data.className = 'GolemGrenade';	
	data.src = "images/Mobs/Golem/bomb.gif";
	data.style.filter = 'opacity(0.5)';
	data.style.bottom =  200 + 'px'; 
	
	if(mobas.mob.Side == 1) // лево
	{
		data.style.left =  mobas.mob.X1 + 'px';
	}
	 
	if(mobas.mob.Side == 0) // право
	{
		data.style.left =  mobas.mob.X2 + 'px'; 
	}
	
	var Randos = rand(50,900);
	
	if(mobas.mob.DIFF == 1)
		Randos = rand(50,3900);
	
	var SpdB = 6;
	if(mobas.mob.HP < 130 && mobas.mob.DIFF == 2)
	SpdB = 13;
	
	canvasElement.appendChild(data);
	
	if(mobas.mob.Side == 0)
	ProjectMoveR(data,Randos,SpdB);
	if(mobas.mob.Side == 1)
	ProjectMoveL(data,Randos,SpdB);

}

//  полёт в правую сторону
function ProjectMoveR(Obj,ToPosX,PSPEED)
{
	var p_y = parseInt(Obj.style.bottom);
	var p_x = parseInt(Obj.style.left) + GroundDistance;
	var toPosXt;
	var temp = p_x;
	var Annig = rand(1,10);
	var Def = rand(1,20);
	var temp2 = 0;

	if(Annig > 6)
	{
	Obj.style.filter = 'hue-rotate(90deg)';
	if(ToPosX + p_x - GroundDistance > HitboX2)
	temp2 += (ToPosX + p_x - GroundDistance) - HitboX2;
	temp2 += 50;
	}
	
	if(Def > 17)
	Obj.style.filter = 'hue-rotate(45deg)';
	
	let InterBomb = setInterval(ProjInter,50);
	
	function ProjInter()
	{
		p_xt = p_x - GroundDistance;
		toPosXt = ToPosX + temp - GroundDistance - temp2;
		
		if(Def > 17)
		toPosXt = temp + 200 - GroundDistance;	
		
		let Damaged = false;
		
		if(p_xt + 15 <= HitboX2 && p_xt + 75 >= HitboX1)
		{
		if(p_y + 15 <= HitboY2 && p_y + 75 >= HitboY1)
		{
			if(HeroImmortal == false)
			Damaged = true;
		}}
		
		if(Damaged == true)
		{
		CurHP = CurHP - 0.5;
		BarChange();
		HeroDamageShow(0.5,'enemy','');
		}

		if(p_xt < toPosXt)
		{
			p_x += PSPEED;
			if(p_y < 400)
			p_y += PSPEED;
		}
		
		if(p_xt >= toPosXt)
		{
			if(p_y > 50)
			p_y -= PSPEED;
		}
		
		if(p_y <= 50)
		{
			let delT = setTimeout(DelBomb,3500)
		}
			
		
		Obj.style.bottom = p_y + 'px';
		Obj.style.left = p_xt + 'px';
	}
	
function DelBomb(){
	clearInterval(InterBomb);
	Obj.remove();
}
	
}

//  полёт в левую сторону
function ProjectMoveL(Obj,ToPosX,PSPEED)
{
	var p_y = parseInt(Obj.style.bottom);
	var p_x = parseInt(Obj.style.left) + GroundDistance;
	var toPosXt;
	var temp = p_x;
	var Annig = rand(1,10);
	var Def = rand(1,20);
	var temp2 = 0;

	if(Annig > 6)
	{
	Obj.style.filter = 'hue-rotate(90deg)';
	if(p_x - ToPosX - GroundDistance < HitboX1)
	temp2 += HitboX1 - (p_x - ToPosX - GroundDistance);
	}
	
	if(Def > 17)
	Obj.style.filter = 'hue-rotate(45deg)';

	let InterBomb = setInterval(ProjInter,50);
	
	function ProjInter()
	{
		p_xt = p_x - GroundDistance;
		toPosXt = temp - ToPosX - GroundDistance + temp2;
		
		if(Def > 17)
		toPosXt = temp - 200 - GroundDistance;	
		
		let Damaged = false;
		
		if(p_xt + 15 <= HitboX2 && p_xt + 75 >= HitboX1)
		{
		if(p_y + 15 <= HitboY2 && p_y + 75 >= HitboY1)
		{
			if(HeroImmortal == false)
			Damaged = true;
		}}
		
		if(Damaged == true)
		{
		CurHP = CurHP - 0.5;
		BarChange();
		HeroDamageShow(0.5,'enemy','');
		}

		if(p_xt > toPosXt)
		{
			p_x -= PSPEED;
			if(p_y < 400)
			p_y += PSPEED;
		}
		
		if(p_xt <= toPosXt)
		{
			if(p_y > 50)
			p_y -= PSPEED;
		}
		
		if(p_y <= 50)
		{
			let delT = setTimeout(DelBomb,3500)
		}
			
		
		Obj.style.bottom = p_y + 'px';
		Obj.style.left = p_xt + 'px';
	}
	
function DelBomb(){
	clearInterval(InterBomb);
	Obj.remove();
}
	
}

//  показывает дальность атаки голема
function GolemAttackRange(mobas)
{
	
	var data = document.createElement("div");  
	data.className = 'rangeGolem';	
	data.style.filter = 'opacity(0.5)';
	data.style.bottom =  50 + 'px'; 
	
	if(mobas.mob.Side == 1) // лево
	data.style.left =  mobas.mob.X1 - 230 + 'px'; 
	if(mobas.mob.Side == 0) // право
	data.style.left =  mobas.mob.X2 + 20 + 'px'; 
	
	canvasElement.appendChild(data);
	MassObj.push(data); 	
	
	let DelInt = setTimeout(DelGolemRange,1600);
}

//  удаление ренджа атаки
function DelGolemRange()
{
	
	for (var i = 0; i < MassObj.length; i++) {
	if (MassObj[i] != null && MassObj[i].className == "rangeGolem")
	{
		document.getElementsByClassName('rangeGolem')[0].remove();
		delete MassObj[i];
	}}
	
}

function BossInt()
{
	
		for (var i = 0; i < MobArray.length; i++) {
		if (MobArray[i] != null && (MobArray[i].data.mob.Type == "sphere" || MobArray[i].data.mob.Type == "malakai"))
		{
			let mobas = MobArray[i].data;
			let mobX1 = mobas.mob.PosX;
			
			if (mobas.mob.CD > 0)
			mobas.mob.CD = mobas.mob.CD - 1;
			
			//нанесение урона про гг
			if(MobArray[i].data.mob.Type == "sphere")
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
				mobas.mob.CD = 50;
				mobas.mob.Status = 'ThrowEnd';
			}
			if (mobas.mob.Status == 'ThrowEnd' && mobas.mob.CD < 1)
			{
				MalakaiProj(mobas);
				mobas.mob.CD = 0;
				mobas.mob.Status = 'None';
			}
			
			//моб спавнит
			if (mobas.mob.Status == 'Spawner' && mobas.mob.CD < 1)
			{
				if (mobas.mob.Side == 0)
				mobas.mob.Anim = 'spawn';
				if (mobas.mob.Side == 1)
				mobas.mob.Anim = 'spawninv';
				
				mobas.src = "";
				mobas.mob.CD = 90;
				mobas.mob.Status = 'SpawnerEnd';
			}
			if (mobas.mob.Status == 'SpawnerEnd' && mobas.mob.CD < 1)
			{
				MalakaiBlink(mobas);
				mobas.mob.CD = 0;
				mobas.mob.Status = 'None';
			}
			
			if(MobArray[i].data.mob.Type == "malakai")
			{
			for (var k = 0; k < 5; k++)
			if (mobas.mob.Status == 'AttackEnd' && (mobas.mob.MinDmgTimer[k] < mobas.mob.CD && mobas.mob.CD < mobas.mob.MaxDmgTimer[k]))
			{
				HeroDamaged(mobas.mob);
			}
			
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
					
				//mobas.src = "";
				mobas.mob.CD = mobas.mob.AtkCdAfter;
				mobas.mob.Status = 'AttackEnd';
					
			}
				
			//моб заканчивает атаковать
			if (mobas.mob.Status == 'AttackEnd' && mobas.mob.CD < 1)
			{
				mobas.mob.CD = 0;
				mobas.mob.Status = 'None';
					
				if(mobas.mob.Type == "sphere" && HeroImmortal == false)
				{
					
						mobas.mob.HP = 0;
						EnemyKill(i);	
							
						if(ShielDur - mobas.mob.AtkDamage < 1)
						{
						ShielDur = ShielDur - mobas.mob.AtkDamage;
						CurHP = CurHP + ShielDur;
						ShielDur = 0;
						}
						else
						ShielDur = ShielDur - mobas.mob.AtkDamage;
			
						HeroDamageShow(mobas.mob.AtkDamage,'enemy','');
					
				}
			}
			
			//моб умирает
			if (mobas.mob.Status == 'Death' && mobas.mob.CD < 1)
			{
				EnemyKill(i);
			}
			
				let PlatfLeft = parseInt(PlatSpawned[mobas.mob.PlatIndex + 1].style.left);
				let M_Middle;
						
				if (mobas.mob.OnPlatform == true)
				{
				M_Middle = (mobas.mob.X2 - mobas.mob.X1) + mobas.mob.X1;
				//падение моба с платформы
				if(M_Middle - 50 > PlatfLeft + PlatformWidth && M_Middle > 1)
				BossRes(mobas);
				
				M_Middle = (mobas.mob.X1 - mobas.mob.X2) + mobas.mob.X2;
				//падение моба с платформы
				if(M_Middle + 50 < PlatfLeft && M_Middle > 1)
				BossRes(mobas);
				}
			
			
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
						
					if(mobas.mob.Type == "sphere")
					{
						
						if(mobas.mob.PosY > PosY)
						{
						mobas.mob.PosY = mobas.mob.PosY - 2;
						}
						else
						{
						if(mobas.mob.PosY < PosY)
						mobas.mob.PosY = mobas.mob.PosY + 2;
						}
					}
						
					//моб бежит
					if (HitboX1 + MobAtkRange < mobas.mob.X1 && HitboX1 + 1600 > mobas.mob.X1)
					{
						mobas.mob.Anim = 'runinv';
						
						mobas.mob.PosX = mobas.mob.PosX - mobas.mob.Speed;
							
						mobas.mob.Side = 1;
					}
						
					if (HitboX1 > mobas.mob.X1 + MobAtkRange && HitboX1 < mobas.mob.X1 + 1600)
					{
						mobas.mob.Anim = 'run';
						
						mobas.mob.PosX = mobas.mob.PosX + mobas.mob.Speed;
							
						mobas.mob.Side = 0;
					}
				}
				
					
					//моб на платформе
				if (mobas.mob.OnPlatform == true)
				{
					PlatfLeft = parseInt(PlatSpawned[mobas.mob.PlatIndex + 1].style.left);
					M_Middle;
						
					M_Middle = (mobas.mob.X2 - mobas.mob.X1) + mobas.mob.X1;
						
					if(mobas.mob.PlatRCheck == 0 && mobas.mob.DIFF != 2)
					{
						mobas.mob.Anim = 'run';
						mobas.mob.PosX = mobas.mob.PosX + mobas.mob.Speed;
						mobas.mob.Side = 0;
							
						if (M_Middle - 30 > PlatfLeft + PlatformWidth)
						{
							mobas.mob.PlatRCheck = 1;
						}
							
					}
						
					M_Middle = (mobas.mob.X1 - mobas.mob.X2) + mobas.mob.X2;
						
					if(mobas.mob.PlatRCheck == 1 && mobas.mob.DIFF != 2)
					{
							
						mobas.mob.Anim = 'runinv';
						mobas.mob.PosX = mobas.mob.PosX - mobas.mob.Speed;
						mobas.mob.Side = 1;
							
						if (M_Middle + 30 < PlatfLeft)
						{
							mobas.mob.PlatRCheck = 0;
						}
						
					}
						

						
				}
				
				
				//моб хочет атаковать
				if ( (HitboX1 <= mobas.mob.X2 && HitboX1 + MobAtkRange >= mobas.mob.X1) && ( (mobas.mob.Y1 <= HitboY1 && mobas.mob.Y2 >= HitboY1) || (mobas.mob.Y2 >= HitboY2 && mobas.mob.Y1 <= HitboY2) || (mobas.mob.Type == "sphere")))
				{

					if(mobas.mob.Type != "sphere")
					{
					mobas.mob.CD = mobas.mob.AtkCdBefore;
					mobas.mob.Status = 'Attack';
						
					mobas.mob.Side = 1;
					mobas.mob.Anim = 'idleinv';
					}
					else
					if(HitboY1 <= mobas.mob.Y1 && mobas.mob.Y2 < HitboY2)
					{
					mobas.mob.CD = mobas.mob.AtkCdBefore;
					mobas.mob.Status = 'Attack';
						
					mobas.mob.Side = 1;
					mobas.mob.Anim = 'idleinv';
					}
						
				}
				else{
					
					if (HitboX1 < mobas.mob.X1 && HitboX1 + 2000 > mobas.mob.X1 && mobas.mob.Type == "malakai")
					{
						if(mobas.mob.MalakaiSpawn == 0)
						{
							mobas.mob.MalakaiSpawn = 15;
							
							mobas.mob.Side = 1;
							mobas.mob.CD = 10;
							mobas.mob.Status = 'Spawner';
						}
						else
						{
						if(mobas.mob.MalakaiProj == 0)
						{
							mobas.mob.MalakaiProj = 10;
							
							mobas.mob.Side = 1;
							mobas.mob.CD = 10;
							mobas.mob.Status = 'Throw';
						}}
						
					}
						
				}
					
				// моб хочет атаковать в другую сторону
				if ( (HitboX2 >= mobas.mob.X1 && HitboX2 <= mobas.mob.X2 + MobAtkRange) && ((mobas.mob.Y1 <= HitboY1 && mobas.mob.Y2 >= HitboY1) || (mobas.mob.Y2 >= HitboY2 && mobas.mob.Y1 <= HitboY2) || (mobas.mob.Type == "sphere")))
				{

					if(mobas.mob.Type != "sphere")
					{
					mobas.mob.CD = mobas.mob.AtkCdBefore;
					mobas.mob.Status = 'Attack';
					
					mobas.mob.Side = 0;
					mobas.mob.Anim = 'idle';
					}
					else
					if(HitboY1 <= mobas.mob.Y1 && mobas.mob.Y2 < HitboY2)
					{
					mobas.mob.CD = mobas.mob.AtkCdBefore;
					mobas.mob.Status = 'Attack';
					
					mobas.mob.Side = 0;
					mobas.mob.Anim = 'idle';
					}
						
				}
				else{
					
					if (HitboX1 > mobas.mob.X1 && HitboX1 < mobas.mob.X1 + 2000 && mobas.mob.Type == "malakai")
					{
						if(mobas.mob.MalakaiSpawn == 0)
						{
							mobas.mob.MalakaiSpawn = 15;
							
							mobas.mob.Side = 0;
							mobas.mob.CD = 10;
							mobas.mob.Status = 'Spawner';
						}
						else
						{
						if(mobas.mob.MalakaiProj == 0)
						{
							mobas.mob.MalakaiProj = 10;
							
							mobas.mob.Side = 0;
							mobas.mob.CD = 10;
							mobas.mob.Status = 'Throw';
						}}
						
					}
						
				}
				
				
			
			}
			
					
				// проверка на смерть
				if(mobas.mob.Status != 'Death')		
				{
					if (mobas.mob.HP < 1)
					{
						mobas.mob.CD = mobas.mob.DeathCD;
						mobas.mob.Status = 'Death';
							
						if (HitboX1 > mobX1)
							mobas.mob.Anim = 'appear';
							
						if (HitboX1 <= mobX1)
							mobas.mob.Anim = 'appearinv';
							
						if(mobas.mob.Type == "malakai" && mobas.mob.DIFF == 2)
							MiniMalakaiDel();
						
					}
					
					if(mobas.mob.HP < MalakaiChp && mobas.mob.Type == "malakai" && mobas.mob.DIFF == 2)
					{
						if(mobas.mob.HP > 0)
						{
							mobas.mob.HP = MalakaiChp;
							MalakaiChp = MalakaiChp - 50;
							BossRes2(mobas);
						}
					
					}
				}
				
				// если моб всётаки бегает по воздуху, что врятли
				if(mobas.mob.PosY > GroundPos && mobas.mob.OnPlatform == false && mobas.mob.Type != "sphere")
				{
					mobas.mob.PosY = mobas.mob.PosY - 20;
					
					if(mobas.mob.PosY < GroundPos)
						mobas.mob.PosY = GroundPos;
					
					mobas.style.bottom = mobas.mob.PosY + 'px';
				}
				
				
				
				if (mobas.mob.Type == "malakai")
				MalakaiGIF(mobas); 
			
				if (mobas.mob.Type == "sphere")
				SphereGIF(mobas); 
				
				MobHitBox(mobas);
			
				mobas.style.left = mobas.mob.PosX + 'px';
				mobas.style.bottom = mobas.mob.PosY + 'px';
			
		}}
	
	
}


function BossRes(mobas)
{

let plt = rand(0,PlatPosY.length - 1);
mobas.mob.PlatIndex = plt;

mobas.mob.PosX = parseInt(PlatSpawned[mobas.mob.PlatIndex + 1].style.left);
mobas.mob.PosY = parseInt(PlatSpawned[mobas.mob.PlatIndex + 1].style.bottom) + PlatformHeight;

MalakaiGIF(mobas); 
MobHitBox(mobas);

mobas.style.left = mobas.mob.PosX + 'px';
mobas.style.bottom = mobas.mob.PosY + 'px';

}

function BossRes2(mobas)
{

let plt = rand(0,PlatPosY.length - 1);
mobas.mob.PlatIndex = plt;
mobas.mob.PosX = parseInt(PlatSpawned[mobas.mob.PlatIndex + 1].style.left);
mobas.mob.PosY = parseInt(PlatSpawned[mobas.mob.PlatIndex + 1].style.bottom) + PlatformHeight;

MalakaiGIF(mobas); 
MobHitBox(mobas);

mobas.style.left = mobas.mob.PosX + 'px';
mobas.style.bottom = mobas.mob.PosY + 'px';

MalakaiIllusionDel();


}

function MalakaiProj(mobas)
{
	let MalX;
	let MalY;
	
	if(mobas.mob.Side == 0)
	MalX = mobas.mob.X1;	
	if(mobas.mob.Side == 1)
	MalX = mobas.mob.X2;

	MalY = mobas.mob.Y1;
	
	SphereSpawn(MalX,MalY,false,0,0,1);
}

function MalakaiBlink(mobas)
{
	let RandChance = rand(0,100);

	if(RandChance >= 70)
	{
		if(onGROUND == true)
		{
			mobas.mob.PosX = PosX + 200;
			
			if(RandChance >= 85)
			mobas.mob.PosX = PosX - 260;
		
			mobas.mob.PosY = PosY;
			mobas.mob.OnPlatform = false;
		}
		if(onPLATFORM == true)
		{
			mobas.mob.PosX = parseInt(PlatSpawned[WarriorPlatID + 1].style.left);
			
			if(RandChance >= 85)
			mobas.mob.PosX = parseInt(PlatSpawned[WarriorPlatID + 1].style.left) + 100;
		
			
			mobas.mob.PosY = PosY;
			mobas.mob.PlatIndex = WarriorPlatID;
			mobas.mob.OnPlatform = true;
		}
		
	}
	
}

function MalakaiIllusionDel()
{
	
MiniMalakaiDel();
	
let plt;
let SpHp = 20;

if(HardCore == true)
SpHp = 30;

plt = rand(0,PlatPosY.length - 1);
MalakaiSpawn(600,100,true,1,1,SpHp);

plt = rand(0,PlatPosY.length - 1);
MalakaiSpawn(1000,100,true,2,1,SpHp);

MalakaiSpawn(600,100,false,1,1,SpHp);
	
}

function MiniMalakaiDel()
{
	
	for (var i = 0; i < MobArray.length; i++) {
		if(MobArray[i] != null && MobArray[i].data.mob.Type == "malakai" && MobArray[i].data.mob.DIFF == 1)
		{
			MobArray[i].data.mob.HP = 0;
		}
	}
	
}

function FinalInt()
{

	for (var i = 0; i < MobArray.length; i++) {
	if (MobArray[i] != null && MobArray[i].data.mob.Type == "malakai")
	{
		let mobas = MobArray[i].data;
		if(mobas.mob.MalakaiSpawn > 0)
		mobas.mob.MalakaiSpawn = mobas.mob.MalakaiSpawn - 1;
	
		if(mobas.mob.MalakaiProj > 0)
		mobas.mob.MalakaiProj = mobas.mob.MalakaiProj - 1;
		
	}}

}


