import { Outlet } from "react-router-dom"
import { Header } from "../../components/APP/Header/Header"
import { Menu } from "../../components/APP/Menu/Menu"
import { Footer } from "../../components/APP/Footer/Footer"
import { useState } from "react"
import { Main } from "../../components/APP/Main/Main"

export type MenuStatus = {
    menuVisible:boolean
};

export const PrimaryLayout: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState<boolean>(true);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="h-screen">
            <Menu menuVisible={menuVisible} toggleMenu={toggleMenu} />
            <div> 
                <Header menuVisible={menuVisible} />
                <Main className={`absolute top-[100px] transition-all duration-300 ease-in-out ${
                menuVisible 
                ? 'w-[76%] left-[24%]' 
                : 'w-[94.9%] left-[5.1%]'}`}
                >
                    <Outlet />
                </Main>
            </div>
            <Footer menuVisible={menuVisible} />
        </div>
    )
}