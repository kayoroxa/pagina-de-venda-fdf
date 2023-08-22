import { getSecVideo } from '../src/utils/calcVideo'

const variables = {
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
      showPercent: 0.8,
      data: {
        value: 397,
        youtubeVideoId: '4G-DAgCicDs',
        showPageSec: getSecVideo({ min: 8, sec: 45 }), //8:45
      },
    },
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
