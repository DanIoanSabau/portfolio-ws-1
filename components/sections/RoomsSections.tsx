import appConfig from "../../configs/appConfig";
import Image from "next/image";
import ImageSlider from "../ImageSlider";

export default function RoomsSections() {
    const sectionConfigs = appConfig.sectionsConfigs.rooms;

    return (
        <section>
            <div className={`max-w-[1400px] h[500px] bg-blue-100 mx-auto my-20 md:mb-[35%] lg:mb-20% pt-16 px-4 grid lg:grid-cols-3 gap-4`}>
                <div className={`lg:top-20 relative lg:col-span-1 col-span-2`}>
                    <h3 className={`font-bold text-2xl`}>{sectionConfigs.text.fineInteriorRooms}</h3>
                    <p className={`pt-4`}>{sectionConfigs.text.description}</p>
                </div>
                <div className={`grid grid-cols-2 col-span-2 gap-2`}>
                    {sectionConfigs.roomsImages.map((image, index) =>
                        <Image className={`object-cover w-full h-full ${(index == 1) && 'row-span-2'}`} key={image.src} src={image} alt={``} />)}
                </div>
            </div>
            <ImageSlider images={sectionConfigs.imageSliderImages} />
        </section>
    );
}