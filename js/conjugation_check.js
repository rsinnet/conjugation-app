angular.module('conjugationApp', [])
    .controller('ConjugationController', function() {
	var conjugationRow = this;
	conjugationRow.isCorrect = function(verbIndex, conjugationIndex)
	{
	    return (this["text" + conjugationIndex] == VerbClassXXX.conjugateByRuleIndex(
		verbsXXX[verbIndex], conjugationIndex));
	};
    });
