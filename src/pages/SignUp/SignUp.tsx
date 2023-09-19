import { Input } from "../../components/UI/Input/Input"

export const SignUp: React.FC = () => {
    return (
        <>
            <Input type="password" placeholder="Password" className="mt-[15px]" />
            <Input type="password" placeholder="Confirm Password" className="mt-[15px]" />
        </>
    )
}