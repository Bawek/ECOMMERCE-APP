import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="py-10">
        <Title text1="Contact" text2="US" />
      </div> 
      <div className="flex flex-col md:flex-row gap-10 ">
        <div>
          <img className="w-full " src={assets.contact_img} alt="" />
        </div>
        <div className="flex flex-col items-start justify-center gap-10">
        <p className="font-medium text-xl"> Our Store </p>
        <p>
        54709 Willms Station <br />
Suite 350, Washington, USA</p>
<p>Tel:0989131968 <br />
Email: bawekeasres@gmail.com</p>
<p className="font-medium text-xl">Careers at Forever

</p>
<p>Learn more about our teams and job openings.

</p>
<button className="p-3 border border-gray-400 bg-white text-gray-700 font-semibold rounded-md hover:bg-gray-200 focus:ring-2 transition-all duration-400 focus:ring-blue-500 focus:outline-none">
  Explore Jobs
</button>



        </div>
      </div>
      <div className="py-10">
      <NewsletterBox />
      </div>
    </div>
  );
};

export default Contact;
