import Image from 'next/image'

export function WhatsAppButton() {
  return (
    <div className="whatsAppIcon">
      <a
        href="https://wa.link/c7y2go"
        aria-label="Nós chame no whatsapp!"
        target="_blank"
      >
        <Image src="/whatsapp.svg" alt="whatsapp" width={70} height={70} />
      </a>
    </div>
  )
}
