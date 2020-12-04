const Stack = require('./stack/stack.js');
const brackets = ['(', ')', '[', ']', '{', '}'];
const matchingBrackets = {
    '(':')',
    '[':']',
    '{':'}',
    ')':'(',
    ']':'[',
    '}':'{'
}

function stripInput(input) {
    const stripped = input.match(/[(){}\[\]]/g)
    return stripped;
}

const word = stripInput('(te(s)t{}[]=+,')
console.log(word);

module.exports = { stripInput }