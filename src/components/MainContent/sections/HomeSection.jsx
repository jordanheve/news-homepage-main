import web3Img from '../../../assets/images/image-web-3-mobile.jpg'
import web3ImgDesktop from '../../../assets/images/image-web-3-desktop.jpg'
export const HomeSection = () => {
  return (
    <section className='home-section' id='home' >
      <img src={web3Img} className='home-section__img'alt='Web 3.0 picture'/>
      <img src={web3ImgDesktop} className='home-section__img--desktop'alt='Web 3.0 picture'/>
      <h1 className='home-section__header'>The Bright Future of Web 3.0?</h1>
      <div className='home-section__paragraph-container'>
      <p className='home-section__paragraph'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
      <button className='home-section__read-more-btn'>Read more</button>
      </div>
    </section>
  )
}
