// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/


/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(pets) {
    const petNames = [];
    pets.forEach(element => petNames.push(element.name));

    return petNames;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(types) {
    const reverseTypes = [];
    types.reverse();
    types.forEach(element => reverseTypes.push(element.type));

    return reverseTypes;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(array) {
    const arrayInSpanish = [];
    array.forEach(element => arrayInSpanish.push({tipo: `${element.type}`, nombre: `${element.name}`}));

    return arrayInSpanish;
}

