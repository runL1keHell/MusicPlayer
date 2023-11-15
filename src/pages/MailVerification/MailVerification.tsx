import {NavigateFunction, useNavigate, useParams} from "react-router";
import {useEffect} from "react";
import { verificateEmail} from "../../redux/user/user.ts";
import {useAppDispatch} from "../../redux/hooks.ts";
export const MailVerification = () => {
    const {user_id, token} = useParams();
    const navigate: NavigateFunction = useNavigate();
    const dispath = useAppDispatch();

     const numericUser_id = Number(user_id);

    useEffect(() => {
        if (user_id && token) {
            dispath(verificateEmail({
                data: {
                    token,
                    user_id: numericUser_id
                },
                onSuccess() {
                    navigate('/successfullyverified')
                },
                onFailure() {
                    navigate('/unsuccessfullyverified')
                }
            }));
        }
    },[user_id, token]);
    console.log(user_id, token)
    return (
        <h1 className='text-[50px] text-gray-800 bg-[#76CCFB] text-center'>Please, wait a moment. <br/> Your e-mail getting verified.</h1>
    )
}