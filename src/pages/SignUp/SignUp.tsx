import { Input } from "../../components/UI/Input/Input";
import {Button} from "../../components/UI/Button/Button.tsx";
import React, {useState} from "react";
import {NavigateFunction, useNavigate} from "react-router";
import {Controller, useForm} from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {useAppDispatch} from "../../redux/hooks.ts";
import {registrateUser} from "../../redux/user/user.ts";

type SignUpForm = {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
};

type SignUpErrorMessageStorage = {
    [key: string]: string;
    user_exist: string;
}

export const SignUp: React.FC = () => {
    const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const {
        control,
        formState: {errors},
        handleSubmit,
        setError,
        } = useForm<SignUpForm>();

    const navigate: NavigateFunction = useNavigate();
    const dispatch = useAppDispatch();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const changePasswordVisibility = () => {
        setIsPasswordShown((prev) => !prev)
    }

    const onSubmit = async ({ email, name, password }: SignUpForm) => {
        try {
            await dispatch(
                registrateUser({
                    data: {
                        email,
                        name,
                        password,
                        description: '',
                        profileImageUrl: '',
                    },
                    onSuccess() {
                        navigate('/signin');
                    },
                    onFailure(errorMessage) {
                        const errorMessageStorage: SignUpErrorMessageStorage = {
                            user_exist: 'User with this email already exists',
                        };
                        const messageToShow: string = errorMessageStorage[errorMessage as keyof SignUpErrorMessageStorage];
                        setError('root.serverError', {
                            type: 'server',
                            message: messageToShow,
                        });
                    }
                })
            );
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#76CCFB] flex flex-col justify-center items-center">

                <div className="w-auto bg-[#76CCFB] relative mb-[20px]"
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

                <Controller
                    name="name"
                    control={control}
                    render={({ field: {value,name, onChange}, fieldState}) => (
                        <div className='bg-[#76CCFB]'>
                            <label htmlFor="name" className='font-bold bg-[#76CCFB]'>Name</label>
                            <Input type='text' required placeholder='Name' value={value} name={name} onChange={onChange} />
                            {fieldState.error && <span className='absolute bg-[#76CCFB] text-[blue]'>{fieldState.error.message}</span>}
                        </div>
                    )}
                    rules={{required: 'Name is required',
                        pattern: {
                            value: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
                            message: 'Please enter proper name'
                        },
                        minLength: {
                          value: 8,
                          message: 'Name must be longer',
                        },
                        maxLength: {
                            value: 20,
                            message: 'Name must be shorter'
                        }
                    }}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field: {value,name, onChange}, fieldState}) => (
                        <div className='bg-[#76CCFB] mt-[20px]'>
                            <label htmlFor="email" className='font-bold bg-[#76CCFB]'>Email</label>
                            <Input type='email' required placeholder='Email' value={value} name={name} onChange={onChange} />
                            {fieldState.error && <span className='absolute bg-[#76CCFB] text-[blue]'>{fieldState.error.message}</span>}
                        </div>
                    )}
                    rules={{required: 'Email is required',
                        pattern: {
                            value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: 'Please enter proper email'
                        }
                    }}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field: {value,name, onChange}, fieldState}) => (
                        <div className='bg-[#76CCFB] mt-[20px] relative'>
                            <label htmlFor="password" className='font-bold bg-[#76CCFB]'>Password</label>
                            <Input type={isPasswordShown ? 'text' : 'password'} required placeholder='Password' value={value} name={name} onChange={onChange} />
                            <FontAwesomeIcon onClick={changePasswordVisibility} icon={faEye} color={isPasswordShown ? 'black' : 'gray'} className='cursor-pointer absolute right-[20px] top-[55%] bg-white' />
                            {fieldState.error && <span className='absolute bg-[#76CCFB] text-[blue]'>{fieldState.error.message}</span>}
                        </div>
                    )}
                    rules={{required: 'Password is required',
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                            message: 'Password must contain at least one uppercase and one lowercase letter, one number and one special character',
                        },
                        minLength: {
                            value: 8,
                            message: 'Password must be longer'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Password must be shorter'
                        }
                    }}
                />
                <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field: {value,name, onChange}, fieldState}) => (
                        <div className='bg-[#76CCFB] mt-[20px]'>
                            <label htmlFor="password" className='font-bold bg-[#76CCFB]'>Confirm Password</label>
                            <Input type='password' required placeholder='Confirm Password' value={value} name={name} onChange={onChange} />
                            {fieldState.error && <span className='absolute bg-[#76CCFB] text-[blue]'>{fieldState.error.message}</span>}
                        </div>
                    )}
                    rules={{required: 'Confirm your password',
                        validate: (value:string, formValues:SignUpForm) => {
                            return value === formValues.password || "Passwords doesn't match"
                        }
                    }}
                />
                {errors.root?.serverError && <span className='absolute bottom-[100px] mt-[15px] bg-[#76CCFB] font-bold text-[blue]'>{errors.root.serverError.message}</span>}
                <Button name="Continue" className="mt-[35px]"/>
                <div className="mt-[30px] bg-[#76CCFB] flex items-center">
                    <span className="w-[350px] h-[1px] bg-black"></span>
                </div>
            </form>
    )
}