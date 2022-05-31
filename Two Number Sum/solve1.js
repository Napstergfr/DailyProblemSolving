// Complexity Time = O(n^2) | Space = O(1)
const array = [3, 5, -4, 8, 11, 1, -1, 6]; // Target = 10

function withDoubleForLoop(array, targetSum) {
    for (let i = 0; i < (array.length - 1); i++) {
        firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            secondNum = array[j];
            if (firstNum + secondNum === targetSum) {
                return [array.indexOf(firstNum), array.indexOf(secondNum)];
            }
        }
    }

    return [];
}

// Time = O(N) | Space = O(N)
function withHashMap(array, targetSum) {
    let numberHash = {}
    for (let num of array) {
        if ((targetSum - num) in numberHash) {
            return [targetSum - num, num]
        } else {
            numberHash[num] = true;
        }
    }

    return [];
}

// Time = O(nlogn) | Space = O(1)
function withTwoPointer(array, targetSum) {
    const sortedArray = array.sort(function(a, b) {
        return a - b;
    });
    let left = 0;
    let right = sortedArray.length - 1;
    while (left < right) {
        let currentSum = sortedArray[left] + sortedArray[right];
        if(currentSum === targetSum) {
            return [left, right];
        } else if(currentSum < targetSum) {
            left += 1;
        } else  if(currentSum > targetSum) {
            right -= 1;
        }

    }

    return [];


}