/**
@description :Insertion sort implemetation in js.
best case time complexity == O(n) 
worst case time complexity == O(n^2) 
Space compleity == O(1)

@params : Array arr

@return Sorted Array

**/
function insertion_sort() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  for (var i = 1; i < arr.length; i++) {
    var item = arr[i];
    var j = i - 1;

    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = item;
  }

  return arr;
}