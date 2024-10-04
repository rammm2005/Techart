import Button from "../../Button/Button";
import { GoDownload } from "react-icons/go";

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-row justify-center gap-[11rem] items-center mt-8">
                <div className="flex flex-col gap-2 items-start">
                    <h6 className="font-semibold text-xl">Welcome to my Portfolio</h6>
                    <h1 className="text-7xl font-bold leading-19">Hi I’m
                        <p className="text-blue-600">Robert Junior</p>
                        Product Designer</h1>
                    <p className="text-slate-600 mt-3 max-w-2xl">
                        Collaborating with highly skilled individuals, our agency delivers top-quality services.
                    </p>
                    <div className="flex flex-row w-full gap-8 mt-5">
                        <Button className="rounded-full px-8 items-center font-semibold py-2 text-white bg-blue-600 cursor-pointer" text='Hire Me!' />
                        <Button className="rounded-full px-6 items-center font-semibold py-2 text-blue-500 bg-transparent border border-blue-500 hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 cursor-pointer" text='Download CV' endIcon={<GoDownload className="ml-2 text-lg" />} />
                    </div>
                </div>

                <div className="relative">
                    <img className="w-full h-auto " alt="profile" src="./assets/images/profile.png" />
                </div>
            </div>
        </>
    )
}

export default HeroSection;