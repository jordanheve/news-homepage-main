import retroPC from '../../../assets/images/image-retro-pcs.jpg'
import topLaptops from '../../../assets/images/image-top-laptops.jpg'
import gamingGrowth from '../../../assets/images/image-gaming-growth.jpg'

export const TrendingSection = () => {
  return (
    <section className='trending-section' id='trending'>
    <div className='top-container'>
      <img className='top-container__image' src={retroPC} alt='retro pc' />
      <div className='top-container__info-container'>
        <h3 className='top-container__info-container__number'>01</h3>
        <a href='./#'>
        <h4 className='top-container__info-container__header'>Reviving Retro PCs</h4>
        </a>
        <p className='top-container__info-container__paragraph'>What happens when old PCs are given modern upgrades?</p>
      </div>
      
    </div>

    <div className='top-container'>
      <img className='top-container__image' src={topLaptops} alt='top laptops' />
      <div className='top-container__info-container'>
        <h3 className='top-container__info-container__number'>02</h3>
        <a href='./#'>
        <h4 className='top-container__info-container__header'>Top 10 Laptops of 2022</h4>
        </a>
        <p className='top-container__info-container__paragraph'>Our best picks for various needs and budgets.</p>
      </div>
      
    </div>

    <div className='top-container'>
      <img className='top-container__image' src={gamingGrowth} alt='gaming growth'/>
      <div className='top-container__info-container'>
        <h3 className='top-container__info-container__number'>03</h3>
        <a href='./#'>
        <h4 className='top-container__info-container__header'>The Growth of Gaming</h4>
        </a>
        <p className='top-container__info-container__paragraph'>How the pandemic has sparked fresh opportunities.</p>
      </div>
      
    </div>
    </section>
  )
}
