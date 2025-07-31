import { Mail, MapPin, Phone } from 'lucide-react'
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url('./image/image.png')`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}  className="relative w-full  py-[50px] h-[750px] grid grid-cols-2 items-center justify-center px-[80px] ">
          <div className="space-y-3 font-bold">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-200 mt-0.5 flex-shrink-0" />
                <div className="text-[18px] text-amber-200  ">
                  <a href="https://maps.app.goo.gl/s8G9PbTTp3tpZH5k7">
                    <p>251 Coffee Street</p>
                    <p>Sangkat Boeng Salang</p>
                    <p>Khan Toul Kork, Phnom Penh</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-200 flex-shrink-0 " />
                <a
                  href="tel:+1234567890"
                  className="text-[18px] text-amber-200  "
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-200 flex-shrink-0" />
                <a
                  href="mailto:CherryVibe_Café@vibewithcherry.com"
                  className="text-[18px] text-amber-200  "
                >
                  CherryVibe_Café@vibewithcherry.com
                </a>
              </div>
            </div>
          <form action="" className="Form w-[500px]  bg-white flex flex-col gap-3 items-center justify-center p-[50px] rounded-[2px] hover:scale-102 transition-transform duration-200 shadow-lg">
            <h1 className='text-2xl font-bold '>Contact us</h1>
            <div className="form-group w-full flex flex-col gap-2">
              <label htmlFor="" className='text-[18px]'>Full Name :</label>
              <input type="text" className=' outline-none p-2 pl-5 py-3 text-gray-500 bg-gray-200 rounded-[5px]' required placeholder='Enter your name'/>
            </div>

            <div className="form-group w-full flex flex-col gap-2">
              <label htmlFor="" className='text-[18px]'>Email :</label>
              <input type="text" className=' outline-none p-2 pl-5 py-3 text-gray-500 bg-gray-200 rounded-[5px]' required placeholder='Enter your email'/>
            </div>

            <div className="form-group w-full flex flex-col gap-2">
              <label htmlFor="" className='text-[18px]'>Message :</label>
              <textarea name="" id="" cols={'15'} rows={'5'}  className='outline-none p-2 pl-5 py-3 text-gray-500 bg-gray-200 rounded-[5px]' placeholder='Enter your messages...' required></textarea>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="" id="" />
              <p>I agree to the Privacy Policy and Terms of Service</p>
            </div>
            <button type="button" className='bg-blue-600 text-[18px] mt-5 w-full p-2 py-3 text-white rounded-[5px] hover:bg-blue-800 cursor-pointer'>Send</button>
          </form>
      </div>
    </div>
  )
}

export default Contact
