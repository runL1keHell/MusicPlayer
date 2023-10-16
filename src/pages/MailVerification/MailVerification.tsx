import {NavigateFunction, useNavigate, useParams} from "react-router";
import {useEffect} from "react";
import {mailVerification, VerifyMail} from "../../redux/user/user.ts";
import {useAppDispatch} from "../../redux/hooks.ts";
export const MailVerification = () => {
    let {user_id, token} = useParams();
    const navigate: NavigateFunction = useNavigate();
    const dispath = useAppDispatch();

     user_id = Number(user_id);

    useEffect(() => {
        if (user_id && token) {
            dispath(mailVerification({
                token, user_id
            }));
            navigate('/successfullyverified')
        }
    },[user_id, token]);
    console.log(user_id, token)
    return (
        <h1 className='text-[50px] text-gray-800 bg-[#76CCFB] text-center'>Please, wait a moment. <br/> Your e-mail getting verified.</h1>
    )
}