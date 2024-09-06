import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faSquarePollVertical,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <>
      <Header />

      <div className="hero bg-BLACK min-h-screen">
        <div className="hero-content w-[95%] h-[95%] flex flex-col">
          <div className="container w-[100%] bg-white p-2 mb-2 rounded text-black font-bold flex items-center justify-between">
            <p className="pl-3">Good Morning! Username</p>
            <div tabIndex={0} className="avatar">
              <div className="h-[40px] rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-center bg-LightBlack p-3 rounded  w-[100%] h-[100%]">
            <div className="container flex flex-col gap-5">
              <div
                role="button"
                className="w-[60%] h-[180px] bg-ORANGE flex min-h-24 flex-col gap-5 text-black font-bold rounded btn btn-ghost"
              >
                <div className="text-5xl">
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    style={{ color: "#000000" }}
                  />
                </div>
                <p>Budget: Allocation & Transaction</p>
              </div>
              <div
                role="button"
                className="w-[60%] h-[180px] bg-yellow-400 flex flex-col gap-5 text-black font-bold rounded btn btn-ghost"
              >
                <div className="text-5xl">
                  <FontAwesomeIcon
                    icon={faSquarePollVertical}
                    style={{ color: "#000000" }}
                  />
                </div>
                <p>Voting: Fare Leader</p>
              </div>
              <div
                role="button"
                className="w-[60%] h-[180px] bg-PINK flex flex-col gap-5 text-black font-bold rounded btn btn-ghost"
              >
                <div className="text-5xl">
                  <FontAwesomeIcon
                    icon={faHandHoldingDollar}
                    style={{ color: "#000000" }}
                  />
                </div>
                <p>Tax: Proper Utilization</p>
              </div>
            </div>
            <div className="w-[100%]">
              <img
                src=""
                alt=""
                className="w-[100%] h-[100%] object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
