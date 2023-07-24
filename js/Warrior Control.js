//  управление персонажем
function WarriorControls()
{
	
// нажатие клавиш
document.onkeydown = function(e) {
	
	if (e.keyCode == ButtonESC)
	{
		EscFunc();
	}

	if (e.keyCode == ButtonMusic)
	{
		
		if (MusicPlay == false)
		{
			audioBG.volume  = 0.1;
			audioBG.play();
			MusicPlay = true;
		}
		else
		{
			audioBG.pause();
			audioBG.currentTime = 0;
			MusicPlay = false;
		}
		
	}
	
	if (e.keyCode == ButtonAttack && Gravity == false && JumpCheck == 0)
	{
		if(CurEND > 6)
		{
		Animation("AttackAir");
		MobDamaged("Attack1");
		CurEND = CurEND - 5;
		}
	}
	
	if (e.keyCode == ButtonRight)
	{
		isRUN = true;
		WarriorSide = 0;
		RightButtonPress = 1;
	}
	if (e.keyCode == ButtonLeft)
	{
		isRUN = true;
		WarriorSide = 1;
		LeftButtonPress = 1;
	}

	if(e.repeat != true && AnimationAccess == 1)
	{
		if (e.keyCode == ButtonRight)
		{
			WarriorSide = 0;
			WarriorGIF("run");
			if (RightExeption == false)
			rigInt = setInterval(MovRigt, 25);
		}
		
		if (e.keyCode == ButtonLeft)
		{
			WarriorSide = 1;
			WarriorGIF("runinv");
			if (LeftExeption == false)
			leftInt = setInterval(MovLeft, 25);
		}
		
		if (e.keyCode == ButtonUp)
		{		
			if(CurEND > 5)
			{
			Animation("Jump");
			CurEND = CurEND - 5;
			}
		}		
		
		if (e.keyCode == ButtonDown)
		{
			if(CurEND > 7)
			{
			Animation("Roll");
			HeroImmortal = true;
			CurEND = CurEND - 7;
			}
		}
		
		if (e.keyCode == ButtonAttack)
		{
			if(CurEND > 5)
			{
			Animation("Attack1");
			MobDamaged("Attack1");
			CurEND = CurEND - 5;
			}
		}
		
		if (e.keyCode == ButtonSkil1)
		{
			if(Skill1_id != "" && Skill1_cd == 0)
			{
				let Cheker = 0;

				if(Skill1_id == 1 && CurMP > 8)
				{
				CurMP = CurMP - 8;
				Cheker = 1;
				Skill1_cd = 5;
				}
			
				if(Skill1_id == 2 && CurMP > 7 && CurEND > 6 && BonusSkil12 == 0)
				{
				CurMP = CurMP - 7;
				CurEND = CurEND - 6;
				Cheker = 1;
				Skill1_cd = 8;
				}
				if(Skill1_id == 2 && CurMP > 9 && CurEND > 8 && BonusSkil12 == 1)
				{
				CurMP = CurMP - 9;
				CurEND = CurEND - 8;
				Cheker = 1;
				Skill1_cd = 0;
				}
			
				if(Skill1_id == 3 && CurMP > 4 && CurEND > 7)
				{
				CurMP = CurMP - 4;
				CurEND = CurEND - 7;
				Cheker = 1;
				Skill1_cd = 10;
				}
				
				if(Cheker == 1)
				SkillAnimation(Skill1_id);
			}
			
		}
		
		if (e.keyCode == ButtonSkil2)
		{
		if(Skill2_id != "" && Skill2_cd == 0)
		{
			
			let Cheker = 0;
			
			if(Skill2_id == 4 && CurMP > 16)
			{
			CurMP = CurMP - 16;
			Cheker = 1;
			Skill2_cd = 35;
			}
			
			if(Skill2_id == 5 && CurMP > 6 && CurEND > 12)
			{
			CurMP = CurMP - 6;
			CurEND = CurEND - 12;
			Cheker = 1;
			Skill2_cd = 30;
			}
			
			if(Skill2_id == 6)
			{
			Cheker = 1;
			Skill2_cd = 45;
			}
				
			if(Cheker == 1)
			SkillAnimation(Skill2_id);
			
		}}
		
		if (e.keyCode == ButtonSkil3)
		{
		if(Skill3_id != "" && Skill3_cd == 0)
		{
			
			let Cheker = 0;
			
			if(Skill3_id == 7 && CurMP > 24 && BonusSkil8 == 0)
			{
			CurMP = CurMP - 24;
			Cheker = 1;
			Skill3_cd = 60;
			}
			if(Skill3_id == 7 && CurMP > 15 && BonusSkil8 == 1)
			{
			CurMP = CurMP - 15;
			Cheker = 1;
			Skill3_cd = 40;
			}
			
			if(Skill3_id == 8 && CurMP > 14 && CurEND > 14)
			{
			CurMP = CurMP - 14;
			CurEND = CurEND - 14;
			Cheker = 1;
			Skill3_cd = 35;
			}
			
			if(Skill3_id == 9 && CurMP > 14 && CurEND > 9)
			{
			Cheker = 1;
			Skill3_cd = 45;
			CurEND = CurEND - 9;
			CurMP = CurMP - 14;
			bleh.volume  = 0.1;
			bleh.play();
			}
				
			if(Cheker == 1)
			SkillAnimation(Skill3_id);
			
		}}
		
		if (e.keyCode == ButtonSkil4)
		{
		if(Skill4_id != "" && Skill4_cd == 0)
		{
			
			let Cheker = 0;
			
			if(Skill4_id == 10 && CurMP > 29 && CurEND > 19)
			{
			CurMP = CurMP - 29;
			CurEND = CurEND - 19;
			Cheker = 1;
			Skill4_cd = 140;
			}
			
			if(Skill4_id == 11 && CurMP > 19 && CurEND > 19)
			{
			CurMP = CurMP - 19;
			CurEND = CurEND - 19;
			Cheker = 1;
			Skill4_cd = 180;
			}
			
			if(Skill4_id == 12 && CurMP > 14 && CurEND > 29)
			{
			Cheker = 1;
			CurEND = CurEND - 29;
			CurMP = CurMP - 14;
			Skill4_cd = 180;
			}
				
			if(Cheker == 1)
			SkillAnimation(Skill4_id);
			
		}}
		
	}
}

// отжатие клавиш
document.onkeyup = function(f) {
	
	if (f.keyCode == ButtonLeft)
	{

		isRUN = false;
		clearInterval(leftInt);
		LeftButtonPress = 0;
		//EndAnim();
	}
	
	if (f.keyCode == ButtonRight)
	{

		isRUN = false;
		clearInterval(rigInt);
		RightButtonPress = 0;

		//EndAnim();
	}
	
	if (AnimationAccess == 1)
	{
				
	if (f.keyCode == ButtonLeft)
	{	
		EndAnim();
		LeftExeption = false;
	}
	if (f.keyCode == ButtonRight)
	{
		EndAnim();
		RightExeption = false;
	}
	
}}
		
//функции движения
function MovRigt(){
BgMove(speed);
WarriorGIF("run");

if (RightExeption == false)
RightExeption = true;
}
		
function MovLeft(){
BgMove(-speed);
WarriorGIF("runinv");

if (LeftExeption == false)
LeftExeption = true;
}
	
}