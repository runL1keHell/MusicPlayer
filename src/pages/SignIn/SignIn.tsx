import {Button} from "../../components/UI/Button/Button.tsx";
import {Input} from "../../components/UI/Input/Input.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import {NavigateFunction, useNavigate} from "react-router";
import {Controller, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {loginUser, sendVerificationMail, getUserInfo, selectUser} from "../../redux/user/user.ts";

type SignInForm = {
    email: string;
    password: string;
};

export const SignIn = () => {
    const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const navigate: NavigateFunction = useNavigate();
    const { control,
        handleSubmit,
        setError,
    } = useForm<SignInForm>();

    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const changePasswordVisibility = () => {
        setIsPasswordShown((prev) => !prev)
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    setError('root.serverError', {
        type: 'server',
        message: user.error,
    });

    const onSubmit = async ({email, password}: SignInForm) => {
         dispatch(
            loginUser({
                onSuccess(data) {
                    const access_token = data.access_token;
                    console.log(access_token);
                    dispatch(getUserInfo({access_token}));
                    navigate('/');
                },
                onFailure: (data) => {
                    console.log(data)
                    const user_id: number = data.data.user_id;
                    const email: string = data.data.email;
                    dispatch(sendVerificationMail({
                        user_id,
                        email,
                        return_url: 'http://localhost:5173/mailverification',
                    }))
                },
                data: {email, password},
            })
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#76CCFB] flex flex-col justify-center items-center">

            <div className="w-auto bg-[#76CCFB] relative"
                onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
            >
                <button
                    className="text-[30px] font-bold bg-[#76CCFB] text-[#0F1E36]"
                >
                    Sign In
                </button>
                <button
                    className={`w-[105px] absolute bg-[#76CCFB] text-[#0F1E36] text-[28px] font-bold transition-all duration-300 ease-in-out transform opacity-0 ${isHovered ? 'opacity-100 translate-x-5' : 'opacity-0 -translate-x-20'}`}
                    onClick={() => {navigate('/signup')}}
                >
                    Sign Up
                </button>
            </div>

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

            <Button name="Continue" className="mt-[35px]" />
            <div className="mt-[30px] bg-[#76CCFB] flex items-center">
                <span className="w-[350px] h-[1px] bg-black"></span>
            </div>
        </form>
    )
}