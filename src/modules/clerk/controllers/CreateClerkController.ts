import { Response, Request } from "express";

export class CreateClerkController {
  async handle(req: Request, res: Response): Promise<Response> {
    return res.status(201).json();
  }
}
