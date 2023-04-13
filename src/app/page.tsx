import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href={"/test"}>I&apos;m cool girl</Link>
      </div>
    </main>
  )
}

export const metadata = {
    openGraph: {
        title: `test`,
        url: `www.yanling.cool`,
        siteName: "www.yanling.cool",
        images: [
            {
                url: `https://www.yanling.cool/api/og/test`,
                width: 800,
                height: 400,
            },
        ],
        type: "website",
    },
}