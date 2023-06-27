export default async function Page({params}: {params: {id: string}}) {
    const {id} = params;
    const transition = await fetch(`https://staging.api.globus.furniture/translations/toTranslationMap?langauge=ru&t=${id}`);
    const json = JSON.stringify(await transition.json());
    const map = JSON.stringify(
        await (await fetch("https://staging.api.globus.furniture/categoryProperties/categoryKeyToCoverMap")).json(),
    );
    return (
        <div>
            id:{id}
            <div>
                translation
                <div>{json}</div>
                <div>{map}</div>
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
