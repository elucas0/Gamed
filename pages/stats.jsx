import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/layout";

export default function FirstPost() {
    const [parsedStats, setParsedStats] = useState({});

    useEffect(() => {
        setParsedStats(JSON.parse(localStorage.getItem('stats')));
    }, []);

    return (
        <Layout>
            <Head>
                <title>Gamed - Statistiques</title>
            </Head>
            <h1 className="text-2xl text-center">
                Statistiques
            </h1>
            <div className="flex flex-col mt-6">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 text-center text-xl">
                    <div>
                        <h2 className="bg-yellow text-black">Parties jouées</h2>
                        <h2 className="text-3xl">{parsedStats['played']}</h2>
                    </div>
                    <div>
                        <h2 className="bg-purple">Parties gagnées</h2>
                        <h2 className="text-3xl">0</h2>
                    </div>
                    <div>
                        <h2 className="bg-yellow text-black">Taux de réussite</h2>
                        <h2 className="text-3xl">0%</h2>
                    </div>
                </div>
            </div>

        </Layout >
    );
}
