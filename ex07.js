function afficherElements(tab) {
	let j = 0;
	for (let i = 0; i < tab.length; i++) {
		j = tab[i];
	}
	return j;
}

afficherElements([1, 2, 3, 4]); // Affiche : 1, 2, 3, 4 (un par ligne)
afficherElements([-1, 28, 44, 0]); // Affiche : -1, 28, 44, 0 (un par ligne)
