/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */

var findTheDistanceValue = function(arr1, arr2, d) {
    arr2.sort((a, b) => a - b);

    let count = 0;

    for (let num of arr1) {
        let left = 0;
        let right = arr2.length;

        // Binary search
        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (arr2[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Check nearest right element
        let valid = true;

        if (left < arr2.length && Math.abs(arr2[left] - num) <= d) {
            valid = false;
        }

        // Check nearest left element
        if (left > 0 && Math.abs(arr2[left - 1] - num) <= d) {
            valid = false;
        }

        if (valid) {
            count++;
        }
    }

    return count;
};
