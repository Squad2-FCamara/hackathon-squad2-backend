import { Router } from "express";
import RoleController from "../controllers/RoleController";

const routerRole = Router();

const role = RoleController;

routerRole.post('/role', role.create);
routerRole.put('/role', role.update);
routerRole.delete('/role/:roleId', role.delete);
routerRole.get('/role', role.listAll);

export { routerRole };