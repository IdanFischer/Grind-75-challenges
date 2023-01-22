const arr = [2,3,5,11,7]

function twoSum (nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
        if (target == nums[i] + nums[j]){
            return [i, j];
        }
    }
} 
}

console.log(twoSum(arr, 7))