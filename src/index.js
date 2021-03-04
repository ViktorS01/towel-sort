
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined){
    return [];
  }
  let row = 0;
  let column = 0;
  let resArr = Array();
  let sizeCol = 0;
  let sizeRow = matrix.length;
  let flag = 1;

  for (row = 0; row < sizeRow; row++){
      
      if (flag == 1 ){    
        for (column = 0; column < matrix[row].length; column++){
          if (matrix[row][column] !==  undefined)
          resArr.push(matrix[row][column]);
        }
        flag = 0
      }
      else {
        for (column = matrix[row].length - 1; column >= 0; column--){
          if (matrix[row][column] !==  undefined)
          resArr.push(matrix[row][column]);
        }
        flag = 1;
      }
  }
  return resArr;
}