export default async function Page({params}: {params: {id: string}}) {
    const {id} = params;
    console.time("firstRequest")
    const transition = await fetch(`https://staging.cache.api.globus.furniture/translations/toTranslationMap?langauge=ru121`,{
        cache:"default",
        headers:{
            "x-ssg-or-ssr-request": "1",
            "x-deployment-id": process.env.VERCEL_GIT_COMMIT_SHA!,
        }
    });
    console.timeEnd("firstRequest")
    console.log("firstRequest headers x-response-time",transition.headers.get("x-response-time"))
    console.log("Cf-Cache-Status:",transition.headers.get("Cf-Cache-Status"))
    const json = JSON.stringify(await transition.json());
    return (
        <div>
            id:{id}
            <div>
                translation
                <div>{json}</div>
                {/*<div>{map}</div>*/}
            </div>
        </div>
    );
}
export const dynamic = "force-static";

export const generateStaticParams = () => {
    const numsTo100 = [];
    for (let i = 0; i < 200; i++) {
        numsTo100.push(i.toString());
    }
    return numsTo100.map(n => {
        return {
            id: n,
        };
    });
};
