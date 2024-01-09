// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      let avg = (arr[start] + arr[end]) / 2;
      if (avg === targetAvg) {
        return true;
      } else if (avg < targetAvg) {
        start++;  
      } else {
        end--; 
      }
    }

    return false;
  }
  
  
