import { CountyRepository } from "../../repositories/implamentations/CountyRepository";
import { RequestError } from "../../../../typeErrors/error-api";

export class DeleteCountyUseCase {
    constructor(private countyRepository: CountyRepository){}
    async execute(id:string){
        const countyExists = await this.countyRepository.findById(id);

        if(!countyExists){
            throw new RequestError("Municio não encontrado") 
        }

        const county = await this.countyRepository.delete(id);
        return county
    }
}