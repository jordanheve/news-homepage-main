export const NewSection = () => {
  return (
    <section className="new-section" id="new">
    <h2 className="new-section__header">New</h2>
    <div className="new-section__container">
    <a href="/#">
      <h3 className="new-section__container__header">Hydrogen VS Electric Cars</h3>

    </a>
      <p className="new-section__container__paragraph">Will hydrogen-fueled cars ever catch up to EVs?</p>
    </div>
    <hr className="new-section__hr"/>

    <div className="new-section__container">
      <a href="/#">
      <h3 className="new-section__container__header">The Downsides of AI Artistry</h3>


      </a>

      <p className="new-section__container__paragraph">What are the posible adverse effects of on-demand AI image generation?</p>
    </div>
    <hr className="new-section__hr"/>

    <div className="new-section__container">
    <a href="/#">
      <h3 className="new-section__container__header">Is VC Funding Drying Up?</h3>
    </a>

      <p className="new-section__container__paragraph">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
    </div>
    </section>
  )
}
