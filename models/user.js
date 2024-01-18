import { Schema, model, models } from "mongoose";


const UserSchema = new Schema({
    email:{
        type: String,
        unique:[true, "email already exists"],
        required:[true, "email is required!"],
    },
    username:{
        type:String,
        required: [true, "Username is required"],
    //    match //add regex here

    },
    image:{
        type: String
    }
},
{
    timestamps:true,
}
);


//next js syntax
const User = models.User || model("User", UserSchema);

export default User;