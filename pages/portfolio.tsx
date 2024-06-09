
import { API_URL } from "../constants";

export default function Portfolio({ apiUrl, apiUrlNotWorking }: any) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Test</h1>
            <p className="text-lg">This is a portfolio page.</p>
            <p className="text-lg">API URL: {apiUrl}</p>
            <p className="text-lg">Another API: {apiUrlNotWorking} </p>
        </main>
    );
}

export async function getServerSideProps() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL_PROD || process.env.NEXT_PUBLIC_API_URL_DEV;
    const apiUrlNotWorking = API_URL;
    // Pass the apiUrl to your page as a prop
    return { props: { apiUrl, apiUrlNotWorking } };
}