import Navbar from "../../../components/global/Navbar";
import Footer from "../../../components/global/Footer";
import Head from "./Head";
import Bottom from "./Bottom";
import Reviews from "./Reviews";
import Plans from "./Plans";
import Feedback from "./Feedback";
// import Bottom from "./bottom";

const Home1=()=> {
  return (
    <>
      <Navbar />
      <Head/>
      <Reviews/>
      <Plans/>
      <Feedback/>
      <Bottom/>
      <Footer />
    </>
  );
}
export default Home1; 