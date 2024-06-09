import Link from "next/link";

export default function Header() {
    return (
        <header className="flex w-full h-40 items-center justify-between p-4">
            <h1 className="text-xl font-medium pl-20">NetWorthNavigator</h1>
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
        </header>
    );
}