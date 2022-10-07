import { Request, Response } from 'express';

/*
! -> Controller for create new user 
*/
const addUser = (req:Request, res:Response) => {
  res.json({msg: 'Desde POST addUser'})
}



/*
! -> Controller for get all uses
*/
const getUsers = (req:Request, res:Response) => {
  res.json({msg: 'Desde GET getUsers'})
}




/*
! -> Controller for get one user by ID 
*/
const getUser = (req:Request, res:Response) => {
  res.json({msg: 'Desde GET getUser'})
}



/*
! -> Controller for update one user by ID
*/
const updateUser = (req:Request, res:Response) => {
  res.json({msg: 'Desde PUT updateUser'})
}



/*
! -> Controller for delete one user by ID
*/
const deleteUser = (req:Request, res:Response) => {
  res.json({msg: 'Desde DELETE deleteUser'})
}

export {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
}