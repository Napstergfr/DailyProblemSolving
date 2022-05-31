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
