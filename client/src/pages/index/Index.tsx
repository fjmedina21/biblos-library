import Contact from "../../components/contact/Contact";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";
import Titles from "../../components/titles/Titles";
const Index = () => {
  return (
    <div>
      <Featured />
      <Titles />
      <Team />
      <Contact />
      <div className="mt-5">
        <Footer/>
      </div>
    </div>
  );
};

export default Index;
