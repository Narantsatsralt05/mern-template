import { appConfig } from "@utils";
import { Meta } from "../layout/Meta";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";

const Base = () => {
  return (
    <div className="antialiased text-gray-600">
      <Meta title={appConfig.title} description={appConfig.description} />
      <Hero />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  );
};

export { Base };
