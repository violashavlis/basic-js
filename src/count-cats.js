module.exports = function countCats(matrix) {
  var countCats = 0;
  matrix.forEach(row => {
    row.forEach (item=> {
      if (item === "^^") {
        countCats++;
      }
    });
  });
  return countCats;
};
