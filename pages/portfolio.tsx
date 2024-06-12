import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess } from 'react-plaid-link';


export default function Portfolio({ apiUrl }: any) {
    const onSuccess: PlaidLinkOnSuccess = async (public_token, metadata) => {
        console.log('onSuccess', public_token, metadata)
        // Send the public_token to your app server.
        const response = await fetch(apiUrl + '/create_access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ public_token }),
        });
    };

    const [linkToken, setLinkToken] = useState(null);

    const config: PlaidLinkOptions = {
        token: linkToken,
        onSuccess,
    };

    const { open, ready, error } = usePlaidLink(config);

    const fetchLinkToken = async () => {
        const response = await fetch(apiUrl + '/create_link_token');
        const data = await response.json();
        console.log(data)
        setLinkToken(data.link_token);
    };

    useEffect(() => {
        if (ready && linkToken) {
            open();
        }
    }, [ready, linkToken]);

    const buttonOnClick = async () => {
        await fetchLinkToken();
    }

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <p className="text-lg">This is a portfolio page.</p>
            <p className="text-lg">API URL: {apiUrl}</p>
            <button onClick={buttonOnClick}>Connect a bank account</button>
        </main>
    );
}

export async function getServerSideProps() {
    const apiUrl = API_URL;
    return { props: { apiUrl } };
}