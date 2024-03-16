import google from '../../assets/images/google.png'
import { FaFacebookF } from "react-icons/fa6";
import Link from 'next/link';
import { Input } from '@nextui-org/react';
import Image from 'next/image';
import '../signup/signup.css'
import { signIn } from 'next-auth/react';
const Login = () => {
    return (
        <div>
            <div className="signupWrap">
                <div className="text-center">
                    <h3 className="text-3xl font-bold text-center mb-5  capitalize">Hello</h3>
                    <span>
                        Sign In ZynIx or <b className="border-b-2 border-[#00AB55]">create an account </b>
                    </span>
                </div>
                <form className="businessFormWrap">
                    <div className="my-5">
                        <Input className="businessInput"
                            label="Email or Username " type="text" />

                    </div>
                    <button className="signupBtn loginBtn bg-[#00AB55] text-white businessBtn">Continoue </button>
                    <div className="flex flex-col my-3 w-[320px] border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <div>
                        <button className="signupBtn loginBtn mb-5 text-black  ">
                            <Image
                                src={google}
                                alt='google'
                                width='50'
                                height='50'
                            /> <span>Continoue With Google </span>{' '}
                        </button>
                        <button 
                      
                        className="signupBtn loginBtn bg-[#3F63AB] text-white ">
                            <FaFacebookF className="mr-5" size={25} /> <span>Continoue With Facebook </span>{' '}
                        </button>
                    </div>
                    <div className="text-center w-[300px] mx-auto  mt-3">
                        <div className="flex justify-center items-center">
                            <input className='mr-2' type="checkbox" />
                            <span>Stay signed in</span>
                        </div>
                        <span className='block mx-auto w-[250px]'> Using a public or shared device? Uncheck to protect your account.</span>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
