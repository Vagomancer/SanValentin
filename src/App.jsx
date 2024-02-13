import { useState } from "react";
import JSConfetti from 'js-confetti'
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)


  const [valueSi, setValueSi] = useState(false)

  let random = [{
    id: 0,
    description: "Di si por favor .",
    img: "https://media.tenor.com/9UfBFztRThcAAAAi/puuung-lazy.gif"
  },
  {
    id: 1,
    description: "Piénsalo de nuevo vida .",
    img: "https://media.tenor.com/iYCgIAu9VPEAAAAi/puuung-puung.gif"
  }
    ,
  {
    id: 2,
    description: "Rindete mi amor .",
    img: "https://i.makeagif.com/media/10-09-2019/3by8eu.gif"
  },
  {
    id: 3,
    description: "Como que no? .",
    img: "https://j.gifs.com/lR2ogj.gif"
  },
  {
    id: 4,
    description: "Pucha... segura? .",
    img: "https://i.pinimg.com/originals/f5/7f/0c/f57f0c993951ba7fbdb952d962c5a006.gif"
  },
  {
    id: 5,
    description: "A caray!! ni por un cafesito?",
    img: "https://i.pinimg.com/originals/55/8f/e3/558fe348b78e0b899abdbb10863d3952.gif"
  },
  {
    id: 6,
    description: "Que grosera :'( ",
    img: "https://i.pinimg.com/originals/73/be/87/73be873c7a55c865169c9923ea779fc4.gif"
  },
  {
    id: 7,
    description: "Ofendes al Pequeño Ezquiel ",
    img: "https://gifdb.com/images/high/love-hug-puuung-illustration-4lkryoo0l0sot04v.gif"
  },
  {
    id: 8,
    description: "Confía en el destino vida .",
    img: "https://i.pinimg.com/originals/18/da/ef/18daef8dca88c29b52a176652c30d57e.gif"
  },
  {
    id: 9,
    description: "No seas grosera >:( ",
    img: "https://i.makeagif.com/media/10-13-2022/cj5BhQ.gif"
  },
  {
    id: 10,
    description: "No te arrepentirás mi amor .",
    img: "https://pa1.aminoapps.com/7236/041dba4232def15ab56d6efd01b2739caee2704ar1-640-640_hq.gif"
  }]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index])
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10)
    }
    setRandomValor(random[index]);
  }


  const handleImageLoad = () => {
    setImagenCargada(true);
  }


  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center ">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-white font-bold text-5xl text-center mb-8">Paola Rodrigo ¿Quieres ser mi San Valentin?</h1>
            
            <img src={Object.keys(randomValor).length === 0 ?
              "https://pa1.aminoapps.com/7236/6dd9318f0a7141628c1154b564e0ce28572af3b7r1-370-300_hq.gif" : randomValor.img} alt="San Valentin" className="mx-auto" width={400} height={400} />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button onClick={() => {
                setValueSi(true)

                jsConfetti.addConfetti({
                  emojis: ['😍', '🥰', '❤️', '😘'],
                  emojiSize: 70,
                  confettiNumber: 80,
                })

              }} className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} style={{ height: agrandar }}>
                Si
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "Paola Rodrigo ¿Quieres ser mi San Valentin?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl text-white font-bold">Sabia que dirias que si mi amor ❤️!</h1>
            <img src="https://i.pinimg.com/originals/c6/4b/59/c64b594e04cdc0c64b4970c62cbe4f28.gif" alt="" className="mx-auto" />
            <h1 className="text-4xl text-white font-bold">Te amo infinitamente mi vida ❤️</h1>
            <h1 className="text-white font-bold">Con amor: tu esposo Cris </h1>
            <span hidden>{document.title = 'Sabia que dirias que si ❤️!'}</span>
          </div>
        )
      }
    </main>
  )
}

export default App
