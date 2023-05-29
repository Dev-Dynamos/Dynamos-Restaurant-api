import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

export class GetCategoryUseCase{
    constructor(private categoryRepository: CategoryRepository){}
    async execute(){
        const categoryDatas = await this.categoryRepository.getCategory();
        return categoryDatas
    }
}