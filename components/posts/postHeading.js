import moment from 'moment'
import ReadingTime from 'reading-time'

export default function PostHeader({ title, date, content }) {
  let readingtime = ReadingTime(content)
  return (
    <>
      <div className="">
        <p className="text-clear text-bold text-4xl">{title}</p>
      </div>
      <div className="" style={{ textAlign: 'left', width: '100%' }} className="dblock">
        <p className="text-2xs">{moment(date).format('LLL')} - {readingtime.text}</p>
      </div>
      <hr className="gradient-border" style={{ width: '100%' }} />
    </>
  )
}