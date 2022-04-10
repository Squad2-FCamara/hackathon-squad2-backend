import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateSkillController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const newSkill = await prismaClient.skill.create({
      data: {
        name: name
      }
    })
    return response.json(newSkill);
  }
}