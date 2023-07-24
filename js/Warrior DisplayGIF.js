//  отображение анимаций гг
function WarriorGIF(NameGIF)
{
		
knightElement.className = NameGIF;
knightElement.style.left = PosX + 'px';
knightElement.style.bottom = PosY + 'px';
	
HitboY1 = PosY;
		
switch (NameGIF) {
		
	case 'idle':
		HitboX1 = 35 + PosX;
		HitboX2 = 115 + PosX;
		HitboY2 = 150 + PosY;
		knightElement.src = "images/warrior/Idle.gif";
	break;
		
	case 'idleinv':
		HitboX1 = 40 + PosX;
		HitboX2 = 115 + PosX;
		HitboY2 = 150 + PosY;
		knightElement.src = "images/warrior/Idle.gif";
	break;

	case 'run':
		HitboX1 = 50 + PosX;
		HitboX2 = 130 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(-7) != "Run.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Run.gif";
	break;
		
	case 'runinv':
		HitboX1 = 35 + PosX;
		HitboX2 = 115 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(-7) != "Run.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Run.gif";
	break;
		
	case 'attack':
		HitboX1 = 35 + PosX;
		HitboX2 = 125 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(-11) != "Attack1.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Attack1.gif";
	break;
		
	case 'attackinv':
		HitboX1 = 45 + PosX;
		HitboX2 = 125 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(-11) != "Attack1.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Attack1.gif";
	break;
	
	case 'attack2':
		HitboX1 = 35 + PosX;
		HitboX2 = 125 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(-11) != "Attack2.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Attack2.gif";
	break;
		
	case 'attack2inv':
		HitboX1 = 45 + PosX;
		HitboX2 = 125 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(-11) != "Attack2.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Attack2.gif";
	break;
		
	case 'sprint':
		HitboX1 = 35 + PosX;
		HitboX2 = 135 + PosX;
		HitboY2 = 150 + PosY;
	break;
		
	case 'sprintinv':
		HitboX1 = 75 + PosX;
		HitboX2 = 175 + PosX;
		HitboY2 = 150 + PosY;
	break;
		
	case 'jump':
		HitboX1 = 30 + PosX;
		HitboX2 = 120 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(-8) != "Jump.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Jump.gif";
	break;
		
	case 'jumpinv':
		HitboX1 = 40 + PosX;
		HitboX2 = 125 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(-8) != "Jump.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Jump.gif";
	break;
		
	case 'roll':
		if (knightElement.src.substr(-11) != "Rolling.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Rolling.gif";
	break;
		
	case 'rollinv':
		if (knightElement.src.substr(-11) != "Rolling.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Rolling.gif";
	break;
	
	case 'scast':
		HitboX1 = 35 + PosX;
		HitboX2 = 125 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(0,24) != "images/warrior/Scast.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Scast.gif?rand=" + rand(1,9999);
	break;
		
	case 'scastinv':
		HitboX1 = 45 + PosX;
		HitboX2 = 125 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(0,24) != "images/warrior/Scast.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Scast.gif?rand=" + rand(1,9999);
	break;
	
	case 'lcast':
		HitboX1 = 35 + PosX;
		HitboX2 = 125 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(0,24) != "images/warrior/Lcast.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Lcast.gif?rand=" + rand(1,9999);
	break;
		
	case 'lcastinv':
		HitboX1 = 45 + PosX;
		HitboX2 = 125 + PosX;
		HitboY2 = 150 + PosY;
		if (knightElement.src.substr(0,24) != "images/warrior/Lcast.gif" && KeyAccess == 1)
		knightElement.src = "images/warrior/Lcast.gif?rand=" + rand(1,9999);
	break;
		
	}
	
}

//  обнуление анимации гг
function ClearAnimation()
{
	document.getElementById('knight').src = "";
}

//  отображение анимаций вампира
function VampireGIF(MobObj)
{
	
	switch (MobObj.mob.Anim) {
		
		case 'idle':
			if(MobObj.className != 'enemy vampire idle')
			{
				MobObj.className = 'enemy vampire idle';
				MobObj.src = "images/Mobs/Vampire/idle.png";
			}
		break;
		
		case 'idleinv':
			if(MobObj.className != 'enemy vampire idleinv')
			{
				MobObj.className = 'enemy vampire idleinv';
				MobObj.src = "images/Mobs/Vampire/idle.png";
			}
		break;
		
		case 'run':
			if(MobObj.className != 'enemy vampire run')
			{
				MobObj.className = 'enemy vampire run';
				MobObj.src = "images/Mobs/Vampire/run.gif";
			}
		break;
		
		case 'runinv':
			if(MobObj.className != 'enemy vampire runinv')
			{
				MobObj.className = 'enemy vampire runinv';
				MobObj.src = "images/Mobs/Vampire/run.gif";
			}
		break;
		
		case 'appear':
			if(MobObj.className != 'enemy vampire appear')
			{
				MobObj.className = 'enemy vampire appear';
				MobObj.src = "images/Mobs/Vampire/appear.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'appearinv':
			if(MobObj.className != 'enemy vampire appearinv')
			{
				MobObj.className = 'enemy vampire appearinv';
				MobObj.src = "images/Mobs/Vampire/appear.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'attack':
			if(MobObj.className != 'enemy vampire attack')
			{
				MobObj.className = 'enemy vampire attack';
				MobObj.src = "images/Mobs/Vampire/attack.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'attackinv':
			if(MobObj.className != 'enemy vampire attackinv')
			{
				MobObj.className = 'enemy vampire attackinv';
				MobObj.src = "images/Mobs/Vampire/attack.gif?rand=" + rand(1,9999);
			}
		break;
		
	}
	
}

//  отображение анимаций скелета
function SkeletonGIF(MobObj)
{
	
	switch (MobObj.mob.Anim) {
		
		case 'idle':
			if(MobObj.className != 'enemy skeleton idle')
			{
				MobObj.className = 'enemy skeleton idle';
				MobObj.src = "images/Mobs/Skeleton/idle.gif";
			}
		break;
		
		case 'idleinv':
			if(MobObj.className != 'enemy skeleton idleinv')
			{
				MobObj.className = 'enemy skeleton idleinv';
				MobObj.src = "images/Mobs/Skeleton/idle.gif";
			}
		break;
		
		case 'run':
			if(MobObj.className != 'enemy skeleton run')
			{
				MobObj.className = 'enemy skeleton run';
				MobObj.src = "images/Mobs/Skeleton/run.gif";
			}
		break;
		
		case 'runinv':
			if(MobObj.className != 'enemy skeleton runinv')
			{
				MobObj.className = 'enemy skeleton runinv';
				MobObj.src = "images/Mobs/Skeleton/run.gif";
			}
		break;
		
		case 'appear':
			if(MobObj.className != 'enemy skeleton appear')
			{
				MobObj.className = 'enemy skeleton appear';
				MobObj.src = "images/Mobs/Skeleton/die.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'appearinv':
			if(MobObj.className != 'enemy skeleton appearinv')
			{
				MobObj.className = 'enemy skeleton appearinv';
				MobObj.src = "images/Mobs/Skeleton/die.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'attack':
			if(MobObj.className != 'enemy skeleton attack')
			{
				MobObj.className = 'enemy skeleton attack';
				MobObj.src = "images/Mobs/Skeleton/attack.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'attackinv':
			if(MobObj.className != 'enemy skeleton attackinv')
			{
				MobObj.className = 'enemy skeleton attackinv';
				MobObj.src = "images/Mobs/Skeleton/attack.gif?rand=" + rand(1,9999);
			}
		break;
		
	}
	
}

//  отображение анимаций голема
function GolemGIF(MobObj)
{
	
	switch (MobObj.mob.Anim) {
		
		case 'idle':
			if(MobObj.className != 'enemy golem idle')
			{
				MobObj.className = 'enemy golem idle';
				MobObj.src = "images/Mobs/Golem/run.gif";
			}
		break;
		
		case 'idleinv':
			if(MobObj.className != 'enemy golem idleinv')
			{
				MobObj.className = 'enemy golem idleinv';
				MobObj.src = "images/Mobs/Golem/run.gif";
			}
		break;
		
		case 'run':
			if(MobObj.className != 'enemy golem run')
			{
				MobObj.className = 'enemy golem run';
				MobObj.src = "images/Mobs/Golem/run.gif";
			}
		break;
		
		case 'runinv':
			if(MobObj.className != 'enemy golem runinv')
			{
				MobObj.className = 'enemy golem runinv';
				MobObj.src = "images/Mobs/Golem/run.gif";
			}
		break;
		
		case 'appear':
			if(MobObj.className != 'enemy golem appear')
			{
				MobObj.className = 'enemy golem appear';
				MobObj.src = "images/Mobs/Golem/die.gif";
			}
		break;
		
		case 'appearinv':
			if(MobObj.className != 'enemy golem appearinv')
			{
				MobObj.className = 'enemy golem appearinv';
				MobObj.src = "images/Mobs/Golem/die.gif";
			}
		break;
		
		case 'attack':
			if(MobObj.className != 'enemy golem attack')
			{
				MobObj.className = 'enemy golem attack';
				MobObj.src = "images/Mobs/Golem/attack.gif";
			}
		break;
		
		case 'attackinv':
			if(MobObj.className != 'enemy golem attackinv')
			{
				MobObj.className = 'enemy golem attackinv';
				MobObj.src = "images/Mobs/Golem/attack.gif";
			}
		break;
		
		case 'throw':
			if(MobObj.className != 'enemy golem throw')
			{
				MobObj.className = 'enemy golem throw';
				MobObj.src = "images/Mobs/Golem/throw.gif";
			}
		break;
		
		case 'throwinv':
			if(MobObj.className != 'enemy golem throwinv')
			{
				MobObj.className = 'enemy golem throwinv';
				MobObj.src = "images/Mobs/Golem/throw.gif";
			}
		break;
		
	}
	
}

//  отображение анимаций малакая
function MalakaiGIF(MobObj)
{
	
	switch (MobObj.mob.Anim) {
		
		case 'idle':
			if(MobObj.className != 'enemy malakai idle')
			{
				MobObj.className = 'enemy malakai idle';
				MobObj.src = "images/Mobs/Malakai/idle.gif";
			}
		break;
		
		case 'idleinv':
			if(MobObj.className != 'enemy malakai idleinv')
			{
				MobObj.className = 'enemy malakai idleinv';
				MobObj.src = "images/Mobs/Malakai/idle.gif";
			}
		break;
		
		case 'run':
			if(MobObj.className != 'enemy malakai run')
			{
				MobObj.className = 'enemy malakai run';
				MobObj.src = "images/Mobs/Malakai/walk.gif";
			}
		break;
		
		case 'runinv':
			if(MobObj.className != 'enemy malakai runinv')
			{
				MobObj.className = 'enemy malakai runinv';
				MobObj.src = "images/Mobs/Malakai/walk.gif";
			}
		break;
		
		case 'appear':
			if(MobObj.className != 'enemy malakai appear')
			{
				MobObj.className = 'enemy malakai appear';
				MobObj.src = "images/Mobs/Malakai/death.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'appearinv':
			if(MobObj.className != 'enemy malakai appearinv')
			{
				MobObj.className = 'enemy malakai appearinv';
				MobObj.src = "images/Mobs/Malakai/death.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'attack':
			if(MobObj.className != 'enemy malakai attack')
			{
				MobObj.className = 'enemy malakai attack';
				MobObj.src = "images/Mobs/Malakai/attack.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'attackinv':
			if(MobObj.className != 'enemy malakai attackinv')
			{
				MobObj.className = 'enemy malakai attackinv';
				MobObj.src = "images/Mobs/Malakai/attack.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'throw':
			if(MobObj.className != 'enemy malakai throw')
			{
				MobObj.className = 'enemy malakai throw';
				MobObj.src = "images/Mobs/Malakai/fast-cast.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'throwinv':
			if(MobObj.className != 'enemy malakai throwinv')
			{
				MobObj.className = 'enemy malakai throwinv';
				MobObj.src = "images/Mobs/Malakai/fast-cast.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'spawn':
			if(MobObj.className != 'enemy malakai spawn')
			{
				MobObj.className = 'enemy malakai spawn';
				MobObj.src = "images/Mobs/Malakai/long-cast.gif?rand=" + rand(1,9999);
			}
		break;
		
		case 'spawninv':
			if(MobObj.className != 'enemy malakai spawninv')
			{
				MobObj.className = 'enemy malakai spawninv';
				MobObj.src = "images/Mobs/Malakai/long-cast.gif?rand=" + rand(1,9999);
			}
		break;
		

		
	}
	
}

//  отображение анимаций сферы
function SphereGIF(MobObj)
{
	
	if(MobObj.className != 'enemy sphere ' + MobObj)
	{
		MobObj.className = 'enemy sphere ' + MobObj;
		MobObj.src = "images/Mobs/Sphere/sp.gif";
	}
		
}