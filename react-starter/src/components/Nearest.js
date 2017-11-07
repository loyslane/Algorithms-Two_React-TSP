const importfile = require('./Data');
const perm = importfile.perm;
const Cities = importfile.Cities;
const distance = importfile.distance;

const nearest = (number) => {
  let BTL = Number.MAX_SAFE_INTEGER;
  let BT = [];
  
  Cities.splice(number, Cities.length - number);
  for(let h = 0; h < Cities.length; h++) {
    let remainingCities = Cities.slice();
    let cityBT = [];
    let cityBTL = 0;
  
    cityBT.push(remainingCities[h]);
    remainingCities.splice(h, 1);
  
    for(let i = remainingCities.length - 1; i > 0; i--) {
      let tempJ = NaN;
      let tempDist = Number.MAX_SAFE_INTEGER;
      for (let j = 0; j < remainingCities.length; j++) {
        if(distance(cityBT[cityBT.length - 1], remainingCities[j]) < tempDist) {
          tempDist = distance(cityBT[cityBT.length - 1], remainingCities[j]);
          tempJ = j;
        }
      }
      let city = remainingCities.splice(tempJ, 1);
      cityBT.push(city[0]);
      cityBTL += tempDist;
      if(remainingCities.length === 1) {
        cityBT.push(remainingCities[0]);
        cityBTL += distance(cityBT[cityBT.length - 2],cityBT[cityBT.length - 1]);
        cityBTL += distance(cityBT[0],cityBT[cityBT.length - 1]);
      }
    }
    if(cityBTL < BTL) {
      BTL = cityBTL;
      BT = cityBT;
    }
  }
  return {BTL, BT};
}

export default nearest;