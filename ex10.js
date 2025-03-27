function longueursMots(mots) {
	let j = 0;
	for (i = 0; i < mots.length ; i++) {
		j = mots[i].length
		return j;
	}
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]
