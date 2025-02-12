import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Home from 'pages/Home/Home'
import History from 'pages/History/History'
import Layout from 'components/Layout/Layout'


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
