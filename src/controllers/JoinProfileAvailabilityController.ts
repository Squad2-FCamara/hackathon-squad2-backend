import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class JoinProfileAvailabilityController {
  async handle(request: Request, response: Response) {
    const {availabilityId, profileId} = request.body;

    const newProfileAvailability = await prismaClient.profileAvailability.create({
      data:{
        profile:{
          connect:{
            id: profileId
          },
        },
        availability:{
          connect:{
            id: availabilityId
          }
        }
      }
    })
    return response.json(newProfileAvailability);
  }
}