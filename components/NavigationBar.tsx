import appConfig from "../configs/appConfig";
import {HiMenuAlt3} from 'react-icons/hi'
import {useState} from "react";

export default function NavigationBar() {
    const navigationConfigs = appConfig.navigationConfigs;
    const [showNavigationDestinations, setShowNavigationDestinations] = useState(false);
    const toggleShowNavigationDestinations = () => {
        setShowNavigationDestinations(!showNavigationDestinations);
        document.body.style.overflow = showNavigationDestinations ? 'scroll' : 'hidden';
    }

    return (
        <div className={`absolute w-full flex justify-between p-4 items-center text-white`}>
            <h1 className={`font-bold text-2xl z-20`}>Experiences</h1>
            <HiMenuAlt3 className={`cursor-pointer z-20`} size={25} onClick={toggleShowNavigationDestinations} />
            <div className={
                showNavigationDestinations ? `fixed top-0 left-0 w-full h-screen text-gray-300 bg-black/90 px-4 py-7 flex-col ease-in duration-300 z-10`
                    : `absolute top-0 left-[-100%] h-screen ease-in duration-300 z-10`
            }>
                <ul className={`fixed w-full h-full flex flex-col items-center justify-center`}>
                    {navigationConfigs.sections.map((section) => <li key={section.name} className={`navigation-destination`}>{section.name}</li>)}
                </ul>
            </div>
        </div>
    );
}