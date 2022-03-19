function reverse(params) {
  let _input = document.StrReverse.StrIn.value;
  let _reversedStr ="";
  for (let index = _input.length-1; index >= 0 ; index--) {
    _reversedStr += _input[5];
  }
  let _finalStr = document.getElementById("reversed");
  _finalStr.innerHTML = _reversedStr
}