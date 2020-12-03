function stripInput(input) {
    const stripped = input.replace(/[\-A-Za-z0-9,"'+*/=.,;:&$!?@#%^<>|_]/g, '')
    const array = stripped.split('');
    return array;
}

const word = stripInput('(te(s)t{}[]=+,')
console.log(word);

module.exports = { stripInput }