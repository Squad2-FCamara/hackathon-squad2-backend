import { Router } from "express";
import ProfileController from "../controllers/ProfileController";

const routerProfile = Router();

const profile = ProfileController;

routerProfile.post('/profile', profile.create);
routerProfile.put('/profile', profile.update);
routerProfile.get('/profile/:profileId', profile.findById);
routerProfile.get('/profile/name/:name', profile.findByName);
routerProfile.get('/profile', profile.findAllUser);
routerProfile.patch('/profile/role', profile.joinProfileRole);
routerProfile.post('/profile/skill', profile.joinProfileSkill);
routerProfile.get('/profile/skill/:skill', profile.findProfileBySkill);

export { routerProfile };
