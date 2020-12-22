import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card />
          </div>
          <div className="col-md-6">
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
