import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import { fetchWorksApi } from "./api/Api";
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';
import { CloseRounded } from "@mui/icons-material";

function Services() {

    const [pointImg, setPointImg] = useState("");

    const router = useRouter();

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN;

    // data of works

    const { isLoading, data } = useQuery('works', fetchWorksApi);

    if (isLoading) {
        return (
            <div className="Services parent">
                <div className="wrapper">
                    <div className="header">
                        <h1 className="title">
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                        </h1>
                    </div>
                    <div className="cards">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                            <div key={index} className="work">
                                <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="img" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="Services parent">
                <div className="wrapper">
                    <div className="header">
                        <h1 className="title">{t.ornatilgandan_song}</h1>
                    </div>
                    <div className="cards">
                        {data?.data?.map((item) => (
                            <div key={item.id} className="work" onClick={() => setPointImg(item.image)}>
                                <Image loader={() => `${item.image ? item.image : ""}?w=1500&q=1000`} src={item.image ? item.image : ""} priority alt="image" className="img" width={1000} height={500} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {pointImg != "" &&
                <div className="modal-image">
                    <Image  loader={() => `${pointImg ? pointImg : ""}?w=1500&q=1000`} src={pointImg ? pointImg : ""} priority alt="image" className="img" width={1000} height={500} />
                    <div className="contrast" onClick={() => setPointImg("")}></div>
                    <CloseRounded className="close-icon" onClick={() => setPointImg("")} />
                </div>
            }
        </>
    )
};

export default Services;