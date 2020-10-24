export default function contact () {
  return (
    <div style={{"margin": "10px 0"}}>
        <div style={{ 'display': 'flex', 'alignItems': 'baseline' }}>
          <a target="_blank" href="https://t.me/burhannahm" className="p2">
            <img
              style={{"borderRadius": "100%"}} 
              alt="Example image" 
              src="/img/telegram.svg" width="30"
            />
          </a>
          <a target="_blank" href="https://twitter.com/burhannahm" className="p2">
            <img
              style={{"borderRadius": "100%"}} 
              alt="Example image" 
              src="/img/twitter.svg" width="30"
            />
          </a>
          <a target="_blank" href="mailto:brhn@kusiaga.com" className="p2">
            <img
              style={{"borderRadius": "100%"}} 
              alt="Example image" 
              src="/img/mail.svg" width="30"
            />
          </a>
          <a target="_blank" href="https://github.com/burhanahmeed" className="p2">
            <img
              style={{"borderRadius": "100%"}} 
              alt="Example image" 
              src="/img/github.svg" width="30"
            />
          </a>
      </div>
    </div>
  )
}