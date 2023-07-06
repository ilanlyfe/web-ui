import Head from "next/head";
import Journeys from "@/components/groups/journeys";

export default function JourneysPage() {
  return (
    <>
      <Head>
        <title>Welcome to the ilanlyfe</title>
        <meta
          name="description"
          content="Created with love from the Caribbean"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white sm:py-16 py-16">
        <Journeys />
        {/* if guest is authenticated... else */}
        {/*  pass auth/ctx to curation component */}
      </main>
    </>
  );
}