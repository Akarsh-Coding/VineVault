import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__copy">© {year} Wine Club Membership · Internal use only</span>
        <span className="footer__meta">ENG-78954</span>
      </div>
    </footer>
  )
}

export default Footer
