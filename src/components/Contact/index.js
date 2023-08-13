import './index.css'

const Contact = () => (
  <div className="contact-container">
    <ul>
      <li className="con-listed">
        <img
          className="icons"
          alt="Phone"
          src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Phone-Call-Telephone-512.png"
        />

        <div>
          <p className="contact">Phone:</p>
          <p className="contact">+123 091882 838</p>
        </div>
      </li>
      <li className="con-listed">
        <img
          className="icons"
          alt="mail"
          src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Email-Letter-Mail-512.png"
        />
        <div>
          <p className="contact">Email:</p>
          <p className="contact">airin@gmail.com</p>
        </div>
      </li>
      <li className="con-listed">
        <img
          className="icons"
          alt="address"
          src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Location-Pin-Map-512.png"
        />
        <div>
          <p className="contact">Adress</p>
          <p className="contact">123 city..colony</p>
        </div>
      </li>
    </ul>
  </div>
)

export default Contact
