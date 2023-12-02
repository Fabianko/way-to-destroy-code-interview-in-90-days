function manufacture(gifts, materials) {
    let selected_gifts = [];
    let materials_set = new Set(materials.split(''));
  
    for (let gift of gifts) {
      let isSubSet = true;
      for (let char of gift) {
        if (!materials_set.has(char)) {
          isSubSet = false;
          break;
        }
      }
      if (isSubSet) {
        selected_gifts.push(gift);
      }
    }
    return selected_gifts;
  }
  
  


console.log(manufacture(['tren', 'oso', 'pelota'],  'tronesa')) // ["tren", "oso"]


console.log(manufacture(['juego', 'puzzle'], 'jlepuz') )// ["puzzle"]


console.log(manufacture(['libro', 'ps5'], 'psli')) // []