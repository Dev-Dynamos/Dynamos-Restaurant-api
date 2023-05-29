import { Request, Response } from "express"
import { GetProvinceUseCase } from "./getProvinceUseCase"

export class GetProvinceController {
  constructor(private getProvinceUseCase: GetProvinceUseCase){ }

  async handle(request: Request, response: Response){
    const { id} = request.params

    const province = await this.getProvinceUseCase.execute({id})
    return response.status(200).json(province)
  }
}