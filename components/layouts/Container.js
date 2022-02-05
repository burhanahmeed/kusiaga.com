export default function Container({ children }) {
  return (
    <div className="md:container md:mx-auto pt-16">
      { children }
    </div>
  )
}