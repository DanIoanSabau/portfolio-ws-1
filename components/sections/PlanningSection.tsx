import appConfig from "../../configs/appConfig";
import Image from "next/image";

export default function PlanningSection() {
    const sectionConfigs = appConfig.sectionsConfigs.planning;

    return (
        <section>
            <div className={`max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4`}>
                {/*  Left Side  */}
                <div className={`grid grid-cols-2 grid-rows-6 h-[80vh]`}>
                    {sectionConfigs.images.map((image, index) =>
                        <Image className={`object-cover w-full h-full p-2 ${(index == 0 || index == 3) ? 'row-span-3' : 'row-span-2'}`} key={image.src} src={image} alt={``} />)}
                </div>
                {/*  Right Side  */}
                <div className={`flex flex-col h-full justify-center`}>
                    <h3 className={`text-5xl md:text-6xl font-bold`}>{sectionConfigs.text.planYourNExtTrip}</h3>
                    <p className={`text-2xl py-6`}>{sectionConfigs.text.description1}</p>
                    <p className={`pb-6`}>{sectionConfigs.text.description2}</p>
                    <div>
                        <button className={`border-black mr-4 hover:shadow-xl`}>{sectionConfigs.text.learnMore}</button>
                        <button className={`bg-black text-white border-black hover:shadow-xl`}>{sectionConfigs.text.bookYourTrip}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}