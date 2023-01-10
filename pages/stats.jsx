import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/layout";

export default function Stats() {
    const [parsedStats, setParsedStats] = useState({
        played: 0,
        won: 0,
        avgGuess: 0,
    });

    useEffect(() => {
        if (localStorage.getItem("stats")) {
            setParsedStats(JSON.parse(localStorage.getItem("stats")));
        }
    }, []);

    return (
        <Layout>
            <Head>
                <title>Gamed - Statistiques</title>
            </Head>
            <h1 className="text-2xl text-center mb-6">Statistiques</h1>
            <div className="flex flex-col">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 text-center text-xl">
                    <div>
                        <h2 className="bg-yellow text-black">Parties jouées</h2>
                        <h2 className="text-3xl">{parsedStats["played"]}</h2>
                    </div>
                    <div>
                        <h2 className="bg-purple">Parties gagnées</h2>
                        <h2 className="text-3xl">{parsedStats["won"]}</h2>
                    </div>
                    <div>
                        <h2 className="bg-yellow text-black">
                            Taux de réussite
                        </h2>
                        <h2 className="text-3xl">
                            {Math.round(
                                (parsedStats["won"] / parsedStats["played"]) *
                                100
                            )}
                            %
                        </h2>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
