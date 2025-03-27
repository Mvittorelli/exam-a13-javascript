function nombreLettres(mot) {
	let count = 0;
	for (let i = 0; i < mot.length; i++) {
		count++;
	}
	return count;
}

console.log(nombreLettres("chat")); // Résultat attendu : 4
console.log(nombreLettres(" "));
console.log(nombreLettres(""));
console.log(nombreLettres(1));


