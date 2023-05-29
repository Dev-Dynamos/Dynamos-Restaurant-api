import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { RequestError } from "../../../../typeErrors/error-api";


export class GetOneCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository){}
    async execute(id: string){
        const category = await this.categoryRepository.findById(id)
        if(!category){
            return new RequestError("Category não encontrada", 404) 
        }
        return category
    }
}
