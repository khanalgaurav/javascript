const myArray = [1,2,3,4,5]

//accessing elements from array
console.log(myArray[0])

//array also has methods study all from w3school please
    //examples
        /*  array.length()
            array.toString()
            array.at() -> gives the element at given positon 
            array.join() -> converts the array into string same as toString() but in addition we can specify the separator inside the parameter
            array.pop()
            array.push(x)
            array.unshift(x) -> adds x to the beggining of the string and removes the element at the end of the string
            array.shift() -> removes the beggining element of the array
            array.delete() -> this leaves undefined holes in the array so dont use this. prefer using pop() or shift()
            array.concat() -> this creates a new array concatinating the elements of two or more arrays. It doesn't change the existing arrays and always return a new array
            array.flat() -> this creates a new array with subarray elements concatenated to a specific depth
                    eg:-  const myArray = [[1,2],[3,4]]
                          const newArray = myArray.flat()
                          then the result will be,
                            [1,2,3,4]
            
            array.slice(x,y) -> this method slices out a piece of an array into a new array. slice() method creates a new array and donot affect the original array. 
                                Here x is included in the slice but y is excluded
            array.splice(x,y) -> this method also slices out the desired piece of an array into a new array but cut those elements from the original array.
                                 this method can be used to add new items to an array
                                 eg :- 
                                    const myArray = ["Gaurav","Nayan", "soraz","Rukesh"]
                                    myArray.splice(3,0, "Rajaul", "Chaman")
                                    then the result will be,
                                        ["Gaurav","Nayan","soraz","Rajaul","Chaman","Rukesh"]
        */

//hit and trial testing to learn :-

const myArr = new Array(1,2,3,4,5,6)
console.log(myArr)

console.log(myArr.slice(1,3));
console.log(myArr)

console.log(myArr.splice(1,3))
console.log(myArr) //original array is changed i.e spliced into two arrays 1) The desired slice of the array and 2) the original array without the sliced part

console.log(myArr.slice(1))