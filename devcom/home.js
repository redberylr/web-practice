
// // fuction decalaration
// // function sayHello() {
// //     console.log("hello there");
// // }

// // function invocation
// // sayHello()
// // sayHello()
// // sayHello()

// // parametric function
// // function times2(a) {
// //     console.log(a * 2);
// // }

// // times2(3)
// // times2(6)
// // times2(5)


// // function with return statement
// // function multiply(a, b) {

// //     return a * b
// // }


// // const result = multiply(5, 8)

// // console.log(result);

// // console.log(multiply(3, 5));
// // console.log(multiply(9,0));

// // non parametric function
// // function subtract() {

// //      const x = Number(prompt('Enter a number'));
// //      const y = Number(prompt('Enter another number'));

// // //      return x - y
// // //  }

// // // console.log(subtract());

// // function cat(){
// //     console.log('hello pussy cat') 
// // }
// // cat()
// // cat()
// // cat()

// // function concatination (a){
// //     console.log(("umar " + a).toUpperCase())

// // }
// // concatination("yusuf")
// // concatination('Kokai')
// // concatination('Ganduje')

// // function names(x, y){
// //     return x + y
// // }
// // console.log(names('umar ', 'Yusuf'))

// // const u = 'Umar' , y = 'Yusuf'
// // function name(u, y){
// //     return u + y
// // }

// // console.log( name(u, y))
 
// // function identity(){
// //     const firstname = prompt('Enter your name ')
// //     const surname = prompt('Enter your surname')
// //      return firstname + ' ' + surname
// // }

// // console.log( identity().toUpperCase() );


// // const list = ['one', 'apple', 'banana', 'cashew', 'carrot', 'tomato', 'onion']
// // const users = [
// //     {id: 1, name: "ummu"},
// //     {id: 2, name: "alpha"},
// //     {id: 3, name: "maryam"},
// //     {id: 4, name: "redberyl"},
// //     {id: 5, name: "ruqayya"},
// // ]

// // // for(let i=0; i<list.length;i++) {
// // //     console.log(i, `list[${i}]`, list[i]);
// // // }

// // // for(let i=0; i < users.length; i++) {
// // //     console.log(users[i].id, users[i].name);
// // // }

// // list.forEach(function(a, i) {
// //     console.log(a, i);
// // })

// // users.forEach((u ) => {
// //     console.log(u.name);
// // })


// // function add(a, b) {
// //     return a + b
// // }

// // console.log(add(3, 8));

// // // function expression
// // const add1 = function(a, b) {
// //     return a + b
// // }

// // const sum = (a, v) => {
// //     return a * v
// // }

// // const things = ['umbrella','fan', 'cup', 'lamp', 'jug']

// // things.forEach(function(e){
// //     console.log(e)
// // })

// // const list = ['mist', 'king', 'love', 'help']

// // list.forEach(function(event,i){
// //     console.log(event,i)
// // })

// // const identity = [
// //     {'id': 1, name: 'Umar'},
// //     {'id': 2, surname: 'Yusuf'},
// //     {'id': 3, age: '26' }
// // ]

// // identity.forEach(function(u){
// //     console.log(u)
// //     console.log(u.id)
// //     console.log(u.name)
// // })

// //  list.forEach((u)=>{
// //     console.log(u)
// // })

// // const help = things.forEach(function(t){
// //     console.log(t)
// // })

// /*
//     JavaScript Object
//     - object literals
//     - Object intance
//     - classes
// */


// // object literal notation
// const car = {
//     name: 'Toyota Camry 2022', 
//     color: 'black', 
//     tires: 4,
//     isOn: false,
//     turnOn: function() {
//         this.isOn = true
//         console.log('car is turned on');
//     },
//     turnOff() {
//         this.isOn = false
//         console.log('car is turned off');
//     },
//     setName(newName) {
//         this.name = newName
//     },
//     getName() {
//         return this.name
//     }

// }

// // console.log(car.name);
// // car.setName('Tesla Model Y');
// // console.log(car.getName());

// const person = {
//     firstName: "Umar",
//     lastName: "Yusuf",
//     address: {
//         country: 'Nigeria',
//         state: 'Kaduna',
//         city: 'Barnawa',
//         street: 'NO 12 Main Road',
//         location: {
//             lat: 132213.4,
//             long: 32313.132
//         },
//         pobox: '54 mint box'
//     }, 
//     hairColor: 'black',
//     level: 300,
//     changelocation(long, lat) {
//         this.address.location.long = long
//         this.address.location.lat = lat
//     },
//     getName() {
//         return this.firstName + ' ' + this.lastName
//     },
//     changeName(first,last){
//         this.firstName = first
//         this.lastName = last
//     },
// }

// // console.log(person.getName());
// // console.log(person.changeName('ruqayya','umar'))
// // console.log(person.getName())

// const gun = {
//     name: 'Ak47',
//     color: ['brown','black'],
//     description: {
//         bullets: "8",
//         metal: "brass"
//     },
//     changeColor(colour){
//         this.color = colour
//     },
//     getColor(){
//         return this.color
//     }
// }
// // console.log(gun.color)
// // console.log(gun.changeColor(['red', 'pink']))
// // console.log(gun.getColor())
// // console.log(gun.description.metal)

// const animals = {
//     name: "puppy",
//     age: "5",
//     limbs: "4",
//     dog:{
//        names:["chiwawa","wolf"]
       
//     },
//     changeNames(e){
//         this.names = e
//     },
//     getNames(){
//         return this.names
//     },
//     country: "North America"
// }

// // console.log(animals.dog.names)
// // console.log(animals.changeNames(['buddy','max']))
// // console.log(animals.getNames())


// // Object instance
// const dog = new Object()

