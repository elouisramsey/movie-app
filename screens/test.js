{
  /*    

You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

An integer x - Record a new score of x.
"+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
Return the sum of all the scores on the record. The test cases are generated so that the answer fits in a 32-bit integer.


*/
}


var calPoints = function (ops) {
  let sum = 0,
    op_arr = []
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case '+':
        sum +=
          op_arr[
            op_arr.push(op_arr[op_arr.length - 1] + op_arr[op_arr.length - 2]) -
              1
          ]
        break
      case 'C':
        sum -= op_arr.pop()
        break
      case 'D':
        sum += op_arr[op_arr.push(op_arr[op_arr.length - 1] * 2) - 1]
        break
      default:
        sum += op_arr[op_arr.push(parseInt(ops[i])) - 1]
    }
  }
  return sum
}
