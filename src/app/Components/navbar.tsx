import Link from "next/link";

export default function Nav() {
    return (
        <nav className="bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold">Asher</span>
                    </div>
                    <div className="hidden sm:flex space-x-10">
                        <Link href="/" className="text-lg font-medium hover:text-gray-300">
                            Home
                        </Link>
                        <Link href="/contact" className="text-lg font-medium hover:text-gray-300">
                            Contact
                        </Link>
                        <Link href="/products" className="text-lg font-medium hover:text-gray-300">
                            Products
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

