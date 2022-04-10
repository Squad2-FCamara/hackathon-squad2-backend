import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateUserScheduleController {
  async handle(request: Request, response: Response) {
    const { day, start_time, end_time, description, userId1 } = request.body;

    const newUserSchedule1 = await prismaClient.userSchedule.create({
      data: {
        schedule:{
          create: {
            day: day,
            start_time: start_time,
            end_time: end_time,
            description: description
          },
        },
        user:{
          connect: {
            id: userId1,
          }
        }
      }
    })

    return response.json(newUserSchedule1);
  }
}