import React from 'react'
import './css/news.css';

function News() {
    return (
        <>
            {/* Newsletter */}
            <div className="tw-bg-gray-700 tw-text-white tw-py-16">
                <div className="tw-max-w-7xl tw-mx-auto tw-px-4">
                    <div className="tw-max-w-2xl tw-mx-auto tw-text-center">
                        <h2 className="tw-text-3xl tw-font-bold tw-mb-4">Join Our Newsletter</h2>
                        <p className="tw-text-gray-300 tw-mb-8">Stay updated with our latest releases and exclusive offers</p>
                        <div className="tw-flex tw-flex-col tw-md:flex-row tw-gap-4 tw-justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="tw-bg-gray-800 tw-text-white tw-px-6 tw-py-3 tw-rounded-lg tw-flex-grow tw-max-w-md tw-ml-28 news-input"
                            />
                            <button className="tw-bg-white tw-text-black tw-px-8 tw-py-3 tw-rounded-lg hover:tw-bg-gray-100 tw-transition-colors tw-flex tw-items-center tw-justify-center tw-gap-2 tw-ml-28 sub-btn hover:tw-text-black"> 
                                Subscribe
                                {/* <ArrowRight className="tw-w-4 tw-h-4" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News