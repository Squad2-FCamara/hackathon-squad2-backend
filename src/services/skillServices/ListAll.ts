import SkillRepository  from '../../repositories/SkillRepository';

export default class ListAllService {
  private skillRepository: SkillRepository;

  constructor ( skillRepository: SkillRepository ){
    this.skillRepository = skillRepository;
  }

  public async execute() {
    return await this.skillRepository.listAll();
  }

}