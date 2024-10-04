import Button from "../../Button/Button";

const AboutMe = () => {
    return (
        <>
            <div className="flex flex-row gap-48 mt-24 items-center justify-center">
                <img alt="profile" src="./assets/images/profile-1.png" />
                <div className="flex flex-col items-start gap-2">
                    <h6 className="uppercase font-semibold text-xl text-blue-600">about me</h6>
                    <h1 className="text-4xl font-bold leading-15 text-blue-600">
                        20 Year's Experience <b className="text-black">on Product Design</b>
                    </h1>
                    <p className="text-slate-700">
                        Hello there! <b>I'm Robert Junior.</b> I specialize in web design and development, and I'm deeply passionate and committed to my craft. With <b>20 years</b> of experience as a professional graphic designer
                    </p>

                    <div className="flex flex-row gap-4 items-center mt-8">
                        <Button className="rounded-full bg-blue-600 text-white px-8 py-2 font-semibold" text="Main Skills" />
                        <Button className="rounded-full bg-transparent border border-blue-600 text-blue-600 px-10 py-2 font-semibold" text="Awards" />
                        <Button className="rounded-full bg-transparent border border-blue-600 text-blue-600 px-10 py-2 font-semibold" text="Educations" />
                    </div>

                    <div className="flex flex-col gap-2 w-full mt-6 text-start">
                        <span className="font-semibold">User Experience Design - UI/UX
                        </span>
                        <div className="rounded-full py-[0.6rem] w-full bg-blue-600"></div>
                    </div>

                    <div className="flex flex-col gap-2 w-full mt-6 text-start">
                        <span className="font-semibold">Web & User Interface Design - Development
                        </span>
                        <div className="rounded-full py-[0.6rem] w-full bg-blue-600"></div>
                    </div>

                    <div className="flex flex-col gap-2 w-full mt-6 text-start">
                        <span className="font-semibold">Interaction Design - Animation
                        </span>
                        <div className="rounded-full py-[0.6rem] w-full bg-blue-600"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutMe;