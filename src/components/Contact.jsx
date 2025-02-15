import React from 'react'
import './css/contact.css'

function Contact() {
  return (
    <>

      <section className="tw-text-gray-600 tw-body-font contact-sec">
        <div className="tw-container tw-mx-auto tw-flex tw-px-5 tw-py-24 md:tw-flex-row tw-items-center">
          <div className="lg:tw-max-w-lg lg:tw-w-full md:tw-w-1/2 tw-w-5/6 tw-mb-10 md:tw-mb-0">
            <img className="tw-object-cover tw-object-center tw-rounded tw-flex-col" alt="hero" src="https://stylesavvy.ie/cdn/shop/files/contact_us_image.png?v=1700515698&width=900" />
          </div>
          <div className="lg:tw-flex-grow md:tw-w-1/2 lg:tw-pl-24 md:tw-pl-16 tw-flex tw-flex-col md:tw-items-start md:tw-text-left tw-items-center tw-text-center">
            <h1 className="tw-title-font sm:tw-text-4xl tw-text-7xl tw-mb-4 tw-font-medium tw-text-gray-900">Get In Touch
            </h1>

            <h1 className='tw-text-center tw-ml-7 tw-text-1xl'>office@stylesavvy.ie</h1>
            <br />

            <h1 className='tw-text-center tw-ml-12 tw-text-1xl'>01 514 3787</h1><br />

            <p className="tw-mb-8 tw-leading-relaxed tw-text-center tw-text-1xl">Iconic Offices, <br />
              The Lennox Building,<br />
              51 South Richmond Street,<br />
              Dublin 2,<br />
              D02 FK0</p>
          </div>
        </div>
      </section>



      <div>
        <form className="form">

          <div className="flex">
            <label>
              <input required="" placeholder="Name" type="text" className="input2" />
            </label>

            <label>
              <input required="" placeholder="Email *" type="email" className="input2" />
            </label>
          </div>

          <label>
            <input required="" type="tel" placeholder="Phone Number" className="input" />
          </label>
          <label>
            <textarea required="" rows="3" placeholder="Comment" className="input01"></textarea>
          </label>

          <button className="fancy" href="#">
            <span className="text">Send</span>
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact