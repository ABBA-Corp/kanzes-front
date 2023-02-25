import Footer from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import ScrollTopButton from "./ScrollTopButton";

function Layout({ children }) {

    // loader

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 4000);
    }, [])

    return (
        <>
            {showLoader &&
                <Loader />
            }
            <Navbar />
            {children}
            <ScrollTopButton />
            <Footer />
        </>
    )
}

export default Layout;