// import { Request, Response } from "express";
// import { prismaClient } from "../database/prismaClient";

// export class GetProfileByIdController {
//   async handle(request: Request, response: Response) {

//     const profileId = await prismaClient.user.findUnique({
//       where:
//     }); 
    
//     const users = await prismaClient.profile.findMany({
//       where:{
//         id: profileId
//       },
//       select: {
//         nickname: true,
//         seniority: true,
//         description: true,
//         photo: true,
//         updated_at: true,
//         created_at: true,
//         ProfileSkill:{
//           select:{
//             skill:{
//               select:{
//                 name: true
//               }
//             }
//           }
//         },
//         Role:{
//           select:{
//             name: true
//           }
//         }
//       }
//     })
//     return response.json(users);
//   }
// }