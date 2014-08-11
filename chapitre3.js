// Chapitre 3

// Création d'un objet imbriqué

var nested_object = {};

nested_object = {
    "nom"     : "dupont",
    "prenom"  : "franck",
    "adresse" : {
        "rue" : "20 route de louvignies",
        "code_postal" : "59530",
        "ville" : "le quesnoy"
    },
    "age" : "40"
};


// Parcours du tableau avec une boucle forin (liste tous les éléments, y compris les prototypes)

var result;
for (result in nested_object) {
    window.document.writeln(nested_object[result]);
}

// Parcours du tableau avec une boucle for et la propriété hasOwnProperty
var i;
var elements = ["prenom", "nom", "age"];

for (i = 0; i < elements.length; i += 1) {
    if (nested_object.hasOwnProperty(elements[i])) {
        window.document.writeln(nested_object[elements[i]]);
    }
}


