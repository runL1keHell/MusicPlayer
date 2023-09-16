import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../../components/UI/Button/Button"
import { Input } from "../../components/UI/Input/Input"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

export const SignUp = () => {
    return (
        <>
            <Input type="password" placeholder="Password" className="mt-[15px]" />
            <Input type="password" placeholder="Confirm Password" className="mt-[15px]" />
        </>
    )
}