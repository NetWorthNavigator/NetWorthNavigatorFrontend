import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex w-full h-40 items-center justify-end p-4">
            <nav className="pr-10">
                <ul className="flex space-x-4 text-xl font-medium">
                    <li>
                        <Link href="/portfolio/">Your Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/get-started/">Get Started</Link>
                    </li>
                    <li>
                        <Link href="/about/">About</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}