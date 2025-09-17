import {createUser, getUsers, removeUser,modifiedUser} from "./model.js"
import express from "express"
import { error } from 'console';

export const getAll = async  (req:express.Request,res:express.Response) =>{
    try{
        const data= await getUsers();
        res.status(200).type("application/json").send(data);
    }catch(error){
        res.status(500).type("application/json").send({error: "not succesful"})
    }
   
  
}

export const deleteUser = async (req:express.Request,res:express.Response) =>{
    const id = parseInt(req.params.id!);
    const result = await removeUser(id)
    if(result) res.status(200).type("application/json").send({message: "removed succesfully"});
    else res.status(500).type("application/json").send({error: "failed to remove"});

}

export const addUser = async (req:express.Request,res:express.Response) =>{
    const newUser = req.body;
    try{
        const user =await createUser(newUser)
        res.status(201).type("application/json").send(user)
    }catch(error){
        res.status(500).type("application/json").send("nem jó")
    }

}


export const updateUser = async(req:express.Request, res:express.Response)=>{
    const updateUser = req.body;
    try{
        const id = parseInt(req.params.id!);
        const user = await modifiedUser(id,updateUser);
        
        res.status(201).type("application/json").send({message: "updated succesfully"});
    }catch(error){
        res.status(500).type("application/json").send({error: "failed to update"});
    }
        
    

}