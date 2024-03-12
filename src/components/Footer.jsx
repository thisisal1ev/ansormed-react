import logo from './img/footer-logo.svg'

const Footer = () => {
  return (
    <footer className='bg-br-black'>
      <div className="max-w-base mx-auto px-5 flex items-center justify-between py-6">
        <a href="index.html">
          <img src={logo} alt="logo"/>
        </a>
        <nav>
          <ul className="flex">
            <li className="mr-8 text-white text-sm font-bold uppercase"><a href="#">Xizmatlar</a></li>
            <li className="mr-8 text-white text-sm font-bold uppercase"><a href="#">Dorilar</a></li>
            <li className="mr-8 text-white text-sm font-bold uppercase"><a href="#">Asal</a></li>
            <li className="mr-8 text-white text-sm font-bold uppercase"><a href="#">Kontaktlar</a></li>
            <li><a className="nav-link text-white text-sm font-bold uppercase" href="#">Blog</a></li>
          </ul>
        </nav>

      </div>
    </footer>

  )
}

export default Footer