export default function Container({ children }) {
  return (
    <div
      className="sm:mx-auto pt-16"
      style={{
        maxWidth: '800px'
      }}
    >
      { children }
    </div>
  )
}