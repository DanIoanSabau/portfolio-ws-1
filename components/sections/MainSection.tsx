import Image from "next/image";
import appConfig from "../../configs/appConfig";

export default function MainSection() {
    const sectionConfigs = appConfig.sectionsConfigs.main;

    return (
        <section>
            <div className={`w-full h-screen`}>
                <Image src={sectionConfigs.backgroundImage} alt='' className={`top-0 left-0 w-full h-screen object-cover`}/>
                <div className={`absolute top-0 left-0 w-full h-screen bg-black/30`} />
                <div className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center text-white`}>
                    <div className={`md:left-[10%] max-w-[1100px] m-auto absolute p-4`}>
                        <p>{sectionConfigs.text.allInclusive}</p>
                        <h1 className={`font-bold text-4xl md:text-7xl drop-shadow-2xl`}>{sectionConfigs.text.privateBeachesAndGateways}</h1>
                        <p className={`max-w-[600px] drop-shadow-2xl py-2 text-xl`}>{sectionConfigs.text.description}</p>
                        <button className={`bg-white text-black`}>{sectionConfigs.text.reserveNow}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}