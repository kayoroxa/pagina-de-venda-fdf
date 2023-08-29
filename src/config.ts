import variables, { getRandom } from '../analytics'
import { getTimeStringVideo } from './utils/calcVideo'

const { checkoutAndPrice, video, buttonTitle } = variables

let { link: linkCheckOut, value: price } = getRandom<{
  link: string
  value: number
}>(checkoutAndPrice).data

let button = getRandom<{
  value: string
}>(buttonTitle)

let videosFiltered = video.filter(v => v.data.value === price)
videosFiltered = videosFiltered.length > 0 ? videosFiltered : [video[0]]

let videoSelected = getRandom<{
  value: number
  youtubeVideoId: string
  time: string
}>(videosFiltered)

const config = {
  price,
  vslName: videoSelected.tag,
  videoIDAd: '',
  showPageAdSec: 907,
  videoID: videoSelected.data.youtubeVideoId, // '4G-DAgCicDs',
  showPageSec: getTimeStringVideo(videoSelected.data.time),
  // showPageSec: videoSelected.data.showPageSec, //getSecVideo({ min: 8, sec: 45 }), //8:45
  linkCheckOut,
  buttonTitle: button.data.value,
  buttonTitleTag: button.tag,
}

export default config
