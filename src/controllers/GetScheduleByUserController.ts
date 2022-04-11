import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetScheduleByUserController {
  async handle(request: Request, response: Response) {

    const nome = request.params;
    const userId = Number(nome.userId);

    const users = await prismaClient.userSchedule.findMany({
      where:{
        scheduleId:2
      }
    })
    return response.json(users);
  }
}