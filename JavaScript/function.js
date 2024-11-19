// Arrow function
// const addNumbers = (a, b) => {
//     return a + b;
// }
// let result = addNumbers(2, 5)
// console.log(result)

// forEach()
// let arr = ["SuperMan", "Batman", "SpiderMan"];
// arr.forEach((val, idx, arr) => {
//     console.log(val, idx, arr)
// })

// print the square of each value using forEach loop
// let arr2 = [1, 2, 3, 4, 5];
// arr2.forEach((val) => {
//     console.log(val * val)
// })

// Map method
// let arr = [1,2,3,4,5]
// arr.map((val) => {
//     console.log(val)
// })


// filter()
// let arr = [1, 2, 3, 4, 5]
// let even = arr.filter((val) => {
//     return val % 2 === 0
// })
// console.log(even)

// reduce()
// let arr = [1, 2, 3, 4, 5]
// let sum = arr.reduce((res, curr) => {
//     return res + curr
// })
// console.log(sum)


const complexData = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
      },
      orders: [
        { orderId: "A123", amount: 50.75, status: "completed" },
        { orderId: "B456", amount: 30.25, status: "pending" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      address: {
        street: "456 Oak St",
        city: "Othercity",
        country: "USA",
      },
      orders: [
        { orderId: "C789", amount: 100.5, status: "completed" },
        { orderId: "D012", amount: 75.2, status: "completed" },
      ],
    },
  ]
// Filter users who's age is 25 or less 
const user = complexData.filter((user) => {
    return user.age <=25
})
console.log(user)

// Map the array to get the array of user names
const userNames = complexData.map((val) => {
    return val.name
})
console.log(userNames)

// Filter orders with an amount greater than 50
const order = complexData.filter((order) => {
    return order.orders.some((order) => {
        return order.amount > 50
    })
})
console.log(order)

// Map the array to get the array of order ids
const orderIds = complexData.map((val) => {
  return val.orders.map((val) => {
      return val.orderId
  })
})
console.log(orderIds)

