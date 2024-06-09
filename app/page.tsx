import Header from "../components/header/Header";
import { API_URL } from "../constants";
export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <Header />
      {API_URL}
    </main>
  );
}
;