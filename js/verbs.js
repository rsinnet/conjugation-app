"use strict";

// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

class VerbClass
{
    constructor(form)
    {
	this.form = form;
    }

    get	length()
    {
	return this.form.length;
    }
    
    MS(verb)
    {
	return this.rules[0].format(verb[0], verb[1], verb[2]);
    }

    FS(verb)
    {
	return this.rules[1].format(verb[0], verb[1], verb[2]);
    }

    MP(verb)
    {
	return this.rules[2].format(verb[0], verb[1], verb[2]);
    }

    FP(verb)
    {
	return this.rules[3].format(verb[0], verb[1], verb[2]);
    }

    ConjugateByRuleIndex(verb, index)
    {
	return this.rules[index].format(verb.root[0], verb.root[1], verb.root[2]);
    }
    
}

class Verb
    {
	constructor(root, translation)
	{
	    this.root = root;
	    this.translation = translation;
	}
	
	get length()
	{
	    return root.length;
	}
    };

var VerbClassXXX = new VerbClass("XXX");
VerbClassXXX.rules =
    [
	"{0}ו{1}{2}",
	"{0}ו{1}{2}ת",
	"{0}ו{1}{2}ים",
	"{0}ו{1}{2}ות"
    ];

var verbsXXX =
    [
	new Verb("אהב", "love, like, adore"),
	new Verb("אבד", "be lost; perish")
    ];
