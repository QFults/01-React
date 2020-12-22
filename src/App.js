import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css'

let posts = [
  {
    title: 'My First Post',
    body: 'This is my first post.'
  },
  {
    title: 'My Second Post',
    body: 'This is my second post.'
  },
  {
    title: 'My Third Post',
    body: 'This is my third post.'
  },
  {
    title: 'My Fourth Post',
    body: 'This is my fourth post.'
  }
]

const App = () => {
  return (
    <div>
      <Navbar title="My First React App" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {
              posts.map(post => <Card title={post.title} body={post.body} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
