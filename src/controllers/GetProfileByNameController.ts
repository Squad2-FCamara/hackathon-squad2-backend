import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetProfileByNameController {
  async handle(request: Request, response: Response) {

    const nome = request.params;
    console.log(nome.nickname)

    const users = await prismaClient.profile.findMany({
      where:{
        nickname: nome.nickname
      },
      select: {
        nickname: true,
        seniority: true,
        description: true,
        photo: true,
        updated_at: true,
        created_at: true,
        ProfileSkill:{
          select:{
            skill:{
              select:{
                name: true
              }
            }
          }
        },
        Role:{
          select:{
            name: true
          }
        }
      }
    })
    return response.json(users);
  }
}