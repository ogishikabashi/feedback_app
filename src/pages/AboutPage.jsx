import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is react project to leave feedback for services and products</p>
        <p>version 10.0</p>

        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Card>
    
  )
}

export default AboutPage