import moment from 'moment'
import ReadingTime from 'reading-time'

export default function PostHeader({ title, date, content }) {
  let readingtime = ReadingTime(content)
  return (
    <div className="mx-4">
      <div className="">
        <p className="text-clear text-bold text-4xl">{title}</p>
      </div>
      <div className="dblock" style={{ textAlign: 'left', width: '100%' }}>
        <p className="text-2xs">{moment(date).format('LLL')} - {readingtime.text}</p>
      </div>
      <hr className="gradient-border" style={{ width: '100%' }} />
    </div>
  )
}