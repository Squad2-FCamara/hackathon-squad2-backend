import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class JoinUserScheduleController {
  async handle(request: Request, response: Response) {
    const { scheduleId, userId } = request.body;

    const newUserSchedule = await prismaClient.userSchedule.create({
      data:{
        user:{
          connect:{
            id: userId
          },
        },
        schedule:{
          connect:{
            id: scheduleId
          }
        }
      }
    })
    return response.json(newUserSchedule);
  }
}