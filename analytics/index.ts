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
      showPercent: 0.4,
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
      tag: '497',
      showPercent: 1,
      data: {
        value: 497,
        link: 'https://pay.hotmart.com/Y51115808H?off=c74kxq7h&checkoutMode=10&split=12',
      },
    },
    // {
    //   tag: '397',
    //   showPercent: 1,
    //   data: {
    //     value: 397,
    //     link: 'https://pay.hotmart.com/Y51115808H?off=fzv3lnkr&checkoutMode=10&split=12',
    //   },
    // },
  ],
  video: [
    // {
    //   tag: 'omega10',
    //   showPercent: 0.1,
    //   data: {
    //     value: 397,
    //     youtubeVideoId: 'Sos6wA7qKD0',
    //     time: '04:04', //244  2.32%
    //   },
    // },
    // {
    //   tag: 'omega',
    //   showPercent: 0.1,
    //   data: {
    //     value: 397,
    //     youtubeVideoId: '4G-DAgCicDs',
    //     time: '05:00', //300  1.86%
    //   },
    // },

    // {
    //   tag: 'omega',
    //   showPercent: 0.8,
    //   data: {
    //     value: 397,
    //     youtubeVideoId: '4G-DAgCicDs',
    //     time: '08:45', //525   1.66%
    //   },
    // },

    {
      tag: 'alf',
      showPercent: 1,
      data: {
        value: 447,
        youtubeVideoId: 'rjoE2kAwpn0',
        time: '08:54', //525   1.66%
      },
    },

    // {
    //   tag: 'omega10',
    //   showPercent: 0.45,
    //   data: {
    //     value: 397,
    //     youtubeVideoId: 'Sos6wA7qKD0',
    //     time: '06:48', //408  0.6%
    //   },
    // },
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
