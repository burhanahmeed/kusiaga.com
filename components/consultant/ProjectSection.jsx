import projects from './projects.json';
import DetailModal from './DetailModal'; 
import { useState } from 'react';

export default function ProjectSection() {
  const myWorks = projects;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <>
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
        <DetailModal showModal={modalOpen} handleModalClose={() => setModalOpen(false)} data={modalData} />
    </>
  );
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