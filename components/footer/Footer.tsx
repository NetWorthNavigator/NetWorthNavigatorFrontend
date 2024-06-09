export default function Footer() {
    return (
        <header className="flex w-full h-40 items-center justify-between p-4">
            <h1 className="text-xl font-medium pl-20">NetWorthNavigator</h1>
            <nav className="pr-10">
                <ul className="flex space-x-4 text-xl font-medium">
                    <li>
                        <a href="/" className="hover:underline">Your Portfolio</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline">Get Started</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}