let arr = [{
        "name": "Rahul Sharma",
        "address": "A-101, Sector 15, Noida",
        "age": 28,
        "salary": 55000
    },
    {
        "name": "Priya Verma",
        "address": "B-203, Malviya Nagar, Delhi",
        "age": 26,
        "salary": 62000
    },
    {
        "name": "Amit Joshi",
        "address": "H-4, Model Town, Lucknow",
        "age": 32,
        "salary": 75000
    },
    {
        "name": "Neha Singh",
        "address": "C-302, Baner, Pune",
        "age": 30,
        "salary": 67000
    },
    {
        "name": "Karan Mehta",
        "address": "D-15, Satellite Road, Ahmedabad",
        "age": 27,
        "salary": 60000
    },
    {
        "name": "Simran Kaur",
        "address": "E-22, South City, Ludhiana",
        "age": 29,
        "salary": 58000
    },
    {
        "name": "Vikram Thakur",
        "address": "F-3, Jayanagar, Bangalore",
        "age": 35,
        "salary": 80000
    },
    {
        "name": "Meena Nair",
        "address": "G-18, Kakkanad, Kochi",
        "age": 33,
        "salary": 72000
    },
    {
        "name": "Ravi Dubey",
        "address": "H-201, Ashok Nagar, Jaipur",
        "age": 31,
        "salary": 69000
    },
    {
        "name": "Anjali Deshmukh",
        "address": "I-12, Camp Road, Nagpur",
        "age": 25,
        "salary": 56000
    }
]
let sum = 0;
arr.map(element => {
    sum = sum + element.salary
})
console.log('hello world')
console.log(sum)