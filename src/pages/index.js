import React from 'react';

function HomePage() {
  return (
    
  <form action="" class="my-20 p-10 max-w-xl mx-auto shadow-md sm:border-0 md:border md:border-gray-900 md:dark:border-gray-100 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
    <div
      className="bg-pink-900 w-full h-full font-ariel text-2x4 text-black-5"
      style={{
        textAlign: 'center',
        backgroundSize: 'contain',
        backgroundPosition: 'full',
      }}
    >
     <div className=" mb-1 audiowide text-6xl text-gray-5 hover:scale-110 transition-transform hover:text-black-900 ">
        Lemonade's Veterinary Clinic!
      </div>


      <div>Our team of experienced veterinarians and staff are committed to offering personalized attention and quality medical treatment for all of your furry friends.</div>

      <div className='text-center mt-5'>
        <p>We are dedicated to providing exceptional care for your pets and ensuring their health and happiness.</p>
        <p>We offer a wide range of services, including routine check-ups, vaccinations, surgical procedures, dental care, and emergency services. At our clinic, you can rest assured that your pets are in good hands.</p>
      </div>
      </div>
          <div class="mb-10">
            <h1 class="font-bold text-4xl mb-3 text-center">Get in touch</h1>
            <p class="font-medium text-lg mb-5">Send us a quick message and we'll get back to you shortly.</p>
            <hr class="border-gray-900 dark:border-gray-100"/>
        </div>

        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
    <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg aria-hidden="true" class="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            Personal <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        </span>
    </li>
    <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span class="mr-2">2</span>
            Animal <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        </span>
    </li>
    <li class="flex items-center">
        <span class="mr-2">3</span>
        Confirmation
    </li>
</ol>
                <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-owner-name "><span>Owner Name</span></label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-owner-name" type="text" placeholder=" Jane Doe"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-animal">
        Animal
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-animal" type="text" placeholder="Dog"/>
    </div>
  </div>

  
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-message">
        Age
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" type="message" placeholder="text"/>
    </div>
  </div>
  <div className='flex flex-col items-center justify-center'>
  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
     Next
    </button>
    <div className=" bg-black-200 p-1 inline-block"></div>
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="reset">
      Clear
    </button>
    </div>

  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-state">
        Province
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Cape Town</option>
          <option>Johannesburg</option>
          <option>Durban</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
  
        <div class="mb-5">

            <label for="message" class="text-lg flex justify-between items-end"><span>Message</span><span class="text-xs text-red-500">Required</span></label>
            <p className="text-white-200 text-xs italic">How can we help?</p>
            <textarea name="message" id="message" cols="30" rows="10" class="shadow-md mt-1 block w-full sm:text-sm rounded-none border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"></textarea>

        </div>
  
        <div className='flex flex-col items-center justify-center'>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    </div>      
    </form>
    


  );
}

export default HomePage;

