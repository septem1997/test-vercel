export default async function Page({params}: { params: { id: string } }) {
    const {id} = params
    const transition = await fetch("https://staging.api.globus.furniture/translations/toTranslationMap?langauge=en",{
        credentials:"include"
    })
    const json = JSON.stringify(await transition.json())
    return <div>
        id:{id}

        <div>
            translation
            <div>
                {json}
            </div>
        </div>
    </div>
}

export const revalidate = 14400; // 4 hours
export const dynamic = "force-static";


export const generateStaticParams = () => {
    const numsTo100 = []
    for (let i =0;i<100;i++){
        numsTo100.push(i.toString())
    }
    return numsTo100.map(n =>{
        return {
            id:n
        }
    })
};
