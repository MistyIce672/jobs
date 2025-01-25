import { getJobListings } from "../actions/actions";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Listings(){
    const data = await getJobListings()
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
      </div>
    )

}