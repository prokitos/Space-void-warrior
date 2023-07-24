var audioBG = new Audio('music/BG menu.mp3');
var HardCore = false;

// Загрузка страницы
window.addEventListener('load', function()
{
	
preStartPanel();


})

// выбор режима игры
function preStartPanel()
{
	
//кнопка старт
document.getElementById('startbttn').addEventListener('click', function(){ 
	if(document.getElementById('startbttn').className == 'active'){	
		document.getElementById('pre_startpanel').style.display = 'block';
		document.getElementById('startpanel').style.display = 'none';
		startPanels();
	}
})
	
}

// Стартовая панель
function startPanels()
{
	
audioBG.currentTime = 1;
MusicSetting();
	  
document.getElementsByClassName('singlenoob')[0].addEventListener('click', function(){ 

Subtitles();

})

document.getElementsByClassName('singlepro')[0].addEventListener('click', function(){ 

HardCore = true;
Subtitles();

})
	
}

//начальные титры
function Subtitles()
{
	
document.getElementById('pre_startpanel').style.display = "none";
document.getElementById('gamefield').style.background = "url('images/bg-sub.jpg')";
document.getElementById('gamefield').style.backgroundSize = '160%';
		
let S_int;
let S_margin = 600;
	
startSub();
	
	function startSub()
	{
		let SUB = document.getElementById('subtitles');
		SUB.style.display = "block";
		SUB.style.marginTop = S_margin + "px";
			
		SUB.innerHTML += "Когда вы вернулись спустя 20 лет тренировок, произошло ужасное";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += " На вашей родной планете все погибли";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += " Все следы указывают на длительную бойню";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += " После 5 лет поисков вы нашли виновного";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += " Им оказался самый жестокий пират во всей галактике ";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += " ...Малакай... ";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += " Недавно со мной связался некий мистер Ки ";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += " Похоже, что он знает, где Малакай ";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += " Пришло время мести, нужно прилететь на планету Гиберион ";
		SUB.innerHTML += " </br> </br> </br> ";
		SUB.innerHTML += " Чтобы найти связного";
			
		S_int = setInterval(moveSub,80);
			
	}
		
	function moveSub()
	{
		
		S_margin = S_margin - 5;
		document.getElementById('subtitles').style.marginTop = S_margin + 'px';
			
		if(S_margin < -700)
		{
			clearInterval(S_int);
			let S_int2 = setTimeout(endSub, 4000);
		}
		
	}
		
	function endSub()
	{
		
		document.getElementById('gamefield').style.background = "";
		document.getElementById('subtitles').style.display = "none";
		audioBG.pause();
		audioBG.currentTime = 0;
		//ShipGame();
		WarriorGame();
	}

}

//функция рандома
function rand(min, max)
{
  return Math.floor(min + Math.random()*(max-min+1));
}

//функция всплывающего текста
function TextAdd(t_pos,t_dur,t_text)
{
	t_dur = t_dur * 1000;
		
	var data = document.createElement("div"); 
	
	if(t_pos == 'middle')
	data.className = 'text mid';	
	
	data.innerHTML = t_text;
	
	document.getElementById('gamefield').appendChild(data);
	
	let intDel = setInterval(DelText,t_dur,data)
}

//удаление всплывающего текста
function DelText(d_obj)
{
	d_obj.remove();
}

