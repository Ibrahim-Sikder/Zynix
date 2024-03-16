import './signup.css';
import google from '../../assets/images/google.png'
import { FaFacebookF } from "react-icons/fa6";
import Link from 'next/link';
import { Input } from '@nextui-org/react';
import Image from 'next/image';


const Signup = () => {


    return (
        <div className="">
            <div className="signupWrap">
                <h3 className="text-3xl font-bold text-center mb-5  capitalize">Create a Zynax Account </h3>
                <div className="flex lg:justify-end md:justify-center">
                    <Link href='/register'><span>Create a <b className='border-b-2 border-[#00AB55]'>business account</b> </span></Link>
                </div>
                <form className="SignupFormWrap">
                    <div>
                        <div className="flex items-center">
                            <Input type="text" className="SingleInput" label="First Name " />
                            <Input type="text" className="SingleInput" label="Last Name " />


                        </div>
                        <div className="flex items-center mt-5">
                            <Input type="text" className="signupInput" label="Email Address " />
                        </div>
                        <div className="flex items-center my-5">
                            <Input type="text" className="signupInput" label="Password " />

                        </div>
                        <small className='block w-[300px] mb-5'>
                            By Creating an account, you agree to our User Agreement and  acknowledge reading our User Privacy
                            Notice .
                        </small>
                        <button className='signupBtn bg-[#00AB55] text-white '>Create Account </button>
                    </div>
                    <div className="devider">
                        <div className="line"></div>
                        <div>or</div>
                        <div className="line"></div>
                    </div>
                    <div className='lg:mt-0 mt-5    '>
                        <button className='signupBtn mb-5 text-black  '>
                            <Image
                                src={google}
                                alt='google'
                                width='50'
                                height='50'
                            />


                            <span>Continoue With Google </span> </button>
                        <button className='signupBtn bg-[#3F63AB] text-white '><FaFacebookF className='mr-5' size={25} /> <span>Continoue With Facebook </span> </button>
                        <span className='mt-3 block '>Already a member? <Link href='/login'>Sing In </Link> </span>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default Signup
