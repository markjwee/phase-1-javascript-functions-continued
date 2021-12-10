// code your solution here
function saturdayFun(funActivity="roller-skate") { {
    return  `This Saturday, I want to ${funActivity}!`
    }
}

function mondayWork(workActivity="go to the office") { {
    return `This Monday, I will ${workActivity}.`
    }
}

function wrapAdjective(highlight) { {
    return function wrapMiddleStep(adjectivePhrase){
        return `You are ${highlight}${adjectivePhrase}${highlight}!`
        }
    }
}