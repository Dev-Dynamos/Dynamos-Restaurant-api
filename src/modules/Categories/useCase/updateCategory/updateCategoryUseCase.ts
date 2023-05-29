import { ICategoryDto } from "../../dtos";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { RequestError } from "../../../../typeErrors/error-api";

export class UpdateCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository){}

    async execute(name: ICategoryDto, id: string){
        const category = await this.categoryRepository.findById(id);
        if(!category){
            throw new RequestError("Está categoria não existe")
        }
        const newCategory = await this.categoryRepository.update(name, id)
        return newCategory
    }
}