
/* 

Le pattern d'invocation DE METHODE :
La fonction est stockée sous forme de propriété d'un objet (on dit qu'il s'agit d'une méthode)
Cette fonction utilise this pour accéder aux propriété de l'objet

*/

var monObjet = {
  nom : "dupont",
  prenom : "franck",
  nomComplet : function() {
    return this.prenom + ' ' + this.nom; 
  }
}

// Pas d'instanciation
document.writeln(monObjet.nom); // Appel d'une propriété de l'objet
document.writeln(monObjet.nomComplet()); // Appele nomComplet() avec des parenthèses car il s'agit d'une fonction
document.writeln('<br /><br /><br /><br />');


/*

Le pattern d'invocation DE FONCTION :
Lorsqu'une fonction n'est pas la propriété d'un objet, elle est appelée comme une fonction

*/

var maVariable = 25;
var ajouter = function(nb1, nb2) { // Création d'un objet fonction
  var maVariable = 15;
  return this.maVariable; // Retourne 25 car this est lié à l'objet global
}

var resultat = ajouter(2,3); // Ajouter() est appele comme une fonction
document.writeln(resultat);
document.writeln('<br /><br />');


// Le gros souci de l'invocation de fonction : une méthode ne peut utiliser de fonction interne pour l'aider à remplir une tâche :

var monObjet = {
  nom : "dupont",
  prenom : "franck",
  afficheNomComplet : function() { // Une méthode
    var that = this; // Solution de contournement avant la fonction
    var composeNomComplet = function() { // Une fonction interne à la méthode
      // return this.nom; => Renvoi 'undefined' car cette fonction (appelée comme une fonction) est liée à l'objet gloabl
      return that.nom + ' ' + that.prenom;
    }
    return composeNomComplet(); // Appelle composeNomComplet() comme une méthode
  }
}

document.writeln(monObjet.afficheNomComplet());
document.writeln('<br /><br /><br /><br />');

/*

Le pattern d'invocation DE CONSTRUCTEUR

*/

var Personne = function(nom, prenom) { // En majuscule par convention (car destiné à être instancié avec new), on appele ces fonctions des constructeurs
  this.nom = nom;
  this.prenom = prenom;
}

var p = new Personne('franck', 'dupont'); // création d'un nouvel objet

Personne.prototype.getNomComplet = function() { // Ajoute une méthode getNomComplet() à toutes les instances de Personne
  return this.prenom + ' ' + this.nom;
}

document.writeln(p.getNomComplet());



