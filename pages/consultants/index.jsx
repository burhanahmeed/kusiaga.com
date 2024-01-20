import Head from "next/head";
import DetailModal from "@/components/consultant/DetailModal";
import { useState } from "react";

const myWorks = [
  {
    id: 1,
    title: 'TabSquare Connect',
    description: 'This project is undisclosed because under Non-disclosure agreement.',
    image: 'https://media.licdn.com/dms/image/C4E33AQEdbgnWKwqRqA/productpage-image_1128_635/0/1622827091606?e=2147483647&v=beta&t=xpbKnRz9J456-PO0YB_w_WX3maR-8nZ-aeHhW3MJVhs',
    detail: `<p><strong>TabSquare SmartConnect</strong></p><p>The smart solution that enables control of your online and offline ordering needs in one platform while integrating seamlessly with your&nbsp;existing Point-of-Sale (POS) and Kitchen system. Connect all your Online Channels to one Centralized Platform with TabSquare SmartConnect. Seamlessly connect everything directly to your existing POS &amp; Kitchen systems so that you can focus on growing your business</p><p><strong>Tabsquare</strong></p><p>TabSquare provides AI-powered technology solutions for the F&amp;B industry. Through TabSquare&#39;s solutions, restaurants can efficiently manage orders, process payments, and effectively engage with their customers. TabSquare assists partner restaurants in driving higher sales, streamlining operations, and delivering an enhanced customer experience. TabSquare is a market leader with operations in Singapore, Malaysia, Indonesia, Australia, the Philippines, Taiwan, Thailand, Hong Kong, Sweden, and the UAE. Trusted by thousands of restaurants, TabSquare&#39;s clients include well-known F&amp;B brands such as Pizza Hut, KFC, Minor Food Group, Sushi Tei, Paradise Food Group, Japan Foods Holding, Zingrill Holdings, The Coffee Club, Old Town White Coffee, Secret Recipe, and many more. TabSquare is a wholly owned subsidiary of Delivery Hero, a global leader in the food delivery industry. For more information, visit http://www.tabsquare.ai.</p>`,
    achievement: '<ul><li style="list-style-type:disc"><span style="font-size:10pt"><span style="font-family:Calibri,sans-serif"><span style=""><strong>Led</strong></span></span></span><span style="font-size:10pt"><span style="font-family:Calibri,sans-serif"><span style="">&nbsp; small team of dev and QA of the SmartConnect squad to provide technical improvements and optimization.</span></span></span></li><li style="list-style-type:disc"><span style="font-size:10pt"><span style="font-family:Calibri,sans-serif"><span style="">Achieved</span></span></span><span style="font-size:10pt"><span style="font-family:Calibri,sans-serif"><span style=""><strong>a significant reduction</strong></span></span></span><span style="font-size:10pt"><span style="font-family:Calibri,sans-serif"><span style="">in multiple services response time, decreasing it by over 80% (from 10+ seconds to 2 seconds or less) by moving the services to GKE and did a query optimization, caching, etc.</span></span></span></li><li style="list-style-type:disc"><span style="font-size:10pt"><span style="font-family:Calibri,sans-serif"><span style=""><strong>Ensured</strong></span></span></span><span style="font-size:10pt"><span style="font-family:Calibri,sans-serif"><span style="">the code quality aligns with the best practice by implementing code review, unit test, and prettier.</span></span></span></li><li style="list-style-type:disc"><span style="font-size:10pt"><span style="font-family:Calibri,sans-serif"><span style="">Managed identification and resolution of performance and memory issues, applying optimizations for improved system efficiency and stability.</span></span></span></li></ul>',
    technology: 'Node, Express, MySQL, Redis, DataDog, GCP, Optimization',
    publicUrls: 'https://tabsquare.ai/smart-connect/',
    date: '2022 - now'
  },
  {
    id: 2,
    title: 'Rakuten RTX Property/Hotel App',
    description: 'This project is undisclosed because under Non-disclosure agreement.',
    image: 'https://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2021/08/Rakuten-Travel-Xchange-SS.jpg',
    detail: `<p>Rakuten Travel Xchange, a Singapore based accommodation wholesale and travel technology service, with a dominant inventory in Japan and a robust global offering.</p><p>With local representatives in numerous countries and regions, we are rapidly expanding our global supply and demand, providing global reach and easy access to accommodation inventories through a single source.</p><p>The customers can access worldwide accommodation inventory via a single API connection, a custom-built website or our Travel Agent Portal, without spending valuable resources on integrating multiple supply partners.</p><p>Part of the Rakuten group which operates more than 70 businesses span e-commerce, digital content, communications and fintech with almost 1.6 billion members across the world.</p>`,
    achievement: '<ul><li style="list-style-type:disc">Contributed to the development of Super Room and Travel Experiences products.</li><li style="list-style-type:disc">Implemented features while ensuring unit tests passed successfully, devised a scalable and efficient database architecture.</li><li style="list-style-type:disc">Architecting an email system which support dual language and multiple template for the Rakuten Travel Experiences product</li></ul>',
    technology: 'Sentry, NuxtJS, ExpressJS, PostgreSQL, VueJS, GCP, Redis, Sequelize, Kong API, Docker',
    publicUrls: 'https://www.linkedin.com/company/rakuten-travel-xchange/',
    date: '2021 - 2022'
  },
  {
    id: 3,
    title: 'Rakuten Travel Experiences',
    description: 'This project is undisclosed because under Non-disclosure agreement.',
    image: 'https://tourteller.com/blog/wp-content/uploads/2021/08/Rakuten-Travel-Experiences-Home.jpg',
    detail: `<p>Rakuten Travel Experiences, formerly Voyagin, is a booking platform by Rakuten offering tours and travel experiences in and out of Japan.&nbsp;</p><p>Rakuten is a leading global company offering more than 70 services to over 1.5 billion global members, including Rakuten Travel: Japan&rsquo;s largest travel website.&nbsp;</p><p>Voyagin (now Rakuten Travel Experiences) was a tour and activity online booking platform headquartered in Tokyo. The company was founded in 2011 as FindJPN, rebranded as Voyagin in 2012 by its founders, then rebranded again by Rakuten.</p><p>In July 2015, Rakuten announced it acquired a majority stake in Voyagin to expand its travel market in Asia. Rakuten absorbed Voyagin on July 1, 2020, while retaining the Voyagin name and website. In December 2021, the company changed its name to Rakuten Travel Experiences and relaunched with a new website.</p>`,
    achievement: '<ul><li style="list-style-type:disc">Contributed to the development of Super Room and Travel Experiences products.</li><li style="list-style-type:disc">Implemented features while ensuring unit tests passed successfully, devised a scalable and efficient database architecture.</li><li style="list-style-type:disc">Architecting an email system which support dual language and multiple template for the Rakuten Travel Experiences product</li></ul>',
    technology: 'Sentry, NuxtJS, ExpressJS, PostgreSQL, VueJS, GCP, Redis',
    publicUrls: 'https://experiences.travel.rakuten.com/',
    date: '2021 - 2022'
  },
];

