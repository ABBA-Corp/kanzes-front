import Link from "next/link";
import Image from "next/image";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import { fetchNewsApi } from "./api/Api";

function Allnews() {

    const router = useRouter();

    // data of news

    const { isLoading, data } = useQuery('news', fetchNewsApi);

    if (isLoading) {
        return (
            <div className="allnews parent">
                <div className="wrapper">
                    <h1 className="title">
                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="50%" />
                    </h1>
                    <div className="news">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                            <div key={index} className="new">
                                <div className="body">
                                    <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="img" />
                                    <h4 className='name'>
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                                    </h4>
                                    <p className="text">
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                                    </p>
                                    <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="explore btn-text" height="3vw" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="allnews parent">
            <div className="wrapper">
                <h1 className="title">Barcha Yangiliklar</h1>
                <div className="news">
                    {data?.data.map((item) => (
                        <div key={item.id} className="new">
                            <div className="body">
                                <Image src={item.image ? item.image : ""} priority alt="image" className="img" width={1000} height={500} />
                                <h4 className='name'>{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</h4>
                                <Link href={`/news/${item.id}`} className="explore btn-text">batafsil</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Allnews;