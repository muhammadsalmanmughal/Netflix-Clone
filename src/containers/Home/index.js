import React from "react";
import { Banner, MainSection } from "../../containers";
import { Images, Videos } from "../../config";

const Home = () => {
  const objShowAnimation = {
    posterImage: Images.BoxShot,
    animationImgText0: "Stranger Things",
    animationImgText1: "Downloading...",
    loading:Videos.Loader_Animation
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
        <MainSection.TextAndImage
        title="Watch everywhere."
        subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      />
        <MainSection.ImageAndText
        title="Create profiles for kids."
        subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        img={Images.Create_Kids_Profile}
      />
      
    </div>
  );
};
export default Home;
