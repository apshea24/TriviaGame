// Set Global Variables. Timer, Answers Correct, Answers Incorrect

var currentquestion = 0;
var correctAnswer = 0;
var timeLeft = 120;
var timeInterval;
var totalQuestions = 12;


//All Questions, Possible Answers, and any other attributes associated with that question built into an object Possibly images.

var allQuestions = [
    {
        question: "What is the name of Jon's direwolf?",
        choices: ["Ghost", "Greywind", "Nymeria", "Podrick"],
        correctAnswer: 0
    },
    {
        question: "Which name is given to the bastards of The Reach?",
        choices: ["Rivers", "Snow", "Sand", "Flowers"],
        correctAnswer: 3
    },
    {
        question: "At Hoster Tully's funeral, who shot the burning arrow that hit its mark?",
        choices: ["Edmure Tully", "Rob Stark", "Brynden Tully ", "Jaime Lannister"],
        correctAnswer: 2
    },
    {
        question: "I always hated crossbows. Take too long to load!",
        choices: ["Rodrik Cassel", "Jory Cassel", "Robb Stark", "Yoren"],
        correctAnswer: 3
    },
    {
        question: "In season 2, who does Tyrion tell Varys he is planning on marrying to Princess Myrcella?",
        choices: ["Theon Greyjoy", "Oberyn Martel", "Robyn Arryn", "Rickon Stark"],
        correctAnswer: 0
    },
    {
        question: "How many fingertips did Stannis Baratheon chop off of Davos' hand(s)?",
        choices: ["One", "Two", "Three", "Four"],
        correctAnswer: 3
    },
    {
        question: "Who is king of Westeros when the the series begins?",
        choices: ["Ares Targaryan", "Robert Baratheon", "Geoffrey Baratheon", "Ned Stark"],
        correctAnswer: 1
    },
    {
        question: "What is Olenna's relationship to Mace Tyrell?",
        choices: ["Sister", "Wife", "Mother", "They Never Met"],
        correctAnswer: 2
    },
    {
        question: "Which tongue is commonly used by the Priests or Priestesses of R'hllor?",
        choices: ["Dothraki", "High Valerian", "Asshai'i", "English, Duh!"],
        correctAnswer: 1
    },
    {
        question: "At the end of his training, what must an Unsullied kill to prove he has no mercy or weakness?",
        choices: ["Themselves", "A Newborn", "The Masters' Enemies", "English, Duh!"],
        correctAnswer: 1
    },
    {
        question: "Which of the following characters DOES appear in season 1?",
        choices: ["Stannis Baratheon", "Roose Bolton", "Craster", "Beric Dondarrion"],
        correctAnswer: 3
    },
    {
        question: "Which sword was wielded by Visenya Targaryen?",
        choices: ["Lightbringer", "The Catspaw", "Ice", "Dark Sister"],
        correctAnswer: 3
    },


];

//Now I will set my functions. I need Build Quiz, and I will need Show Results build quiz will be displayed right away. show results using a event listener on the submit button

function setupOptions() {
    $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
    console.log(allQuestions[currentquestion].question);
    var options = allQuestions[currentquestion].choices;
    var formHtml = '';
    for (var i = 0; i < options.length; i++) {
        formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
            allQuestions[currentquestion].choices[i] + '</label></div><br/>';
    }
    $('#form').html(formHtml);
    $("#option0").prop('checked', true);
};

function checkAnswers() {
    if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
        correctAnswer++;
        alert("Correct!");
    };
};

$(document).ready(function () {
    $(".jumbotron").hide();
    $("#result").hide();
    $("#start").click(function () {
        $(".jumbotron").fadeIn();
        $(this).hide();
    });

    $("#timer").text(timeLeft);
    // $(function() {
    //   $("#progressbar").progressbar({
    //     max: allQuestions.length - 1,
    //     value: 0
    //   });
    // });
    setupOptions();

    timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            $(".jumbotron").hide();
            $("#result").html("Your Ran Out Of Time <br>" + "You Answered " + correctAnswer + " out of " + totalQuestions + " Questions Correctly!! ").hide();
            $("#result").fadeIn(1500);
        }
        $("#timer").text(timeLeft);
    }, 1000);

    $("#next").click(function () {
        event.preventDefault();
        checkAnswers();
        currentquestion++;
        // $(function() {
        //   $("#progressbar").progressbar({
        //     value: currentquestion
        //   });
        // });
        if (currentquestion < allQuestions.length) {
            setupOptions();
            if (currentquestion == allQuestions.length - 1) {
                $("#next").html("Submit");
                $("#next").click(function () {
                    $(".jumbotron").hide();
                    $("#result").html("You Answered " + correctAnswer + " out of " + currentquestion + " Questions Correctly!! ").hide();
                    $("#result").fadeIn(1500);
                });
            };
        };
    });




});





