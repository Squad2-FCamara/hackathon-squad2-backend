import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateAvailabilityController {
  async handle(request: Request, response: Response) {
    const { day, hour } = request.body;

    const newAvailability = await prismaClient.availability.create({
      data: {
        day: day,
        hour: hour
      }
    })
    return response.json(newAvailability);
  }
}