import { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const[NshowMore,setNshowMore]=useState(false)
    const shortText = `CherryVibe Café began as a heartfelt dream by our founder, Ms. Cherry, a passionate Cambodian woman with a deep love for coffee, creativity, and community...`;
    const fullText = `${shortText} Inspired by the sweet and cheerful vibe of cherries, we infused that same energy into our menu, our service, and our space. Every drink is handcrafted, every dish thoughtfully made, and every corner of our café designed to spark joy — whether you’re studying solo, hanging out with friends, or taking a well-deserved break. What started as a small idea has grown into a favorite hangout for students, creatives, and coffee lovers alike. And we’re just getting started. Come for the flavor. Stay for the vibe.`;
    const Nshort=`At Cherry Vibe Café, we believe that atmosphere is just as important as taste. That’s why we’ve created a space that feels cozy, calm, and full of good energy — a place where you can relax, be yourself, and enjoy the little things.`
    const Nfull=`${Nshort}From our warm lighting and comfortable seating to our Instagram-worthy corners and soft background music, every detail is designed to make you feel at home. Whether you’re here to work, study, catch up with friends, or simply take a break, our environment is welcoming to all.We also care about keeping things clean, fresh, and eco-friendly. Our team works hard to maintain a space that’s not only beautiful, but also safe and sustainable — because we believe a good vibe includes caring for people and the planet.Step into Cherry Vibe Café and feel the difference. It’s not just a café — it’s your happy place.`
  return (
    <>
      <div className="story bg-[#fae6c9] w-full h-[750px] grid grid-cols-2 items-center justify-center">
        <div className="caption flex flex-col gap-3 items-center justify-center px-[80px]">
          <h1 className="text-3xl  font-bold text-[#6b411f]">Our Story</h1>
          <p className="text-[18px] text-center  font-bold text-[#331e0e] ">
            {showMore? shortText:fullText}
            <button onClick={() => setShowMore(!showMore)} className="text-[#6b411f] underline mt-2 text-[16px] font-medium cursor-pointer hover:text-[#b17a4a]">
              {showMore? 'Show More': 'Show Less'}
            </button>
          </p>
        </div>
        <div className="Founder flex flex-col gap-3 items-center justify-center">
          <img className="w-[250px] rounded-2xl  shadow-2xl" src="src/image/IMG_9334.PNG" alt="" />
          <p className="text-[18px] w-[320px] text-center  font-bold text-[#6b411f]">Ms. Chan Sovannary (Cherry),CEO of CherryVibe Café</p>
        </div>
      </div>
      {/* environment */}
      <div className="environment bg-[#fbdcac] w-full h-[750px] grid grid-cols-2 items-center justify-center">
        <div className="Founder flex flex-col gap-3 items-center justify-center">
          <img className="w-120 shadow-2xl" src="src/image/image copy 2.png" alt="" />
          <img className="w-120 shadow-2xl" src="src/image/image copy.png" alt="" />
        </div>
        <div className="caption flex flex-col gap-3 items-center justify-center px-[80px]">
          <h1 className="text-3xl  font-bold text-[#6b411f]">Our Environment</h1>
          <p className="text-[18px] text-center  font-bold text-[#331e0e] ">
            {NshowMore? Nshort:Nfull}
            <button onClick={() => setNshowMore(!NshowMore)} className="text-[#6b411f] underline mt-2 text-[16px] font-medium cursor-pointer hover:text-[#b17a4a]">
              
              {NshowMore? 'Show More': 'Show Less'}
            </button>
          </p>
        </div>
      </div>
    </>
  )
}

export default About
