import appConfig from "../configs/appConfig";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {TiSocialPinterest} from "react-icons/ti";

export default function Footer() {
    const footerConfigs = appConfig.footerConfigs;

    return (
        <div className={`w-full mt-24 bg-gray-900 text-gray-300 p-2`}>
            <div className={`max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-500 py-8 px-4`}>
                <div>
                    <h6 className={`footer-section-title`}>{footerConfigs.text.solutions}</h6>
                    <ul>
                        {footerConfigs.text.solutionsArray.map((solution) => <li key={solution} className={`py-1`}>{solution}</li>)}
                    </ul>
                </div>
                <div>
                    <h6 className={`footer-section-title`}>{footerConfigs.text.support}</h6>
                    <ul>
                        {footerConfigs.text.supportArray.map((support) => <li key={support} className={`py-1`}>{support}</li>)}
                    </ul>
                </div>
                <div>
                    <h6 className={`footer-section-title`}>{footerConfigs.text.company}</h6>
                    <ul>
                        {footerConfigs.text.companyInfoArray.map((companyInfo) => <li key={companyInfo} className={`py-1`}>{companyInfo}</li>)}
                    </ul>
                </div>
                <div>
                    <h6 className={`footer-section-title`}>{footerConfigs.text.legal}</h6>
                    <ul>
                        {footerConfigs.text.legalInfoArray.map((legalInfo) => <li key={legalInfo} className={`py-1`}>{legalInfo}</li>)}
                    </ul>
                </div>
                <div className={`col-span-2 py-8 md:pt-2`}>
                    <p className={`font-bold uppercase`}>{footerConfigs.text.subscribeToOurNewsletter}</p>
                    <p className={`py-4`}>{footerConfigs.text.theLatestDeals}</p>
                    <form className={`flex flex-col sm:flex-row`}>
                        <input className={`w-full p-2 mr-4 mb-4 rounded-md`} type={"email"} placeholder={'Enter your email address...'}/>
                        <button className={`p-2 mb-4 rounded-md`}>{footerConfigs.text.subscribe}</button>
                    </form>
                </div>
                <div className={`col-span-2 md:col-span-6 flex flex-col sm:flex-row max-w-[1400px] px-2 py-4 mx-auto justify-between text-center text-gray-500`}>
                    <p className={`p-4`}>{footerConfigs.text.experiences}</p>
                    <div className={`flex justify-between sm:w-[300px] pt-4 px-16 text-2xl`}>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <TiSocialPinterest />
                    </div>
                </div>
            </div>
        </div>
    );
}