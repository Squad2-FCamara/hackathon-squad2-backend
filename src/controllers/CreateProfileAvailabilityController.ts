import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProfileAvailabilityController {
  async handle(request: Request, response: Response) {
    const { day, hour, profileId } = request.body;

    const newAvailability = await prismaClient.profileAvailability.create({
      data:{
        availability:{
          create:{
            day: day,
            hour: hour,
          }
        },
        profile:{
          connect:{
            id: profileId
          }
        }
      }
    });
    
    return response.json(newAvailability);
  }
}