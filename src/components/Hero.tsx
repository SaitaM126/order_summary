import React from "react";
import ilu from "../assets/illustration-hero.svg";
import music from "../assets/icon-music.svg";

const Hero = () => {
  return (
    <div
      className="bg-white rounded-2xl flex justify-center 
    flex-col items-center text-center overflow-hidden max-w-sm shadow-2xl"
    >
      <img src={ilu} />
      <div className="m-6">
        <h1 className="font-black text-2xl text-dar-blue m-4">Order Summary</h1>
        <p className="text-base font-medium text-des-blue">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <div>
        <div
          className="bg-vpale-blue flex p-5 rounded-2xl 
        items-center justify-between max-w-full"
        >
          <img className="mr-4" src={music} alt="music" />
          <div className="ml-2">
            <h2 className="font-black text-md">Annual Plan</h2>
            <p className="text-gray-500">$59.99/year</p>
          </div>
          <a
            href=""
            className="ml-12 underline text-violet-600 font-bold
        hover:text-violet-400 hover:no-underline"
          >
            Change
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center flex-col">
          <button
            className="mb-7 bg-bright-blue text-white rounded-xl
        max-w-full p-3 font-bold shadow-2xl hover:bg-violet-500"
          >
            Proceed to Payment
          </button>
          <button
            className="mb-11 font-black text-des-blue
        hover:text-dar-blue"
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
