import Head from "next/head";

const myWorks = [
  {
    title: 'TabSquare',
    description: 'This project is undisclosed because under Non-disclosure agreement.',
    image: 'https://media.licdn.com/dms/image/C4E33AQEdbgnWKwqRqA/productpage-image_1128_635/0/1622827091606?e=2147483647&v=beta&t=xpbKnRz9J456-PO0YB_w_WX3maR-8nZ-aeHhW3MJVhs'
  },
  {
    title: 'Rakuten RTX Property/Hotel App',
    description: 'This project is undisclosed because under Non-disclosure agreement.',
    image: 'https://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2021/08/Rakuten-Travel-Xchange-SS.jpg'
  },
  {
    title: 'Rakuten Travel Experiences',
    description: 'This project is undisclosed because under Non-disclosure agreement.',
    image: 'https://tourteller.com/blog/wp-content/uploads/2021/08/Rakuten-Travel-Experiences-Home.jpg'
  },
];

export default function IndexConsultant() {
  return (
    <>
      <Head>
        <title>Brhn. - Independent Software Consultant</title>
      </Head>
      <div>
        <div className="container max-w-3/4 mx-auto poppins-font">
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
            <h2 className="text-center text-base md:text-4xl font-bold">🚀 Unlock the Full Potential of Your IT Transformation with Expert Guidance</h2>
            <p>
              Hello there! I'm <span className="text-xl font-bold text-yellow-600">BURHAN</span>, a seasoned software engineer and an independent software consultant who has experience working with people across the world, from Indonesia, Ukraine, India, Singapose, etc. If you're aiming to propel your IT product development to new heights and scale your business to the moon, you're in the right place.
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
                Delivering a high-quality product isn't just a goal—it's a non-negotiable commitment. Your satisfaction and success are at the forefront of everything I do with a realiable and reasonable price.
              </p>
              <p>
                Ready to elevate your IT game? Let's chat and explore how we can achieve remarkable results together.
              </p>
            </div>

          </div>

          <div className="py-8">
            <h2 className="text-center text-4xl font-bold">⚓️ Skillset</h2>
            <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                <div class="bg-white p-4 shadow-md rounded-xl text-center">
                  <div className="m-auto p-8">
                      <img src="./img/consultant/automated-engineering.png" className="w-24 m-auto" alt="" />
                    </div>
                    <p>Software System Design</p>
                </div>

                <div class="bg-white p-4 shadow-md rounded-xl text-center">
                  <div className="m-auto p-8">
                      <img src="./img/consultant/computer.png" alt="" className="w-24 m-auto" />
                    </div>
                    <p>Software Development</p>
                </div>

                <div class="bg-white p-4 shadow-md rounded-xl text-center">
                  <div className="m-auto p-8">
                      <img src="./img/consultant/customer-journey-map.png" className="w-24 m-auto" alt="" />
                    </div>
                    <p>Performance Optimization</p>
                </div>

                <div class="bg-white p-4 shadow-md rounded-xl text-center">
                    <div className="m-auto p-8">
                      <img src="./img/consultant/consultant.png" alt="" className="w-24 m-auto" />
                    </div>
                    <p>Software Consultancy</p>
                </div>
            </div>
          </div>

          <div className="py-8">
            <h2 className="text-center text-4xl font-bold">🖼 My Works</h2>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">

              {myWorks.map((val, i) => {
                return (
                  <MyWorkCard key={i} image={val.image} title={val.title} description={val.description} />
                )
              })}

            </div>
          </div>

          <div className="py-8 pb-16">
            <h2 className="text-center text-4xl font-bold">💳 Get Quotation</h2>
            <div className="text-center p-4">
              <p>Contact me at <a className="text-yellow-600" href="mailto:burhanahmeed@icloud.com">burhanahmeed@icloud.com</a> or You can schedule a meeting with me <a className="text-yellow-600" href="https://calendly.com/burhannahm/30min">here</a>.</p>
            </div>

              {/* <div class="mb-4">
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
                      <option value="CTO">Fractional CTO</option>
                      <option value="engineer">Engineer</option>
                      <option value="lead">Team/Tech Lead</option>
                      <option value="other">Other IT Development</option>
                  </select>
              </div>

              <div class="mb-6">
                  <label for="message" class="block text-gray-600">Message</label>
                  <textarea id="message" name="message" rows="4" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"></textarea>
              </div>

              <button class="w-full px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 focus:outline-none">Get Quotation</button> */}
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

const MyWorkCard = ({
  image, title, description
}) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-md">
      <img className="w-full h-48 object-cover" src={image} alt="Card Image" />
      <div className="p-4">
        <h2 className="font-semibold text-yellow-600 mb-2">{title}</h2>
        <p className="text-gray-600 text-xs">{description}</p>
      </div>
    </div>
  )
}