import { ClientService } from "../services/ClientService";
import { CreateClientDTO } from "../dtos/CreateClientDTO";
import { UpdateClientDTO } from "../dtos/UpdateClientDTO";

export class ClientController {
  constructor(private clientService: ClientService) {}

  async create(data: CreateClientDTO) {
    try {
      const client = await this.clientService.create(data);

      return {
        status: "success",
        code: 201,
        body: client,
      };
    } catch (error: any) {
      return {
        status: "error",
        code: 400,
        body: { message: error.message },
      };
    }
  }

  async read() {
    try {
      const clients = await this.clientService.read();

      return {
        status: "success",
        code: 200,
        body: clients,
      };
    } catch (error: any) {
      return {
        status: "error",
        code: 400,
        body: { message: error.message },
      };
    }
  }

  async findById(id: number) {
    try {
      const client = await this.clientService.findById(id);

      return {
        status: "success",
        code: 200,
        body: client,
      };
    } catch (error: any) {
      return {
        status: "error",
        code: 400,
        body: { message: error.message },
      };
    }
  }

  async update(id: number, data: UpdateClientDTO) {
    try {
      const client = await this.clientService.update(id, data);

      return {
        status: "success",
        code: 200,
        body: client,
      };
    } catch (error: any) {
      return {
        status: "error",
        code: 400,
        body: { message: error.message },
      };
    }
  }
  async delete(id: number) {
    try {
      const result = await this.clientService.delete(id);

      return {
        status: "success",
        code: 200,
        body: { deleted: result },
      };
    } catch (error: any) {
      return {
        status: "error",
        code: 400,
        body: { message: error.message },
      };
    }
  }
}
