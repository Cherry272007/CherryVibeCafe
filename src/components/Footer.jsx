import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, FacebookIcon, Youtube } from "lucide-react"
import { Link } from 'react-router-dom'
export default function CafeFooter() {
  return (
    <footer className="bg-[#3e2a17] text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-100">CherryVibe Café</h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              Your neighborhood coffee haven, serving premium coffee and fresh pastries since 2024. Come for the coffee,
              stay for the community.
            </p>
            <div className="flex space-x-4">
              <Link className="text-amber-200 hover:text-[#53422e] transition-colors duration-200" to={'/'}><Facebook className="h-5 w-5" /></Link>
              <Link className="text-amber-200 hover:text-[#53422e] transition-colors duration-200" to={'/'}><Instagram className="h-5 w-5" /></Link>
              <Link className="text-amber-200 hover:text-[#53422e] transition-colors duration-200" to={'/'}><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-100">Quick Links</h4>
            <ul className="space-y-2">
              <div className="menu" style={{scroll:'smooth'}}>
                <li><Link className='text-amber-200 hover:text-[#53422e]  transition-colors duration-200 text-sm ' to={'/'}>Home</Link></li>
                <li><Link className='text-amber-200 hover:text-[#53422e]  transition-colors duration-200 text-sm ' to={'/Menu'}>Menu</Link></li>
                <li><Link className='text-amber-200 hover:text-[#53422e]  transition-colors duration-200 text-sm ' to={'/Contact'}>Contact</Link></li>
                <li><Link className='text-amber-200 hover:text-[#53422e]  transition-colors duration-200 text-sm ' to={'/About'}>About Us</Link></li>
                <li><Link className='text-amber-200 hover:text-[#53422e]  transition-colors duration-200 text-sm ' to={'/Location'}>Location</Link></li>
            </div>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-100 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm text-amber-200 ">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6:30 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-100">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-200 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-amber-200 hover:underline  hover:text-[#53422e] transition-colors duration-200">
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
                  className="text-sm text-amber-200  hover:text-[#53422e] transition-colors duration-200"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-200 flex-shrink-0" />
                <a
                  href="mailto:CherryVibe_Café@vibewithcherry.com"
                  className="text-sm text-amber-200  hover:text-[#53422e] transition-colors duration-200"
                >
                  CherryVibe_Café@vibewithcherry.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#775737] text-center">
          <p className="text-[#e58d35] text-sm">
            © {new Date().getFullYear()} CherryVibe Café. All rights reserved. |
            <a href="#" className="hover:text-amber-100 transition-colors duration-200 ml-1">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-amber-100 transition-colors duration-200 ml-1">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
