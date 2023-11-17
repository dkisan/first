// console.log('Hello World !!!')

// const add = (a, b) => a + b
// console.log(add(2, 3))

// const student = {
//     firstname: "Debasish",
//     lastname: "Kisan",
//     rollno: 1,
//     printfullname: function () {
//         console.log('Hi my name is ' + this.firstname + " " + this.lastname)
//     }
// };
// student.printfullname()

const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
const n_arr = arr.map(e=>{
    if(e==' '){
        return 'empty string'
    }else{
        return e
    }
})
console.log(n_arr)