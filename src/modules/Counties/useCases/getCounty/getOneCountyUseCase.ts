import { CountyRepository } from "../../repositories/implamentations/CountyRepository";
import { RequestError } from "../../../../typeErrors/error-api";

export class GetOneCountyUseCase {
    constructor(private countyRepository: CountyRepository){}
    async execute(id: string){
        const county = await this.countyRepository.findById(id)
        if(!county){
            throw new RequestError("Municipio não encontrado", 404)
        }
        return county
    }
}