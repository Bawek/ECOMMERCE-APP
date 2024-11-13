import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="py-10">
        <Title text1="ABOUT " text2="US" />
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div>
          <img
            src={assets.about_img}
            alt="About Forever Brand Image"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col gap-7 text-sm text-gray-700">
          <p className="leading-relaxed">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="leading-relaxed">
            Since our inception, weve worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="font-medium text-2xl text-gray-800">Our Mission</p>
          <p className="leading-relaxed">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We are dedicated to providing a
            seamless shopping experience that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div>
        <div className="mt-10">
          <Title text1="WHY" text2="CHOOSE US" />
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <div className="border border-gray-500 py-7 sm:py-10 px-5">
            <p className="font-medium">Quality Assurance:</p>
            <p>
              We meticulously select and vet each product to ensure it meets
              our stringent quality standards.
            </p>
          </div>
          <div className="border border-gray-700 py-7 sm:py-10 px-5">
            <p className="font-medium">Convenience:</p>
            <p>
              With our user-friendly interface and hassle-free ordering
              process, shopping has never been easier.
            </p>
          </div>
          <div className="border border-gray-500 py-7 sm:py-10 px-5">
            <p className="font-medium">Exceptional Customer Service:</p>
            <p>
              Our team of dedicated professionals is here to assist you every
              step of the way, ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default About;
