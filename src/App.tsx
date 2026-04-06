
import './App.css'
import {v1} from "uuid";

function App() {
  const tracks = [
    {
      id:v1(),
      title: "Musicfun soundtrack",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
      id:v1(),
      title: "Musicfun soundtrack instrumental 1",
      url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
    {
      id:v1(),
      title: "Musicfun soundtrack instrumental 2",
      url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
    {
      id:v1(),
      title: "Musicfun soundtrack instrumental 3",
      url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
  ]

  return (
    <>
      <h1>Musicfun player</h1>
      <ul>
        {tracks.map(t => {
          return (
            <li key={t.id}>
              <div>{t.title}</div>
              <audio
                controls
                src={t.url}
              ></audio>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
