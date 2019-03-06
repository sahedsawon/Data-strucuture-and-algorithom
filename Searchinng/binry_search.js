function binary_search() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var left = 0;
  var right = arr.length - 1;
  var mid;

  while (left <= right) {
    mid = Math.ceil((left + right) / 2);

    if (arr[mid] === num) {
      return mid;
    }

    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}