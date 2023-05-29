import { Request, Response } from "express";
import { GetProvincesUseCase } from "./getProvincesUseCase";

export class GetProvincesController {
  constructor(private getProvincesUseCase: GetProvincesUseCase){}

  async handle(request: Request, response: Response){
    const provinces = await this.getProvincesUseCase.execute()
    
    return response.status(200).json(provinces)
  }
}