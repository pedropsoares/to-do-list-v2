import { Feed } from "./Components/Feed/Feed";
import { Header } from "./Components/Header/Header";

import './global.css';

export function App() {

  return (
    <div className="home">
      <Header />

      <Feed />
    </div>
  )
}

