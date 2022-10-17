import {Link} from "react-router-dom";

function Header() {

    return (
        <Link to='/'>
            <div className='flex justify-center'>
                <div className='w-48 h-24 cursor-pointer'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" alt="" className=''/>
                </div>
            </div>
        </Link>
    )
}

export default Header