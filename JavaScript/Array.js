let arr = [1,2,3,4,5]

// accessing array using for loop
// for(let idx=0;idx<arr.length;idx++) {
//     console.log(arr[idx])
// }

// accessing array using for-of loop
// for(let a of arr) {
//     console.log(a)
// }

// accessing array using for-in loop
// for(let a in arr) {
//     console.log(arr[a])
// }

// Find the average marks given in an array
// let marks = [85,97,44,37,76,60]
// let sum = 0
// for(let m of marks) {
//     sum += m
// }
// let avg = sum / marks.length
// console.log(`Average of total marks is: ${avg}`);

// Array methods 
// push -> add elements at the end of the array
// pop -> delete & return that element from the end of the array 
// let arr2 = [1,2,3,4,5]
// arr2.push(6)
// console.log(arr2)
// arr2.pop(6) 
// console.log(arr2)


let data = [{
    "id": 1,
    "first_name": "Alano",
    "last_name": "Coneybeare",
    "email": "aconeybeare0@privacy.gov.au",
    "gender": "Male",
    "ip_address": "181.34.199.94",
    "salary": 40000
  }, {
    "id": 2,
    "first_name": "Danny",
    "last_name": "Mathiot",
    "email": "dmathiot1@washingtonpost.com",
    "gender": "Female",
    "ip_address": "123.138.108.44",
    "salary": 50000
  }, {
    "id": 3,
    "first_name": "Chickie",
    "last_name": "Aicheson",
    "email": "caicheson2@exblog.jp",
    "gender": "Female",
    "ip_address": "96.20.205.225",
    "salary": 35000
  }, {
    "id": 4,
    "first_name": "Corny",
    "last_name": "McLeod",
    "email": "cmcleod3@redcross.org",
    "gender": "Male",
    "ip_address": "30.103.254.213",
    "salary": 80000
  }, {
    "id": 5,
    "first_name": "Hector",
    "last_name": "Kitcherside",
    "email": "hkitcherside4@barnesandnoble.com",
    "gender": "Male",
    "ip_address": "0.239.106.126",
    "salary": 75000
  }, {
    "id": 6,
    "first_name": "Berkley",
    "last_name": "Bragg",
    "email": "bbragg5@seattletimes.com",
    "gender": "Male",
    "ip_address": "2.39.172.39",
    "salary": 55000
  }, {
    "id": 7,
    "first_name": "Jeffy",
    "last_name": "Kilgrove",
    "email": "jkilgrove6@gizmodo.com",
    "gender": "Male",
    "ip_address": "175.88.28.26",
    "salary": 65000
  }, {
    "id": 8,
    "first_name": "Elston",
    "last_name": "Hirth",
    "email": "ehirth7@hc360.com",
    "gender": "Male",
    "ip_address": "124.10.56.29",
    "salary": 90000
  }, {
    "id": 9,
    "first_name": "Ker",
    "last_name": "Cody",
    "email": "kcody8@blogger.com",
    "gender": "Male",
    "ip_address": "25.12.130.164",
    "salary": 50000
  }, {
    "id": 10,
    "first_name": "Hana",
    "last_name": "Felix",
    "email": "hfelix9@wikia.com",
    "gender": "Genderfluid",
    "ip_address": "75.150.75.95",
    "salary": 30000
  }]

  let totalSalary = 0
  let newData = data.map((a) => {
    totalSalary += a.salary
    // console.log(a.salary)
  })
  console.log(totalSalary)

  let newData2 = data.reduce((a,c) => {
    return a + c.salary
  },0)
console.log(newData2)


