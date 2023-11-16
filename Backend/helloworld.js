// console.log('Hello World !!!')

const add = (a, b) => a + b
console.log(add(2, 3))

const student = {
    firstname: "Debasish",
    lastname: "Kisan",
    rollno: 1,
    printfullname: () => {
        console.log('Hi my name is ' + this.firstname + " " + this.lastname)
    }
};
student.printfullname()