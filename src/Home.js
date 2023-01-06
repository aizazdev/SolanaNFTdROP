import "./App.css";
import Bonks from "./Bonks";
import logo from "./assets/logo.jpg";
import banner from "./assets/banner.png";
import { useWallet } from "@solana/wallet-adapter-react";
import {

  useWalletModal,
} from "@solana/wallet-adapter-react-ui";
// Default styles that can be overridden by your app

require("@solana/wallet-adapter-react-ui/styles.css");

function Home() {
  const wallet = useWallet();
  const { setVisible } = useWalletModal();

  const connect = () => {
    setVisible(true);
  };

  //  #f38b0b #f9c507 #a95627 #e6dcd3 #4e3b24
  return (
    <div>
      <div>
        <nav className="relative sticky top-0 z-navbar pointer-events-none">
          <div className="absolute mt-6 w-full">
            <div className="flex flex-row gap-4 justify-between px-4">
              <a
                className="flex-shrink-0 w-16 h-16 sm:w-12 sm:h-12 xl:w-16 xl:h-16 rounded-full align-middle justify-center p-3 sm:p-2 xl:p-3 pointer-events-auto bg-[#f38b0b]"
                href="#"
              >
                <img
                  className="w-auto h-auto"
                  src={logo}
                  alt="Logo of the Famous Fox Federation. An illustration of an orange-skinned fox winking at the consumer."
                />
              </a>

              <div className="hidden sm:flex rounded-full ml-auto font-lilita text-xs uppercase pointer-events-auto bg-[#f38b0b] text-white">
                <div
                  className="flex gap-2 h-full my-auto mx-3 align-middle items-center"
                  style={{}}
                >
                  <div
                    className="rounded-full text-base xl:text-lg hover:bg-[#a95627] hover:text-white cursor-pointer px-4 py-1 tracking-wider"
                    style={{}}
                  >
                    Bonks
                  </div>
                  <div className="rounded-full text-base xl:text-lg hover:bg-[#a95627] hover:text-white cursor-pointer px-4 py-1 tracking-wider">
                    Utility
                  </div>
                  <div
                    className="rounded-full text-base xl:text-lg hover:bg-[#a95627] hover:text-white cursor-pointer px-4 py-1 tracking-wider"
                    style={{}}
                  >
                    $Bonk
                  </div>
                  <div className="rounded-full text-base xl:text-lg hover:bg-[#a95627] hover:text-white cursor-pointer px-4 py-1 tracking-wider">
                    Dens
                  </div>
                  <div className="rounded-full text-base xl:text-lg hover:bg-[#a95627] hover:text-white cursor-pointer px-4 py-1 tracking-wider">
                    Merch
                  </div>
                </div>
              </div>
              <div className="flex flex-shrink-0 pointer-events-auto font-lilita mx-6 sm:mx-0">
                {wallet.connected ? (
                  <button className="hidden sm:flex flex-row rounded-full items-center w-full h-full justify-center py-2.5 px-4 leading-loose text-lg sm:text-base xl:text-lg uppercase bg-yellow-500 text-white hover:bg-yellow-300 hover:text-white">
                    Mint NFT
                  </button>
                ) : (
                  <button
                    className="hidden sm:flex flex-row rounded-full items-center w-full h-full justify-center py-2.5 px-4 leading-loose text-lg sm:text-base xl:text-lg uppercase bg-yellow-500 text-white hover:bg-yellow-300 hover:text-white"
                    onClick={connect}
                  >
                    Connect wallet
                  </button>
                )}
              </div>
              <div className="sm:hidden w-16 h-16 rounded-full align-middle justify-center p-3 pointer-events-auto cursor-pointer bg-orange-400 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-full h-full p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <section
          className="relative w-full min-h-screen pb-12 md:pb-32"
          style={{}}
        >
          <div className="Toastify" />
          <div
            className="w-full h-32 xs:h-42 md:h-64 xl:h-80"
            style={{
              backgroundImage: `linear-gradient(rgb(243 139 11 / 17%), #f38b0b), url(${banner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "cover right",
              objectFit: "cover",
            }}
          />
          <div
            className="flex flex-col sm:flex-row justify-center sm:justify-between sm:gap-8 -mt-4 xs:-mt-8 md:-mt-28 xl:-mt-32 px-4 sm:px-6 md:px-12"
            style={{}}
          >
            <div className="flex-col m-auto  text-center sm:text-left font-lilita tracking-wide text-white text-4xl xs:text-5xl md:text-6xl xl:text-7xl">
              <div className="flex flex-col sm:flex-row items-start md:items-center gap-x-2 gap-y-2">
                <div className="mx-auto sm:mx-0" style={{}}>
                  Bonk
                </div>
                <div className="relative cursor-pointer flex my-auto items-center group mx-auto flex-col">
                  <img
                    src="https://famousfoxes.com/unlocked.630fa198.png"
                    className="h-7 xs:h-8 sm:h-9 md:h-10 xl:h-11"
                    style={{}}
                  />
                  <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                    <span className="w-32 relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                      No staked Bonk found!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full max-w-screen-xl mx-auto px-8 sm:px-12 py-5 text-white md:text-center"
            style={{}}
          />
          <div
            className="bg-[#f38b0b] mt-4 xl:mt-8 w-full px-4 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-x-8"
            style={{}}
          >
            <Bonks />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
