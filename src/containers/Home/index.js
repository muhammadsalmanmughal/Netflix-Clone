import React from "react";
import { Banner, MainSection } from "../../containers";
import { Images,Videos } from "../../config";
import { Row, Col } from "antd";

const Home = () => {
  return (
    <div>
      <Banner />
      <MainSection
        title="Enjoy on your TV."
        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        img={Images.TV}
        video={Videos.TV_Video}
        textIndex= '1'
        mediaIndex='2'
      />
      <MainSection 
        title="Download your shows to watch offline."
        subtitle="Save your favorites easily and always have something to watch."
        img={Images.STMobile}
        mediaIndex='1'
        textIndex= '2'
      />
    </div>
  );
};
export default Home;
