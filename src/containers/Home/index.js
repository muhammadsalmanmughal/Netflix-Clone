import React from "react";
import { Banner, MainSection } from "../../containers";
import { Images, Videos } from "../../config";
import { Row, Col } from "antd";

const Home = () => {
  const objShowAnimation = {
    posterImage: true,
    animationImgText0: "Stranger Things",
    animationImgText1: "Downloading...",
  };

  return (
    <div>
      <Banner />
      <MainSection.TextAndImage
        title="Enjoy on your TV."
        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        img={Images.TV}
        video={Videos.TV_Video}
        textIndex="1"
        mediaIndex="2"
      />
      <MainSection.ImageAndText
        title="Download your shows to watch offline."
        subtitle="Save your favorites easily and always have something to watch."
        img={Images.STMobile}
        animationImg={objShowAnimation}
        mediaIndex="1"
        textIndex="2"
      />
      <MainSection.MainSectionText
        title="Watch everywhere."
        subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        // img={Images.STMobile}
        // imgText0='Stranger Things'
        // imgText1='Downloading...'
        // mediaIndex='1'
        // textIndex= '2'
      />
    </div>
  );
};
export default Home;
