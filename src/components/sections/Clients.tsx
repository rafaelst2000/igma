import { ClientsSection } from '../../styles/components/sections/Clients'
import Image from 'next/image'

export default function Clients() {
  const clientsImageUrls = [
    'mrv',
    'brasilprev',
    'idb',
    'comgas',
    'bayer',
    'cvc',
    'centauro',
    'neoenergia',
    'google',
    'honda',
    'ambev',
    'hsl',
  ]

  return (
    <ClientsSection>
      <h2>
        Expressamos mais de 20 anos de experiência criando plataformas digitais
        para as maiores empresas do Brasil, impactando milhões de pessoas.
      </h2>
      <div className="clients-grid">
        {clientsImageUrls.map((url) => (
          <Image
            src={`/images/clients/${url}.svg`}
            alt={`${url} logo`}
            width={242}
            height={176}
            quality={85}
            key={url}
          />
        ))}
      </div>
    </ClientsSection>
  )
}
