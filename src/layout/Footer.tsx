import { Link } from "react-router-dom";
import Decipher from "../assets/Decipher-Logo.png";
import { SocialBar } from "../components/SocialBar";

export default function Footer() {
 return(
  <footer className="bg-Beta">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <section className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-4 text-Alpha">
          <img src={Decipher} alt="Logo" className="h-20" />
          <h2>Decipher</h2>
        </div>

        <h6 className="max-w-xs text-white leading-8">
          Connect with DECIPHER AGENCY, as we are more than just a service provider; we are your strategic partner in achieving digital excellence.
        </h6>

        <SocialBar className="flex gap-6 items-center justify-center"/>
      </section>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        <section>
          <h5 className="font-medium">company</h5>

          <ul className="mt-6 space-y-4 text-sm">
            <li><Link to='/' className="hover:text-cyan-400">Home</Link></li>
            <li><Link to='/about' className="hover:text-cyan-400">About</Link></li>
            <li><Link to='/services' className="hover:text-cyan-400">Services</Link></li>
            <li><Link to='/pricing' className="hover:text-cyan-400">Pricing</Link></li>
          </ul>
        </section>

        <section>
          <h5 className="font-medium text-gray-900 dark:text-white">Helpful Links</h5>

          <ul className="mt-6 space-y-4 text-sm">
            <li><Link to='/CustomPage' className="hover:text-cyan-400">Custom Page</Link></li>
            <li><Link to='/404' className="hover:text-cyan-400">underConstruct</Link></li>
            <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">FAQs</a></li>
            <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Live Chat</a></li>
          </ul>
        </section>

        <section>
          <h5 className="font-medium text-gray-900 dark:text-white">Legal</h5>

          <ul className="mt-6 space-y-4 text-sm">
            <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Accessibility</a></li>
            <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Returns Policy</a></li>
            <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Refund Policy</a></li>
            <li><a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">Hiring Statistics</a></li>
          </ul>
        </section>
      </div>
    </div>

    <p className="text-xs text-gray-500 dark:text-gray-400">
      &copy; 2023. Company Name. All rights reserved.
    </p>
  </div>
</footer>

 )
}
