import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProfileAddressController {
  async handle(request: Request, response: Response) {
    const { street, number, cep, country, state, city, profileId } = request.body;

    const newProfileAddress = await prismaClient.profile.update({
      where:{
        id: profileId,
      },
      data:{
        Address:{
          create:{
            street: street,
            number: number,
            cep: cep,
            country: country,
            state: state,
            city: city
          }
        }
      }
    })
    return response.json(newProfileAddress);
  }
}