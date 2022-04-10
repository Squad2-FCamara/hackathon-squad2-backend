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
import { GetProfileBySkillController } from "./controllers/GetProfileBySkillController";
import { GetProfileByNameController } from "./controllers/GetProfileByNameController";
import { JoinProfileRoleController } from "./controllers/JoinProfileRoleController";

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
const joinProfileRole  = new JoinProfileRoleController();

const getUserController = new GetUserController(); 
const getProfileBySkillController = new GetProfileBySkillController();
const getProfileByNameController = new GetProfileByNameController();


router.post('/user', createUser.handle);
router.post('/profile', createProfile.handle);
router.post('/skill', createSkill.handle);
router.post('/role', createRole.handle);
router.post('/availability', createAvailability.handle);
router.post('/schedule', createSchedule.handle);
router.post('/userwithschedule', createUserSchedule.handle);

router.post('/joinprofileskill', joinProfileSkill.handle);
router.post('/joinuserschedule', joinUserSchedule.handle);
router.patch('/join/profile/role', joinProfileRole.handle);

router.get('/users', getUserController.handle);
router.get('/users/skill/:skill', getProfileBySkillController.handle);
router.get('/users/nickname/:nickname', getProfileByNameController.handle);


export { router };