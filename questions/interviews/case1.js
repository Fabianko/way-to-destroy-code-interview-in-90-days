/**
 * Paréntesis balanceados
    Haz un algoritmo que determine si un string tiene paréntesis balanceados
 *  
    
    balanced_parentheses? '( () ( () ) () )' # => true
    balanced_parentheses? '(()' # => false
 */

//response

function example1(n) {
  let s = n.split("");
  let a = 0;
  let b = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      a++;
    }
    if (s[i] == ")") {
      b++;
    }
    if (b > a) {
      return false;
    }
  }
  if (a == b) {
    return true;
  } else {
    return false;
  }
}
console.log(example1("( () ( () ) () )") == true);
console.log(example1("(()") == false);
console.log(example1("() ( () ) ()") == true);
console.log(example1(")(") == false);

/**
 * Producto de arreglos excepto el mismo
Dado un arreglo nums con n elementos enteros, entrega un arreglo tal que el elemento i, es
equivalente al producto de todos los elementos en nums, excepto nums[i]. Puedes considerar
que nums tiene siempre al menos un elemento.
Ejemplo: Para [1,2,3,4], debes entregar [24,12,8,6].
 */

function example2(n) {
  let result = [];
  for (let i = 0; i < n.length; i++) {
    let temp = [];
    for (let j = 0; j < n.length; j++) {
      if (i != j) {
        temp.push(n[j]);
      }
    }
    let tempResult = 1;
    for (let t = 0; t < temp.length; t++) {
      tempResult = tempResult * temp[t];
    }
    result.push(tempResult)
  }
  console.log(result);
  return result;
}
console.log(JSON.stringify(example2([1, 2, 3, 4])) == JSON.stringify([24, 12, 8, 6]));
