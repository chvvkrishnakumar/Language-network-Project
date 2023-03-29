import './index.css'

const Loader = () => (
  <div className="loader">
    <video width="320" height="240" autoPlay muted loop>
      <source
        src="https://res.cloudinary.com/debxyw0pk/video/upload/v1680073170/TLN_logo_icon_xycgzj.mp4"
        type="video/mp4"
      />
      <source
        src="https://res.cloudinary.com/debxyw0pk/video/upload/v1680073170/TLN_logo_icon_xycgzj.mp4"
        type="video/ogg"
      />
    </video>
  </div>
)

export default Loader
