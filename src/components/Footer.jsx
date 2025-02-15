import React from 'react'
import logo from './images/logo.png'

function Footer() {
    return (
        <div>
            <footer className="tw-text-gray-600 tw-body-font footer">
                <div className="tw-container tw-px-5 tw-py-24 tw-mx-auto tw-flex md:tw-items-center lg:tw-items-start md:tw-flex-row md:tw-flex-nowrap tw-flex-wrap tw-flex-col">
                    <div className="tw-w-64 tw-flex-shrink-0 md:tw-mx-0 tw-mx-auto tw-text-center md:tw-text-left">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" />
                        </a>
                        <p className="tw-mt-2 tw-text-sm tw-text-gray-500">Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>
                        <br />
                        <span className="tw-inline-flex sm:tw-ml-auto sm:tw-mt-0 tw-mt-2 tw-justify-center sm:tw-justify-start">
                            <a className="tw-text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="tw-w-5 tw-h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="tw-ml-3 tw-text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="tw-w-5 tw-h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="tw-ml-3 tw-text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                </svg>
                            </a>
                            <a className="tw-ml-3 tw-text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                                </svg>
                            </a>
                            <a className="tw-ml-3 tw-text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="tw-w-5 tw-h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                        </span>
                    </div>

                    <div className="tw-flex-grow tw-flex tw-flex-wrap md:tw-pl-20 tw-mb-10 md:tw-mt-0 tw-mt-10 md:tw-text-left tw-text-center">
                        <div className="lg:tw-w-1/4 md:tw-w-1/2 tw-w-full tw-px-4">
                            <h2 className="tw-title-font tw-font-medium tw-text-gray-900 tw-mb-3">Quick Links</h2>
                            <nav className="tw-list-none tw-mb-10">
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800">Home</a>
                                </li>
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800">About</a>
                                </li>
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800">Services</a>
                                </li>
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800">Single Item</a>
                                </li>
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800">Contact</a>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:tw-w-1/4 md:tw-w-1/2 tw-w-full tw-px-4">
                            <h2 className="tw-title-font tw-font-medium tw-text-gray-900 tw-mb-3">Help & Info</h2>
                            <nav className="tw-list-none tw-mb-10">
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800">Track Your Order</a>
                                </li>
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800">Returns + Exchanges</a>
                                </li>
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800">Shipping + Dlivery</a>
                                </li>
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800">Contact Us</a>
                                </li>
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800">Find Us Easy</a>
                                </li>
                                <li>
                                    <a className='tw-text-gray-600 hover:tw-text-gray-800'>FAQs</a>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:tw-w-1/4 md:tw-w-1/2 tw-w-full tw-px-4">
                            <h2 className="tw-title-font tw-font-medium tw-text-gray-900  tw-mb-3">Contact Us</h2>
                            <nav className="tw-list-none tw-mb-10">
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800">Do you have any questions or <br />suggestion?</a>
                                </li>
                                <li>
                                    <a className="tw-text-gray-600 hover:tw-text-gray-800" href='#'>contact@yourcompany.com</a>
                                </li>
                            </nav>
                        </div>


                    </div>
                </div>

                <div className="tw-bg-gray-100">
                    <div className="tw-container tw-mx-auto tw-py-4 tw-px-5 tw-flex tw-flex-wrap tw-flex-col sm:tw-flex-row">
                        <p className="tw-text-gray-500 tw-text-sm tw-text-center sm:tw-text-left">Copyright © 2020 e-shopping. All right Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer