import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function DetailModal({ showModal, handleModalClose, data }) {
  function closeModal() {
    handleModalClose()
  }

  const techs = (data?.technology || 'None').split(',');
  const urls = (data?.publicUrls || 'None').split(',');

  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-between"
                  >
                    <div>{data?.title}</div>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-2 py-1 text-xs text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      close
                    </button>
                  </Dialog.Title>
                  <div className="mt-2">
                    <div
                      style={{
                        background: `url("${data?.image}")`, // Replace with the actual path to your image
                        backgroundSize: 'cover', // Adjust as needed (cover, contain, etc.)
                        height: '250px', // Specify the height of your div
                        width: '100%', // Specify the width of your div
                      }}
                    ></div>
                    <div className='pt-6'>
                      <h3 className="text-lg font-medium leading-6 text-gray-900 flex justify-between">Descriptions</h3>
                      <div className='space-x-1 pt-4 text-gray-500 text-xs' dangerouslySetInnerHTML={{ __html: data?.detail }}></div>
                    </div>

                    <div className="py-4">
                      <hr />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900 flex justify-between">Contribution and Achievements</h3>
                      <div className='space-x-1 pt-4 text-gray-500 text-xs' dangerouslySetInnerHTML={{ __html: data?.achievement }}></div>
                    </div>

                    <div className="py-4">
                      <hr />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900 flex justify-between">Technologies</h3>
                      <div className='space-x-1 pt-4'>
                        {techs.map((t) => <span className="inline-block bg-blue-500 text-white text-xs py-1 px-2 rounded-full">{t}</span>)}
                      </div>
                    </div>

                    <div className="py-4">
                      <hr />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900 flex justify-between">Public URLs</h3>
                      <div className='space-x-1 pt-4'>
                        <ul>
                          {urls.map((t) => <li className='text-xs text-blue-500'>{t !== 'None' ? <a target='_blank' href={t}>{t}</a> : 'None'}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
