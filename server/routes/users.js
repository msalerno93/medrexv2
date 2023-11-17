import express from "express"
import {
    getUser,
    getUserPatient,
    addRemovePatient
} from "../controllers/users.js"
import { verifiedToken } from "../middleware/auth.js"

const router = express.Router()

