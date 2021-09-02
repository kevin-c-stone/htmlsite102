let userAnswer = prompt('Do you want football logos as a background?')
console.log(userAnswer)
if(userAnswer.toLowerCase() == 'yes'){
    let url = "https://previews.123rf.com/images/fitimi/fitimi1409/fitimi140900018/31421858-nfl-teams.jpg"
    document.write('<img src="' + url + '">')
}