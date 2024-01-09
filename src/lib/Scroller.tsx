
import { useEffect, useState } from "react"
import style from "./style.module.css"

export default function Scroller({ imageArr =
    [
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ]
}) {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(index == imageArr.length){
                setIndex(() => 0);
            }else{
                setIndex((prevTimer) => prevTimer+1);
            }
            // console.log( "froom mosaic ",imageArr)
        }, 4000);

        return () => clearInterval(intervalId);
    }, [imageArr])


    return (
        <main className={style.container}>
            <section>
                {
                    imageArr[index - 1] &&
                    <img src={imageArr[index - 1]} alt="" className={`${index % 2 == 0 ? style.animateImg1 : style.animateImg2}`} />

                }
            </section>
            <section>
                {
                    imageArr[index] &&
                    <img src={imageArr[index]} alt="" className={`${index % 2 == 0 ? style.animateImg1 : style.animateImg2}`} />

                }
            </section>
            <section>
                {
                    imageArr[index + 1] &&
                    <img src={imageArr[index + 1]} alt="" className={`${index % 2 == 0 ? style.animateImg1 : style.animateImg2}`} />

                }
            </section>
        </main>
    )
}
