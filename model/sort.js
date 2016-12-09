let sortModel = {};

sortModel.BUBBLE_SORT = (values) => {
  let startingTime = new Date()
  var origValues = values.slice();
  var length = origValues.length - 1;
  do {
    var swapped = false;
    for(var i = 0; i < length; ++i) {
      if (origValues[i] > origValues[i+1]) {
        var temp = origValues[i];
        origValues[i] = origValues[i+1];
        origValues[i+1] = temp;
        swapped = true;
      }
    }
  }
  while(swapped === true);

  let totalTime = new Date() - startingTime
  return {
      values: origValues,
      time: totalTime
  }
}

sortModel.QUICK_SORT = (values) => {
    let startingTime = new Date()


    let totalTime = new Date() - startingTime
    return {
        values: ,
        time: totalTime
    }
}

sortModel.BUCKET_SORT = (array, bucketSize) => {
    function insertionSort(array) {
        var length = array.length;
        
        for(var i = 1; i < length; i++) {
            var temp = array[i];
            for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j+1] = array[j];
            }
            array[j+1] = temp;
        }
        
        return array;
    }

    let startTime = new Date()

    if (array.length === 0) {
        return array;
    }

    // Declaring vars
    var i,
        minValue = array[0],
        maxValue = array[0],
        bucketSize = bucketSize || 5;
    
    // Setting min and max values
    array.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })

    // Initializing buckets
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);
    
    for (i = 0; i < allBuckets.length; i++) {
        allBuckets[i] = [];
    }
    
    // Pushing values to buckets
    array.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });

    // Sorting buckets
    array.length = 0;
    
    allBuckets.forEach(function(bucket) {
        insertionSort(bucket);
        bucket.forEach(function (element) {
            array.push(element)
        });
    });

    let totalTime = new Date() - startTime

    return {
        results: array,
        time: totalTime
    };
}

sortModel.MERGE_SORT = (arr) => {
    function merge (node1, node2) {
        var result = [];
        while (node1.length > 0 && node2.length > 0)
            result.push(node1[0] < node2[0]? node1.shift() : node2.shift());
        return result.concat(node1.length? node1 : node2);
    }

    if (arr.length < 2) {
      return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var subLeft = sortModel.MERGE_SORT(arr.slice(0, mid));
    var subRight = sortModel.MERGE_SORT(arr.slice(mid));

    return merge(subLeft, subRight);
}

sortModel.INSERTION_SORT = (array) => { 
  let startTime = new Date()
  var length = array.length;
  
  for(var i = 1; i < length; i++) {
    var temp = array[i];
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }

  let totalTime = new Date() - startTime

  return {
      result: array, 
      time: totalTime
  }
}

module.exports = sortModel