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

  public async findById(userId: number){
    const user = await prismaClient.user.findUnique({
      where :{
        id: userId
      }
    })
    
    return user;
  }

  public async findAll(){
    const user = await prismaClient.user.findMany({
      select:{
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
    })
    
    return user;
  }

  // public async findAll(){
  //   const user = await prismaClient.user.findMany({
  //     select:{
  //       name: true,
  //       email: true,
  //       UserSchedule: {
  //         select:{
  //           schedule:{
  //             select: {
  //               id: true,
  //               day: true,
  //               start_time: true,
  //               end_time: true,
  //               description: true
  //             }
  //           },
  //         }
  //       },
  //       Profile: {
  //         select: {
  //           nickname: true,
  //           seniority: true,
  //           created_at: true,
  //           updated_at: true,
  //           description: true,
  //           photo: true,
  //           Address: true,
  //           Role: {
  //             select:{
  //               name: true
  //             }
  //           },
  //           ProfileSkill:{
  //             select: {
  //               skill: true
  //             }
  //           },
  //           ProfileAvailability:{
  //             select:{
  //               availability:{
  //                 select:{
  //                   day: true,
  //                   hour: true,
  //                 }
  //               }
  //             }
  //           }
  //         } 
  //       },
  //     }
  //   })
    
  //   return user;
  // }

}
