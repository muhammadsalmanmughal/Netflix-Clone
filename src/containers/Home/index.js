import React from "react";
import { Banner, MainSection } from "../../containers";
import { Images, Videos } from "../../config";
import { Footer } from "../../components";

const Home = () => {
  const objBanner = {
    logo: Images.Logo,
    mainHeading1: " Unlimited movies, TV",
    mainHeading2: " shows, and more.",
    subHeading: "Watch anywhere. Cancel anytime.",
    para: "Ready to watch? Enter your email to create or restart your membership.",
  };

  const objShowAnimation = {
    posterImage: Images.BoxShot,
    animationImgText0: "Stranger Things",
    animationImgText1: "Downloading...",
    loading: Videos.Loader_Animation,
  };

  const objFaqs = [
    {
      question: "What is Netflix?",
      answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
    },
    {
      question: "How much does Netflix cost?",
      answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts.`,
    },
    {
      question: "How do I cancel?",
      answer: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    },
  ];

  const footerLinks = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];
  return (
    <div>
      <Banner data={objBanner}/>
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
      <MainSection.SectionFAQS QNA={objFaqs} />
      <Footer links={footerLinks} />
    </div>
  );
};
export default Home;
