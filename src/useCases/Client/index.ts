import * as createClient from './CreateClient/CreateClientController';
import * as getAllClients from './GetAllClients/GetAllClientsController';
import * as getClientById from './GetClientById/GetClientByIdController';
import * as updateClientById from './UpdateClientById/UpdateClientByIdController';
import * as deleteClientById from './DeleteClientById/DeleteClientByIdController';

export const clientsUseCase = {
    ...createClient,
    ...getAllClients,
    ...getClientById,
    ...updateClientById,
    ...deleteClientById,
};