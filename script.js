let prenom="Je suis sammba";

let number1=46
let number2=67
const pi=3.14
let resultat=number1+number2
console.log("la somme des 2 nombres est de " +resultat);
console.log(number1+number2);


console.log("Bonjour "+ prenom + " j'ai "+ age +" ans");

let tableau=[2,"alaphonse","comment vas"]
console.log(tableau[1]);
let voiture={
    moteur:"V8",
    annee:2000,
    marque:"Toyota",
    nom:[
        "age",200
    ]
}
console.log(voiture.nom[1]);

for(let i=0;i<tableau.length;i++){
    console.log(tableau[i]);  
}

var age=46;

if(age<18){
    console.log("Vous etes mineur");
}else if(age<=45){
    console.log("Vous etes majeur");
}else{
    console.log("Grandei geu"); 
}
function Calbenefice(prixA,prixV){
    let benefice=prixV-prixA
    return benefice
}
function somme(a,b){
    let resultat=a+b
    return resultat
}

console.log("la somme est de "+somme(2000,45000));
let nombre=24;
let nombre2="24";
console.log(nombre!==nombre2);
