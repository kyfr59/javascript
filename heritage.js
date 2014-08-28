
/*** Les différents type d'héritage en JS ***/

/*
 * 
 * L'héritage "pseudo classique" (on remplace le prototype d'un nouvel objet par une instance d'un autre objet)
 * 
 */

// Création d'un objet fonction 
var Voiture = function() { 
  this.couleur = 'bleue';
  this.marque = 'audi';
}

// AJout d'une méthode getCouleur() à toutes les instances de Voiture
Voiture.prototype.getCouleur = function() {
  return this.couleur;
}

var maVoiture = new Voiture();
console.log(maVoiture.getCouleur());


// Création d'un nouvel objet fonction qui va hériter des propriétés et méthodes de l'objet Voiture

var Camion = function() {
}

Camion.prototype = new Voiture(); // On remplace le prototype de Camion par une Instance de voiture

var monCamion = new Camion();
console.log(monCamion.getCouleur());



/*
 * 
 * L'héritage prototypal (on utilise Object.create())
 * 
 */

// Création d'un objet littéral
var voiture = {
  couleur : 'bleue',
  marque : 'audi',
  getCouleur : function() {
    return this.couleur;
  }
 }
 
 var maVoiture = voiture; // Sans parenthèses car il s'agit d'un objet
 console.log(maVoiture.getCouleur());
 
 // Création d'un objet camion basé sur l'objet voiture
 var monCamion = Object.create(voiture); 
 monCamion.longueur = '3m'; // Ajout de propriété
 monCamion.getLongueur = function() { // Ajout de méthode
  return this.longueur;
 }
 console.log(monCamion.getCouleur());
 console.log(monCamion.getLongueur());
 
 
 /*
  * 
  * L'héritage fonctionnel (permet de gérer des variables privées, on crée un objet vierge qui est renvoyé par la fonction)
  * 
  */
 
 var voiture = function(spec) {
 
  var variablePrivee = 'privée';
  
  var that = {}; // On utilise un objet vierge qui aura accès à spec et sera renvoyé par la fonction
  that.getCouleur = function() {
    return spec.couleur;
  }
  that.getMarque = function() {
    return spec.marque;
  }
  that.getVariablePrivee = function() {
    return variablePrivee;
  }
  return that;
 }
 
var maVoiture = voiture({couleur : 'bleue', marque : 'audi'}); // couleur et marque sont donc des variables privées
console.log(maVoiture.getMarque()); 
console.log(maVoiture.getVariablePrivee()); 

// extension de voiture

var camion = function(spec) {
  var that = voiture(spec); // La variable that contient maintenant une extension de l'objet voiture
  that.longueur = '4m';
  that.getLongueur = function() {
    return that.longueur;
  }
  return that;
}

 var monCamion = camion({couleur : 'bleu', marque : 'renault'});
 console.log(monCamion.getCouleur());
 console.log(monCamion.getLongueur());

