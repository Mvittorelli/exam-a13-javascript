function estDivisible(a, b) {
  
    if (a % b == 0) {
      return true
    } else {
      return false
    }
  //   let c = a + b
  //   let d = a / b
  // 	if (c % 2 == 0 || d % 2 == 0) {
  // 		return true;
  // 	} else {
  // 		return false;
  // 	}
  }
  
  console.log(estDivisible(10, 2)); // Résultat attendu : true
  console.log(estDivisible(10, 3)); // Résultat attendu : false
  
  console.log(estDivisible(30, 3)); 
  console.log(estDivisible(9,3));
  console.log(estDivisible(3,9));
  
  
  