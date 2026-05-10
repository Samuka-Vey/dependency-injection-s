import { Client } from "../entities/Client";
import { CreateClientDTO } from "../dtos/CreateClientDTO";
import { UpdateClientDTO } from "../dtos/UpdateClientDTO";

export interface IClientRepository {
  create(data: CreateClientDTO): Promise<Client>;
  read(): Promise<Client[]>;
  findById(id: number): Promise<Client | null>;
  update(id: number, data: UpdateClientDTO): Promise<Client | null>;
  delete(id: number): Promise<boolean>;
}