// // dog.name = "Jack"
// // dog.class = 'Animal'
// // dog.legs = 4
// // dog.color = 'brown'
// // dog.bark = function() {
// //     console.log('woo woo!!!!')
// // }
// // dog.changeName = function(newName) {
// //    this.name = newName 
// // }
    
// // dog.changeName('puppy')
// // console.log(dog);
// // dog.bark()

// // const bike = {
// //     name: "Jincheng",
// //     tires: 2,
// //     color: 'black'
// // }

// // bike.drive = function() {
// //     console.log('driving!!!!!!!!');
// // }


// // bike.drive()
// // console.log(bike);

// // const man  = new Object()
// // man.name = "umar",
// // man.legs = 2,

// // man.face = function(){
// //     console.log('smile')
// // }
// // console.log(man)
// // man.face()

// // const vegetables = new Object()

// // vegetables.color = 'green'
// // vegetables.quantity = 6
// // vegetables.property = function(){
// //     console.log('cooked')
// // }
// // vegetables.changeColor = function(e){
// //     this.color = e
// // }
// // console.log(vegetables.changeColor('red'))
// // console.log(vegetables)
// // vegetables.property()
// // const fan =  new Object()
// // fan.type = 'AI'
// // fan.color = 'black'
// // fan.size = 'small'
// // fan.palest = 3
// // fan.button = function(){
// //     console.log('switch on')
// // }
// // fan.changeColor = function(event){
// //     this.color = event
// // }
// // console.log(fan.changeColor('white'))
// // console.log(fan)
// // fan.button()

// class Car {
//     tires = 4
//     name = ''
//     model = ''
//     year = 2022
//     brand = ''

//     constructor(name, model, brand) {
//         this.name = name
//         this.model = model
//         this.brand = brand
//     }

//     setName(name) {
//         this.name = name
//     }

//     getName() {
//         return this.name
//     }

//     setYear(year) {
//         this.year = year
//     }

//     getYear() {
//         return this.year
//     }

//     setModel(model) {
//         this.model = model
//     }

//     getModel() {
//         return this.model
//     }

//     setBrand(brand) {
//         this.brand = brand
//     }

//     getBrand() {
//         return this.brand
//     }
// }

// const tesla = new Car('Tesla Roadster', 'Model 2022', 'Tesla')
// // tesla.setBrand('Tesla')
// // tesla.setModel('Roadster')
// // tesla.setYear('2022')
// // tesla.setName('Tesla Roadster 2022')

// console.log(tesla.getModel());


// const toyota = new Car('Toyota Camry', 'Model 2022', 'Toyota')

// console.log(toyota.getName());

// class clothing {
//     dress = ''
//     designer = ''
//     color = ''
//     season = '' 
    
//     constructor (designer,season,color,dress){
//         this.designer = designer
//         this.season = season
//         this.color = color
//         this.dress = dress
//     }

//     setDesigner(designer){
//         this.designer = designer
//     }

//     getDesigner(){
//         return this.designer
//     }

//     setSeason(season){
//         this.season = season 
//     }

//     getSeason(){
//         return this.season
//     }

//     setColor(color){
//         this.color = color
//     }

//     getColor(){
//         return this.color
//     }

//     setDress(dress){
//         this.dress = dress
//     }

//     getDress(){
//         return this.dress
//     }
// } 

// const outfit = new clothing('ruqayya','summer','yellow','garden dress')
// console.log(outfit.getSeason())

const items = [
    'Apple', 
    "Banana", 
    "Carrot", 
    "Tomato", 
    "Cucumber",
    "Onion",
    "Pepper",
    "chilli"
]

const arr = []

// for(let i=0; i<items.length; i++) {
//     console.log(items[i]);

//     const obj = {sn: i + 1, item: items[i]}

//     arr.push(obj)
// }

// items.forEach((element, i) => {
//     const obj = {sn: i + 1, item: element}
//     arr.push(obj)
// })

// console.log(arr);
const places = [
    
    'Market',
    'school',
    'farm',
    'grocery store'

]

const list = []

    // for(let i=0; i<places.length; i++){
    //     console.log(places[i])

    //     const syn = {sn: i + 1, places: places[i]}

    //     list.push(syn)
    // }
places.forEach((element, i) => {
    const syn = {sn: i + 1, places: element} 
    list.push(syn)

}) 
    // console.log(list)

const place = [
    {
        sn: 1,
        places: "Market"
    },
    {
        sn: 2,
        places: "school"
    },
    {
        sn: 3,
        places: "farm"
    },
    {
        sn: 4,
        places: "grocery store"
    }
]

    // for(let i = 0; i<place.length; i++){
    //     console.log(place[i].places)
    // }

// place.forEach((element) => {
//     console.log(element.places)
// })

/*
Higher Order Function
 - map
 - reduce
 - filter
 - find
 - some
 - every
*/

// map
const things = ['Books', 'Pen', 'Pencils', 'Textbooks', "Marker"];

const result = []

for(let i=0; i<things.length; i++) {
    const data = {id: i + 1, item: things[i], category: 'school'}

    result.push(data)
}


console.log(result);

const res = things.map((el, i) => {
    const data = {id: i + 1, item: el, category: 'school'}

    return data
})

console.log(res);

const cutlary = ['knife', 'spoon', 'fork', 'serving spoon']

for(let i =0; i<cutlary.length; i++){

}

const output = cutlary.map((element,i) =>{
    const info = {id: i + 1, item:element,category:'kitchen'}
    return info

})

console.log(output)

const final = cutlary.map((e,i) =>{
    const result = {id: i + 1, item: e, category: 'kitchen'}
    return result
})
console.info(final)

const end = cutlary.map((event,i) =>{
   return {id: i + 1, item: event, category: 'kitchen'}
})

console.log(end)