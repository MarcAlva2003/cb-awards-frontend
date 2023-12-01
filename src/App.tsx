import './App.css'

import { HeaderComponent } from './components/header/header.component';
import { useAppRouter } from './routes/useAppRouter'

function App() {
  const {publicRouter} = useAppRouter();
  return (
    <>
    <HeaderComponent/>
      {publicRouter}
    </>
  )
}

export default App
