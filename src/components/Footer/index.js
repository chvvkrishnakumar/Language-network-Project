import FAQs from '../FAQs'
import './index.css'

const Footer = () => (
  <>
    <FAQs />
    <div className="footer">
      <h1>Have fun learning French today</h1>
      <button className="learn-button" type="button">
        Start Learning French Online
      </button>
      <div>
        <img
          className="footer-img"
          src="https://res.cloudinary.com/debxyw0pk/image/upload/v1680025717/image_19_rjxks0.png"
          alt="footer icons"
        />
      </div>
    </div>
  </>
)

export default Footer
