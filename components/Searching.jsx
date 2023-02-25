import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { CloseRounded } from "@mui/icons-material";
import { fetchSearchProductsApi } from "@/pages/api/Api";

function Searching({ setShowSearch }) {

    const router = useRouter();

    // search filter

    const [inputValue, setInputValue] = useState("");

    function filterData(e) {
        setInputValue(e.target.value)
    };

    // data of products

    const { data } = useQuery('searching', fetchSearchProductsApi);

    let dataProducts = router.locale == "uz" ? data?.data.filter(post => post?.name_uz?.toLowerCase().includes(inputValue.toLowerCase())) : router.locale == "ru" ? data?.data.filter(post => post?.name_ru?.toLowerCase().includes(inputValue.toLowerCase())) : data?.data.filter(post => post?.name_en?.toLowerCase().includes(inputValue.toLowerCase()))

    return (
        <div className="Searching">
            <div className="forms">
                <input type="text" name="search" className="search-input text" onChange={(e) => filterData(e)} placeholder="Search..." />
                <div className="search-bar">
                    {dataProducts?.map((item) => (
                        <Link key={item.id} href={`/products/${item.id}`} className="search-link text" onClick={() => setShowSearch(false)}>{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</Link>
                    ))}
                </div>
            </div>
            <CloseRounded className="close-icon" onClick={() => setShowSearch(false)} />
            <div className="contrast" onClick={() => setShowSearch(false)}></div>
        </div>
    )
};

export default Searching;