import { Router } from "express";
import UserController from "../controllers/UserController";

const routerUser = Router();

const user = UserController;

routerUser.post('/user', user.create);
routerUser.get('/user/id/:userId', user.findUserById);
routerUser.get('/user/name/:name', user.findUserByName);
routerUser.get('/user', user.listAllUser);
routerUser.put('/user', user.update);
routerUser.delete('/user/:userId', user.delete);

routerUser.post('/user/schedule', user.createUserSchedule);
routerUser.put('/user/schedule', user.updateUserSchedule);
routerUser.get('/user/schedule/:userId', user.listUserBySchedule);
routerUser.delete('/user/schedule/:scheduleId', user.deleteUserSchedule);
routerUser.get('/user/schedule', user.listAllUserBySchedule);

routerUser.get('/user/availability/:userId', user.listUserByAvailability);
routerUser.get('/user/availability/', user.listAllUserByAvailability);

routerUser.post('/user/contact', user.addContact);
routerUser.delete('/user/contact/:userProfileId', user.removeUserProfile);

export { routerUser };