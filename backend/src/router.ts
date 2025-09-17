import { Router } from "express";
import { addUser, deleteUser, getAll } from "./controller.js";


const  router = Router();

router.get("/users", getAll)
router.delete("/user/:id", deleteUser)
router.post("/user",addUser)


export default router