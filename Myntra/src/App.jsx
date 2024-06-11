
import "../src/components/css/App.css";
import MyntraProvider from "./data/myntraStore";
import { useSelector } from "react-redux";
import Home from "./components/Home";

function App() {

  const items = useSelector((store) => store.items)
  console.log(items)

  return (
    <>
      <MyntraProvider>
        <div className="container-fluid p-0">
          {
            items.map(item => <Home key={item.key} item={item} />)
          }
          
        </div>
      </MyntraProvider>
    </>
  )
}

export default App
