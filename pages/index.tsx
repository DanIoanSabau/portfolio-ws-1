import MainSection from "../components/sections/MainSection";
import NavigationBar from "../components/NavigationBar";
import OffersSection from "../components/sections/OffersSection";
import PlanningSection from "../components/sections/PlanningSection";
import RoomsSections from "../components/sections/RoomsSections";
import Footer from "../components/Footer";

export default function Home() {
  return (
      <div>
          <NavigationBar />
          <MainSection />
          <OffersSection />
          <PlanningSection />
          <RoomsSections />
          <Footer />
      </div>
  )
}
