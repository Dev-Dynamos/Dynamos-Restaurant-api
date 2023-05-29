import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { RequestError } from "../../../../typeErrors/error-api";


export class DeleteCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository){}
    async execute(id: string) {
        const categoryExists = await this.categoryRepository.findById(id)
        if(!categoryExists){
            throw new RequestError("Category não encontrada", 404)
        }
        const category = await this.categoryRepository.delete(id)
        return category
    }
}