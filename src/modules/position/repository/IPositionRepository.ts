import {
  CreatePositionDTO,
  UpdatePositionDTO,
} from "../PositionDTOs/CreatePositionDTO";
import { Position } from "../model/Position";

export interface IPositionRepository {
  create: ({ nome }: CreatePositionDTO) => Promise<Position>;
  get(): Promise<Position[]>;
  delete: (id: string) => Promise<Position>;
  update: ({ id, nome }: UpdatePositionDTO) => Promise<Position>;
}
