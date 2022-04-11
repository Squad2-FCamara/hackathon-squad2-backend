import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetUserByScheduleController {
  async handle(request: Request, response: Response) {

    const nome = request.params;

    const users = await prismaClient.user.findMany({
      where:{
        id: Number(nome.userId)
      },
      select:{
        UserSchedule:{
          select:{
            schedule:{},
            user:{}
          }
        }
      }
    })
    return response.json(users);
  }
}