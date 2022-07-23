// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("constColor", () => {
    const colors1 = ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
     it("takes in an array, removes the first item from array, shuffles remaining content.", () => {
      expect(constColor(colors1)).toEqual("purple", "blue", "green", "yellow", "pink")
      expect(constColor(colors2)).toEqual("saffron", "aquamarine", "periwinkle", "indigo", "ochre")
     })
     })

//b) Create the function that makes the test pass.
// Pseudo code:
//  function color  to the array
//  let array slice
//  let array shuffle, sort by math.random() -0.5"
// Return the array shuffled.

function colors(arr) {
    let newArr = arr.slice(0)
    let shuffledArr = newArr.sort(() => Math.random() - 0.5)
    return shuffledArr
}
// console.log(colors(colors1))
// console.log(colors(colors2))


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe('minMax', () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
    it('should be able to create a min max function', () => {
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
})


// b) Create the function that makes the test pass.

// Pseudo code:
// function variable to the array
// let min = Math.min(...array)
// let max = Math.max(...array)
// return [min, max]
// end function

function minMax(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min, max]
}
// console.log(minMax(nums1))
// console.log(minMax(nums2))

// --------------------3) Create a function that takes in an array of numbers and returns the average of all the numbers in the array.

// a) Create a test with expect statements for each of the variables provided.

describe ('average', () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
    it('should be able to create a average function', () => {
        expect(average(nums1)).toEqual(23.833333333333332)
        expect(average(nums2)).toEqual(24.833333333333332)
    })
})
    const nums3 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: 23.833333333333332
    const nums4 = [109, 5, 9, 67, 8, 24]
    // Expected output: 24.833333333333332

// b) Create the function that makes the test pass.


// Pseudo code:
// function variable to the array
// Use for loop that iterates the array
// return the array avg.
// end function 

    function average(array) {
        for (let i = 0; i < array.length; i++) {
            let sum = 0
            for (let i = 0; i < array.length; i++) {
                sum += array[i]
            let avg = sum / array.length
            return avg
            }
        }
    }
