import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetUserController {
  async handle(request: Request, response: Response) {

    const users = await prismaClient.user.findMany({
      select:{
        id: true,
        name: true,
        email: true,
        UserSchedule: {
          select:{
            schedule:{
              select: {
                id: true,
                day: true,
                start_time: true,
                end_time: true,
                description: true
              }
            },
          }
        },
        Profile: {
          select: {
            nickname: true,
            seniority: true,
            created_at: true,
            updated_at: true,
            description: true,
            photo: true,
            Address: true,
            Role: {
              select:{
                name: true
              }
            },
            ProfileSkill:{
              select: {
                skill: true
              }
            },
            ProfileAvailability:{
              select:{
                availability:{
                  select:{
                    day: true,
                    hour: true,
                  }
                }
              }
            }
          } 
        },
      }
    });
    return response.json(users);
  }
}