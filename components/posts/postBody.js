import markdownStyles from '../../styles/Markdown.module.css'
import useWidth from '../../lib/useWidth'

export default function PostBody({ content }) {
  let width = useWidth()
  return (
    <div className="markdowncss markdown-body mt5 mx-4">
      <div
        style={{ 'maxWidth': `${width}px` }}
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}