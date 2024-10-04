import sponsor from "../../../data/sponsors";

const Sponsors = () => {
    return (
        <>
            <div className="flex flex-row gap-2 px-8 items-center mt-8 justify-center">
                {sponsor.map((data, index) => (
                    <img key={index} className="w-full h-15 hover:scale-110 transition-transform ease-in-out duration-200 cursor-pointer" alt={data.alt} src={data.img_url} />
                ))}
            </div>
        </>
    )
}

export default Sponsors;