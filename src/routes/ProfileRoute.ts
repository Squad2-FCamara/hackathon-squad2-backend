import { Router } from "express";
import ProfileController from "../controllers/ProfileController";

const routerProfile = Router();

const profile = ProfileController;

routerProfile.post('/profile', profile.create);
routerProfile.put('/profile', profile.update);

routerProfile.get('/profile', profile.listAll);
routerProfile.get('/profile/:profileId', profile.findById);
routerProfile.get('/profile/name/:name', profile.findByName);
routerProfile.get('/profile/skill/:skill', profile.findProfileBySkill);
routerProfile.get('/profile/feature/:feature', profile.findProfileByFeature)

routerProfile.patch('/profile/role', profile.joinProfileRole);
routerProfile.post('/profile/skill', profile.joinProfileSkill);

routerProfile.post('/profile/address', profile.createAddress);
routerProfile.put('/profile/address', profile.updateAddress);

routerProfile.post('/profile/availability/', profile.createProfileAvailability);
routerProfile.put('/profile/availability', profile.updateProfileAvailability);
routerProfile.delete('profile/availability/:id', profile.deleteProfileAvailability)

export { routerProfile };
