import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetProfileBySkillController {
  async handle(request: Request, response: Response) {

    const nome = request.params;
    console.log(nome.skill)

    const users = await prismaClient.skill.findMany({
      where:{
        name: nome.skill
      },
      select:{
        Profile:{
          select:{
            profile: true
          }
        }
      }
    })
    return response.json(users);
  }
}