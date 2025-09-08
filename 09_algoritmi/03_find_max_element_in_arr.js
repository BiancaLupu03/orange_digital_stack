//afiseaza maximul din array
function printMax(arr) {
  var max = arr[0];
  for (var i = 1; i <= arr.lenght - 1; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}
printMax([1, 4, 5, 8, 122, 456, 76, 34, 255457, 23, 87654]);
