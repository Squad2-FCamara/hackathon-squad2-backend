import RoleRepository from "../../repositories/RoleRepository";

export default class UpdateRoleService {
  private roleRepository: RoleRepository;

  constructor ( roleRepository: RoleRepository ){
    this.roleRepository = roleRepository;
  }

  public async execute(nome: string, roleId: number){
    return await this.roleRepository.update(nome, roleId);
  }
  
}