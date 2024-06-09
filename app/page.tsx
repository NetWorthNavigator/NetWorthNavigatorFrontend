import Header from "../components/header/Header";
import { API_URL } from "../constants";
export default function Home() {
  console.log('API_URL:', API_URL);
  console.log('NEXT_PUBLIC_API_URL_PROD:', process.env.NEXT_PUBLIC_API_URL_PROD);
  console.log('NEXT_PUBLIC_API_URL_DEV:', process.env.NEXT_PUBLIC_API_URL_DEV);
  return (
    <main className="flex h-screen w-screen">
      <Header />
      URL: {API_URL}
    </main>
  );
}
