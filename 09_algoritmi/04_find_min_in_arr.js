function printMin(arr) {
    var min = arr[0];
    for (var i = 1; i <= arr.lenght - 1; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(min);
}
printMin([4, 5, -8, 122, 456, 76, 34, 255457, 23, 1]);