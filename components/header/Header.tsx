import Link from "next/link";

export default function Header() {
    return (
        <header className="flex w-full h-40 items-center justify-between p-4">
            <h1 className="text-xl font-medium pl-20">NetWorthNavigator</h1>
            <nav className="pr-10">
                <ul className="flex space-x-4 text-xl font-medium">
                    <li>
                        <Link href="/portfolio/">
                            <a>Your Portfolio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/get-started/">
                            <a>Get Started</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about/">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}