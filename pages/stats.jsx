import Head from "next/head";
import Layout from "../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Gamed - Statistiques</title>
            </Head>
            <h1 className="text-2xl text-center">
                Statistiques
            </h1>
            <p >À venir...</p>
        </Layout>
    );
}
