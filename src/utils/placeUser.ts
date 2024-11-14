export async function getCountryByIP(): Promise<String> {
  const apis = [
    {
      url: 'https://ipapi.co/json',
      parseCountry: (data: any) => data.country,
    },
    {
      url: 'https://ipinfo.io/json',
      parseCountry: (data: any) => data.country,
    },
    {
      url: 'https://ipwhois.app/json/',
      parseCountry: (data: any) => data.country_code,
    },
  ]

  for (let api of apis) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 3000) // Timeout de 5 segundos

      const response = await fetch(api.url, { signal: controller.signal })
      clearTimeout(timeoutId)

      if (!response.ok) {
        clearTimeout(timeoutId)
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()
      console.log(data)
      return api.parseCountry(data)
    } catch (error: any) {
      console.warn(`Erro na API ${api.url}: ${error.message}`)
      // Tenta a próxima API
    }
  }

  // Se nenhuma API retornar com sucesso
  return 'null'
}
