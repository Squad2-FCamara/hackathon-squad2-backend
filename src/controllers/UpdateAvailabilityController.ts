import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class UpdateAvailabilityController {
  async handle(request: Request, response: Response) {
    const { day, hour, availabilityId } = request.body;

    const updateAvailability = await prismaClient.availability.update({
      data:{
        day: day,
        hour: hour,
      },
      where:{
        id: availabilityId,
      }
    })
     
    return response.json(updateAvailability);
  }
}