import { CountyRepository } from "../../repositories/implamentations/CountyRepository";
import { RequestError } from "../../../../typeErrors/error-api";


export class UpdateCountyUseCase {
    constructor(private countyRepository: CountyRepository){}
    async execute(id:string, nome:string){
        const countyExists = await this.countyRepository.findById(id)
        if(!countyExists){
            throw new RequestError("Municipio não encontrado", 404)
        }
        const county = await this.countyRepository.update(id, nome)
        return county
    }
}