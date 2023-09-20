import { IUser } from "./user.interface";
import User from "./user.modal";

export const getUsersFromDb =async () : Promise<IUser[]> => {
    const users = await User.find()
    return users;
   }

export const getUserByIdFromDb =async (id : string) : Promise<IUser | null> => {
    const user = await User.findOne({id : id},{password : 1 , email : 1});
    return user;
   }

export const createUserOnDb =async (data : IUser) => {
  const alreadyHave = await User.find({id : data?.id || {roll : data?.roll}});
  // console.log(alreadyHave);
    if(alreadyHave.length === 0){
      const user = new User(data);
    const result =  await user.save();
    return result;
    }else{
      return {message : "User already exists"}
    }
   }

  