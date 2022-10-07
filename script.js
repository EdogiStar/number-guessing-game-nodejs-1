
let stage = 1;
let range = [1, 2];
let score = 0;
function saveUsername() {
	// get variables from input field
	const username = document.getElementById('username').value;
	const usernameDiv = document.getElementById('usernameDiv');
	const guessDiv = document.getElementById('guessDiv');
	const user = document.getElementById('user');

	if (username != '') {
		// call start game function passing range as parameter
		startGame(range);
		usernameDiv.style.display = 'none';
		guessDiv.style.display = 'block';
		user.innerHTML = 'Username: <b>' + username+ '</b>';
		
	}else {
		alert('Username is required');
	}
}

function startGame(range) {
	// get paragraphs to display stage and range
	const rangep = document.getElementById('rangep');
	const rangep1 = document.getElementById('rangep1');
	rangep.innerHTML = 'Stage: <b>' + stage + '</b>';
	rangep1.innerHTML = 'Range: 1 - <b>' + range.length + '</b>';
}

function submitGuess() {
	const usernumber = document.getElementById("usernumber").value;
	const guessField = document.querySelector("#usernumber");
	const startGuessBtn = document.querySelector("#startGuess");
	// get app guess (ag) and user guess (ug)
	let ag = document.getElementById("ag");
	let ug = document.getElementById("ug");
	const resultDiv = document.getElementById("result");
	let scoreView = document.getElementById("score");
	if (usernumber == '') {
		alert('Enter a guess');
	}else if(isNaN(usernumber)){
		alert('Enter a valid number');
	}else{
		// select a single number from within the given range
		let appGuess = Math.floor(Math.random() * range.length) + 1;		
		
		if (usernumber == appGuess) {
			score++; //increment score
			stage++; //increment stage
			resultDiv.style.border = '1px solid green';
			ug.innerHTML = 'Your Guess is: ' + usernumber;
			ag.innerHTML = 'System Guess is: ' + appGuess;
			scoreView.innerHTML = 'Your Score is: ' + score;
			newRange = range.length + 1; // increment range
			range.push(newRange); // push into range array
			startGame(range); // call back start game function (Recursion)
			guessField.value = ''; // clear input field
			guessField.focus();
		}else{
			score = stage - 1;
			resultDiv.style.border = '1px solid red';
			ug.innerHTML = 'Your Recent Guess is: ' + usernumber;
			ag.innerHTML = 'System Recent Guess is: ' + appGuess;
			document.getElementById("score").innerHTML = 'Your Final Score is: ' + score + '<br><button onclick="resetGame()">Start New Game</button>';
			guessField.disabled = true; // disable input fields
			startGuessBtn.disabled = true;
		}
	}
}

function resetGame(){
	// refresh entire browser window
	window.location.replace('index.html');
}