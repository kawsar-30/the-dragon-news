import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'

const RightNavbar = () => {
    return (
        <div className='md:static'>
           <div className='md:absolute top-72'>
           <div>
                <h3 className='font-bold text-start ml-6 p-4'>Login With</h3>
                <div className='p-4'>
                        <a className='btn btn-outline w-full mb-3' href="">Log in With Google <FaGoogle className='size-5 sm:size-3 ' /></a>
                        <a className='btn btn-outline w-full ' href="">Log in With Github <FaGithub className='size-5 sm:size-3 text-black' /></a>
                </div>
            </div>

            <div>
                <h3 className='text-lg'>Find us On</h3>
                <div className='p-4'>
                        <a className='flex border rounded-t-lg  p-3' href=""> Facbook <FaFacebook className='size-5 ml-3 text-blue-500' /></a>
                        <a className='flex  border p-3' href="">Twitter <FaTwitter className='size-5 ml-3 text-blue-500' /></a>
                        <a className='flex  border rounded-b-lg  p-3' href="">Instagram <FaInstagram className='size-5 ml-3 text-red-600' /></a>
                </div>
            </div>

            <div className=''>
                <h3 className='font-bold text-start ml-6 p-4'>Qzone</h3>
                <div className='ml-3'>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
                </div>
            </div>
           </div>
        </div>
    );
};

export default RightNavbar;