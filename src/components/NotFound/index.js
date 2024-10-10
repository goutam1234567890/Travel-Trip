import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <div className="container">
      <img
        src="https://res.cloudinary.com/dqhagljvz/image/upload/v1724237408/Group_7520_uzgihe.png"
        alt="not found"
        className="image"
      />
      <h1 className="heading">Page Not Found</h1>
      <p className="paragraph">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </div>
)

export default NotFound
