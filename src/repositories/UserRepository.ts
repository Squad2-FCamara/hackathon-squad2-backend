import { prismaClient } from "../database/prismaClient";

export default class UserRepository {
  public async create(name: string, email: string, password: string){
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      }
    })
    
    return user;
  }

  public async find(userId: number){
    const user = await prismaClient.user.findUnique({
      where :{
        id: userId
      }
    })
    
    return user;
  }
}
