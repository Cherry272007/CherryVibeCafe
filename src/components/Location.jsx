import { MapPinIcon } from "lucide-react"
const Location = () => {
  return (
    <>
      <div className="p-[50px] grid grid-cols-2 ">
        <div className="caption flex flex-col items-center justify-center gap-3 px-[100px]">
          <MapPinIcon className="text-red-700 w-3xl h-[50px] "/>
          <h1 className="text-2xl  text-[#6b411f] font-bold font-serif">CherryVibe Café</h1>
          <p className=" text-[#331e0e] font-bold">"Visit Us – Where Good Coffee Meets Good Company."</p>
          <p className="text-center font-bold  text-[#331e0e]">Address: 251 Coffee Street,Sangkat Boeng Salang,Khan Toul Kork, Phnom Penh, Cambodia</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3908.9808975926444!2d104.89744607529805!3d11.553226988646776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMzJzExLjYiTiAxMDTCsDU0JzAwLjEiRQ!5e0!3m2!1sen!2skh!4v1753290644406!5m2!1sen!2skh"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          title="Google Map Location"
          className="shadow-lg"
        ></iframe>
      </div>
    </>
  );
};

export default Location;