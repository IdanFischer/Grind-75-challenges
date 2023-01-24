// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// this needs .sort()

const arr1 = [1,2,4]
const arr2 = [1,3,4]

function mergeTwoLists (list1, list2) {
    let mergedList = [...list1, ...list2].sort()
    return mergedList
}

const result = mergeTwoLists(arr1, arr2)
console.log(result)
