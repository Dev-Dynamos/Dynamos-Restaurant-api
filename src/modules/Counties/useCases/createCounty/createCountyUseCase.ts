import { CountyRepository } from "../../repositories/implamentations/CountyRepository";
import { RequestError } from "../../../../typeErrors/error-api";


export class CreateCountyUseCase {
    constructor(private countyRepository: CountyRepository){}
    async execute(nome: string, provinciaId:string){
        const province = await this.countyRepository.findByProvinciaId(provinciaId);
        const getCountyByProvince = await this.countyRepository.findCountyByProvinceId(provinciaId);
        const newCounty = getCountyByProvince.find((county) => county.nome.toLowerCase() === nome.toLowerCase())
        if(newCounty) {
            throw new RequestError("Este municipio já existe nesta provincia", 400)
        }
        if(!province){
            throw new RequestError("provincia não encontrada", 404)
        }
        const county = await this.countyRepository.save(nome, provinciaId)
        return county
    }
}