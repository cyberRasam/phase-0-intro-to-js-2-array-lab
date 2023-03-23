// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    let copied = [...cats, name]
    return copied
}

function prependCat(name) {
    let copied = [name, ...cats]
    return copied;
}

function removeLastCat() {
    let copied = cats.slice(0, -1);
    return copied;
}

function removeFirstCat() {
    let copied = cats.slice(1);
    return copied;
}

