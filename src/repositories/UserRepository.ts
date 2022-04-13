import { prismaClient } from "../database/prismaClient";

export default class UserRepository {
  public async create(name: string, email: string, password: string) {
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      }
    })

    return user;
  }

  public async findById(userId: number) {
    const user = await prismaClient.user.findUnique({
      where: {
        id: userId
      },
      select: {
        name: true,
        email: true
      }
    })

    return user;
  }

  public async findByName(name: string) {
    const user = await prismaClient.user.findMany({
      where: {
        name: {
          startsWith: name
        }
      },
      select: {
        name: true,
        email: true
      }
    })

    return user;
  }

  public async listAllUser() {
    const user = await prismaClient.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        UserSchedule: {
          select: {
            schedule: {
              select: {
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
              select: {
                name: true
              }
            },
            ProfileSkill: {
              select: {
                skill: true
              }
            },
            ProfileAvailability: {
              select: {
                availability: {
                  select: {
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

  public async update(name: string, email: string, password: string, userId: number) {
    const user = await prismaClient.user.update({
      where: {
        id: userId
      },
      data: {
        name: name,
        email: email,
        password: password
      }
    })

    return user;
  }

  public async delete(userId: number) {
    const user = await prismaClient.user.delete({
      where: {
        id: userId
      }
    })

    return user;
  }

  public async createUserSchedule(
    day: Date,
    start_time: Date,
    end_time: Date,
    description: string,
    userId1: number,
    userId2: number
  ) {
    const UserSchedule1 = await prismaClient.userSchedule.create({
      data: {
        schedule: {
          create: {
            day: day,
            start_time: start_time,
            end_time: end_time,
            description: description
          },
        },
        user: {
          connect: {
            id: userId1,
          }
        }
      }
    });

    const UserSchedule2 = await prismaClient.userSchedule.create({
      data: {
        schedule: {
          connect: {
            id: UserSchedule1.scheduleId
          }
        },
        user: {
          connect: {
            id: userId2,
          }
        }
      }
    })
    return UserSchedule2;
  }

  public async updateUserSchedule(
    day: Date,
    start_time: Date,
    end_time: Date,
    description: string,
    scheduleId: number,
  ) {
    const userSchedule = await prismaClient.schedule.update({
      where:{
        id: scheduleId
      },
      data:{
        day: day,
        start_time: start_time,
        end_time: end_time,
        description: description
      }
    });
    return userSchedule;
  }

  public async deleteUserSchedule(scheduleId: number) {
    const userSchedule = await prismaClient.userSchedule.findMany({
      where:{
        scheduleId: scheduleId
      },
    })

    for (let item of userSchedule){
      await prismaClient.userSchedule.delete({
        where:{
          id: item.id
        }
      })
    }

    // for (let i=0; i < userSchedule.length; i++){
    //   await prismaClient.userSchedule.delete({
    //     where:{
    //       id: userSchedule[i].id
    //     }
    //   })
    // }

    return userSchedule;
  }

  public async listUserByAvailability() {
    const user = await prismaClient.user.findMany({
      select: {
        name: true,
        id: true,
        email: true,
        Profile: {
          select: {
            ProfileAvailability: {
              select: {
                availability: {
                  select: {
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

  public async listUserBySchedule(userId: number) {
    const user = await prismaClient.user.findUnique({
      where:{
        id: userId
      },
      select: {
        name: true,
        id: true,
        email: true,
        UserSchedule:{
          select:{
            schedule:{
              include:{}
            }
          }
        }
      }
    })

    return user;
  }

}
