import db from "../config/db"

import bcrypt from "bcrypt"

const Schema = db.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birtday_Date: {
        type: Date,
        required: true,
    },
    email: {
    type: String,
    required: true,
    unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    permission_Type: {
        type: String,
        enum: ["ADM", "USR"],
        default: "USR",
    },
    phones: {
        type: Number,
        required: true,
    },
    addres: {
        type: Object,
        required: true,
    },
    house_number: {
        type: Number,
        required: true,
    }
})


userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.senhaCorreta = async function (senha) {
    return await bcrypt.compare(senha, this.password);
}

const User = db.model("User", userSchema);

export default User;