import { useProgram,useClaimNFT, useClaimConditions } from "@thirdweb-dev/react/solana"
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./styles/Home.css";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home = () => {
    const wallet = useWallet();
    const { program } = useProgram("9CZgHERzZUst9Vu54VjLF3SYu4fQWW8U3gRrzNQjXtdC", "nft-drop");
    const { mutateAsync: claim, isLoading, error } = useClaimNFT(program);
    const {data: condition, isLoading: conditionIsLoading} = useClaimConditions(program);
  return (
    <>
      <div className="container">
        <div className="iconContainer">
          <img
            src="/thirdweb.svg"
            height={100}
            width={215}
            alt="thirdweb"
            className="icon"
          />
          {/* <img
            width={75}
            height={75}
            src="/sol.png"
            className="icon"
            alt="sol"
          /> */}
        </div>
        {wallet.connected ? (
          <button disabled={isLoading} onClick={() => claim({amount: 1})} >
          Mint NFT
        </button>
        ) : (
          <WalletMultiButton />
        )}
        <h1 className="h1">Hello This is Solana Demo Minting Page, 👋</h1>
        <p className="explain">
          Explore our new art&rsquo;s and Claim it ASAP{" "}
          <b>
            {/* <a
              href="https://portal.thirdweb.com/solana"
              target="_blank"
              rel="noopener noreferrer"
              className="lightPurple"
            >
              Solana SDK
            </a> */}
          </b>
          .
        </p>
        {wallet.connected ? (
          <WalletMultiButton />
        ) : (
          ""
        )}

          <h2>Minted: {condition?.claimedSupply} / {condition?.totalAvailableSupply}</h2>
      </div>
    </>
  );
};

export default Home;
