import { NewsletterSection } from '../../styles/components/sections/Newsletter'

import { Input } from '../Input'
import { Button } from '../Button'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carrousel from '../Carrousel'

export default function Newsletter() {
  const cellphoneSlider1 = ['celular1', 'celular2', 'celular3']
  const cellphoneSlider2 = ['celular4', 'celular5', 'celular6']
  const cellphoneSlider3 = ['celular7', 'celular8', 'celular9']
  const cellphoneSlider4 = ['celular10', 'celular11', 'celular12']
  const allCellphones = [
    ...cellphoneSlider1,
    ...cellphoneSlider2,
    ...cellphoneSlider3,
    ...cellphoneSlider4,
  ]

  return (
    <NewsletterSection>
      <div className="news-letter-content">
        <h3>Assine nossa newsletter</h3>
        <h2>
          Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a cada
          15 dias.
        </h2>

        <form>
          <Input
            placeholder="Nome"
            type="text"
            css={{ marginBottom: '$stack-xxs' }}
          />
          <Input
            placeholder="Email"
            type="email"
            css={{ marginBottom: '$stack-lg' }}
          />
          <Button
            label="Assinar Newsletter"
            type="submit"
            onClick={(event) => event.preventDefault()}
          />
        </form>
      </div>

      <div className="cellphones-grid">
        <Carrousel
          settings={{ speed: 3000, autoplaySpeed: 1 }}
          slides={cellphoneSlider1}
        />
        <Carrousel
          settings={{ speed: 2000, autoplaySpeed: 1 }}
          slides={cellphoneSlider2}
        />
        <Carrousel
          settings={{ speed: 3500, autoplaySpeed: 1 }}
          slides={cellphoneSlider3}
        />
        <Carrousel
          settings={{ speed: 2500, autoplaySpeed: 1 }}
          slides={cellphoneSlider4}
        />
      </div>

      <div className="cellphone-horizontal-carrousel">
        <Carrousel
          responsive
          settings={{ speed: 3000, autoplaySpeed: 1 }}
          slides={allCellphones}
        />
      </div>
    </NewsletterSection>
  )
}
