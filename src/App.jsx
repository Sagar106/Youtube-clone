import "./App.css"
import Body from "./components/Body"
import Head from "./components/Head"
import { Provider } from "react-redux"
import store from "./store/appStore"

function App() {

  {/** 
    - Head
    - Body
        - Sidebar
          - MenuItems
        - MainContainer
          - ButtonList
          - VideoContainer
            - VideoCard

  */}

  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <Body />
      </div>
    </Provider>
  )
}

export default App
