import Head from "next/head";
import Layout from "../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Gamed - Statistics</title>
            </Head>
            <h1 className="text-3xl text-center">
                Your statistics
            </h1>
            <p >Work in progress...</p>
        </Layout>
    );
}
