import heroImg from './img/hero-img.png'

const Hero = () => {
  return (
    <div className="hero bg-br-blue">
      <div className="max-w-base mx-auto flex pt-6 px-5 justify-between">
        <div className="mr-177 w-[500px]">
          <h1 className="text-white text-36 font-bold mb-4 mt-32">Tabiiy davolash usullari yordamida kasalliklardan xalos
            bo’ling.</h1>
          <p className="text-white text-lg mb-7 font-normal">Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng
            ko’p uchraydigan
            kasalliklarni yengishda yordam
            beradi. Sog’ligingizni o’z ishining professionallariga ishonib topshiring.</p>
          <a href="#" className="font-bold uppercase text-white bg-br-pink px-6 py-3 text-sm rounded-lg border-br-pink">Qabulga yozilish</a>
        </div>
        <img src={heroImg} alt="hero"/>
      </div>
    </div>
  )
}

export default Hero