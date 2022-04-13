import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

function selectedClient(client: Client) {
    console.log(client.name)
}

function deletedClient(client: Client) {
    console.log(client.name)
}

export default function Home() {
    const clients = [
        new Client('Ana', 34, '1'),
        new Client('Bia', 45, '2'),
        new Client('Carlos', 23, '3'),
        new Client('Pedro', 54, '4'),
    ]

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Layout title="Simple registry">
                <Table
                    clients={clients}
                    selectedClient={selectedClient}
                    deletedClient={deletedClient}
                ></Table>
            </Layout>
        </div>
    )
}
