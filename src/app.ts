import { ClientController } from "./modules/client/controller/ClientController";
import { ClientRepository } from "./modules/client/repositories/ClientRepository";
import { ClientService } from "./modules/client/services/ClientService";

const clientRepository = new ClientRepository();
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

async function main() {
  const client1 = await clientController.create({
    name: "John Doe",
    email: "john.doe@example.com",
    password: 123456,
  });

  const client2 = await clientController.create({
    name: "John Doe",
    email: "john.doe@example.com",
    password: 123456,
  });

  const client3 = await clientController.findById(902);
  const client4 = await clientController.findById(1);

  const client5 = await clientController.create({
    name: "Robert Smith",
    email: "robert.smith@example.com",
    password: 123456,
  });

  const updateClient5 = await clientController.update(2, {
    name: "Robert Smith Updated",
  });

  const deleteClient5 = await clientController.delete(2);
  console.log(client1);
  console.log(client2);
  console.log(client3);
  console.log(client4);
  console.log(client5);
  console.log("-------------------");
  console.log(updateClient5);
  console.log(deleteClient5);
  const listClients = await clientController.read();
  console.log(listClients);
}
main();
