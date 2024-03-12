import siteLogo from './img/logo.svg'

const Header = () => {
  const home = 'index.html'
  return (
    <header className="py-6 px-5">
      <div className="max-w-base mx-auto px-5 flex items-center justify-between px-5">
        <a href={home}>
          <img src={siteLogo} alt="logo"/>
        </a>
        <nav>
          <ul className="flex">
            <li className="mr-8"><a className="text-sm font-bold uppercase" href="#">Xizmatlar</a></li>
            <li className="mr-8"><a className="text-sm font-bold uppercase" href="#">Dorilar</a></li>
            <li className="mr-8"><a className="text-sm font-bold uppercase" href="#">Asal</a></li>
            <li className="mr-8"><a className="text-sm font-bold uppercase" href="#">Kontaktlar</a></li>
            <li><a className="text-sm font-bold uppercase" href="#">Blog</a></li>
          </ul>
        </nav>
        <a className="font-bold uppercase text-white bg-br-pink px-6 py-3 text-sm rounded-lg border-br-pink" href="#">Qabulga yozilish</a>
      </div>
    </header>
  )
}

export default Header