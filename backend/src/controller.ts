import { error } from "console";
import {createUser, getUsers, removeUser,modifiedUser, getSinlgeUser, modifiedFullUser} from "./model.js"
import express, { response } from "express"


export const getAll = async  (req:express.Request,res:express.Response) =>{
    try{
        const data= await getUsers();
        res.status(200).type("application/json").send(data);
    }catch(error){
        res.status(500).type("application/json").send({error: "not succesful"})
    }
   
  
}

export const getUser = async  (req:express.Request,res:express.Response) =>{
    const id = parseInt(req.params.id!)
    try{
        const data= await getSinlgeUser(id);
        if(data.length === 0) res.status(400).type("application/json").send({error: "nincs ilyen felhasználó"})
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
        res.status(500).type("application/json").send({error: "nem jó"})
    }

}


export const updateUser = async(req:express.Request, res:express.Response)=>{
    const updateUser = req.body;
    const id = parseInt(req.params.id!, 10);
    try{
        const result = await modifiedUser(id,updateUser)
        const response = result ? {message:" Succesful operation"} :{error: "Failed operation"}
        
        res.status(201).type("application/json").send(response);
    }catch(error){
        res.status(500).type("application/json").send(response);
    }
        
}

export const updateFullUser = async(req:express.Request, res:express.Response)=>{
    const id = parseInt(req.params.id!, 10);
    const user = req.body
    try{
        const result = await modifiedFullUser(id,user)
        const response = result ? {message:" Succesful operation"} :{error: "Failed operation"}
        
        res.status(201).type("application/json").send(response);
    }catch(error){
        res.status(500).type("application/json").send(response);
    }
}