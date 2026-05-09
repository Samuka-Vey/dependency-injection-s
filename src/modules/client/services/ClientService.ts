import { ClientRepository } from "../repositories/ClientRepository";

export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  async create(data: { name: string; email: string; password: number }) {
    const clients = await this.clientRepository.read();
    const emailExists = clients.some((c) => c.email === data.email);

    if (emailExists) {
      throw new Error("Email already exists");
    }

    return this.clientRepository.create(data);
  }

  async read() {
    return this.clientRepository.read();
  }

  async findById(id: number) {
    if (id <= 0) {
      throw new Error("Invalid ID");
    }

    if (isNaN(id)) {
      throw new Error("ID must be a number");
    }

    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new Error("Client not found");
    }

    return client;
  }

  async update(
    id: number,
    data: Partial<{ name: string; email: string; password: number }>,
  ) {
    if (id <= 0) {
      throw new Error("Invalid ID");
    }

    if (isNaN(id)) {
      throw new Error("ID must be a number");
    }

    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new Error("Client not found");
    }

    return this.clientRepository.update(id, data);
  }

  async delete(id: number) {
    if (id <= 0) {
      throw new Error("Invalid ID");
    }

    if (isNaN(id)) {
      throw new Error("ID must be a number");
    }

    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new Error("Client not found");
    }

    return this.clientRepository.delete(id);
  }
}
