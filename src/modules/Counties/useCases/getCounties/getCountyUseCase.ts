import { CountyRepository } from "../../repositories/implamentations/CountyRepository";


export class GetCountyUseCase {
    constructor(private countyRepository: CountyRepository){}
    async execute(){
        const county = await this.countyRepository.getAllCounties()
        return county
    }
}