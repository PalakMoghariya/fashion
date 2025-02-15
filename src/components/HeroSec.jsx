import React from 'react'

function HeroSec() {
  return (
    <>
        <div className="tw-relative tw-bg-gray-900 tw-text-white">
        <img 
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600&h=600&fit=crop"
          alt="Hero"
          className="tw-w-full tw-h-[60vh] tw-object-cover tw-opacity-50"
        />
        <div className="tw-absolute tw-inset-0 tw-flex tw-items-center">
          <div className="tw-max-w-7xl tw-mx-auto tw-px-4 tw-w-full">
            <div className="tw-max-w-xl">
              <h1 className="tw-text-4xl tw-md:text-6xl tw-font-bold tw-mb-4">Step into Greatness</h1>
              <p className="tw-text-lg tw-md:text-xl tw-mb-8">Discover our latest collection of premium sneakers</p>
              <button className="tw-bg-white tw-text-black tw-px-8 tw-py-3 tw-rounded-lg hover:tw-bg-gray-100 hover:tw-text-black tw-transition-colors">
                <a Link="#">Shop Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSec