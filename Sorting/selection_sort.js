function selection_sort() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  for (var i = 0; i < arr.length - 1; i++) {
    var min = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i != min) {
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}