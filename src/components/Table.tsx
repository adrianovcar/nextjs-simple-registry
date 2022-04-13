import Client from "../core/Client";
import {EditIcon, TrashIcon} from "./Icons";

interface TableProps {
    clients: Client[]
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {
    const showActions = props.selectedClient || props.deletedClient
    function renderHeader() {
        return (<tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                <th className="text-center p-4">Actions</th>
            </tr>)
    }

    function renderData() {
        return props.clients?.map((client, index) => {
            return (
                <tr key={client.id} className={`${index % 2 === 0 ? 'bg-purple-100' : 'bg-purple-50'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions ? renderActions(client) : false}
                </tr>)
        })
    }

    function renderActions(client: Client) {
        return (<td className="flex justify-center">
                {props.selectedClient ? (
                    <button
                        onClick={() => props.selectedClient?.(client)}
                        className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1">
                        {EditIcon}
                    </button>) : false} {props.deletedClient ? (
                <button
                    onClick={() => props.deletedClient?.(client)}
                    className="flex justify-center items-center text-red-500 rounded-full hover:bg-purple-50 p-2 m-1">
                    {TrashIcon}
                </button>) : false}
            </td>)
    }

    return (<table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
            {renderHeader()}
            </thead>
            <tbody>{renderData()}</tbody>
        </table>)
}
