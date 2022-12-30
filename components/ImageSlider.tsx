import {StaticImageData} from "next/image";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {useState} from "react";
import {RxDotFilled} from "react-icons/rx";

type ImageSliderArgs = {
    images: StaticImageData[]
};

export default function ImageSlider({images}: ImageSliderArgs) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigateToThePreviousImage = () => setCurrentImageIndex(currentImageIndex === 0 ? images.length -1 : currentImageIndex - 1);
    const navigateToTheNextImage = () => setCurrentImageIndex(currentImageIndex === images.length -1 ? 0 : currentImageIndex + 1);

    return (
        <div className={`h-[580px] w-full m-auto py-16 px-4 relative`}>
            <div className={`w-full h-full rounded-2xl bg-center bg-cover duration-300`}
                 style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}>
            </div>
            {/* Left Arrow */}
            <div className={`swiper-arrow left-5`}>
                <BsChevronCompactLeft size={30} onClick={navigateToThePreviousImage} />
            </div>
            {/* Right Arrow */}
            <div className={`swiper-arrow right-5`}>
                <BsChevronCompactRight size={30} onClick={navigateToTheNextImage} />
            </div>
            <div className={`flex justify-center top-4 py-2`}>
                {images.map((_, index) =>
                    <div key={index} className={`text-2xl cursor-pointer`} onClick={() => setCurrentImageIndex(index)}><RxDotFilled /></div>)}
            </div>
        </div>
    );
}