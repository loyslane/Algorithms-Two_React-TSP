const importfile = require('./Data');
const perm = importfile.perm;
const Cities = importfile.Cities;
const distance = importfile.distance;

const heap = (number) => {
  let BTL = Number.MAX_SAFE_INTEGER;
  let BT = [];
  
  Cities.splice(number, Cities.length - number);
  const permCities = perm(Cities);
  for(let i = 0; i < permCities.length; i++) {
    let tempDist = 0;
    for(let j = 0; j < permCities[i].length; j++) {
      if(j + 1 === permCities[i].length) {
        tempDist += distance(permCities[i][0], permCities[i][j]);
        if (tempDist <= BTL) {
          BTL = tempDist;
          BT = permCities[i];
        }
      } else {
      tempDist += distance(permCities[i][j], permCities[i][j + 1]);
      }
    }
  }
  return {BTL, BT};
}

export default heap;



