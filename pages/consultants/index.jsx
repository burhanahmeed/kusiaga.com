import Head from "next/head";

export default function IndexConsultant() {
  return (
    <>
      <Head>
        <title>Brhn. - Independent Software Consultant</title>
      </Head>
      <div>
        <div className="container mx-auto">
          <div className="text-center pt-16">
            <div className="p-5">
              <img
                className="w-20 h-20 rounded-full object-cover m-auto"
                src="./img/real.jpg"
                loading="lazy"
              />
            </div>
            <h2 className="text-6xl font-semibold mb-2 text-yellow-600">BRHN.</h2>
            <p className="text-sm text-gray-500">Independent Software Consultant</p>
            <div className="text-gray-500 text-center flex m-auto justify-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Currently based in Surabaya, Indonesia
            </div>
          </div>

          <div className="py-8 text-sm">
            <h2 className="text-center text-4xl font-black">🚀 Unlock the Full Potential of Your IT Transformation with Expert Guidance</h2>
            <p>
              Hello there! I'm <span className="text-xl font-bold text-yellow-600">BURHAN</span>, a seasoned software engineer and an independent software consultant. If you're aiming to propel your IT product development to new heights and scale your business to the moon, you're in the right place.
            </p>

            <div className="py-2">
              <strong>My Expertise:</strong>
              <p>Web Development, Backend Development, Data extraction (ETL), and so on.</p>
            </div>

            <div className="py-2">
              <strong>How I Can Assist:</strong>
              <p>
                Whether you're at the inception of your IT transformation or navigating the challenges of a scaling phase, I'm here to be the catalyst for your success. You have the flexibility to bring me on board as:
              </p>
            </div>

            <div className="py-2">
              <ul>
                <li><strong>Fractional CTO:</strong> Strategize and lead your technology initiatives.</li>
                <li><strong>Team/Tech Lead:</strong> Drive your development team to excellence.</li>
                <li><strong>Engineer:</strong> Provide hands-on expertise.</li>
                <li><strong>Full IT Development Services:</strong> I bring along my dedicated team to ensure a comprehensive solution.</li>
              </ul>
            </div>

            <div className="py-2">
              <p>
                Delivering a high-quality product isn't just a goal—it's a non-negotiable commitment. Your satisfaction and success are at the forefront of everything I do with very realiable and reasonable price.
              </p>
              <p>
                Ready to elevate your IT game? Let's chat and explore how we can achieve remarkable results together.
              </p>
            </div>

          </div>

          <div className="py-8">
            <h2 className="text-center text-4xl font-black">⚓️ Skillset</h2>
            <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                <div class="bg-white p-4 shadow-md">
                    <div>

                    </div>
                    <p>This is content for column 1.</p>
                </div>

                <div class="bg-white p-4 shadow-md">
                    <h2 class="text-lg font-semibold mb-2">Column 2</h2>
                    <p>This is content for column 2.</p>
                </div>

                <div class="bg-white p-4 shadow-md">
                    <h2 class="text-lg font-semibold mb-2">Column 2</h2>
                    <p>This is content for column 2.</p>
                </div>

                <div class="bg-white p-4 shadow-md">
                    <h2 class="text-lg font-semibold mb-2">Column 2</h2>
                    <p>This is content for column 2.</p>
                </div>
            </div>
          </div>

          <div className="py-8">
            <h2 className="text-center text-4xl font-black">🖼 My Works</h2>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-md">
                  <img className="w-full h-48 object-cover" src="https://placekitten.com/401/300" alt="Card Image" />
                  <div className="p-4">
                      <h2 className="font-semibold text-yellow-600 mb-2">Card Title 2</h2>
                      <p className="text-gray-600 text-xs">Description for card 2.</p>
                  </div>
              </div>

                <div className="bg-white p-4 shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Column 2</h2>
                    <p>This is content for column 2.</p>
                </div>

                <div class="bg-white p-4 shadow-md">
                    <h2 class="text-lg font-semibold mb-2">Column 2</h2>
                    <p>This is content for column 2.</p>
                </div>

                <div class="bg-white p-4 shadow-md">
                    <h2 class="text-lg font-semibold mb-2">Column 2</h2>
                    <p>This is content for column 2.</p>
                </div>
            </div>
          </div>

          <div className="py-8 pb-16">
            <h2 className="text-center text-4xl font-black">💳 Get Quotation</h2>

              <div class="mb-4">
                  <label for="name" class="block text-gray-600">Name</label>
                  <input type="text" id="name" name="name" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
              </div>

              <div class="mb-4">
                  <label for="email" class="block text-gray-600">Email</label>
                  <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
              </div>

              <div class="mb-4">
                  <label for="hired-as" class="block text-gray-600">Hired Me As</label>
                  <select id="hired-as" name="hired-as" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500">
                      <option value="CTO">CTO</option>
                      <option value="engineer">Engineer</option>
                      <option value="lead">Lead</option>
                      <option value="other">Other IT Development</option>
                  </select>
              </div>

              <div class="mb-6">
                  <label for="message" class="block text-gray-600">Message</label>
                  <textarea id="message" name="message" rows="4" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"></textarea>
              </div>

              <button class="w-full px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 focus:outline-none">Get Quotation</button>
          </div>

          {/* Footer  */}
          <footer class="text-center py-4 text-gray-600">
            <p>&copy; BRHN. 2023. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </>
  )
}