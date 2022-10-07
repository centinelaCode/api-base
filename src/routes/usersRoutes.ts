import { Router } from 'express';

import { 
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/usersControllers'

const routeUsers = Router();

routeUsers.post('/add-user', addUser)
routeUsers.get('/users', getUsers)
routeUsers.get('/user/:id', getUser)
routeUsers.put('/user/:id', updateUser)
routeUsers.delete('/user/:id', deleteUser)

export { routeUsers }