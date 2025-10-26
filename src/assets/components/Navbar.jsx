import {Link} from "react-router-dom"
import imgLogo from '../../assets/helperLogo.png'
function Navbar() {
  return (
    <div className='sticky top-0 bg-orange-200 py-4 px-10 border-orange-400 shadow md'>
    <Link className='text-2xl font-semibold bg-orange-500 flex items-center justify-center' to="/">
<img src={imgLogo} alt="Logo" className="h-10 w-10 inline-block m-4"/>
Rent A Maid
</Link>
    </div>
  )
}

export default Navbar
