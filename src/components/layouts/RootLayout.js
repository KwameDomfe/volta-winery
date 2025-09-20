import { Outlet } from "react-router-dom";
import MainHeader from "../organisms/MainHeader";
import MainFooter from "../organisms/MainFooter";

function RootLayout() {
return (
    <article className="flex flex-column justify-between
        w-100 bg-black-20 relative"
    >
        
        <MainHeader />
        
        <main className="flex items-center justify-center w-100 relative">
            <Outlet />
        </main>

        <MainFooter />
    </article>
);
}

export default RootLayout;
