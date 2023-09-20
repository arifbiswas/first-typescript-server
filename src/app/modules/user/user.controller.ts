import { Request, Response,NextFunction } from "express";
import { createUserOnDb, getUserByIdFromDb, getUsersFromDb } from "./user.service";


export const getUsers = async (req : Request, res : Response,next : NextFunction) => {
    const users = await getUsersFromDb()
    res.status(200).json({
        status: 'success',
        data : users
    });
}
export const getUserById = async (req : Request, res : Response,next : NextFunction) => {
    const id : string = req.params.id;
    const user = await getUserByIdFromDb(id)
    res.status(200).json({
        status: 'success',
        data : user
    });
}
export const createNewUser = async (req : Request, res : Response,next : NextFunction) => {
    const user = await createUserOnDb(req.body)
    res.status(200).json({
        status: 'success',
        data : user
    });
}