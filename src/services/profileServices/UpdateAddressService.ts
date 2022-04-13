import ProfileRepository from "../../repositories/ProfileRepository";

export default class UpdateAddressService {
  private profileRepository: ProfileRepository;

  constructor ( profileRepository: ProfileRepository ){
    this.profileRepository = profileRepository;
  }

  public async execute(
    profileId: number,
    street: string,
    number: number,
    cep: string,
    country: string,
    state: string,
    city: string
    ){
    return await this.profileRepository.updateAddress(profileId, street, number, cep, country, state, city);
  }
  
}