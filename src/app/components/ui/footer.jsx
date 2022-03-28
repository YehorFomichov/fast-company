import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='container-fluid'>
      <div className='row' style={{ textAlign: 'center' }}>
        <h2>More info:</h2>
      </div>
      <footer className='footer-bs'>
        <div className='row'>
          <div className='col-8 footer-brand animated fadeInLeft'>
            <h2>Logo</h2>
            <p>
              Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
              porttitor vitae orci nec ultricies. Curabitur vehicula, libero
              eget faucibus faucibus, purus erat eleifend enim, porta
              pellentesque ex mi ut sem. Suspendisse hendrerit tellus laoreet
              luctus pharetra. Aliquam porttitor vitae orci nec ultricies.
              Curabitur vehicula, libero eget faucibus faucibus, purus erat
              eleifend enim, porta pellentesque ex mi ut sem.
            </p>

            <p>© 2022 Yehor, All rights reserved ;)</p>
          </div>
          <div className='col-md-2 footer-nav animated fadeInUp'>
            <h4>Contact me at:</h4>
            <div className='col'>
              <ul className='pages'>
                <li>
                  <a href='https://github.com/YehorFomichov'>My Github</a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/yehor-fomichov-486304233/'>
                    Linked In
                  </a>
                </li>
                <li>
                  <a href='mailto:yehor.fomichov@gmail.com'>Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
