
const SITE_URL = "http://localhost:3000"

export default function robots() {
    return {
        rules: [
            // {
            //     userAgent:"Yandex",
            //     // @ts-ignore
            //     "clean-param":"optionItemId&q&sort&filter&utm_banner&source_type&position_type&adtype&adposition&withImage&page"
            // },
            {userAgent: "*", allow: "/"}
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}