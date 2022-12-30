import appConfig from "../../configs/appConfig";

export default function OffersSection() {
    const sectionConfigs = appConfig.sectionsConfigs.offers;

    return (
        <section>
            <div className={`max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between`}>
                {sectionConfigs.offersNames.map((offerName) => <p key={offerName} className={`offer`}>{offerName}</p>)}
            </div>
        </section>
    );
}