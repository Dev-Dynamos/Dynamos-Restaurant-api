import { CreatePositionDTO } from "../PositionDTOs/CreatePositionDTO";
import { Position } from "../model/Position";

export interface IPositionRepository {
  create: ({ designacao }: CreatePositionDTO) => Promise<Position>;
}
