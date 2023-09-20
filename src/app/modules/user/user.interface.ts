export interface IUser{
    id : string,
    roll : number,
    password : string,
    name : {
        firstName : string,
        middleName ?: string,
        lastName : string
    },
    dateOfBirth ?: string,
    gender : "male" | "female",
    email ?: string,
    connectNo : number,
   }