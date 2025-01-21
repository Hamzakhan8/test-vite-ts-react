import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}

export default App
