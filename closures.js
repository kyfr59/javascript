/*** Exemples de closures ***/

/*
Gestion d'une personne sans closure :
On utilise un objet pour initialiser la personne 
et on ajoute une fonction getter à son prototype
*/

function Personne(prenom, nom) { // Petite convention : majuscule pour les objets destinés à être invoqués avec le pattern de constructeur
  
  this.nom = nom;
  this.prenom = prenom;

};

Personne.prototype.getNom = function() {
  return this.nom; // Ici this fait référence à l'objet Personne parent (via la chaine de prototype)
};

var fd = new Personne("franck", "dupont"); // Pattern d'invocation de constructeur
document.write(fd.getNom() + " "); // Parenthèse à getNom() car on appele une méthode d'objet

var ep = new Personne("emilie", "polerowicz");
document.write(ep.getNom() + "<br />");



/*
Gestion d'une personne avec closure :
On utilise un objet fonction et une closure 
pour renvoyer les noms distinct de chaque personne créée
*/

function personne(prenom, nom) { // Fonction objet
  
  var nom = nom;
  var prenom = prenom;
  
  return {
    getNom : nom,
    getPrenom : prenom
  };
}

var fd = personne("franck", "dupont2");
document.write(fd.getNom);

var ep = personne("emilie", "polerowicz2");
document.write(ep.getNom);
