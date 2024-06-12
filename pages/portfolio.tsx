
import { API_URL } from "../constants";

export default function Portfolio({ apiUrl }: any) {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <p className="text-lg">This is a portfolio page.</p>
            <p className="text-lg">API URL: {apiUrl}</p>
        </main>
    );
}

export async function getServerSideProps() {
    const apiUrl = API_URL
    return { props: { apiUrl } };
}