var randomNumber = Math.floor(Math.random() * 1000) + 1;
var numIn = document.querySelector('.take');
var numOut = document.querySelector('.out');
var submit = document.querySelector('.sub');
var ran = document.querySelector('.ran');
var Start = document.querySelector('.Start');
var resetButton;

function start(){
	ran.textContent = randomNumber;
}

Start.addEventListener('click',start);

function addDigit(){
	var num = Number(numIn.value);
	var res = num;
	var tmp = String(randomNumber);
	var sum = 0;
	for(var i = 0; i<tmp.length; i++){
		sum += Number(tmp[i]);
	}
	if(res === sum){
		numOut.textContent = 'Right';
		//numOut.style.backgroundColor = 'green';
	}
	else{
		numOut.textContent = 'Wrong';
		//numOut.style.backgroundColor = 'green';
	}
	resetButton = document.createElement('button');
	resetButton.textContent = 'Reset';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click',resetGame);
	nextNumber.parentNode.removeChild(nextNumber);

}
submit.addEventListener('click', addDigit);

function resetGame(){
	randomNumber = Math.floor(Math.random() * 1000) + 1;
	numIn.value='';
	numOut.value='';
	ran.textContent = randomNumber;
	resetButton.parentNode.removeChild(resetButton);	
}