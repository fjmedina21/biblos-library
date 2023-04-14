import Contact from "../../components/contact/Contact";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Reasons from "../../components/reasons/Reasons";
import Team from "../../components/team/Team";
import Titles from "../../components/titles/Titles";
const Index = () => {
  console.log(document.documentElement.scrollTop);
  return (
    <>
      <Featured />
      <Titles />
      <Reasons />
      <Team />
      <Contact />
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default Index;
