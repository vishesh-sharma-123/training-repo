const t:string = "hello";
//union
const c: number | string = 10;

enum Month{
    Jan,Feb,March,April
}

const p:Month = Month.Jan;

type User = {
    name : string,
    age: number,
    email?:string
    
}

const u: User = {
    name:"Vishesh",
    age: 10,
    
}

type ContactDetails = {
    email: string,
    phone: number
}

type PersonalDetails = {
    name: string;
    dob: Date;
}

type identity = {
    id: number;
}

type Customer = ContactDetails & PersonalDetails;
type Employee = ContactDetails & PersonalDetails & identity;

//const cust : Customer = {}
//const emp : Employee = {}

const element = document.querySelector("input") as HTMLInputElement;
const ele = <HTMLImageElement>document.querySelector("img")