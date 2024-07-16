import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://media.istockphoto.com/id/1337144146/fr/vectoriel/vecteur-dic%C3%B4ne-de-profil-davatar-par-d%C3%A9faut.jpg?s=1024x1024&w=is&k=20&c=XM2Gji0NqwLiwD-T2ZUXBS409qldkRUSth7kj8aObn8="
    },
},{timestamps:true})

const User = mongoose.model("User", userSchema)

export default User;