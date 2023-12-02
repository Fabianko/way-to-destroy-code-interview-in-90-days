//
function findFirstRepeated(gifts) { // gifts = [2, 1, 3, 5, 3, 2]
    let repeated = {}
    for (let i = 0; i < gifts.length; i++) {
      if (repeated[gifts[i]]) {
        return gifts[i]
      } else {
        repeated[gifts[i]] = true
      }
    }
    return -1
  }
  

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // resultado esperado 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // resultado esperado -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // resultado esperado 5