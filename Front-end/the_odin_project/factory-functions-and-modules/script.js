function createUser (name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log(josh.getReputation());
console.log(josh.giveReputation());
console.log(josh.getReputation());
console.log(josh.giveReputation());
console.log(josh.getReputation());

console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
});

// Pretty cool - Object.assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// since target is const, we can't directly assign to it.
// but using Object.assign we can
console.log(target);
console.log(returnedTarget);

//
const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
})();
  
calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476