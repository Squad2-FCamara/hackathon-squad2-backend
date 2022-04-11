import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class UpdateSkillController {
  async handle(request: Request, response: Response) {
    const { skillId, name } = request.body;

    const updateSkill = await prismaClient.skill.update({
      where:{
        id: skillId
      },
      data:{
        name:name
      }
    })
     
    return response.json(updateSkill);
  }
}