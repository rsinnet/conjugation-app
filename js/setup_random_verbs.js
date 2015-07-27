var makeVerbDiv = function(verb, verbIndex) {
    var divElem = document.createElement("div");
    divElem.className="col-lg-2 col-md-4 col-sm-4 col-xs-6 pagebreak";

    var tableElem = document.createElement("table");
    tableElem.className = "table table-bordered";
    tableElem.setAttribute("ng-controller", "ConjugationController as conj");
    tableElem.style = "width: 2em;";

    var person = [
	"אני/אתה/הוא",
	"אני/את/היא",
	"אנחנו/אתם/הם",
	"אנחנו/אתן/חן"
    ];

    var trElem = document.createElement("tr");
    var tdElem = document.createElement("td");
    tdElem.setAttribute("colspan", 2);
    tdElem.innerText = verb.root;
    tdElem.title = verb.translation;
    tdElem.className = "verb-root-cell-header";
    trElem.appendChild(tdElem);

    tableElem.appendChild(trElem);

    for (var i = 0; i < 4; i++) {
	trElem = document.createElement("tr");

	tdElem = document.createElement("td");
	tdElem.className = "verb-cell"

	var textBox = document.createElement("input");
	textBox.className = "hebrew-verb";
	textBox.tabIndex = 4*verbIndex + i+1;
	textBox.setAttribute("type", "text");
	textBox.setAttribute("ng-model", "conj.text" + i);
	textBox.setAttribute("ng-class",
			     "{red : !conj.isCorrect("
			     + verbIndex + ", " + i
			     + "), green : conj.isCorrect("
			     + verbIndex + ", " + i + ")}");
	tdElem.appendChild(textBox);
	trElem.appendChild(tdElem);

	tdElem = document.createElement("td");
	tdElem.innerText = person[i];
	tdElem.className = "hebrew-verb-pronoun";
	trElem.appendChild(tdElem);

	tableElem.appendChild(trElem);
    }
    divElem.appendChild(tableElem);

    return divElem;
}

$(document).ready(function() {
    //var bsRwDiv;
    _.each(verbsXXX, function(verb, verbIndex) {
	//if (verbIndex % 2 == 0)
	//{
	//bsRowDiv = document.createElement("div");
	//    bsRowDiv.className = "row";
	//}
	//bsRowDiv.appendChild(makeVerbDiv(verb, verbIndex));

	//if (verbIndex % 2 == 0 || verbIndex == verbsXXX.length - 1)
	//{
	//    $("#container").append(bsRowDiv);

	//    var pagebreakDiv = document.createElement("div");
	//    pagebreakDiv.className = "pagebreak";
	//    $("#container").append(pagebreakDiv);
	//}
	$("#container").append(makeVerbDiv(verb, verbIndex));
    })
});
