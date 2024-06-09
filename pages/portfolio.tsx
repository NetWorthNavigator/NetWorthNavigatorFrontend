
import { API_URL } from "../constants";

export default function Portfolio({ apiUrl }: any) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Test</h1>
            <p className="text-lg">This is a portfolio page.</p>
            <p className="text-lg">API URL: {apiUrl}</p>
        </main>
    );
}

export async function getServerSideProps() {
    const apiUrl = API_URL
    return { props: { apiUrl } };
}