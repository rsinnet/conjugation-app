var json = {
    "verbs" :
    [
	["אהב", "XXX", "love, like, adore"],
	["אבד", "XXX", "be lost; perish"],
	["אחז", "XXX", "hold, grasp; seize; possess"],
	["אכל", "XXX", "eat; burn, destroy; consume"],
	["אמר", "XXX", "say, tell; mean; express; praise"],
	["אנס", "XXX", "rape; force; coerce"],
	["אסף", "XXX", "collect, gather, assemble"],
	["אסר", "XXX", "arrest, imprison, shackle; forbit"],
	["בגר", "XXX", "mature, achieve adulthood (more formal than hitpa'el)"],
	["בדק", "XXX", "inspect, check, examine"],
	["בחן", "XXX", "examine, test"],
	["בחר", "XXX", "choose, select, pick; prefer; vote (for)"],
	["בלם", "XXX", "stop, brake, curb"],
	["ברא", "XXX", "create"],
	["ברח", "XXX", "escape, flee"],
	["ברר", "XXX", "select, pick, sort"],
	["גבר", "XXX", "be strong; increase, grow stronger"],
	["גזר", "XXX", "cut; decree; decide, resolve; derive (gramm.); infer; differentiate (math)"],
	["גלש", "XXX", "boil over; ski, skate; water ski; glide; slide from topic to topic; surf, browse (Internet)"],
	["גמר", "XXX", "finish, complete, end, conclude"],
	["גנב", "XXX", "steal"],
	["גרם", "XXX", "cause, bring about"],
	["דאג", "XXX", "worry, be anxious; take care"],
	["דחף", "XXX", "push, shove, thrust"],
	["דלק", "XXX", "burn"],
	["דפק", "XXX", "knock, beat; mess up, “fix”/“do”, “ruin” (sl.); have sexual intercourse (sl.); go/work well (sl.)"],
	["דקר", "XXX", "prick, stab; tease"],
	["דרך", "XXX", "step, tread; press (grapes, etc.); cock (rifle); draw (bow)"],
	["גרס", "XXX", "run over, trample; devour prey"],
	["דרש", "XXX", "demand, require, ask for; inquire, seek; interpret, explain; preach"],
	["הולך", "XXX", "go (on foot), walk; depart; plan, be about to"],
	["הפך", "XXX", "turn over, invert, reverse; change (tr. and intr.); remove, destroy"],
	["הרג", "XXX", "kill, slay"],
	["הרס", "XXX", "destroy, ruin, demolish; dare (arch.)"],
	["זחל", "XXX", "crawl, creep"],
	["זכר", "XXX", "remember"],
	["זקף", "XXX", "straighten up, raise; stand erect; register in (account), give credit (for)"],
	["זרק", "XXX", "throw, toss, cast, fling"],
	["חגג", "XXX", "celebrate, observe (holiday)"],
	["חדר", "XXX", "penetrate"],
	["חזר", "XXX", "return, come back; repeat; rehearse; retract"],
	["חלם", "XXX", "dream"],
	["חלף", "XXX", "pass away/by/through"],
	["חלץ", "XXX", "remove; loosen; take off (shoe); release from obligation of levirate marriage; extract; rescue"]
    ]
}

verbsXXX = _.map(json.verbs, function(verb) {
    return new Verb(verb[0], verb[2]);
});
