import moment from 'moment'

export default function PostHeader({ title, date, content }) {
  return (
    <>
      <div className="">
        <p className="text-clear text-bold text-4xl">{title}</p>
      </div>
      <div className="" style={{ textAlign: 'left', width: '100%' }} className="dblock">
        <p className="text-2xs">{moment(date).format('LLL')}</p>
      </div>
      <hr className="gradient-border" style={{ width: '100%' }} />
    </>
  )
}