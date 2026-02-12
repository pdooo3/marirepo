import Boxes from "../Component/Boxes";
import HomePage from "../Component/HomePage";
import Info from "../Component/Info";
import SlideForth from "../Component/Slideforth";
import PicTopic from "../Component/PicToPic";
import SlideSix from "../Component/SlideSix";
import Footer from "../Component/Footer";
// import 'styles/globals.css';

function home() {
  return (
    <main className="font-vazir text-lg relative flex flex-col w-full p-2 md:p-6">
      <HomePage />

      {/* cards && box first page */}
      <Boxes />

      {/* slide 3 */}
      <Info />

      {/* slide 4 */}
      <SlideForth />

      {/* slide 5 */}
      <PicTopic />

      {/* slide 6 */}
      <SlideSix />

      {/* footer */}
      <Footer />
    </main>
  );
}

export default home;
