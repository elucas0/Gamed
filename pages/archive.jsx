import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/utils.module.css";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Gamed - Archive</title>
            </Head>
            <h1 className="text-3xl text-center">Archive</h1>
            <div className="flex flex-col">
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-6">
                    <Link className={styles.ctaAlt} href={"archive/gamed1"}>
                        1
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed2"}>
                        2
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed3"}>
                        3
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed4"}>
                        4
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed5"}>
                        5
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed6"}>
                        6
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed7"}>
                        7
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed8"}>
                        8
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed9"}>
                        9
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed10"}>
                        10
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed11"}>
                        11
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed12"}>
                        12
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed13"}>
                        13
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed14"}>
                        14
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed15"}>
                        15
                    </Link>
                    <Link className={styles.ctaAlt} href={"archive/gamed16"}>
                        16
                    </Link>
                </div>

            </div>
        </Layout>
    );
}
