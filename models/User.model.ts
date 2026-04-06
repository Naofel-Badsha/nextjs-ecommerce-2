import mongoose from "mongoose";
import { tr, ur } from "zod/locales";
const userScrema = new mongoose.Schema({
    rele: {
        type: String,
        required: true,
        enum: ["admin", "user", "editor", "viewer" , "contributor", "moderator", "subscriber", "member", "guest", "manager", "operator", "analyst", "developer", "designer", "tester", "support", "sales", "marketing"],
        default: "user"
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false
    },
    avatar: {
        url: {
            type: String,
            trim: true
        },
        public_id: {
            type: String,
            trim: true
        },
    },
    isEmailVerified: {
        type: Boolean,
        default: false  
    },
    phone:{
        type: String,
        trim: true
    },
    address:{
        type: String,
        trim: true
    },
    deletedAt:{
        type: Date,
        default: null,
        index: true
    },
}, { timestamps: true });