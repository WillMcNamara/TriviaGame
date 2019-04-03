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
     Q1 = {question:"Q1", answer:"A1", options:["A11", "A12","A13"]},
     Q2 = {question:"Q2", answer:"A1", options:["A11", "A12","A13"]},
     Q3 = {question:"Q3", answer:"A1", options:["A11", "A12","A13"]},
     Q4 = {question:"Q4", answer:"A1", options:["A11", "A12","A13"]},
     Q5 = {question:"Q5", answer:"A1", options:["A11", "A12","A13"]},
    //  Q6 = {question:"Q1", answer:"A1", other:["A11", "A12","A13"]},
    //  Q7 = {question:"Q1", answer:"A1", other:["A11", "A12","A13"]},
    //  Q8 = {question:"Q1", answer:"A1", other:["A11", "A12","A13"]},
    //  Q9 = {question:"Q1", answer:"A1", other:["A11", "A12","A13"]},
    //  Q10 = {question:"Q1", answer:"A1", other:["A11", "A12","A13"]},
]
var correct = 0;
var index = 0;
var started = false;

//reset function for initial start and end screen restart
function reset() {
    if (started === false) {
        $("#currentQ").text(questions[0].question);
        $("#answers").html("<p>"+questions[0].options[0]+"</p><p>"+questions[0].options[1]+"</p><p>"+questions[0].options[2]+"</p>");
        correct = 0;
        index = 0;
        started = true;
    }    
}

//operation for going to next question, recording a correct answer
function next() {
    if (userGuess === questions[index].answer) {
        correct++;
    }
    index++;
    $("#currentQ").text(questions[index].question)
}

$(document).ready(function() {

reset();
console.log(questions[0].options[0])
console.log(started)
console.log(questions[0].question)

});