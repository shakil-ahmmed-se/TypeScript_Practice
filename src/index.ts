// console.log('Hello world this message')

let names: string[] = ['Mario', 'Karim', 'Rahim']
let age: number[] = [19, 20, 30]

names.push('Rana')
age.push(27)

console.log(names)
// console.log(age)

// objects 

let users = {firstName: 'John', lastName: 'William', age:25}

users.firstName = 'Karim'

// console.log(users)

// Functions

function addTowNumber(a:number, b:number):number {
    return a + b
}

const result = addTowNumber(30 ,20)
// console.log(result)


const substractTowNumber =(a:number, b:number):number =>{
    return a - b
}

const subResult = substractTowNumber(30 ,10)


function addAllNumber (items:number[]){
    const total = items.reduce((a,b) => (a + b), 0)
    console.log(total)
}

addAllNumber([10, 20, 30, 40, 50, 60, 70, 80])

// return type inference

function formatedGreateing(name: string, greating: string):string{
    return `${greating}, ${name}`
}

const great = formatedGreateing('Mario', 'Good Morning')
console.log(great)

// any type 

let he:any
let hello


// any type in arrays

let numbers:any[]


// tuples
let person :[string, number, boolean] =['Mario', 12, true]

// tuples examples

function useCoods():[number, number] {
    const lat = 100
    const lng = 200

    return [lat, lng]
}

const [lat, lng] = useCoods()

// named tuples

let user : [name: string , age: number]

user = ['MarioDev', 54]

console.log(user[0])

// interfaces

interface Author{
    name: string,
    avatar: string 
}

const authorOne: Author ={name:'Karim Benzama', avatar:'/img/avatar.png'}

interface Post{
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author,
}

const postOne : Post={
    title: 'My first post',
    body: 'This is the post descriptions for the body',
    tags: ['webdev', 'hello', 'python'],
    create_at: new Date(),
    author: authorOne
}

// as function argurment types 

function CreatePost(post: Post):void{
    console.log(`Created post ${post.title} by ${post.author.name}`)
}

CreatePost(postOne)

// interfaces with array


let posts: Post[] = [];

posts.push(postOne)


// types aliases

type Rgb = [number, number, number]

function getRandomColor(): Rgb{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()

console.log(colorOne, colorTwo)

// objects literal types

type User ={
    name: string
    score: number
}

const userOne: User = {name: 'Mario', score: 100}
const userTwo : User = {name: 'Karim Benzama', score: 250}

function formatUser(user: User): void {
    console.log(`${user.name}: ${user.score}`)
}
formatUser(userTwo)
formatUser({name:'Aryan', score: 200})