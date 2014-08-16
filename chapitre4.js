// Chapitre 2

// Pattern d'invocation de méhtode

myObject = {
  age : 40,
  prenom : "franck",
  addYear : function () {return typeof(this.age) === 'number' ? this.age + 1 : 40;}
};

document.writeln("age : " + myObject.addYear());


// Pattern d'invocation de fonction

var test = "extérieur";
var add = function(a,b) {
  // Problème : ici this.test vaut "extérieur", on contourne le problème en créant une variable 'that'
  document.writeln(this.test);
  that = this;
  that.test = "intérieur";
  document.writeln(that.test);
   
  return typeof(a) === 'number' && typeof(b) === 'number' ? a + b : "veuillez passer un nombre";
};

document.writeln("<br />" + add(3,4));

document.writeln(this.test);

// Ajout de fonctions au langage

Function.prototype.method = function(name, func) {
  if(!this.prototype[name]) { // On ajoute la methode uniquement si elle n'est pas déjà existante
    this.prototype[name] = func;
    return this;
  }
};

String.method('maMethode', function() { return "coucou"; } );

document.writeln("a".maMethode());

// Fonction qui remplace les "é" par des "e" dans une chaine en utilisant les closures

String.method("remplace", function() {
  function() { return this.replace("é", "e")};
})();

document.write("dé".remplace());



