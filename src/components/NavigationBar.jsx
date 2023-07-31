import { useState } from "react"
// import Logo from "../images/logo.png";
import { TYPEFORM_LINK, SITE_TITLE } from "../consts";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
    <>
        <div className='container px-4 mx-auto'>
              <div className='flex items-center justify-between py-5'>
                <div className='w-auto'>
                  <div className='flex flex-wrap items-center'>
                    <div className='w-auto pr-2'>
                      <a href={TYPEFORM_LINK} 
                      className="text-xl font-bold tracking-wide"
                      rel="noopener noreferrer"
                      target="_blank">
                        {SITE_TITLE}
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-auto'>
                  <div className='flex flex-wrap items-center'>
                    <div className='w-auto hidden lg:block'>
                      <div className='inline-block'>
                        <a
                          className='inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200'
                          href={TYPEFORM_LINK}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Start Your Search
                        </a>
                      </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className='w-auto lg:hidden' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                      <a href='#'>
                        <svg
                          className='navbar-burger text-indigo-600'
                          width={51}
                          height={51}
                          viewBox='0 0 56 56'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            width={56}
                            height={56}
                            rx={28}
                            fill='currentColor'
                          />
                          <path
                            d='M37 32H19M37 24H19'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu bar dropdown */}
            {isMobileMenuOpen && 
            <div className='navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
            <nav className='relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto'>
              <div className='flex flex-wrap justify-between h-full'>
                <div className='w-full'>
                  <div className='flex items-center justify-between -m-2'>
                    <div className='w-auto p-2'>
                      <a 
                        className='inline-block text-xl font-semibold' 
                        href={TYPEFORM_LINK}
                        rel="noopener noreferrer"
                        target="_blank">
                        {SITE_TITLE
                        }
                      </a>
                    </div>
                    <div className='w-auto p-2'>
                    <a className='navbar-burger' href='#' onClick={() => setIsMobileMenuOpen(false)}>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6 18L18 6M6 6L18 18'
                            stroke='#111827'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-end w-full pb-8'>
                  <a
                    className='inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200'
                    href={TYPEFORM_LINK}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Start Your Search
                  </a>
                </div>
              </div>
            </nav>
          </div>
        }
    </>
    )
}