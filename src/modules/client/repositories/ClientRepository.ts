import { Client } from "../entities/Client";
export class ClientRepository {
  private clients: Client[] = [];
  private idCounter: number = 1;
  async create(data: {
    name: string;
    email: string;
    password: number;
  }): Promise<Client> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const client = new Client(
          this.idCounter++,
          data.name,
          data.email,
          data.password,
        );
        this.clients.push(client);
        resolve(client);
      });
    });
  }

  async read(): Promise<Client[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.clients);
      });
    });
  }
  async findById(id: number): Promise<Client | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const client = this.clients.find((c) => c.id === id);
        resolve(client || null);
      });
    });
  }

  async update(
    id: number,
    data: Partial<{ name: string; email: string; password: number }>,
  ): Promise<Client | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const clientIndex = this.clients.findIndex((c) => c.id === id);

        if (clientIndex === -1) {
          return resolve(null);
        }
        this.clients[clientIndex] = {
          ...this.clients[clientIndex],
          ...data,
        };

        resolve(this.clients[clientIndex]);
      });
    });
  }

  async delete(id: number): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const clientIndex = this.clients.findIndex((c) => c.id === id);

        if (clientIndex === -1) {
          return resolve(false);
        }

        this.clients.splice(clientIndex, 1);
        resolve(true);
      });
    });
  }
}
