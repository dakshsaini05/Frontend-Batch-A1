// rest(...) -> multiple values in one array and spread(...) operator -> one array to multiple value
// const funl = function(a,b) {
//     console.log(a+b)
// }

// let arr = [1,2,3,4,5]

// const square = function(a) {
//     console.log(a**2);
// }

// arr.map(square)

// let arry2 = ["daksh", "deepak", "vansh", "devesh"]
// let arr1 = arry2.map(a => a.toUpperCase());
// console.log(arr1);

let arr = [1,2,3,4,5]
let max = 0
arr.map((a) => {
    if(max < a) {
        max = a
    }
})
console.log(max);

let data = [{
    "id": 1,
    "first_name": "Alano",
    "last_name": "Coneybeare",
    "email": "aconeybeare0@privacy.gov.au",
    "gender": "Male",
    "ip_address": "181.34.199.94"
  }, {
    "id": 2,
    "first_name": "Danny",
    "last_name": "Mathiot",
    "email": "dmathiot1@washingtonpost.com",
    "gender": "Female",
    "ip_address": "123.138.108.44"
  }, {
    "id": 3,
    "first_name": "Chickie",
    "last_name": "Aicheson",
    "email": "caicheson2@exblog.jp",
    "gender": "Female",
    "ip_address": "96.20.205.225"
  }, {
    "id": 4,
    "first_name": "Corny",
    "last_name": "McLeod",
    "email": "cmcleod3@redcross.org",
    "gender": "Male",
    "ip_address": "30.103.254.213"
  }, {
    "id": 5,
    "first_name": "Hector",
    "last_name": "Kitcherside",
    "email": "hkitcherside4@barnesandnoble.com",
    "gender": "Male",
    "ip_address": "0.239.106.126"
  }, {
    "id": 6,
    "first_name": "Berkley",
    "last_name": "Bragg",
    "email": "bbragg5@seattletimes.com",
    "gender": "Male",
    "ip_address": "2.39.172.39"
  }, {
    "id": 7,
    "first_name": "Jeffy",
    "last_name": "Kilgrove",
    "email": "jkilgrove6@gizmodo.com",
    "gender": "Male",
    "ip_address": "175.88.28.26"
  }, {
    "id": 8,
    "first_name": "Elston",
    "last_name": "Hirth",
    "email": "ehirth7@hc360.com",
    "gender": "Male",
    "ip_address": "124.10.56.29"
  }, {
    "id": 9,
    "first_name": "Ker",
    "last_name": "Cody",
    "email": "kcody8@blogger.com",
    "gender": "Male",
    "ip_address": "25.12.130.164"
  }, {
    "id": 10,
    "first_name": "Hana",
    "last_name": "Felix",
    "email": "hfelix9@wikia.com",
    "gender": "Genderfluid",
    "ip_address": "75.150.75.95"
  }]
  
let mail = data.map(a => a.email)
console.log(mail)

let m = 0;
let f = 0;
let gen = data.map((a) => {
    if(a.gender == "Male") {
        m += 1
    }
    else if(a.gender == "Female") {
        f+=1
    }
})
console.log(m,f)