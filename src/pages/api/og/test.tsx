import {ImageResponse} from "@vercel/og";


export const config = {
    runtime: "edge",
};

export default function handler(request:Request){
    return new ImageResponse(
        (
            <div tw={"flex relative w-full h-full bg-transparent"}>
                <div tw={"absolute left-[32px] bottom-[32px] mb-[32px] flex flex-col text-white max-w-[300px]"}>
                    Not Found
                    <img src={"https://globus.pictures/fr/private/3627/4000/c83f99650c069dd2ea92633254cab3514e8b273a29651c92bd903881b6558db5.jpeg::426:912/3241:3358?bottom=0.15&fitMode=auto&flatten=white&h=320&left=0.090625&right=0.090625&top=0.15&transX=50&transY=50&w=320&ext=jpg"} />
                </div>
            </div>
        ),
        {
            width: 800,
            height: 400,
        },
    );
}