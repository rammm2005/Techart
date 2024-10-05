import navigation from "../../../data/navigation";
import Button from "../../Button/Button";

const Navbar = () => {
    return (
        <>
            <header className="flex flex-row items-center justify-between static py-6 px-16">
                <img src="./assets/images/logo.svg" width={150} height={150} alt="logo" />
                <nav className="flex flex-row gap-4 items-center">
                    {navigation.map((data, index) => (
                        <div className="mr-2" key={index}>
                            <a href={data.href} className="font-semibold text-slate-800">{data.title}</a>
                        </div>
                    ))}
                </nav>
                <Button className='py-2 px-6 rounded-full font-semibold text-base text-white bg-blue-500 hover:bg-blue-600 transition-all ease-in-out duration-300 capitalize' text="Let’s chat" />
            </header>
        </>
    )
}

export default Navbar;