export default function IndexConsultant() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <>
      <Head>
        <title>Brhn. - Independent Software Consultant</title>
      </Head>
      <div>
        <div className="container mx-auto poppins-font p-4" style={{ maxWidth: '920px' }}>
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
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                <div className="bg-white p-4 shadow-md rounded-xl text-center">
                  <div className="m-auto p-8">
                      <img src="./img/consultant/automated-engineering.png" className="w-24 m-auto" alt="" />
                    </div>
                    <p>Software System Design</p>
                </div>

                <div className="bg-white p-4 shadow-md rounded-xl text-center">
                  <div className="m-auto p-8">
                      <img src="./img/consultant/computer.png" alt="" className="w-24 m-auto" />
                    </div>
                    <p>Software Development</p>
                </div>

                <div className="bg-white p-4 shadow-md rounded-xl text-center">
                  <div className="m-auto p-8">
                      <img src="./img/consultant/customer-journey-map.png" className="w-24 m-auto" alt="" />
                    </div>
                    <p>Performance Optimization</p>
                </div>

                <div className="bg-white p-4 shadow-md rounded-xl text-center">
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
                  <MyWorkCard
                    onClick={() => {
                      setModalOpen(true);
                      setModalData(myWorks.find((e) => e.id === val.id));
                    }}
                    key={i}
                    image={val.image}
                    title={val.title}
                    description={val.description}
                  />
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

          <DetailModal showModal={modalOpen} handleModalClose={() => setModalOpen(false)} data={modalData} />

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
  image, title, description, onClick
}) => {
  return (
    <div onClick={() => onClick()} className="max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-md cursor-pointer">
      <img className="w-full h-48 object-cover" src={image} alt="Card Image" />
      <div className="p-4">
        <h2 className="font-semibold text-yellow-600 mb-2">{title}</h2>
        <p className="text-gray-600 text-xs">{description}</p>
      </div>
    </div>
  )
}