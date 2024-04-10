//Exercice variable
let area = "VIDE";
const width = 1920;
const height = 1080;
console.log(area);
try {
    height = 1200;
}
catch (e) {
    console.error(e);
}

console.log(height);
//Exercice array
const empty_array = [];
const filled_array = [1, 2, 3, 4, 5];

const array = [];
array.push(87);
array.push("Get Jinxed");
console.log(array);
//Exercice condition
let notTrue = false;
let zero = 0;
if (notTrue === zero) {
    console.log("Elles sont égales");
}
else {
    console.log("Elles ne sont pas égales");
}
//Exercice tableau vide
const tableau_vides = [];
for (let i = 0; i < 30;i++) {
    tableau_vides.push(Math.random());
}
console.log(tableau_vides);
//Exercice fonction

function mean (array){
    let sum = 0;
    let moy = 0;
    for (let i = 0; i <array.length; i++){
        sum += array[i];
    }
    moy = sum / array.length;
    return moy;
}
console.log(mean([1, 2, 3, 4, 5]));





