// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.



// function checkString(s, arr2) {
//    {
    
//    }

// console.log(checkString("()"))

function isValidParentheses(str) {
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') { 
            arr.push(str[i]);       // looks for any open brackets, and pushes it into new array
        } else if (str[i] === ')' && arr[arr.length - 1] === '(') {
            arr.pop();
        } else if (str[i] === '}' && arr[arr.length - 1] === '{') {
            arr.pop();
        } else if (str[i] === ']' && arr[arr.length - 1] === '[') {
            arr.pop(); // if any of the open brackets is found that match the closing brackets, it will pop the elements it dectected in the 
            // array. it finds matching ones by looking back one in the array length and pulling the value from that array and checking if its
            // the closing bracket.
        } else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
            return false; // if it detects closed brackets and there are no opening before it by the end of the loop, it will return false
        }
    }
    return arr.length === 0; // if by the end of the loop process 0 elements are left in the new array (beacuse it will pop the brackets that 
    // have matching open and closed sides) and by the end of the loop there will be 0 elements left and return true
}

console.log(isValidParentheses("[{()}]"))
// arr = [ [ { ] 
//         0 1 2 3 4 5
// ( { } )
// ( { ) }
// if it's open, it will only accept other open ones OR the same closing one

