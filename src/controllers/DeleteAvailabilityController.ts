import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class DeleteAvailabilityController {
  async handle(request: Request, response: Response) {
    const { availabilityId } = request.body;

    const deleteAvailability = await prismaClient.availability.delete({
      where:{
        id: availabilityId
      }
    })
    return response.json(deleteAvailability);
  }
}