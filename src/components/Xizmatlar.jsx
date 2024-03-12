import xizmatlarImg1 from './img/image-1.png'
import xizmatlarImg2 from './img/image-2.png'
import xizmatlarImg3 from './img/image-3.png'
import xizmatlarImg4 from './img/image-4.png'

const Xizmarlar = () => {
  return (
    <div className="max-w-base mx-auto py-pp px-5">
      <h2 className="text-center font-bold text-4xl mb-56 mt-10">Xizmatlar</h2>
      <ul>
        <li className="flex items-center justify-center w-ww mx-auto mb-20">
          <img className="mr-16" src={xizmatlarImg1} alt="Hijoma"/>
            <div>
              <h3 className="mb-6 font-bold text-2xl">Hijoma</h3>
              <p className="text-lg text-16">Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda
                rasululloh sallallohu
                alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir»
                (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).</p>
            </div>
        </li>
        <li className="flex items-center justify-center w-ww mx-auto mb-20">
          <img className="mr-16" src={xizmatlarImg2} alt="Hijoma"/>
            <div>
              <h3 className="mb-6 font-bold text-2xl">Hijoma</h3>
              <p className="text-lg text-16">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi inventore unde tenetur fuga facere magnam
                quaerat itaque, eos iusto asperiores optio sed nihil reiciendis voluptatum? Placeat, pariatur! Nisi, ad
                nostrum?
              </p>
            </div>
        </li>
        <li className="flex items-center justify-center w-ww mx-auto mb-20">
          <img className="mr-16" src={xizmatlarImg3} alt="Hijoma"/>
            <div>
              <h3 className="mb-6 font-bold text-2xl">Hijoma</h3>
              <p className="text-lg text-16">Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία — «davolash») —
                ma’lum kasalliklarni dorivor zuluklar (Hirudo medicinalis) yordamida davolash usuli. Fizioterapevtik
                muolaja, muqobil tibbiyotga oid sanaladi. Bunday zuluklar ushbu kichik sinf chuvchalchanglariga oid yagona
                tur hisoblanadi, qolganlari shifobaxsh ta’sir ko’rsatmaydi.</p>
            </div>
        </li>
        <li className="flex items-center justify-center w-ww mx-auto mb-60">
          <img className="mr-16" src={xizmatlarImg4} alt="Hijoma"/>
            <div>
              <h3 className="mb-6 font-bold text-2xl">Hijoma</h3>
              <p className="text-lg text-16">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque labore corrupti
                nostrum cupiditate nam quis facilis omnis rem optio sit! Nihil repellendus rerum velit ea et aliquid
                ipsam, consequatur autem?</p>
            </div>
        </li>
      </ul>
      <div className="flex justify-center mb-10">
        <a className="font-bold uppercase text-white bg-br-pink px-6 py-3 text-sm rounded-lg border-br-pink" href="#">Qabulga yozilish</a>
      </div>
    </div>
    )
}

export default Xizmarlar