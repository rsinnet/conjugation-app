$(document).ready(function() {
    _.each(verbsXXX, function(verb, verbIndex)
	   {
	       var verbRow = document.createElement("tr");
	       verbRow.setAttribute("ng-controller", "ConjugationController as conj");
	       for (var i = 3; i >= 0; --i)
	       {
		   var cell = document.createElement("td");
		   cell.className = "verb-cell"
		   
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
		   cell.appendChild(textBox);
		   verbRow.appendChild(cell);
		   
	       }

	       // Add the word root
	       var cell = document.createElement("td");
	       cell.innerText = verb.root;
	       cell.title = verb.translation;
	       cell.className = "verb-root-cell";
	       verbRow.appendChild(cell);

	       $("#verbTableBody").append(verbRow);
	       
	   })
	}
);
