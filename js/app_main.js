$(document).ready(function() {
    _.each(verbsXXX, function(verb, verbIndex)
	   {
	       var verbRow = document.createElement("tr");
	       verbRow.setAttribute("ng-controller", "ConjugationController as conj");
	       for (var i = 3; i >= 0; --i)
	       {
		   var cell = document.createElement("td");
		   //cell.innerText = VerbClassXXX.ConjugateByRuleIndex(verb, i);
		   //verbRow.appendChild(cell);

		   //cell = document.createElement("td");
		   var textBox = document.createElement("input");
		   textBox.setAttribute.className = "hebrew-verb";
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
	       cell.title = "Whoa nelly!"
	       verbRow.appendChild(cell);

	       $("#verbTableBody").append(verbRow);
	       
	   })
	}
);
