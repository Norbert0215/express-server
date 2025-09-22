import { Router } from "express";
import { addUser, deleteUser, getAll, updateUser, getUser,updateFullUser } from "./controller.js";


const  router = Router();

router.get("/users", getAll)
router.delete("/users/:id", deleteUser)
router.post("/users",addUser)
router.patch("/users/:id",updateUser)
router.get("/users/:id", getUser)
router.put("/users/:id",updateFullUser)

export default router