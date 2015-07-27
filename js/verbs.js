"use strict";

// First, checks if it isn't implemented yet.
if (!String.prototype.makeVerb) {
  String.prototype.makeVerb = function(verb) {
      return this.replace(/{(\d+)}/g, function(match, number) { 
	  return typeof verb.root[number] != 'undefined'
              ? verb.root[number]
              : match;
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
    
    conjugateByRuleIndex(verb, index)
    {
	return this.rules[index].makeVerb(verb);
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
