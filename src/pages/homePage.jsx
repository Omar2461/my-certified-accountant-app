import AboutOffice from "../../components/homePage/AboutOffice";
import AboutUs from "../../components/homePage/AboutUs";
import OurServices from "../../components/homePage/OurServices";
import OurClients from "../../components/homePage/OurClients";
import ContactUs from "../../components/homePage/ContactUs";

function HomePage() {
  return (
    <div>
      <AboutOffice />
      <AboutUs />
      <OurServices />
      <OurClients />
      <ContactUs/>
    </div>
  );
}

export default HomePage;
