import { Router } from "express";
import { CreateAvailabilityController } from "./controllers/CreateAvailabilityController";
import { CreateProfileController } from "./controllers/CreateProfileController";
import { JoinProfileSkillController } from "./controllers/JoinProfileSkillController";
import { CreateRoleController } from "./controllers/CreateRoleController";
import { CreateScheduleController } from "./controllers/CreateScheduleController";
import { CreateSkillController } from "./controllers/CreateSkillController";
import { CreaterUserController } from "./controllers/CreateUserController";
import { CreateUserScheduleController } from "./controllers/CreateUserScheduleController";
import { JoinUserScheduleController } from "./controllers/JoinUserScheduleController";
import { GetUserController } from "./controllers/GetUserController";

const router = Router();

const createUser = new CreaterUserController();
const createProfile = new CreateProfileController();
const createSkill = new CreateSkillController();
const createRole = new CreateRoleController();
const createAvailability = new CreateAvailabilityController();
const createSchedule = new CreateScheduleController();
const createUserSchedule = new CreateUserScheduleController();

const joinProfileSkill = new JoinProfileSkillController();
const joinUserSchedule = new JoinUserScheduleController(); 

const getUserController = new GetUserController(); 

router.post('/user', createUser.handle);
router.post('/profile', createProfile.handle);
router.post('/skill', createSkill.handle);
router.post('/role', createRole.handle);
router.post('/availability', createAvailability.handle);
router.post('/schedule', createSchedule.handle);
router.post('/userwithschedule', createUserSchedule.handle);
router.post('/joinprofileskill', joinProfileSkill.handle);
router.post('/joinuserschedule', joinUserSchedule.handle);

router.get('/users', getUserController.handle);

export { router };