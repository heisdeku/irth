import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {
    return (
        <header className="px-8 py-4 ">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image src={logo} alt="logo" height={70} width={70}
                    className="cursor-pointer draggable-none"
                    />
                </Link>
                <button className="flex items-center justify-center px-8 py-4 border border-transparent rounded-full  text-2xl font-medium text-[#fff] border-primary-600
            
                ">
                    Login
                </button>
            </div>
        </header>
    );
};
