import React, { useState } from "react";

const Bonks = () => {
  const [currentTab, setCurrentTab] = useState("Mint");

  return (
    <>
      {currentTab === "Mint" ? (
        <div className="mt-4 xl:mt-8 w-full px-4 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-x-8">
          <div className="w-full mb-3 lg:mb-0 lg:w-1/3 shrink-0" style={{}}>
            <div
              className="bg-[#a95627] rounded-3xl text-white text-lg font-bold p-5 px-8 xl:p-8 lg:sticky lg:top-[135px] "
              style={{}}
            >
              <h1
                className="text-orange-400 text-4xl tracking-wide font-lilita mb-3"
                style={{}}
              >
                Bonk Gen2
              </h1>
              <p className="mb-3 leading-tight" style={{}}>
                Mint / Edit / Print NFTs and SFTs!
              </p>
              <button className="text-orange-500 lg:hidden p-4 py-1 border-2 border-orange-500 rounded-xl mb-3">
                More info about your current tab
              </button>
              <div className>
                <div className="flex items-start gap-x-3 mb-3">
                  <div className="">
                    <h4 className="text-yellow-500 font-lilita text-2xl">
                      MINT
                    </h4>
                    <p className="mb-3">
                      Create an onchain collection, Mint 1/1 or Edition NFTs as
                      well as SFTs.
                    </p>
                    <p>
                      Costs <span className="text-orange-500">0.02 SOL</span>{" "}
                      per transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow" style={{}}>
            <div
              className="flex md:gap-5 items-center pb-5 mb-6 border-b-4 border-[#a95627]"
              style={{}}
            >
              <button
                className="bg-[#a95627] p-5 py-2 rounded-full font-lilita text-2xl text-white"
                onClick={() => setCurrentTab("Mint")}
                style={{}}
              >
                MINT
              </button>
              <button
                className="hover:text-[#a95627] p-5 py-2 rounded-full font-lilita text-2xl text-white"
                onClick={() => setCurrentTab("Edit")}
              >
                EDIT
              </button>
              <button
                className="hover:text-[#a95627] p-5 py-2 rounded-full font-lilita text-2xl text-white"
                onClick={() => setCurrentTab("Print")}
              >
                PRINT
              </button>
            </div>
            <div className="relative">
              <div className="flex flex-col md:flex-row gap-6 items-start text-white">
                <div className="w-full md:w-1/3 text-center">
                  <div
                    className="w-full aspect-w-1 aspect-h-1 cursor-pointer bg-purple-500/10 border-4 border-dashed border-[#a95627] hover:border-[#a95627] hover:bg-purple-500/20 rounded-xl overflow-hidden"
                    style={{}}
                  >
                    <p
                      className="flex gap-x-2 justify-center items-center"
                      style={{}}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                    <p />

                    <input
                      type="file"
                      class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                    />
                  </div>
                  <h4 className="font-lilita text-xl text-white undefined">
                    Upload Image
                  </h4>

                  <button className="p-2 px-4 border-2 bg-[#a95627] border-[#a95627] rounded-full font-bold text-white hover:bg-purple-500/20 hover:text-white mt-5">
                    Add another file
                  </button>
                  <input
                    type="file"
                    accept=".mp3, .mp4, .mov, .wav, .glb, .gltf"
                    class="block my-5 text-white bg-none w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                  />
                  <p>(.mp3, .mp4, .wav, .glb, .fbx) supported</p>
                </div>
                <div className="w-full md:w-auto flex-1">
                  <div className="flex flex-col gap-y-5 items-start">
                    <div className="w-full flex flex-col gap-y-3">
                      <div>
                        <h4 className="font-lilita text-xl text-white undefined">
                          Name
                        </h4>
                        <input
                          name="name"
                          type="text"
                          placeholder="Name"
                          id="name"
                          autoComplete="off"
                          className="border-2 bg-[#a95627] border-[#a95627] text-white placeholder-[#a95627] focus:border-[#a95627] text-lg rounded-lg p-2 px-3 
              disabled={isCreator}
              max={32} w-full"
                          defaultValue
                        />
                      </div>
                      <div>
                        <h4 className="font-lilita text-xl text-white undefined">
                          Symbol
                        </h4>
                        <input
                          type="text"
                          placeholder="Symbol"
                          id="symbol"
                          name="symbol"
                          autoComplete="off"
                          className="border-2 border-purple-500 bg-[#a95627] text-white placeholder-purple-500 focus:border-purple-400 text-lg rounded-lg p-2 px-3 
              disabled={isCreator}
              max={6} w-full"
                          defaultValue
                        />
                      </div>
                      <div>
                        <h4 className="font-lilita text-xl text-white undefined">
                          Royalties
                        </h4>
                        <input
                          type="number"
                          placeholder="Royalties (Max 50%)"
                          id="royalties"
                          name="royalties"
                          autoComplete="off"
                          className="border-2 border-[#a95627] text-white placeholder-white focus:border-[#a95627] text-lg rounded-lg p-2 px-3 
              disabled={isCreator} w-full"
                          defaultValue
                        />
                      </div>
                      <div>
                        <h4 className="font-lilita text-xl text-white undefined">
                          Description
                        </h4>
                        <textarea
                          placeholder="Description (Optional)"
                          id="desc"
                          name="description"
                          autoComplete="off"
                          className="border-2 border-[#a95627] bg-[#a95627] text-white placeholder-white focus:border-[#a95627] text-lg rounded-lg p-2 px-3 
              disabled={isCreator} w-full"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="font-lilita text-xl text-white undefined">
                        Attributes
                      </h4>
                      <div className="flex flex-col gap-y-3">
                        <div className="flex items-center gap-3">
                          <input
                            type="text"
                            placeholder="Type"
                            id="address"
                            autoComplete="off"
                            className="border-2 border-[#a95627] bg-[#a95627] text-white placeholder-[#a95627] focus:border-purple-400 text-lg rounded-lg p-2 px-3 w-3/4 "
                            defaultValue
                          />
                          <input
                            type="text"
                            placeholder="Value"
                            id="value"
                            autoComplete="off"
                            className="border-2 border-purple-500 bg-[#a95627] text-white placeholder-purple-500 focus:border-purple-400 text-lg rounded-lg p-2 px-3 w-1/4 "
                            defaultValue
                          />
                          <button
                            disabled
                            className="bg-[#a95627] hover:bg-[#a95627] border-2 border-[#a95627] text-white rounded-full"
                          >
                            <span className="font-hand text-3xl px-2">-</span>
                          </button>
                          <button
                            className="bg-[#a95627] hover:bg-[#a95627] border-2 border-[#a95627] text-white rounded-full"
                            type="button"
                          >
                            <span className="font-hand text-3xl px-2">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="font-lilita text-xl text-white undefined">
                        Creators Share
                      </h4>
                      <div className="flex flex-col gap-y-3">
                        <div className="relative flex items-center gap-3">
                          <input
                            type="text"
                            placeholder="Address"
                            id="address"
                            autoComplete="off"
                            className="border-2 border-purple-500 bg-[#a95627] text-white placeholder-purple-500 focus:border-purple-400 text-lg rounded-lg p-2 px-3 w-3/4 "
                            defaultValue="Hq4naE68xhuGqXNWWECEN73P3QhdLyRQDyqWpV28Snyn"
                          />
                          <input
                            type="number"
                            placeholder="Share"
                            id="value"
                            autoComplete="off"
                            className="border-2 border-purple-500 bg-[#a95627] text-white placeholder-purple-500 focus:border-purple-400 text-lg rounded-lg p-2 px-3 w-1/4 "
                            defaultValue={100}
                          />
                          <button
                            disabled
                            className="bg-[#a95627] hover:bg-[#a95627] border-2 border-[#a95627] text-white rounded-full"
                          >
                            <span className="font-hand text-3xl px-2">-</span>
                          </button>
                          <button
                            className="bg-[#a95627] hover:bg-[#a95627] border-2 border-[#a95627] text-white rounded-full"
                            type="button"
                          >
                            <span className="font-hand text-3xl px-2">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-lilita text-xl text-white undefined">
                        Advanced
                      </h4>
                      <div className="p-1 px-2 mb-3 border rounded border-white text-white-500">
                        <p>
                          This is a 1/1 NFT. You can either create an onchain
                          collection or optionally add this to an existing
                          collection.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-5">
                        <label className="flex items-center gap-x-1 text-white">
                          <input
                            type="checkbox"
                            name="isCollection"
                            className="w-5 h-5 rounded cursor-pointer"
                            defaultChecked
                          />
                          <span>1/1</span>
                        </label>
                        <label className="flex items-center gap-x-1 text-white">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded cursor-pointer"
                          />
                          <span>Limited Edition</span>
                        </label>
                        <label className="flex items-center gap-x-1 text-white">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded cursor-pointer"
                          />
                          <span>Unlimited Edition</span>
                        </label>
                        <label className="flex items-center gap-x-1 text-white">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded cursor-pointer"
                          />
                          <span>Semi Fungible Token</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-lilita text-xl text-white undefined">
                        Is Collection?
                      </h4>
                      <label className="flex items-center gap-x-1 text-white">
                        <input
                          type="checkbox"
                          name="isCollection"
                          className="w-5 h-5 rounded cursor-pointer"
                        />
                        <span>Yes, this mint is a collection.</span>
                      </label>
                    </div>
                    <div className="w-full">
                      <h4 className="font-lilita text-xl text-white undefined">
                        Belongs to a Collection?
                      </h4>
                      <div className="flex-1 font-bold css-b62m3t-container">
                        <span
                          id="react-select-6-live-region"
                          className="css-7pg0cj-a11yText"
                        />
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          className="css-7pg0cj-a11yText"
                        />
                        <div className=" css-4vf1rc-control">
                          <div className=" css-1d8n9bt">
                            <div
                              className=" css-ylxtwf-placeholder"
                              id="react-select-6-placeholder"
                            ></div>
                            <select
                              class="block appearance-none w-full bg-[#a95627] border border-[#a95627] text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#a95627] focus:border-[#a95627]"
                              id="grid-state"
                            >
                              <option>
                                {" "}
                                Select a Parent Collection (if any)
                              </option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                              <svg
                                class="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                          <div className=" css-1wy0on6">
                            <span className=" css-1okebmr-indicatorSeparator" />
                            <div
                              className=" css-tlfecz-indicatorContainer"
                              aria-hidden="true"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row my-4 gap-5">
                    <input
                      id="qty"
                      type="number"
                      placeholder="Quantity (default 1)"
                      autoComplete="off"
                      className="border-2 border-[#a95627] bg-[#a95627] text-white placeholder-white focus:border-purple-400 text-lg rounded-lg p-2 px-3"
                    />
                    <button
                      className="w-full text-lg  bg-orange-500 text-white border-[#56290F] shadow-[0_4px_0_0_#56290F] active:shadow-[0_0_0_0_#56290F] flex items-center justify-center -mt-1 p-4 px-10 opacity-90 hover:opacity-100 
      active:translate-y-1 rounded-full font-lilita leading-none border-4"
                    >
                      MINT!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 border-2 border-[#a95627] rounded-xl  p-3 text-white font-bold">
              Terms of Use: You agree that you are the rightful holder of the
              copyright work(s) subject to upload on Foxy Mint (the "Service").
              You agree not to upload or otherwise distribute any content
              created or owned by others that is subject to any copyright or
              other proprietary rights of any third party on the Service. Famous
              Fox Federation LLC respects the rights of all copyright holders
              and, in this regard, it has adopted and implemented a policy that
              provides for the termination of user privileges and membership in
              appropriate circumstances of users who infringe the rights of
              copyright holders. You agree to indemnify and hold harmless Famous
              Fox Federation LLC from and against any and all liability, claims,
              costs and expenses (including, without limitation, reasonable
              legal fees and expenses), brought by any third party alleging,
              arising, related or resulting from (i) your use (or use by any
              third party using your account) of the Service, including in
              violation or breach of the Terms and Conditions, (ii) your
              violation of any rights of a third party, or (iii) your violation
              of any applicable law, rule or regulation.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      {currentTab === "Edit" ? (
        <div
          className="mt-4 xl:mt-8 w-full px-4 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-x-8"
          style={{}}
        >
          <div className="w-full mb-3 lg:mb-0 lg:w-1/3 shrink-0" style={{}}>
            <div
              className="bg-[#a95627] rounded-3xl text-white text-lg font-bold p-5 px-8 xl:p-8 lg:sticky lg:top-[135px] "
              style={{}}
            >
              <h1
                className="text-orange-400 text-4xl tracking-wide font-lilita mb-3"
                style={{}}
              >
                Bonk Gen2
              </h1>
              <p className="mb-3 leading-tight" style={{}}>
                Mint / Edit / Print NFTs and SFTs!
              </p>
              <button className="text-orange-500 lg:hidden p-4 py-1 border-2 border-orange-500 rounded-xl mb-3">
                More info about your current tab
              </button>
              <div className>
                <div className="flex items-start gap-x-3 mb-3">
                  <div className>
                    <h4 className="text-yellow-500 font-lilita text-2xl">
                      EDIT
                    </h4>
                    <p className="mb-3">
                      Edit NFTs you have update authority on or verify as a
                      creator on them.
                    </p>
                    <p>
                      Costs <span className="text-orange-500">0.01 SOL</span>{" "}
                      per transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow" style={{}}>
            <div
              className="flex md:gap-5 items-center pb-5 mb-6 border-b-4 border-[#a95627]"
              style={{}}
            >
              <button
                className="hover:text-[#a95627] p-5 py-2 rounded-full font-lilita text-2xl text-white"
                onClick={() => setCurrentTab("Mint")}
                style={{}}
              >
                MINT
              </button>
              <button
                className="bg-[#a95627] hover:text-white p-5 py-2 rounded-full font-lilita text-2xl text-white"
                onClick={() => setCurrentTab("Edit")}
              >
                EDIT
              </button>
              <button
                className="hover:text-[#a95627] p-5 py-2 rounded-full font-lilita text-2xl text-white"
                onClick={() => setCurrentTab("Print")}
              >
                PRINT
              </button>
            </div>
            <div className="relative">
              <div className="flex flex-col md:flex-row gap-6 items-start text-white">
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  className="bg-[#a95627]"
                />
                <div className="w-full md:w-1/3">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-[#a95627]-500/10 border-4 border-dashed border-[#a95627] hover:border-[#a95627] hover:bg-[#a95627]-500/20 rounded-xl overflow-hidden">
                    <p className="flex justify-center items-center font-bold text-white">
                      Select a NFT to update it's image here
                    </p>
                  </div>
                  <button className="p-2 px-4 bg-[#a95627] border-2 border-[#a95627] rounded-full font-bold text-white hover:bg-[#a95627] hover:text-white mt-6 w-full">
                    Select NFT
                  </button>
                  <h4 className="font-lilita text-xl text-white my-3 text-center">
                    OR
                  </h4>
                  <div className="flex w-full gap-x-3 items-center">
                    <input
                      type="text"
                      placeholder="NFT Address"
                      id="address"
                      name="address"
                      autoComplete="off"
                      className="border-2 border-purple-500 bg-[#a95627] text-white placeholder-purple-500 focus:border-purple-400 text-lg rounded-lg p-2 px-3 w-full"
                      defaultValue
                    />
                    <button className="p-2 px-4 border-2 border-[#a95627] rounded-full font-bold text-white hover:bg-purple-500/20 hover:text-white undefined">
                      Load
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-auto flex-1">
                  <div className="flex flex-col gap-y-5 items-start">
                    <div className="w-full flex flex-col gap-y-3">
                      <div>
                        <h4 className="font-lilita text-xl text-white undefined">
                          Name
                        </h4>
                        <input
                          name="name"
                          type="text"
                          placeholder="Name"
                          id="name"
                          autoComplete="off"
                          className="border-2 border-purple-500 bg-[#a95627] text-white placeholder-purple-500 focus:border-purple-400 text-lg rounded-lg p-2 px-3 
                    disabled={isCreator}
                    max={32} w-full"
                          defaultValue
                        />
                      </div>
                      <div>
                        <h4 className="font-lilita text-xl text-white undefined">
                          Symbol
                        </h4>
                        <input
                          type="text"
                          placeholder="Symbol"
                          id="symbol"
                          name="symbol"
                          autoComplete="off"
                          className="border-2 border-purple-500 bg-[#a95627] text-white placeholder-purple-500 focus:border-purple-400 text-lg rounded-lg p-2 px-3 
                    disabled={isCreator}
                    max={6} w-full"
                          defaultValue
                        />
                      </div>
                      <div>
                        <h4 className="font-lilita text-xl text-white undefined">
                          Royalties
                        </h4>
                        <input
                          type="number"
                          placeholder="Royalties (Max 50%)"
                          id="royalties"
                          name="royalties"
                          autoComplete="off"
                          className="border-2 border-[#a95627] bg-[#a95627] text-white placeholder-white focus:border-[#a95627] text-lg rounded-lg p-2 px-3 
                    disabled={isCreator} w-full"
                          defaultValue
                        />
                      </div>
                      <div>
                        <h4 className="font-lilita text-xl text-white undefined">
                          Description
                        </h4>
                        <textarea
                          placeholder="Description (Optional)"
                          id="desc"
                          name="description"
                          autoComplete="off"
                          className="border-2 border-[#a95627] bg-[#a95627] text-white placeholder-[#a95627] focus:border-[#a95627] text-lg rounded-lg p-2 px-3 
                    disabled={isCreator} w-full"
                          defaultValue={""}
                        />
                      </div>
                      <div>
                        <h4 className="font-lilita text-xl text-white undefined">
                          Update Authority
                        </h4>
                        <input
                          type="text"
                          placeholder="Update Authority"
                          id="updateAuthority"
                          name="updateAuthority"
                          autoComplete="off"
                          className="border-2 border-purple-500 bg-[#a95627] text-white placeholder-purple-500 focus:border-purple-400 text-lg rounded-lg p-2 px-3 
                        disabled={isCreator} w-full"
                          defaultValue
                        />
                      </div>
                      <div>
                        <h4 className="font-lilita text-xl text-white undefined">
                          Mutability
                        </h4>
                        <label className="flex items-center gap-x-1 text-purple-400">
                          <input
                            type="checkbox"
                            name="isMutable"
                            className="w-5 h-5 rounded cursor-pointer "
                          />
                          <span className="text-white">Make Immutable</span>
                        </label>
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="font-lilita text-xl text-white undefined">
                        Attributes
                      </h4>
                      <div className="flex flex-col gap-y-3" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-lilita text-xl text-white undefined">
                        Creators Share
                      </h4>
                      <div className="flex flex-col gap-y-3" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-lilita text-xl text-white undefined">
                        Belongs to a Collection?
                      </h4>
                      <div className="flex-1 font-bold css-b62m3t-container">
                        <span
                          id="react-select-7-live-region"
                          className="css-7pg0cj-a11yText"
                        />
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          className="css-7pg0cj-a11yText"
                        />

                        <div className=" css-4vf1rc-control">
                          <div className=" css-1d8n9bt">
                          <select
                              class="block appearance-none w-full bg-[#a95627] border border-[#a95627] text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#a95627] focus:border-[#a95627]"
                              id="grid-state"
                            >
                              <option>
                                {" "}
                                Select a Parent Collection (if any)
                              </option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                              <svg
                                class="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-y-2 items-center justify-center mt-3">
                    <button
                      className="w-full text-lg  bg-orange-500 text-white border-[#56290F] shadow-[0_4px_0_0_#56290F] active:shadow-[0_0_0_0_#56290F] flex items-center justify-center -mt-1 p-4 px-10 opacity-90 hover:opacity-100 
        	active:translate-y-1 rounded-full font-lilita leading-none border-4"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 border-2 border-[#a95627] rounded-xl  p-3 text-white font-bold">
              Terms of Use: You agree that you are the rightful holder of the
              copyright work(s) subject to upload on Foxy Mint (the "Service").
              You agree not to upload or otherwise distribute any content
              created or owned by others that is subject to any copyright or
              other proprietary rights of any third party on the Service. Famous
              Fox Federation LLC respects the rights of all copyright holders
              and, in this regard, it has adopted and implemented a policy that
              provides for the termination of user privileges and membership in
              appropriate circumstances of users who infringe the rights of
              copyright holders. You agree to indemnify and hold harmless Famous
              Fox Federation LLC from and against any and all liability, claims,
              costs and expenses (including, without limitation, reasonable
              legal fees and expenses), brought by any third party alleging,
              arising, related or resulting from (i) your use (or use by any
              third party using your account) of the Service, including in
              violation or breach of the Terms and Conditions, (ii) your
              violation of any rights of a third party, or (iii) your violation
              of any applicable law, rule or regulation.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      {currentTab === "Print" ? (
        <div
          className="mt-4 xl:mt-8 w-full px-4 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-x-8"
          style={{}}
        >
          <div className="w-full mb-3 lg:mb-0 lg:w-1/3 shrink-0" style={{}}>
            <div className="bg-[#a95627] rounded-3xl text-white text-lg font-bold p-5 px-8 xl:p-8 lg:sticky lg:top-[135px] ">
              <h1 className="text-orange-400 text-4xl tracking-wide font-lilita mb-3">
                Bonk Gen2
              </h1>
              <p className="mb-3 leading-tight">
                Mint / Edit / Print NFTs and SFTs!
              </p>
              <button className="text-orange-500 lg:hidden p-4 py-1 border-2 border-orange-500 rounded-xl mb-3">
                More info about your current tab
              </button>
              <div className>
                <div className="flex items-start gap-x-3 mb-3">
                  <div className>
                    <h4 className="text-yellow-500 font-lilita text-2xl">
                      PRINT
                    </h4>
                    <p className="mb-3">
                      Print copies from an edition you own. Optionally airdrop
                      the editions to a list of addresses.
                    </p>
                    <p className="mb-3">
                      You'll be prompted multiple times for airdrops of more
                      than 500. In case of failures the failed counts and
                      addresses will be restored for retries.
                    </p>
                    <p className="mb-3">
                      Costs <span className="text-orange-500">0.002 SOL</span>{" "}
                      per copy.
                    </p>
                    <p className="mb-3">
                      To generate a list of holders use{" "}
                      <a className="text-orange-400" href="/snapshot">
                        Snapshot
                      </a>
                    </p>
                    <p>
                      Here's a tutorial on airdropping editions:{" "}
                      <a href="#" target="_blank" alt="View Bonk" className="text-orange-400">
                        View
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div
              className="flex md:gap-5 items-center pb-5 mb-6 border-b-4 border-[#a95627]"
              style={{}}
            >
              <button
                className="hover:text-[#a95627] p-5 py-2 rounded-full font-lilita text-2xl text-white"
                onClick={() => setCurrentTab("Mint")}
                style={{}}
              >
                MINT
              </button>
              <button
                className="hover:text-[#a95627] p-5 py-2 rounded-full font-lilita text-2xl text-white"
                onClick={() => setCurrentTab("Edit")}
              >
                EDIT
              </button>
              <button
                className="bg-[#a95627] hover:text-white p-5 py-2 rounded-full font-lilita text-2xl text-white"
                onClick={() => setCurrentTab("Print")}
              >
                PRINT
              </button>
            </div>
            <div className="relative">
              <div className="flex flex-col md:flex-row gap-6 items-start text-white">
                <div className="w-full md:w-1/3">
                  <div className="w-full aspect-w-1 aspect-h-1 cursor-pointer bg-[#a95627] border-4 border-dashed border-[#a95627] hover:border-[#a95627]-200 hover:bg-[#a95627] rounded-xl overflow-hidden">
                    <p className="flex gap-x-2 justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                    <h4 className="font-lilita text-xl text-white undefined">
                      Select NFT
                    </h4>
                    <p />
                  </div>
                </div>
                <div className="w-full md:w-auto flex-1">
                  <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col xl:flex-row xl:items-center gap-3">
                      <div className="w-full xl:w-1/3">
                        <h4 className="font-lilita text-xl text-white undefined">
                          No. of Editions
                        </h4>
                        <input
                          type="number"
                          placeholder="Number of Editions"
                          id="count"
                          name="count"
                          autoComplete="off"
                          className="border-2 border-[#a95627] bg-[#a95627] text-white placeholder-white focus:border-[#a95627] text-lg rounded-lg p-2 px-3 w-full"
                          defaultValue
                        />
                      </div>
                      <h4 className="font-lilita text-xl text-white xl:mt-8">
                        OR
                      </h4>
                      <div className="flex-1">
                        <h4 className="font-lilita text-xl text-white undefined">
                          Specific Editions
                        </h4>
                        <input
                          type="text"
                          placeholder="Comma separated editions"
                          id="numbers"
                          name="numbers"
                          autoComplete="off"
                          className="border-2 border-purple-500 bg-[#a95627] text-white placeholder-purple-500 focus:border-purple-400 text-lg rounded-lg p-2 px-3 w-full"
                          defaultValue
                        />
                      </div>
                    </div>
                    <textarea
                      placeholder="Optional Airdrop addresses, one per line or CSV"
                      id="desc"
                      name="description"
                      autoComplete="off"
                      className="h-[200px] border-2 border-[#a95627] bg-[#a95627] text-white placeholder-white focus:border-purple-400 text-lg rounded-lg p-2 px-3 scrollable2"
                      defaultValue={""}
                    />
                    <div className="w-full flex flex-col items-center justify-center">
                      <button className="p-2 px-4 bg-[#a95627] border-2 border-[#a95627] rounded-full font-bold text-white hover:bg-[#a95627] hover:text-white undefined">
                        Upload CSV or JSON with addresses
                      </button>
                      <input accept=".json, .csv" type="file" className="my-5" />
                    </div>
                    <div className="flex my-3 gap-5">
                      <button
                        className="w-full text-lg  bg-orange-500 text-white border-[#56290F] shadow-[0_4px_0_0_#56290F] active:shadow-[0_0_0_0_#56290F] flex items-center justify-center -mt-1 p-4 px-10 opacity-90 hover:opacity-100 
        	active:translate-y-1 rounded-full font-lilita leading-none border-4"
                      >
                        PRINT!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 border-2 border-[#a95627] rounded-xl  p-3 text-white font-bold">
              Terms of Use: You agree that you are the rightful holder of the
              copyright work(s) subject to upload on Foxy Mint (the "Service").
              You agree not to upload or otherwise distribute any content
              created or owned by others that is subject to any copyright or
              other proprietary rights of any third party on the Service. Famous
              Fox Federation LLC respects the rights of all copyright holders
              and, in this regard, it has adopted and implemented a policy that
              provides for the termination of user privileges and membership in
              appropriate circumstances of users who infringe the rights of
              copyright holders. You agree to indemnify and hold harmless Famous
              Fox Federation LLC from and against any and all liability, claims,
              costs and expenses (including, without limitation, reasonable
              legal fees and expenses), brought by any third party alleging,
              arising, related or resulting from (i) your use (or use by any
              third party using your account) of the Service, including in
              violation or breach of the Terms and Conditions, (ii) your
              violation of any rights of a third party, or (iii) your violation
              of any applicable law, rule or regulation.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Bonks;
