import useBillboard from "@/hooks/useBillboard";
import React from "react";

const Billboard = () => {
    const {data} = useBillboard();
    return(
        <div className="relative h-[56.25vw]">
<video

autoPlay
muted
loop
className="
w-full
h-[56.25vw]
object-cover
brightness-[60%]
"
 poster={data?.thumbnailUrl}
src={data?.videoUrl}>

</video>
<div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
    <p className="text-white
    text-1xl
    md:text-5xl
    h-full
    w-[50%]
    lg:text-6xl
    font-bold 
    drop-shadow-xl">{data?.title}</p>
    <p className="text-white
    text-[8px]
    md:text-lg
    mt-3
    md:mt-8
    w-[90%]
    md:text-lg
    md:w-[80%]
    lg:w-[50%]
    drop-shadow-xl
     ">{data?.description}</p>
</div>
        </div>
    )
}

export default Billboard