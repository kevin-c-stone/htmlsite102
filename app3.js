function functionToExecute () {
    alert('OF COURSE THEY AREEEEEEEEEE!!!!!')
}

function functionHome () {
    alert('Home is where the food is <3')
}

function functionAbout () {
    alert('The National Football League is foosball for the Nation')
}

function functionNfc () {
    alert('National Foosball Conference is kewl')
}

function functionAfc () {
    alert('American Foosball Conference plays foosball too')
}

function randomNumberGenerator() {
    // Got the code from W3 Schools & Roger
    // https://www.w3schools.com/js/js_random.asp
    let correctAnswer = Math.floor(Math.random() * 150) +1;
    return correctAnswer;
}


// function created by Roger Huba of Code Fellows
function theGuessingGame(correctAnswer){
    let wantToPlay = prompt('Do you want to play a game? (si o no)');
    console.log(wantToPlay)
    while (wantToPlay.toLowerCase() == 'si'){
        let numberOfAttempts = 10;
        for(let i = 1; i <= numberOfAttempts; i++){
            userAnswer = prompt("Guess a number between 1 and 150");

            while((userAnswer < 1) || (userAnswer > 150)){
                userAnswer = prompt("Guess a number between 1 and 150");
            }
            if(userAnswer == correctAnswer){
                alert('You got it right. You have ' + (numberOfAttempts - i) + ' attempts left');
                break;
            } else if(userAnswer < correctAnswer){
                alert('Your answer is to low.  Try Again! You have ' + (numberOfAttempts - i) + ' attempts left');  
            } else if (userAnswer > correctAnswer){
                alert('Your answer is to high.  Try Again! You have ' + (numberOfAttempts - i) + ' attempts left');
            }
        }
        wantToPlay = prompt('Do you want to play a game? (si o no)');
        if (wantToPlay == 'yes'){
            correctAnswer = randomNumberGenerator();
        }
    }
}