import { prismaClient } from "../database/prismaClient";

export default class ProfileRepository {
  public async create(
    nickname: string,
    seniority: string,
    description: string,
    photo: string,
    userId: number
  ) {
    const profile = await prismaClient.profile.create({
      data: {
        nickname: nickname,
        seniority: seniority,
        description: description,
        photo: photo,
        userId: userId
      }
    })

    return profile;
  }

  public async update(
    nickname: string,
    seniority: string,
    description: string,
    photo: string,
    profileId: number
  ) {
    const profile = await prismaClient.profile.update({
      where: {
        id: profileId
      },
      data: {
        nickname: nickname,
        seniority: seniority,
        description: description,
        photo: photo
      }
    })

    return profile;
  }

  public async findById(profileId: number) {
    const profile = await prismaClient.profile.findUnique({
      where: {
        id: profileId
      },
      select: {
        nickname: true,
        seniority: true,
        description: true,
        updated_at: true,
        photo: true,
      }
    })

    return profile;
  }

  public async findByName(name: string) {
    const profiles = await prismaClient.profile.findMany({
      where: {
        nickname: {
          contains: name
        }
      },
      select: {
        ProfileSkill: {
          select: {
            profile: true
          }
        }
      }
    })

    return profiles;
  }

  public async listAll() {
    const profile = await prismaClient.profile.findMany({
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
                start_time: true,
                end_time: true
              }
            }
          }
        },
      }
    })

    return profile;
  }

  public async joinProfileRole(profileId: number, roleId: number) {
    const profileRole = await prismaClient.profile.update({
      where: {
        id: profileId
      },
      data: {
        roleId: roleId
      }
    })
    return profileRole;
  }

  public async joinProfileSkill(profileId: number, skillId: number) {
    const profileRole = await prismaClient.profileSkill.create({
      data: {
        profile: {
          connect: {
            id: profileId
          },
        },
        skill: {
          connect: {
            id: skillId
          }
        }
      }
    })
    return profileRole;
  }

  public async findProfileBySkill(name: string) {
    const profile = await prismaClient.profileSkill.findMany({
      where: {
        skill: {
          name: name
        }
      },
      select: {
        profile: {
          select: {
            nickname: true,
            description: true,
            photo: true,
            seniority: true,
            updated_at: true,
            Role: {
              select: {
                name: true
              }
            },
            ProfileSkill: {
              select: {
                skill: {
                  select: {
                    name: true
                  }
                }
              }
            }
          }
        }
      }
    });
    return profile;
  }

  public async createProfileAvailability(day: Date, start_time: Date, end_time: Date, profileId: number) {
    const profileAvailability = await prismaClient.profileAvailability.create({
      data: {
        availability: {
          create: {
            day: day,
            start_time: start_time,
            end_time: end_time
          }
        },
        profile: {
          connect: {
            id: profileId
          }
        }
      }
    });

    return profileAvailability;
  }

  public async updateProfileAvailability(day: Date, start_time: Date, end_time: Date, profileAvailabilityId: number) {
    const profileAvailability = await prismaClient.profileAvailability.update({
      where: {
        id: profileAvailabilityId
      },
      data: {
        availability: {
          update: {
            day: day,
            start_time: start_time,
            end_time: end_time
          }
        }
      }
    });
    return profileAvailability;
  }

  public async deleteProfileAvailability(profileAvailabilityId: number) {
    const user = await prismaClient.user.delete({
      where: {
        id: profileAvailabilityId
      }
    })

    return user;
  }

  public async createAddress(
    profileId: number,
    street: string,
    number: number,
    cep: string,
    country: string,
    state: string,
    city: string
  ) {
    const address = await prismaClient.profile.update({
      where: {
        id: profileId
      },
      data: {
        Address: {
          create: {
            street: street,
            number: number,
            cep: cep,
            country: country,
            city: city,
            state: state
          }
        }
      }
    });
    return address;
  }

  public async updateAddress(
    profileId: number,
    street: string,
    number: number,
    cep: string,
    country: string,
    state: string,
    city: string
  ) {
    const address = await prismaClient.profile.update({
      where: {
        id: profileId
      },
      data: {
        Address: {
          update: {
            street: street,
            number: number,
            cep: cep,
            country: country,
            state: state,
            city: city
          }
        }
      }
    });
    return address;
  }

  public async findProfileByFeature(name: string) {
    const profile = await prismaClient.profile.findMany({
      where: {
        OR: [
          {
            nickname: {
              contains: name
            }
          },
          {
            seniority: {
              contains: name
            }
          },
          {
            Role: {
              name: {
                contains: name
              }
            }
          },
          {
            ProfileSkill: {
              some: {
                skill: {
                  name: {
                    contains: name
                  }
                }
              }
            }
          }
        ]
      },
      select: {
        nickname: true,
        description: true,
        photo: true,
        seniority: true,
        updated_at: true,
        Role: {
          select: {
            name: true
          }
        },
        ProfileSkill: {
          select: {
            skill: {
              select: {
                name: true
              }
            }
          }
        }

      }
    });
    return profile;
  }

}