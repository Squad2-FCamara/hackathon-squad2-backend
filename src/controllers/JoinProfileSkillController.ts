import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class JoinProfileSkillController {
  async handle(request: Request, response: Response) {
    const { skillId, profileId } = request.body;

    const newProfileSkill = await prismaClient.profileSkill.create({
      data:{
        profile:{
          connect:{
            id: profileId
          },
        },
        skill:{
          connect:{
            id: skillId
          }
        }
      }
    })
    return response.json(newProfileSkill);
  }
}