import { RouterProvider } from "react-router-dom"
import router from "./routes"

const App = () => {
  return <div>
    <RouterProvider {...{ router }} />
  </div>
}

export default App
