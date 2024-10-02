
import {Link, Outlet} from 'react-router-dom'

export default function List() {
    const lists = [1,2,3,4,5];

    return (
        <div className='flex flex-col gap-2'>
            {lists.map((profile) => (
                <Link key={profile} to={`/list/${profile}`}>list  {profile}</Link>
            ))}

            <Outlet />
        </div>
    )
}