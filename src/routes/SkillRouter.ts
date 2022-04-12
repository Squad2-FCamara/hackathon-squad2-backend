import { Router } from "express";
import SkillController from "../controllers/SkillController";

const routerSkill = Router();

const skill = SkillController;

routerSkill.post('/skill', skill.create);
routerSkill.get('/skill', skill.findAllSkill);
routerSkill.get('/skill/Id/:skillId', skill.findById);
routerSkill.put('/skill', skill.update);
routerSkill.delete('/skill/:skillId', skill.delete);

export { routerSkill };
