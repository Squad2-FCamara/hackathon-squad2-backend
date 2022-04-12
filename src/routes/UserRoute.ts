import { Router } from "express";
import UserController from "../controllers/UserController";

const routerUser = Router();

const user = UserController;

routerUser.post('/user', user.create);
routerUser.get('/user/id/:userId', user.findUserById);
routerUser.get('/user/name/:name', user.findUserByName);
routerUser.get('/user', user.findAllUser);
routerUser.put('/user', user.update);
routerUser.delete('/user/:userId', user.delete);
routerUser.post('/user/schedule', user.createUserSchedule);
routerUser.put('/user/schedule', user.updateUserSchedule);
routerUser.delete('/user/schedule/:userSchedule', user.deleteUserSchedule);

export { routerUser };