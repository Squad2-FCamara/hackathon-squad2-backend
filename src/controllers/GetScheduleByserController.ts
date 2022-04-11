import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetScheduleByUserController {
  async handle(request: Request, response: Response) {

    const nome = request.params;
    const userId = Number(nome.userId);

    const users = await prismaClient.user.findMany({
      where:{
        AND:[
          {
            id: userId
          }
        ]
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