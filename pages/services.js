import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import { Skeleton } from "@mui/material";
import { fetchWorksApi } from "./api/Api";
import { CloseRounded } from "@mui/icons-material";

function Services() {

    const [pointImg, setPointImg] = useState("");

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
                        <h1 className="title">Bizning mutaxasislar IShlari</h1>
                        <p className="text">Идейные соображения высшего порядка, а также рамки и место обучения кадров позволяет выполнять важные задания по разработке новых предложений. Таким образом начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.</p>
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
                    <Image src={pointImg ? pointImg : ""} priority alt="image" className="img" width={1000} height={500} />
                    <div className="contrast" onClick={() => setPointImg("")}></div>
                    <CloseRounded className="close-icon" onClick={() => setPointImg("")} />
                </div>
            }
        </>
    )
};

export default Services;