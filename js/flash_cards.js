var nCorrect = 0;
var nIncorrect = 0;

var correctAnswer;

var shuffledVerbList = verbsXXX;
var verbIndex;

var repeat = false;

var verbsMin = 0;
var verbsMax = verbsXXX.length - 1;

var correctDict = {};
var incorrectDict = {};

function reshuffleVerbs()
{
    verbIndex = 0;
    shuffledVerbList = _.shuffle(verbsXXX);
}

var updateFlashDiv = function() {

    var verb;
    if (verbIndex > verbsMax)
	reshuffleVerbs();

    if (!repeat)
	verb = shuffledVerbList[verbIndex++];
    else
    {
	var correctRandom = Math.floor(Math.random()
				       * (verbsMax - verbsMin + 1)) + verbsMin;
	verb = verbsXXX[correctRandom];
    }

    correctAnswer = verb;

    verbs = {};
    verbs[0] = verb;

    var i = 0;
    while (i < 4)
    {
	random = Math.floor(Math.random()
			    * (verbsMax - verbsMin + 1)) + verbsMin;

	if (repeat && random == correctRandom)
	    continue;
	if (!repeat && random == verbIndex)
	    continue;

	verbs[++i] = shuffledVerbList[random];
    }

    var divElem = document.createElement("div");
    var tableElem = document.createElement("table");
    tableElem.className = "table table-bordered";
    tableElem.setAttribute("ng-controller", "ConjugationController as conj");
    tableElem.style = "width: 2em;";

    var trElem = document.createElement("tr");
    var tdElem = document.createElement("td");
    tdElem.innerText = verb.root;
    tdElem.title = verb.translation;
    tdElem.className = "verb-root-cell-header";
    trElem.appendChild(tdElem);

    tdElem = document.createElement("td");
    tdElem.className = "flash-card-score";
    var spanElem = document.createElement("span");
    spanElem.className = "fa fa-thumbs-up fa-lg flash-card-icon color-correct";
    tdElem.appendChild(spanElem);

    spanElem = document.createElement("span");
    spanElem.className = "flash-card-score";
    spanElem.innerText = nCorrect;
    tdElem.appendChild(spanElem);
    trElem.appendChild(tdElem);

    tdElem = document.createElement("td");
    tdElem.className = "flash-card-score";
    spanElem = document.createElement("span");
    spanElem.className =
	"fa fa-thumbs-down fa-lg flash-card-icon color-incorrect";
    tdElem.appendChild(spanElem);

    spanElem = document.createElement("span");
    spanElem.className = "flash-card-score";
    spanElem.innerText = nIncorrect;
    tdElem.appendChild(spanElem);
    trElem.appendChild(tdElem);

    tableElem.appendChild(trElem);

    verbIndices = _.shuffle(_.range(4));

    for (var i = 0; i < 4; i++) {
	var thisVerb = verbs[verbIndices[i]];
	trElem = document.createElement("tr");

	tdElem = document.createElement("td");

	var button = document.createElement("button");
	button.className = "hebrew-translation-button";
	button.innerHTML = thisVerb.translation;
	button.setAttribute("onclick", "doAnswerCheck(this, \""
			    + thisVerb.root + "\")");

	tdElem.setAttribute("colspan", 3);
	tdElem.appendChild(button);
	trElem.appendChild(tdElem);
	tableElem.appendChild(trElem);
    }
    divElem.appendChild(tableElem);
    return divElem;
}

function doAnswerCheck(button, answer)
{
    _.each($(".hebrew-translation-button"), function(button) {
	button.disabled = true;
    });

    if (answer == correctAnswer.root) {
	button.className = button.className + " bgcolor-correct";
	++nCorrect;
	if (!(correctAnswer.root in correctDict))
	    correctDict[correctAnswer.root] = 0;
	++correctDict[correctAnswer.root];
    } else {
	button.className = button.className + " bgcolor-incorrect";
	++nIncorrect;
	if (!(correctAnswer.root in incorrectDict))
	    incorrectDict[correctAnswer.root] = 0;
	++incorrectDict[correctAnswer.root];
    }

    setTimeout(nextFlashCard, 2000);
}

function nextFlashCard()
{
    $('#flashDiv').html(updateFlashDiv());
}

$(document).ready(function() {
    reshuffleVerbs();
    nextFlashCard();
});
