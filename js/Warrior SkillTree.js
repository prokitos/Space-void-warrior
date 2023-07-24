//  нажатие на клавишу ESC
function EscFunc()
{
	
	//корды всех иконок
	let IcoPosX = [560,150,984,49 ,49 ,250,49 ,250,49  ,250 ,560,721,560,560,399,560 ,440,1084,1084,883,1084,883,1084,883 ];
	let IcoPosY = [230,230,230,472,652,566,832,742,1012,1111,472,566,652,832,924,1012,1171,472,652 ,566,832 ,742,1012,1111];
	
	//связи прокачки скилов
	let skillReq = [1,1,1,1 ,1 ,4,5,5,7,7,9 ,11,11,13,14,14,16,18,19,19,21,21,23]
	let skillGet = [2,3,4,11,18,5,6,7,8,9,10,12,13,14,15,16,17,19,20,21,22,23,24]
	
	var InterStat;
	
	if(ESCvisible == false)
	{
		ESCvisible = true;
		document.getElementById('tree-skills').style.display = 'block';
		document.getElementById('stats-window').style.display = 'block';
		InterStat = setInterval(StatDraw, 200); 
	}
	else
	{
		ESCvisible = false;
		document.getElementById('tree-skills').style.display = 'none';
		document.getElementById('stats-window').style.display = 'none';
		clearInterval(InterStat);
	}
		
	if(ESCvisible == true)
	{
		var flag = 0;
		var MapX = 0;
		var MapY = 0;
		var MouseX = 0;
		var MouseY = 0;
		var ScrollValue = 10;
		
		for (let i = 1; i < 25; i++) {
			document.getElementsByClassName("Sicon sk-" + i)[0].style.backgroundImage = "url('images/IconSkill/Skill-" + i + ".png')";
		}
		
        document.getElementById('map-skills').style.backgroundPosition = MapX + "px " + MapY + "px";
		MoveIcoSkill();
		StatDraw();
		
		document.getElementById("sp").innerHTML = SkillPoint + " Очков";
		
		//закрытие при нажатии на крестик
		document.getElementById('skill-tree-close').addEventListener('click',function(event){
			ESCvisible = false;
			document.getElementById('tree-skills').style.display = 'none';
			document.getElementById('stats-window').style.display = 'none';
			clearInterval(InterStat);
		})
		
		//определение положения мыши при нажатии
		document.getElementById('map-skills').addEventListener('mousedown',function(event){
			MouseX = event.clientX;
			MouseY = event.clientY;
			flag = 1;
		})
		
		//движение мыши
		document.getElementById('map-skills').addEventListener('mousemove',function(event){
		if(flag == 1)
		{
			if(event.clientX > MouseX && MapX < 0)
				MapX += event.clientX - MouseX;
			if(event.clientX < MouseX && MapX > -650)
				MapX -= MouseX - event.clientX;
			if(event.clientY > MouseY && MapY < 0)
				MapY += event.clientY - MouseY;
			if(event.clientY < MouseY && MapY > -750)
				MapY -= MouseY - event.clientY;
				
			document.getElementById('map-skills').style.backgroundPosition = MapX + "px " + MapY + "px";
				
			MouseX = event.clientX;
			MouseY = event.clientY;	
			
			MoveIcoSkill();
			
		}
		})
	
	//отпускание мыши
	document.getElementById('map-skills').addEventListener('mouseup',function(){
		flag = 0;
	})
	
	
	//уведение мыши за карту
	document.getElementById('map-skills').addEventListener('mouseout',function(){
		flag = 0;
	})
	

	//события нажатия на скилы
	for (let i = 1; i < 25; i++) {
		
		//нажатие на скил
		document.getElementsByClassName('sk-' + i)[0].addEventListener('dblclick',function(){
		
		//смена скилов
		if(document.getElementsByClassName('sk-' + i)[0].className == 'Sicon learn sk-' + i)
		{
			SkillReplace(i);
		}
		
		//изучение скиллов
		if(document.getElementsByClassName('sk-' + i)[0].className == 'Sicon avail sk-' + i)
		{
		let SpellCost = 1;
		if(i == 5 || i == 7 || i == 13 || i == 14 || i == 19 || i == 21)
		{
			SpellCost = 2;
		}
		if(i == 9 || i == 16 || i == 23)
		{
			SpellCost = 3;
		}
		
		if(SkillPoint > (SpellCost - 1))
		{
			document.getElementsByClassName('avail sk-' + i)[0].className = 'Sicon learn sk-' + i;
			SkillPoint = SkillPoint - SpellCost; 
			document.getElementById("sp").innerHTML = SkillPoint + " Очков";
			SkillLearn(i);
			
			//открытие связных скилов
			for (let j = 1; j < skillReq.length + 1; j++){
				if(i == skillReq[j-1])
				{
					//открытие идёт только если они были не доступны
					if(document.getElementsByClassName('sk-' + skillGet[j-1])[0].className == "Sicon unavail sk-" + skillGet[j-1])
					{
						document.getElementsByClassName('sk-' + skillGet[j-1])[0].className = "Sicon avail sk-" + skillGet[j-1];	
					}	
					
				}

				
			}
		}}})
		
	}	
	
	
		
	}
	
	//  перемещение иконок при прокрутке карты
	function MoveIcoSkill(){
				
		for (let i = 0; i < IcoPosX.length; i++) {
			document.getElementsByClassName('Sicon')[i].style.left = IcoPosX[i] + MapX + 'px';
			document.getElementsByClassName('Sicon')[i].style.bottom = -IcoPosY[i] - MapY + 459 + 'px'; 			
		}


	}
	
	//  изучение скилов
	function SkillLearn(skill_id){
		
		switch (skill_id) {
		
		case 1:
			MaxHP = MaxHP + 10;
		break;
		case 2:
			CurDMG = CurDMG + 1;
		break;
		case 3:
			CurMPReg = CurMPReg + 0.5;
		break;
		case 6:
			BonusSkil6 = 3;
		break;
		case 8:
			BonusSkil8 = 1;
		break;
		case 10:
			CurENDReg = CurENDReg + 1;
			CurHPReg = CurHPReg + 2;
			CurMPReg = CurMPReg + 2;
		break;
		case 12:
			BonusSkil12 = 1;
		break;
		case 15:
			BonusSkil15 = 1;
		break;
		case 17:
			CurDMG = CurDMG + 4;
		break;
		case 20:
			BonusSkil20 = 1;
		break;
		case 22:
			BonusSkil22 = 1;
		break;
		case 24:
			MaxHP = MaxHP + 30;
		break;
		case 4:
			Skill1_id = 1;
			Skill1_ico = 4;
			document.getElementById("SkillP-1").style.background = "url('images/IconSkill/Skill-4.png')";
			document.getElementById("SkillP-1").style.backgroundSize = "cover";
		break;
		case 5:
			Skill2_id = 4;
			Skill2_ico = 5;
			document.getElementById("SkillP-2").style.background = "url('images/IconSkill/Skill-5.png')";
			document.getElementById("SkillP-2").style.backgroundSize = "cover";
		break;
		
		case 11:
			Skill1_id = 2;
			Skill1_ico = 11;
			document.getElementById("SkillP-1").style.background = "url('images/IconSkill/Skill-11.png')";
			document.getElementById("SkillP-1").style.backgroundSize = "cover";
		break;
		case 13:
			Skill2_id = 5;
			Skill2_ico = 13;
			document.getElementById("SkillP-2").style.background = "url('images/IconSkill/Skill-13.png')";
			document.getElementById("SkillP-2").style.backgroundSize = "cover";
		break;
		
		case 18:
			Skill1_id = 3;
			Skill1_ico = 18;
			document.getElementById("SkillP-1").style.background = "url('images/IconSkill/Skill-18.png')";
			document.getElementById("SkillP-1").style.backgroundSize = "cover";
		break;
		case 19:
			Skill2_id = 6;
			Skill2_ico = 19;
			document.getElementById("SkillP-2").style.background = "url('images/IconSkill/Skill-19.png')";
			document.getElementById("SkillP-2").style.backgroundSize = "cover";
		break;
		
		case 7:
			Skill3_id = 7;
			Skill3_ico = 7;
			document.getElementById("SkillP-3").style.background = "url('images/IconSkill/Skill-7.png')";
			document.getElementById("SkillP-3").style.backgroundSize = "cover";
		break;
		case 9:
			Skill4_id = 10;
			Skill4_ico = 9;
			document.getElementById("SkillP-4").style.background = "url('images/IconSkill/Skill-9.png')";
			document.getElementById("SkillP-4").style.backgroundSize = "cover";
		break;
		
		case 14:
			Skill3_id = 8;
			Skill3_ico = 14;
			document.getElementById("SkillP-3").style.background = "url('images/IconSkill/Skill-14.png')";
			document.getElementById("SkillP-3").style.backgroundSize = "cover";
		break;
		case 16:
			Skill4_id = 11;
			Skill4_ico = 16;
			document.getElementById("SkillP-4").style.background = "url('images/IconSkill/Skill-16.png')";
			document.getElementById("SkillP-4").style.backgroundSize = "cover";
		break;
		case 21:
			Skill3_id = 9;
			Skill3_ico = 21;
			document.getElementById("SkillP-3").style.background = "url('images/IconSkill/Skill-21.png')";
			document.getElementById("SkillP-3").style.backgroundSize = "cover";
		break;
		case 23:
			Skill4_id = 12;
			Skill4_ico = 23;
			document.getElementById("SkillP-4").style.background = "url('images/IconSkill/Skill-23.png')";
			document.getElementById("SkillP-4").style.backgroundSize = "cover";
		break;
		
		}
		
	}
	
	//  выбор другого активного навыка
	function SkillReplace(skill_id){
		
		if(skill_id == 4)
		{
		Skill1_id = 1;
		Skill1_ico = 4;
		document.getElementById("SkillP-1").style.background = "url('images/IconSkill/Skill-4.png')";
		document.getElementById("SkillP-1").style.backgroundSize = "cover";
		}
		if(skill_id == 5)
		{
		Skill2_id = 4;
		Skill2_ico = 5;
		document.getElementById("SkillP-2").style.background = "url('images/IconSkill/Skill-5.png')";
		document.getElementById("SkillP-2").style.backgroundSize = "cover";
		}
		
		if(skill_id == 11)
		{
		Skill1_id = 2;
		Skill1_ico = 11;
		document.getElementById("SkillP-1").style.background = "url('images/IconSkill/Skill-11.png')";
		document.getElementById("SkillP-1").style.backgroundSize = "cover";
		}
		if(skill_id == 13)
		{
		Skill2_id = 5;
		Skill2_ico = 13;
		document.getElementById("SkillP-2").style.background = "url('images/IconSkill/Skill-13.png')";
		document.getElementById("SkillP-2").style.backgroundSize = "cover";
		}
		
		if(skill_id == 18)
		{
		Skill1_id = 3;
		Skill1_ico = 18;
		document.getElementById("SkillP-1").style.background = "url('images/IconSkill/Skill-18.png')";
		document.getElementById("SkillP-1").style.backgroundSize = "cover";
		}
		if(skill_id == 19)
		{
		Skill2_id = 6;
		Skill2_ico = 19;
		document.getElementById("SkillP-2").style.background = "url('images/IconSkill/Skill-19.png')";
		document.getElementById("SkillP-2").style.backgroundSize = "cover";
		}
		if(skill_id == 7)
		{
		Skill3_id = 7;
		Skill3_ico = 7;
		document.getElementById("SkillP-3").style.background = "url('images/IconSkill/Skill-7.png')";
		document.getElementById("SkillP-3").style.backgroundSize = "cover";
		}
		if(skill_id == 9)
		{
		Skill4_id = 10;
		Skill4_ico = 9;
		document.getElementById("SkillP-4").style.background = "url('images/IconSkill/Skill-9.png')";
		document.getElementById("SkillP-4").style.backgroundSize = "cover";
		}
		if(skill_id == 14)
		{
		Skill3_id = 8;
		Skill3_ico = 14;
		document.getElementById("SkillP-3").style.background = "url('images/IconSkill/Skill-14.png')";
		document.getElementById("SkillP-3").style.backgroundSize = "cover";
		}
		if(skill_id == 16)
		{
		Skill4_id = 11;
		Skill4_ico = 16;
		document.getElementById("SkillP-4").style.background = "url('images/IconSkill/Skill-16.png')";
		document.getElementById("SkillP-4").style.backgroundSize = "cover";
		}
		if(skill_id == 21)
		{
		Skill3_id = 9;
		Skill3_ico = 21;
		document.getElementById("SkillP-3").style.background = "url('images/IconSkill/Skill-21.png')";
		document.getElementById("SkillP-3").style.backgroundSize = "cover";
		}
		if(skill_id == 23)
		{
		Skill4_id = 12;
		Skill4_ico = 23;
		document.getElementById("SkillP-4").style.background = "url('images/IconSkill/Skill-23.png')";
		document.getElementById("SkillP-4").style.backgroundSize = "cover";
		}
		
	}
	
	//  окно со статами
	function StatDraw(){
		document.getElementById('s-level').innerHTML = 'Level: ' + HeroLevel;
		document.getElementById('s-dmg').innerHTML = 'Damage: ' + CurDMG;
		document.getElementById('s-hp').innerHTML = 'HP: ' + CurHP.toFixed(1) + '/' + MaxHP.toFixed(1);
		document.getElementById('s-mp').innerHTML = 'MP: ' + CurMP.toFixed(1) + '/' + MaxMP.toFixed(1);
		document.getElementById('s-end').innerHTML = 'STA: ' + CurEND.toFixed(1) + '/' + MaxEND.toFixed(1);
		document.getElementById('s-hpreg').innerHTML = 'HPreg: ' + CurHPReg.toFixed(2);
		document.getElementById('s-mpreg').innerHTML = 'MPreg: ' + CurMPReg.toFixed(2);
		document.getElementById('s-endreg').innerHTML = 'STAreg: ' + CurENDReg.toFixed(2);
	}
	
}