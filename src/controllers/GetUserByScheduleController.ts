import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetUserByScheduleController {
  async handle(request: Request, response: Response) {

    const parameters = request.params;
    const userId = Number(parameters.userId);
    const scheduleId = Number(parameters.scheduleId)
    const users = await prismaClient.userSchedule.findMany({
      where:{
        OR:[
          {
            scheduleId:scheduleId
          },
          {
            userId: userId
          }
        ] 
      },
      select:{
        user:{},
        schedule:{}
      }
    })
    return response.json(users);
  }
}