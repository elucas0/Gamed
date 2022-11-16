import Head from "next/head";
import Layout from "../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Gamed - About</title>
            </Head>
            <h1 className="text-3xl text-center">
                About me
            </h1>
        </Layout>
    );
}
