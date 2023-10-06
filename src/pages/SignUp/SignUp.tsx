// import { Input } from "../../components/UI/Input/Input";
import {Button} from "../../components/UI/Button/Button.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";
import React, {useState} from "react";
import {NavigateFunction, useNavigate} from "react-router";
import {useForm} from "react-hook-form";

type SignUpForm = {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
};

export const SignUp: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const {
        watch,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<SignUpForm>();

    const navigate: NavigateFunction = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const onSubmit = (data: SignUpForm) => {
        console.log(data.name);
        return 123;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#76CCFB] flex flex-col justify-center items-center">

            <div className="w-auto bg-[#76CCFB] relative"
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
            >
                <button
                    className="text-[30px] font-bold bg-[#76CCFB] text-[#0F1E36]"
                >
                    Sign Up
                </button>
                <button
                    className={`w-[105px] absolute bg-[#76CCFB] text-[#0F1E36] text-[28px] font-bold transition-all duration-300 ease-in-out transform opacity-0 ${isHovered ? 'opacity-100 translate-x-5' : 'opacity-0 -translate-x-20'}`}
                    onClick={() => {navigate('/signin')}}
                >
                    Sign In
                </button>
            </div>

            <input type="text" placeholder="Username" className="mt-[35px]"
                {...register('name',
                    {
                        required: 'Name is required',
                        pattern: {
                            value: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                            message: 'Please enter proper name',
                        }
                    }
                )}
            />
            {errors?.name ? <div>{errors?.name?.message}</div> : null}
            <input  type="email" placeholder="E-mail" className="mt-[15px]"
                   {...register('email',
                       {
                           required: 'Email is required',
                           pattern: {
                               value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                               message: 'Please enter proper email',
                           }
                       }
                   )}
            />
            {errors?.name ? <div>{errors?.email?.message}</div> : null}
            <input type="password" placeholder="Password" className="mt-[15px]"
                   {...register('password',
                       {
                           required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                                message: 'Password must contain at least one uppercase and one lowercase letter, one number and one special character',
                           },
                           minLength: {
                               value: 8,
                               message: 'Minimal password length is 8 symbols',
                           },
                           maxLength: {
                               value: 10,
                               message: 'Maximal password length is 10 symbols'
                           }

                       }
                   )}
            />
            {errors?.name ? <div>{errors?.password?.message}</div> : null}
            <input type="password" placeholder="Confirm Password" className="mt-[15px]"
                   {...register('confirmPassword',
                       {
                           required: 'Confirm password is required',
                           validate: (value, allValues) => {
                               value === allValues.password ? true : "Password doesn't match"
                           },
                       }
                   )}
            />
            {errors?.name ? <div>{errors?.confirmPassword?.message}</div> : null}
            <Button name="Continue" className="mt-[35px]"/>
            <div className="mt-[30px] bg-[#76CCFB] flex items-center">
                <span className="w-[173px] h-[1px] bg-black"></span>
                <span className="bg-[#76CCFB] mx-[15px]">OR</span>
                <span className="w-[173px] h-[1px] bg-black"></span>
            </div>
            <Button
                name={<FontAwesomeIcon icon={faGoogle} className="bg-white" />}
                className="w-[170px] mt-[30px]"
                onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
                    e.preventDefault();
                }}
            />
        </form>
    )
}