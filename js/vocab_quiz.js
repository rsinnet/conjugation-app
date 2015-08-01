var shuffledVerbList = verbsXXX;
var verbIndex;

var repeat = false;

var verbsMin = 0;
var verbsMax = verbsXXX.length - 1;

var correctDict = {};
var incorrectDict = {};

var GameSettings =
    {
	numAnswers: 3
    };

var GameState =
    {
	nCorrect: 0,
	nIncorrect: 0,
	verbs: []
    };

function reshuffleVerbs()
{
    verbIndex = 0;
    shuffledVerbList = _.shuffle(verbsXXX);
}

function getRandomVerbIndex()
{
    return Math.floor(Math.random()
		      * (verbsMax - verbsMin + 1)) + verbsMin;
}

var __verbs = verbsXXX;

function chooseVerbs()
{
    if (GameSettings.numAnswers < 2)
	throw "Must select more than one answer choice."

    var verbs = [];

    if (verbIndex > verbsMax)
	reshuffleVerbs();

    if (!repeat)
	verbs[0] = shuffledVerbList[verbIndex++];
    else
    {
	var correctRandom = getRandomVerbIndex();
	verbs[0] = verbsXXX[correctRandom];
    }

    var i = 0;
    while (i < GameSettings.numAnswers)
    {
	random = getRandomVerbIndex();

	if (repeat && random == correctRandom)
	    continue;
	if (!repeat && random == verbIndex)
	    continue;

	verbs[++i] = shuffledVerbList[random];
    }
    GameState.verbs = verbs;
}

// numAnswers - the number of answer choices for the game
var updateGameTable = function() {
    chooseVerbs();

    $("#game-view-root").text(GameState.verbs[0].root);

    verbIndices = _.shuffle(_.range(GameSettings.numAnswers));

    _.each(verbIndices, function(i) {
	var thisVerb = GameState.verbs[verbIndices[i]];

	$("#game-view-choice-" + i)
	    .text(thisVerb.translation)
	    .attr("onclick", "doAnswerCheck(this, \"" + thisVerb.root + "\")")
	    .removeClass("bgcolor-correct bgcolor-incorrect")
	    .prop("disabled", false);
    });
}

var buildGameTable = function() {
    var tableElem = document.createElement("table");
    tableElem.className = "";
    tableElem.style = "max-width: 200em; display: block;";

    var trElem = document.createElement("tr");
    var tdElem = document.createElement("td");
    tdElem = document.createElement("td");
    tdElem.id="game-view-root";
    tdElem.className = "verb-root-cell-header";
    trElem.appendChild(tdElem);

    tdElem = document.createElement("td");
    tdElem.className = "flash-card-score";
    var spanElem = document.createElement("span");
    spanElem.className = "fa fa-thumbs-up fa-lg flash-card-icon color-correct";
    tdElem.appendChild(spanElem);

    spanElem = document.createElement("span");
    spanElem.id = "game-view-correct";
    spanElem.className = "flash-card-score";
    spanElem.innerText = GameState.nCorrect;
    tdElem.appendChild(spanElem);
    trElem.appendChild(tdElem);

    tdElem = document.createElement("td");
    tdElem.className = "flash-card-score";
    spanElem = document.createElement("span");
    spanElem.className =
	"fa fa-thumbs-down fa-lg flash-card-icon color-incorrect";
    tdElem.appendChild(spanElem);

    spanElem = document.createElement("span");
    spanElem.id = "game-view-incorrect";
    spanElem.className = "flash-card-score";
    spanElem.innerText = GameState.nIncorrect;
    tdElem.appendChild(spanElem);
    trElem.appendChild(tdElem);

    tableElem.appendChild(trElem);

    for (var i = 0; i < GameSettings.numAnswers; i++) {
	trElem = document.createElement("tr");

	tdElem = document.createElement("td");

	var button = document.createElement("button");
	button.id = "game-view-choice-" + i;
	button.className = "hebrew-translation-button";

	tdElem.className = "hebrew-translation-button";
	tdElem.setAttribute("colspan", 3);
	tdElem.appendChild(button);
	trElem.appendChild(tdElem);

	tableElem.appendChild(trElem);
    }
    $("#flashDiv").html(tableElem);
}

function updateScore()
{
    $("#game-view-correct").text(GameState.nCorrect);
    $("#game-view-incorrect").text(GameState.nIncorrect);
}

function doAnswerCheck(button, answer)
{
    $(".hebrew-translation-button").prop("disabled", true);

    var correctAnswer = GameState.verbs[0].root;

    if (answer == correctAnswer) {
	button.className = button.className + " bgcolor-correct";
	++GameState.nCorrect;
	if (!(correctAnswer in correctDict))
	    correctDict[correctAnswer] = 0;
	++correctDict[correctAnswer];
    } else {
	button.className = button.className + " bgcolor-incorrect";
	++GameState.nIncorrect;
	if (!(correctAnswer in incorrectDict))
	    incorrectDict[correctAnswer] = 0;
	++incorrectDict[correctAnswer];
    }

    updateScore();
    setTimeout(updateGameTable, 1000);
}

$(document).ready(function() {
    reshuffleVerbs();
    buildGameTable();
    updateGameTable();
    //nextFlashCard();
});
