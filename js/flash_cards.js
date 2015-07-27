var updateFlashDiv = function() {
    var min = 0;
    var max = verbsXXX.length - 1;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    var verb = verbsXXX[random];

    verbs = {};
    verbs[0] = verb;

    for (var i = 1; i < 4; i++) {
	random = Math.floor(Math.random() * (max - min + 1)) + min;
	verbs[i] = verbsXXX[random];
    }

    var divElem = document.createElement("div");
    var tableElem = document.createElement("table");
    tableElem.className = "table table-bordered";
    tableElem.setAttribute("ng-controller", "ConjugationController as conj");
    tableElem.style = "width: 2em;";

    var trElem = document.createElement("tr");
    var tdElem = document.createElement("td");
    tdElem.setAttribute("colspan", 2);
    tdElem.innerText = verb.root;
    tdElem.title = verb.translation;
    tdElem.className = "verb-root-cell-header";
    trElem.appendChild(tdElem);

    tableElem.appendChild(trElem);

    verbIndices = _.shuffle(_.range(4));

    for (var i = 0; i < 4; i++) {
	trElem = document.createElement("tr");

	tdElem = document.createElement("td");

	var textBox = document.createElement("button");
	textBox.className = "hebrew-translation-button";
	textBox.innerHTML = verbs[verbIndices[i]].translation;
	tdElem.appendChild(textBox);
	trElem.appendChild(tdElem);
	tableElem.appendChild(trElem);
    }
    divElem.appendChild(tableElem);
    return divElem;
}

$(document).ready(function() {
    $('#flashDiv').html(updateFlashDiv());
});
