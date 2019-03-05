
function linear_search() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var j = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === j) {
      return i;
    }
  }

  return -1;
}

