import { useEffect, useState } from "react"
import "./App.css"
import Splash from "./components/Splash/Splash"

function App() {
  const [begin, setBegin] = useState(true)

  useEffect(() => {
    console.log("file: App.jsx:12  begin:", begin)
  }, [begin])
  return (
    <div className="App">
      <Splash
        style={!begin && { display: "none" }}
        onclick={() => setBegin(false)}
      />
    </div>
  )
}

export default App
