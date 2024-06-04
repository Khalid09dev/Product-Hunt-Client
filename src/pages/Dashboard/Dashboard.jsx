
import upvote from '../../assets/upvote.png';
import { MdArrowOutward } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { AiOutlineUser } from "react-icons/ai";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { IoTriangleOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RxPlus } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { CgEditBlackPoint } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";


const Dashboard = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className="flex gap-12 bg-[#F5F8F9] pt-32 border-t-[1px]">
            <div className='border z-0 sticky left-0 top-0 h-full  overflow-y-auto bg-white text-[#1B2430] ml-10 mt-14 text-[18px] rounded-lg py-7 pl-8 pr-8'>
                <div className='flex gap-2 mb-1 cursor-pointer py-3 rounded-md pl-4 pr-56 items-center hover:bg-[#686EF8] hover:text-white duration'><AiOutlineUser className='text-xl'/><span>Profile</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-56 items-center'><PiBookmarkSimpleLight className='text-xl'/><span>Bookmarks</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-56 items-center'><IoTriangleOutline className='text-xl'/><span>Upvotes</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-56 items-center'><RxPlus className='text-xl'/><span>Submissions</span></div>
                <div className='flex gap-2 py-3 rounded-md pl-4 hover:bg-[#686EF8] hover:text-white duration-200 mb-1 cursor-pointer pr-56 items-center'><IoSettingsOutline className='text-xl'/><span>Settings</span></div>

                <div className='flex rounded-md bg-[#F5F8F9] mt-10 p-3 gap-2'>
                    <img className='w-[60px] h-[60px] rounded-full' src={user.photoURL} alt="#" />
                    <div>
                        <h3 className='text-[#1B2530] text-xl font-medium'>Md Khalid</h3>
                        <div className='flex items-center text-[#79808A] gap-1 cursor-pointer hover:text-[#686EF8]'><RiLogoutBoxRLine /><span>Logout</span></div>
                    </div>
                </div>
            </div>

            <div className='w-3/5 pr-10'>
                    <div className='flex mt-14 border items-start justify-between pl-5 pr-5 rounded-lg py-10 bg-white'>
                        <div className='flex gap-3 items-end'>
                            <img className='rounded-full w-[100px] h-[100px]' src={user.photoURL} alt="#" />
                            <div>
                                <h3 className='text-[#1B2530] text-xl font-medium hover:text-[#686EF8] cursor-pointer pb-2'>Md Khalid</h3>
                                <div className='flex items-center text-white bg-[#686EF8] justify-center rounded-3xl py-1 px-3'><CgEditBlackPoint className='text-xl mr-1'/><span className='mr-1'>0</span>Points</div>
                            </div>
                        </div>
                        <div className='flex items-center bg-[#686EF8] px-3 py-1 rounded-sm  text-[18px] text-white font-normal gap-1'><CiEdit className='text-2xl'/><span>Edit</span></div>
                    </div>
                    <h2 className='text-[#1B2530] text-[36px] font-medium py-9'>Your Submission</h2>
                    <div className='border flex justify-start gap-3 p-4 rounded bg-white'>
                        <button className='bg-[#686EF8] py-2.5 px-6 text-white rounded'>Approved</button>
                        <button className='bg-[#2C3743] px-5 rounded text-white'>Under Review</button>
                        <button className='bg-[#2C3743] px-5 text-white rounded'>Rejected</button>
                    </div>
                    <div className='flex justify-center border py-28 rounded-md mt-8 bg-white'>
                        <div><img className='mx-auto bg-[#686EF80D] rounded-full p-5' src="https://i.postimg.cc/7h42M6WJ/empty.png" alt="#" />
                        <h3 className='text-[#000000] text-2xl font-medium pt-7'>OOOPS! It's Empty</h3>
                        <p className='text-[#79808A] text-base font-normal'>There are no items to show</p></div>
                    </div>
            </div>
        </div>
    );
};

export default Dashboard;