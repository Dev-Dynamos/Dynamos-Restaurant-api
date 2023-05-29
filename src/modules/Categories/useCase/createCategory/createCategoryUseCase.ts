import { RequestError } from "../../../../typeErrors/error-api";
import { ICategoryDto } from "../../dtos";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

export class CreateCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository){}

    async execute(nome: ICategoryDto){
        const categoryAlreadyExists = await this.categoryRepository.findByName(nome)

        if(categoryAlreadyExists){
            throw new RequestError("Está Categoria já existe ", 400) 
        }
        const categorySaved = await this.categoryRepository.save(nome)
        return categorySaved
    }
}