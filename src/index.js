module.exports = function solveEquation(equation) {
  var second = ' * x^2 ';
  var first = ' * x ';
  var position1 = equation.indexOf(second);
  var position2 = equation.indexOf(first);

  var a = parseInt(equation.substring(0,position1),10);

  var TempForB = equation.substring(position1 + second.length,position2);
  var b = parseInt(TempForB.replace(' ',''),10);

  var TempForC = equation.substring(position2 + first.length,equation.length);
  var c = parseInt(TempForC.replace(' ',''),10);

  var Discriminant = (b * b) - (4 * a *c);

  var answer1 = (- b - Math.sqrt(Discriminant)) / (2 * a);
  var answer2 = (- b + Math.sqrt(Discriminant)) / (2 * a);

  if (answer1 > answer2){
    var temp = answer1;
    answer1 = answer2;
    answer2 = temp;
  }

  return [Math.round(answer1), Math.round(answer2)];

}
