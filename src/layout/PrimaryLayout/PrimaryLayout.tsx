import { Outlet } from "react-router-dom"
import { Header } from "../../components/APP/Header/Header"
import { Menu } from "../../components/APP/Menu/Menu"
import { Footer } from "../../components/APP/Footer/Footer"
import { useState } from "react"
import { Main } from "../../components/APP/Main/Main"

export type MenuStatus = {
    menuVisible:boolean
};

export const  PrimaryLayout = () => {
    const [menuVisible, setMenuVisible] = useState<boolean>(true);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="flex h-screen overflow-y-hidden">
            <Menu menuVisible={menuVisible} toggleMenu={toggleMenu} />
            <div className="flex-1">
                <Header menuVisible={menuVisible} />
                <Main className={`absolute top-[84px] transition-all duration-300 ease-in-out ${
                menuVisible 
                ? 'w-[76%] left-[24%]' 
                : 'w-[94.9%] left-[5.1%]'}`}
                >
                    <Outlet />
                </Main>
                <Footer menuVisible={menuVisible} />
            </div>
        </div>
    )
}