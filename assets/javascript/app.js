//make array of objects of Qs and As and answer options
//vars of number correct
//index of current question
//game started boolean

//make a start game interface

//make a end screen with amount correct and option to retake quiz

//make a timer for the questions

//make correct answer display, delay until next question
//make incorrect answer display, delay until next question

var questions = [
     Q1 = {question:"What is the 7th planet in the solar system?", answer: 2, options:["Pluto", "Neptune", "Mars", "Saturn"]},
     Q2 = {question:"What is the square root of 144?", answer: 3, options:["44", "17", "12", "42"]},
     Q3 = {question:"What temperature (Celcius) does water boil at?", answer: 1, options:["100", "0", "212", "273"]},
     Q4 = {question:"Which of these films did not include the greatest actor of all time: Nick Cage", answer: 3, options:["National Treasure", "Ghost Rider", "Citizen Kane", "Face/Off"]},
     Q5 = {question:"On a scale of 1-10 how great was this quiz", answer: 4, options:["9", "0", "Definitely not 10", "10"]},
]
var correct = 0;
var index = 0;
var started = false;
var userGuess;
var time;
var interval;

//timer function
function timerStart() {
    clearInterval(interval);
    time = 10;
    $("#timeLeft").html("<p class='font-weight-bolder'>" + time + " Seconds Left!</p>")
    interval = setInterval(decrement, 1000);
}

    //time decrement
    function decrement() {
        time--;
        $("#timeLeft").html("<p class='font-weight-bolder'>" + time + " Seconds Left!</p>")
        if (time < 6) {
            $(".font-weight-bolder").addClass("text-danger")
        }
        if (time === 0) {
            stop();
            $("#answers").html("<h2>TIMES UP!</h2>")
            $("#answers").append("<p>Correct answer: " + questions[index].options[questions[index].answer - 1] + "</p>")
            setTimeout(next, 3000);
        }
    }

    //timer stop
    function stop() {
        clearInterval(interval);
    }

//button fill
function answers() {
    $("#answers").html("<button class='answer btn-info mb-1' value='1'>"+questions[index].options[0]+
                           "</button><br><button class='answer btn-info mb-1' value='2'>"+questions[index].options[1]+
                           "</button><br><button class='answer btn-info mb-1' value='3'>"+questions[index].options[2]+
                           "</button><br><button class='answer btn-info' value='4'>"+questions[index].options[3]+"</button>");
}

//reset function for initial start and end screen restart
function reset() {
    if (started === false) {
        $("#start").html("");
        $("#currentQ").html("<p class='font-weight-bold'>" + questions[0].question + "</p>");
        correct = 0;
        index = 0;
        started = true;
        answers();
        timerStart();
    }    
}

//operation for going to next question, recording a correct answer, or going to end screen
function next() {
    if (index === questions.length - 1) {
        end();
        return;
    }
    index++;
    $("#currentQ").html("<p class='font-weight-bold'>" + questions[index].question + "</p>")
    answers();
    timerStart();
}

//display end screen
function end() {
        started = false;
        stop();
        //display end screen
        $("#start").html("<button class='btn-primary'>Press here to retake the quiz</button>")
        $("#currentQ").html("<h2>Final score: " + correct + "/" + questions.length + "</h2");
        $("#answers").empty();
        $("#timeLeft").empty();        
    }




//calling fuctions
$(document).ready(function() {

    $("#start").on("click", function() {
        reset();
    })

    $(document).on("click", ".answer", function() {
        userGuess = parseInt($(this).attr("value"));
        if (userGuess === questions[index].answer) {
            correct++;
            $("#answers").html("<h2 class='text-success'>CORRECT</h2>")
            $("#answers").append("<p class='text-success'>Correct Answer: " + questions[index].options[questions[index].answer - 1] + "</p><p class='text-success'>Your Answer: " + questions[index].options[userGuess - 1] + "</p>")
        }
        else {
            $("#answers").html("<h2 class='text-danger'>WRONG</h2>")
            $("#answers").append("<p class='text-success'>Correct Answer: " + questions[index].options[questions[index].answer - 1] + "</p><p class='text-danger'>Your Answer: " + questions[index].options[userGuess - 1] + "</p>")
        }
        stop();
        setTimeout(next, 3000);
    })
});



//add to readme