import { getJobListings } from "@/app/actions/actions";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import { Row } from "@tanstack/react-table";
import { Listing } from "./columns";

async function canExpand ():Promise<boolean> {
    "use server"
    return (true)
}
export default async function Listings(){
    const data = await getJobListings()
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} getRowCanExpand={canExpand}/>
      </div>
    )

}