
const mySymbol = Symbol("Omayera")

const student = {
    namaye: "omayera",// read the comment below
    "name op" : "Gaurav", // it is better to put the key inside the quotation for easy access . ie we can access this key with space inbetween with the help of["name op"] and we cant by using the object.element method
    "age" : 19,
    "roll" : 11,
    "id" : 26759,
    "address" : "Kapan",
    [mySymbol] : "Omayera"
}

console.log(student.namaye)// classic way to access elemets from object
console.log(student.age+student.roll)//age and roll are numbers
console.log(typeof student.age)// proof of above statement

// better way to access elements form object->
console.log(student["name op"])
console.log(student["age"])//even if it is a number we have to access by bigbracket followed by quotation


//symbol knowledge

console.log(student)





