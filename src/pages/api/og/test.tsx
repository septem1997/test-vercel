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
                    <img src={"https://avatars.githubusercontent.com/u/13849245?v=4"} />
                </div>
            </div>
        ),
        {
            width: 800,
            height: 400,
        },
    );
}