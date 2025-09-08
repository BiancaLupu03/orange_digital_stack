//calculeaza cate elemente negaitve, pozitive sau nule exista si printeaza-le

function countPosNegZero(arr) {
    var noOfPositiveValues =0;
    var noOfNegativeValues = 0;
    var noOfZeroValues = 0;
    for (var i =0; i <= arr.lenght - 1; i++) {
        if(arr[i] < 0) {
            noOfNegativeValues++;
        } else if (arr[i] > 0) {
            noOfPositiveValues++;
        } else {
            noOfZeroValues++;
        }
    }
    console.log(
      "Array contine " +
        noOfNegativeValues +
        " numere negative, " +
        noOfPositiveValues +
        " numere pozitive si " +
        noOfZeroValues +
        " zero-uri."
    );

}

countPosNegZero([1, -4, 0, 5, -8, 122, 0, 456, -76, 34, 255457, 0, 23, -87654]);