import Logo from './Logo'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__identity">
          <span className="header__mark">
            <Logo />
          </span>
          <div className="header__titles">
            <span className="header__product">Wine Club Membership</span>
            <span className="header__tagline">Floor staff signup tool</span>
          </div>
        </div>
        <span className="header__badge">Staff Portal</span>
      </div>
    </header>
  )
}

export default Header
