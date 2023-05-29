import { CreatePositionDTO } from "../PositionDTOs/CreatePositionDTO";
import { Position } from "../model/Admin";

export interface IPositionRepository {
  create: ({ designacao }: CreatePositionDTO) => Promise<Position>;
}
