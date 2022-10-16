import {Link} from "react-router-dom";

function Header() {

    return (
        <Link to='/'>
            <div className='flex justify-center'>
                <div className='w-48 h-24 cursor-pointer'>
                    <img src="/src/assets/logo.png" alt="" className=''/>
                </div>
            </div>
        </Link>
    )
}

export default Header