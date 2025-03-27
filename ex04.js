function estNegatif(nombre) {
	if (nombre >= 0) {
		return false;
	} else {
		return true;
	}
}

console.log(estNegatif(-3)); // Résultat attendu : true
console.log(estNegatif(5)); // Résultat attendu : false
