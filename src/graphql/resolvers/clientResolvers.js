import Client from '../../models/Clients.js';
import Project from '../../models/Projects.js';

const getClients = () => Client.find();
const getClient = (parent, args) => Client.findById(args.id);

const getClientProject = parent => Client.findById(parent.clientId);

const addClient = (parent, args) => {
    const client = new Client({
        name: args.name,
        email: args.email,
        phone: args.phone,
    });
    return client.save();
};

const deleteClient = async (parent, args) => {
    const projects = await Project.find({ clientId: args.id });
    await Promise.all(projects.map(project => project.deleteOne()));
    return Client.findByIdAndRemove(args.id);
};

export { getClients, getClient, addClient, deleteClient, getClientProject };
