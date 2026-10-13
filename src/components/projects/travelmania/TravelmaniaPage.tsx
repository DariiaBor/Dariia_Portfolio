import React from "react";
import { Footer } from "../../sections/Footer";
import { InDev } from "./InDev";

export const TravelmaniaPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-clip flex flex-col justify-between">
      <main className="w-full flex-1 pt-20 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-transparent font-['Manrope',sans-serif]">
        <InDev categoryTag="Travel / B2C + B2B" />
      </main>

      <Footer />
    </div>
  );
};

export default TravelmaniaPage;