/* 
Activité : gestion des contacts
*/
// TODO : complétez le programme

var Contact =
{
	init: function (nom, prenom) 
	{
		this.nom = nom;
		this.prenom = prenom;
	},
	decrire: function()
	{
		var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
		return description;
	}
};

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

var tabContacts = [];
tabContacts.push(contact1);
tabContacts.push(contact2);

console.log("Bienvenue dans le gestionnaire des contacts !"); 
console.log("1 : Lister les contacts");
console.log("2 : Ajouter un contact");
console.log("0 : Quitter");

var nb = Number(prompt("Choisissez une option :"));

while (nb != 0) 
{	
	if (nb == 1) 
	{
		console.log("Voici la liste de tous vos contacts :");
		tabContacts.forEach(function(contact)
		{
			console.log(contact.decrire());
		});
		console.log("\n");
		console.log("1 : Lister les contacts");
		console.log("2 : Ajouter un contact");
		console.log("0 : Quitter");
		;

		var nb = Number(prompt("Choisissez une option :"));
		
	}
	else if (nb == 2) 
	{
		var nouveauNom = prompt("Entrez le nom du nouveau contact :");
		var nouveauPrenom = prompt("Entrez le prénom du nouveau contact :");
		var nouveauContact = Object.create(Contact);
		nouveauContact.init(nouveauNom, nouveauPrenom);
		tabContacts.push(nouveauContact);
		console.log("Le nouveau contact a été ajouté");
		console.log("\n");
		console.log("1 : Lister les contacts");
		console.log("2 : Ajouter un contact");
		console.log("0 : Quitter");

		var nb = Number(prompt("Choisissez une option :"));
	}
	else if ((nb > 2) || (nb < 0))
	{
		var nb = Number(prompt("Choisissez une option :"));
	}
}
console.log("Au revoir !");
