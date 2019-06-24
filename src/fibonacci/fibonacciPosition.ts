export default function (steps: number) {
  var fibNum = [0, 1];
  for(var i = 0; i < steps; i++){
    fibNum = [fibNum[1], fibNum[0] + fibNum[1]];
  }
  return fibNum[0];
}
