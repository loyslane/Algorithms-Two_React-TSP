const perm = (args) => {
  const result = [];
  const permute = (arr, memo = []) => {
    let i, current;
    for (i = 0; i < arr.length; i++) {
      current = arr.splice(i, 1);
      if (arr.length === 0) {
        result.push(memo.concat(current));
      }
      permute(arr.slice(), memo.concat(current));
      arr.splice(i, 0, current[0]);
    }
    return result;
  };
  return permute(args);
};

// const Cities = [
//   {name:"Salt Lake City", x:300, y:500},
//   {name:"Denver", x:500, y:500},
//   {name:"Cheyenne", x:500, y:600},
//   {name:"Santa Fe", x:500, y:350},
// ];
const Cities = [
  {name:"Salt Lake City", x:100, y:300},
  {name:"Denver", x:300, y:300},
  {name:"Cheyenne", x:300, y:400},
  {name:"Santa Fe", x:300, y:150},
];

const distance = (city1, city2) => {
  return Math.sqrt(Math.pow((city1.x - city2.x), 2) + Math.pow((city1.y - city2.y), 2));
}

module.exports = {
  perm,
  Cities,
  distance,
}