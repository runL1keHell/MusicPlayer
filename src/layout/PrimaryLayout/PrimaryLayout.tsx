import { Outlet } from "react-router-dom"
import { Header } from "../../components/APP/Header/Header"
import { Menu } from "../../components/APP/Menu/Menu"
import { Footer } from "../../components/APP/Footer/Footer"

export const PrimaryLayout = () => {
    return (
        <>
        <div className="flex">
            <Menu />
            <Header />
        </div>
            <Outlet/>
        <Footer />
        </>
    )
}