import { Request, Response } from "express";
import { DeleteProvinceUseCase } from "./deleteProvinceUseCase";

export class DeleteProvinceController {
  constructor(private deleteProvinceUseCase: DeleteProvinceUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const province = await this.deleteProvinceUseCase.execute({ id })
    return response.status(200).json(province)
  }
}