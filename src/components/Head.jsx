import { RxHamburgerMenu } from "react-icons/rx";
import { ImYoutube2 } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";

const Head = () => {
  const dispatch = useDispatch()

  const toggleHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col shadow">
      <div className="flex justify-start pl-6 col-span-1">
        <RxHamburgerMenu fontSize="30px" className="mt-6 cursor-pointer" onClick={() => toggleHandler()} />
        <ImYoutube2 fontSize="80px" className="pl-2" />
      </div>
      <div className="pt-6 text-center col-span-10">
        <input type="text" className="mx-2 border rounded-md px-2 py-2 w-6/12" />
        <button><FaSearch fontSize="20px" /></button>
      </div>
      <div className="mt-8 pr-6 flex justify-end col-span-1">
        <FaUserAlt size={20} />
      </div>
    </div>
  )
}

export default Head