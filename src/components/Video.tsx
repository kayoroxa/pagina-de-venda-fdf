export default function Video({ url }: { url: string }) {
  return (
    <iframe
      height="auto"
      frameBorder="0"
      src={url}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      // style={{ width: '98%', height: 'auto' }}
    ></iframe>
  )
}
