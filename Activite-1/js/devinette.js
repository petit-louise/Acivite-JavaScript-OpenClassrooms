/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme



var nombre = Number(prompt("Trouvez le bon nombre :"));
var essai = 0;

while ( (nombre !== solution) && (essai < 6) )
{
	if (nombre > solution) 
	{
		console.log(nombre + " est trop grand");
		nombre = Number(prompt("Tentez à nouveau votre chance :"));
		essai ++;
	}
	else 
	{
		console.log(nombre + " est trop petit");
		nombre = Number(prompt("Tentez à nouveau votre chance :"));
		essai ++;
	}
}

if (nombre == solution)
{					
	console.log("Bravo ! La solution était " + solution + ".");
	console.log("Vous avez trouvé en " + essai + " essai(s).");
}
else
{
	console.log("Perdu... La solution était " + solution + ".");
}
