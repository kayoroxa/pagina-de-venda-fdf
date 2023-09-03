let variables = {
  buttonTitle: [
    {
      tag: 'bt-1',
      showPercent: 0.6,
      data: {
        value: 'Se cadastrar agora!',
      },
    },
    {
      tag: 'bt-2',
      showPercent: 0.2,
      data: {
        value: 'Adquirir o curso!',
      },
    },
    // {
    //   tag: 'bt-3',
    //   showPercent: 0.2,
    //   data: {
    //     value: 'Quero ficar fluente!',
    //   },
    // },
  ],
  button: [
    {
      tag: 'showed',
      showPercent: 0.2,
      data: {
        show: true,
      },
    },
    {
      tag: 'hided',
      showPercent: 0.8,
      data: {
        show: false,
      },
    },
  ],
  checkoutAndPrice: [
    {
      tag: '397',
      showPercent: 0.8,
      data: {
        value: 397,
        link: 'https://pay.hotmart.com/Y51115808H?off=fzv3lnkr&checkoutMode=10&split=12',
      },
    },
  ],
  video: [
    {
      tag: 'omega',
      showPercent: 0.35,
      data: {
        value: 397,
        youtubeVideoId: '4G-DAgCicDs',
        time: '08:45', //getSecVideo({ min: 8, sec: 45 }),
      },
    },
    {
      tag: 'omega',
      showPercent: 0.15,
      data: {
        value: 397,
        youtubeVideoId: '4G-DAgCicDs',
        time: '05:00',
      },
    },
    {
      tag: 'omega10',
      showPercent: 0.05,
      data: {
        value: 397,
        youtubeVideoId: 'Sos6wA7qKD0',
        time: '04:04', //getSecVideo({ min: 0, sec: 0 }),
      },
    },
    {
      tag: 'omega10',
      showPercent: 0.45,
      data: {
        value: 397,
        youtubeVideoId: 'Sos6wA7qKD0',
        time: '06:48', //getSecVideo({ min: 0, sec: 0 }),
      },
    },
    // {
    //   tag: 'omega10',
    //   showPercent: 0.45,
    //   data: {
    //     value: 397,
    //     youtubeVideoId: 'Sos6wA7qKD0',
    //     time: '00:01', //getSecVideo({ min: 0, sec: 0 }),
    //   },
    // },
  ],
}

export default variables

export function getRandom<DataType>(
  options: { tag: string; showPercent: number; data: DataType }[]
) {
  var i

  var weights = [options[0].showPercent]

  for (i = 1; i < options.length; i++)
    weights[i] = options[i].showPercent + weights[i - 1]

  // console.log({ weights })
  var random = Math.random() * weights[weights.length - 1]
  // console.log({ random })

  for (i = 0; i < weights.length; i++) if (weights[i] > random) break

  return options[i]

  // const result = options.find((_, i) => weights[i] >= random)
  // // console.log({ result })
  // return result
}
