angular.module('conjugationApp', [])
    .controller('ConjugationController', ['$scope', function(sc) {
	sc.isCorrect = function(verbIndex, conjugationIndex)
	{
	    return (this["text" + conjugationIndex] == verbsXXX[verbIndex].verbClass.conjugateByRuleIndex(verbsXXX[verbIndex], conjugationIndex));
	};
    }]);
