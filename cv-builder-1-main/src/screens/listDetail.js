import {useParams} from "react-router-dom"

export default function List() {
    const params = useParams();
   console.log(`lllllllllllllllllllllllllllllllll ${params}`)
   console.log(params)
    return (
        <div className='flex flex-col gap-2'>
            prfile {params.listid}
        </div>
    )
}