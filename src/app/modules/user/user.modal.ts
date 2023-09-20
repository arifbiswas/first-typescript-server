import { Schema,model } from 'mongoose';
import { IUser } from './user.interface';
   // 2. Create a Schema corresponding to the document interface.
   const userSchema = new Schema<IUser>({
    id : {
            type : String,
            required : true,
            unique  : true,
    },
    roll : {
        type : Number,
        required : true,
        unique  : true,
    },
    password : {
        type : String,
        required : true,
        // unique  : true,
    },
    name : {
        firstName : {
            type : String,
              required : true,
        },
        middleName : {
            type : String,
        },
        lastName : {
            type : String,
            required : true,
        }
    },
    dateOfBirth : {
        type : String,
    },
    gender : {
        type : String,
        enum : ["male", "female"]
    },
    email : {
        type : String,
    },
    connectNo : {
        type : Number,
    },
   
  });


  const User = model<IUser>("User",userSchema);

  export default User;