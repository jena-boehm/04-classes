const { Stack } = require('./stack/stack.js');
const bracketsArray = ['(', ')', '[', ']', '{', '}'];
const matchingBrackets = {
    '(':')',
    '[':']',
    '{':'}',
    ')':'(',
    ']':'[',
    '}':'{'
}

const openingBrackets = ['(', '[', '{']

function stripInput(input) {
    console.log(input);
    const stripped = input.match(/[(){}\[\]]/g)
    return stripped;
}
function looper(array) {
    const stack = new Stack();
    let result = true;

    array.map(bracket => {
        const peek = stack.peek();
        if (openingBrackets.includes(bracket)) {
            stack.push(bracket)
        } else {
            if (matchingBrackets[bracket] === peek) {
                stack.pop()
            } else {
                result = {
                    missing: matchingBrackets[peek || bracket]
                }
            }
        }
    })
    return result
}

function linter(body) {
    const bracketArray = stripInput(body);
    const result = looper(bracketArray)
    if(result === true) {
        return {
            'success': true
        }
    } else {
        return {
            'error': `missing ${result.missing}`
        }
    }
}
// return result;

// const testLinter = linter('function add(a, b) {]return a + b;}')
// console.log(testLinter);

// const word = stripInput('(te(s)t{}[]=+,')
// console.log(word);

module.exports = { stripInput, linter }
