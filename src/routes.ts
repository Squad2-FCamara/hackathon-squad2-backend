import { Router } from "express";
import { CreateAvailabilityController } from "./controllers/CreateAvailabilityController";
import { CreateProfileController } from "./controllers/CreateProfileController";
import { JoinProfileSkillController } from "./controllers/JoinProfileSkillController";
import { CreateRoleController } from "./controllers/CreateRoleController";
import { CreateScheduleController } from "./controllers/CreateScheduleController";
import { CreateSkillController } from "./controllers/CreateSkillController";
// import CreaterUserController from "./controllers/CreateUserController";
import { CreateUserScheduleController } from "./controllers/CreateUserScheduleController";
import { JoinUserScheduleController } from "./controllers/JoinUserScheduleController";
import { GetUserController } from "./controllers/GetUserController";
import { GetProfileBySkillController } from "./controllers/GetProfileBySkillController";
import { GetProfileByNameController } from "./controllers/GetProfileByNameController";
import { JoinProfileRoleController } from "./controllers/JoinProfileRoleController";
import { JoinProfileAvailabilityController } from "./controllers/JoinProfileAvailabilityController";
import { CreateProfileAvailabilityController } from "./controllers/CreateProfileAvailabilityController";
import { UpdateProfileController } from "./controllers/UpdateProfileController";
import { UpdateAvailabilityController } from "./controllers/UpdateAvailabilityController";
import { CreateProfileAddressController } from "./controllers/CreateProfileAddressController";
import { DeleteAvailabilityController } from "./controllers/DeleteAvailabilityController";
import CreateUserController from "./controllers/CreateUserController";
import { UpdateSkillController } from "./controllers/UpdateSkillController";
import { GetUserByScheduleController } from "./controllers/GetUserByScheduleController";

const router = Router();

const createUser = CreateUserController;

const createProfile = new CreateProfileController();
const createSkill = new CreateSkillController();
const createRole = new CreateRoleController();
const createAvailability = new CreateAvailabilityController();
const createSchedule = new CreateScheduleController();
const createUserSchedule = new CreateUserScheduleController();

const createProfileAvailabilityController = new CreateProfileAvailabilityController();
const createProfileAddressController = new CreateProfileAddressController();

const joinProfileSkill = new JoinProfileSkillController();
const joinUserSchedule = new JoinUserScheduleController();
const joinProfileRole  = new JoinProfileRoleController();
const joinProfileAvailabilityController = new JoinProfileAvailabilityController();

const getUserController = new GetUserController(); 
const getProfileBySkillController = new GetProfileBySkillController();
const getProfileByNameController = new GetProfileByNameController();
const getUserByScheduleController = new GetUserByScheduleController();

const updateProfileController = new UpdateProfileController();
const updateAvailabilityController = new UpdateAvailabilityController();
const updateSkillController = new UpdateSkillController();

const deleteAvailabilityController = new DeleteAvailabilityController();

router.post('/user', createUser.create);
router.post('/profile', createProfile.handle);
router.post('/skill', createSkill.handle);
router.post('/role', createRole.handle);
router.post('/availability', createAvailability.handle);
router.post('/schedule', createSchedule.handle);
router.post('/user/schedule', createUserSchedule.handle);

router.post('/join/profile/skill', joinProfileSkill.handle);
router.post('/join/user/schedule', joinUserSchedule.handle);
router.patch('/join/profile/role', joinProfileRole.handle);
router.post('/join/profile/availability', joinProfileAvailabilityController.handle);
router.put('/profile/address', createProfileAddressController.handle);

router.post('/profile/availability', createProfileAvailabilityController.handle);

router.get('/users', getUserController.handle);
router.get('/users/skill/:skill', getProfileBySkillController.handle);
router.get('/users/nickname/:nickname', getProfileByNameController.handle);
router.get('/user/schedule/:userId', getUserByScheduleController.handle);

router.put('/profile', updateProfileController.handle);
router.put('/availability', updateAvailabilityController.handle);
router.put('/skill', updateSkillController.handle);

router.delete('/availability', deleteAvailabilityController.handle);

export { router };