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

var VerbClassXXX = new VerbClass("XXX");
VerbClassXXX.rules =
    [
	"{0}ו{1}{2}",
	"{0}ו{1}{2}ת",
	"{0}ו{1}{2}ים",
	"{0}ו{1}{2}ות"
    ];

var VerbClassXVX = new VerbClass("XVX");
VerbClassXVX.rules =
    [
	"{0}{2}",
	"{0}{2}ה",
	"{0}{2}ים",
	"{0}{2}ות"
    ];

var VerbClassHXX = new VerbClass("HXX");
VerbClassHXX.rules =
    [
	"{0}{1}ה",
	"{0}{1}ה",
	"{0}{1}ים",
	"{0}{1}ות"
    ];

var VerbClasses =
    {
	"XXX": VerbClassXXX,
	"XVX": VerbClassXVX,
	"HXX": VerbClassHXX
    };
    

class Verb
    {
	constructor(root, verbClass, translation)
	{
	    this.root = root;
	    this.verbClass = VerbClasses[verbClass];
	    this.translation = translation;
	}
	
	get length()
	{
	    return root.length;
	}
    };
