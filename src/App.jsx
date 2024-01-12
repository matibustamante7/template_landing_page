
import './App.css'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Header from './components/Header'
// import Products from './components/Products'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className='flex flex-col gap-4 bg-slate-200'>
      <Header/>
      <Banner/>
      <Services/>
      {/* <Products/> */}
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App
