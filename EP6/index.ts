// // // let sum: number = 0
// // // for (let i = 1; i <= 365; i++) {
// // //     sum = sum + i
// // // }
// // // console.log('Total:', sum)

// // let sum: number = 0
// // let i: number = 1

// // while(i <= 31){
// //     sum = sum + i
// // }
// // console.log('Total:', sum)

// let sum: number = 0
// let i: number = 1
// while (i <= 31){
//     sum = sum + 1
//      i++
// }

// console.log('Total;', sum)

// let count: number = 0

// while (true){
//     console.log("โสด")
//     count++
//     if (count === 10){
//         break
//     }
// }

let i: number = 1
do {
    console.log('เราอายุ' + i + 'ปี')
    i++
} while (i <= 13)


const niga: string[] = ['game', 'mix', 'josafe', 'pop', 'few']

for (let i = 0; i < niga.length; i++) {
    if (niga[i] === 'mix')
        console.log('ไอ้ดำ')
}

const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3 || nums[i] === 5 || nums[i] === 7){
        nums[i] = 0
    }
}
console.log(nums)