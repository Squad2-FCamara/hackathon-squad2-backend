import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateScheduleController {
  async handle(request: Request, response: Response) {
    const { day, start_time, end_time, description } = request.body;

    const newSchedule = await prismaClient.schedule.create({
      data: {
        day: day,
        start_time: start_time,
        end_time: end_time,
        description: description
      }
    })

    return response.json(newSchedule);
  }
}