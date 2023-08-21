import BezierEasing from 'bezier-easing'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { FaPause, FaPlay } from 'react-icons/fa'
import { useLocalStorage } from 'react-use'
import YouTube from 'react-youtube'
import { YouTubePlayer } from 'youtube-player/dist/types'
import config from '../../config'
import { ContainerMrPlayer } from './styles-mr-player'

interface IProps {
  videoId: string
  onGoBack?: () => void
  callBack?: () => void
  showPage: boolean
}
const easing = BezierEasing(0.04, 0.63, 0, 0.97)
// const easing = BezierEasing(0.07, 0.67, 0.17, 1.01)

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const MrPlayer = ({ videoId, onGoBack, callBack, showPage }: IProps) => {
  const router = useRouter()
  const { showPageSec, showPageAdSec } = config

  const videoCTRTime = router.pathname === '/ad' ? showPageAdSec : showPageSec

  const [isPaused, setIsPaused] = useState(true)
  const [videoTarget, setVideoTarget] = useState<YouTubePlayer | null>(null)
  const [videoPercent, setVideoPercent] = useState(0)
  const [lastTimeWatched, setLastTimeWatched] = useLocalStorage(
    'last-time-watched',
    0
  )

  const goBack = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  function _onReady(event: { target: YouTubePlayer }) {
    setVideoTarget(event.target)

    // videoTarget?.seekTo(10, true)
    // event.target.seekTo(10)
  }

  useEffect(() => {
    if (videoTarget) {
      // setTimeout(() => {
      //   videoTarget?.setPlaybackRate(1.2)
      // }, 200)
      if (
        !showPage &&
        lastTimeWatched !== 0 &&
        typeof lastTimeWatched === 'number'
      ) {
        videoTarget.seekTo(lastTimeWatched, true)
      } else {
        videoTarget.seekTo(0, true)
      }
    }
  }, [videoTarget])

  useEffect(() => {
    if (videoTarget) {
      const interval = setInterval(async () => {
        const currentTime = await videoTarget?.getCurrentTime()
        const duration = await videoTarget?.getDuration()

        const percent = currentTime / duration
        const easyPercent = easing(percent) * 100

        if (currentTime >= videoCTRTime && callBack) {
          callBack()
        }
        setLastTimeWatched(currentTime)
        setVideoPercent(easyPercent)
      }, 500)

      return () => clearInterval(interval)
    }
  }, [isPaused])

  function toggleVideoPlay() {
    if (videoTarget) {
      // setIsPaused(!isPaused)
      if (isPaused) {
        videoTarget.playVideo()
      } else {
        videoTarget.pauseVideo()
      }
    }
  }

  useEffect(() => {
    const func = (e: KeyboardEvent) => {
      if (e.key === '*' && videoTarget) {
        videoTarget.seekTo(config.showPageSec - 6, true)
      }
      if (e.key === '-' && videoTarget) {
        videoTarget.seekTo(0, true)
      }
    }

    document.addEventListener('keydown', func)

    return () => {
      document.removeEventListener('keydown', func)
    }
  }, [videoTarget])

  // function toggleFullScreen(elem: any) {
  //   if (!document.fullscreenElement) {
  //     if (elem.requestFullscreen) {
  //       console.log(elem)
  //       try {
  //         elem?.requestFullscreen()
  //       } catch (error) {
  //         console.log('error request Full screen')
  //       }
  //     } else if (elem.webkitRequestFullscreen) {
  //       elem.webkitRequestFullscreen()
  //     } else if (elem.msRequestFullscreen) {
  //       elem.msRequestFullscreen()
  //     }
  //     setIsFullScreen(true)
  //     screen.orientation.lock('landscape-primary')
  //   } else {
  //     document.exitFullscreen()
  //     setIsFullScreen(false)
  //     screen.orientation.lock('portrait-primary')
  //   }
  // }

  // useEffect(() => {
  //   function _isMobile() {
  //     // if we want a more complete list use this: http://detectmobilebrowsers.com/
  //     // str.test() is more efficent than str.match()
  //     // remember str.test is case sensitive
  //     var isMobile = /iphone|ipod|android|ie|blackberry|fennec/.test(
  //       navigator.userAgent.toLowerCase()
  //     )
  //     return isMobile
  //   }
  //   if (ref.current && _isMobile()) {
  //     toggleFullScreen(ref.current)
  //   }
  // }, [ref])
  return (
    <ContainerMrPlayer ref={ref}>
      {onGoBack && (
        <div className="go-back" ref={goBack} onClick={onGoBack}>
          <BiArrowBack />
        </div>
      )}

      <div className="container-video">
        <div className="aviso-video">Carregando video...</div>

        <div style={{ opacity: !isPaused ? '1' : '0' }}>
          <YouTube
            className="yt-vid"
            videoId={videoId}
            opts={{
              playerVars: {
                modestbranding: 1,
                fs: 0,
                showinfo: 0,
                controls: 0,
              },
            }}
            onReady={_onReady}
            onPause={() => setIsPaused(true)}
            onPlay={async () => {
              await delay(360)
              setIsPaused(false)
            }}
            onEnd={({ target }) => {
              target.seekTo(0, true)
              setIsPaused(true)
            }}
          />
        </div>

        <div
          className="overlay"
          onClick={async () => {
            // setIsPaused(true)
            if (isPaused) {
              videoTarget?.playVideo()
            } else {
              setIsPaused(true)
              await delay(350)
              videoTarget?.pauseVideo()
            }
          }}
        >
          <div
            className="progress-bar"
            style={{ width: videoPercent + '%' }}
          ></div>
          <div
            className="thumb"
            onClick={() => videoTarget?.playVideo()}
            style={{ display: isPaused && videoTarget ? 'flex' : 'none' }}
          >
            <img
              src="https://i.ibb.co/zNWbFBh/C-pia-de-Aperte-o-Play.jpg"
              alt="miniatura do video"
            />
          </div>
          <div className="controls">
            {/* <div
              className="retroceder"
              onClick={async () => {
                const time = await videoTarget?.getCurrentTime()
                if (time) {
                  videoTarget?.seekTo(time - 30, true)
                  videoTarget?.playVideo()
                }
              }}
            >
              <BiFullscreen />
            </div> */}
            <div className="play" onClick={() => toggleVideoPlay()}>
              {isPaused ? <FaPlay /> : <FaPause />}
            </div>
            {/* <div
              className="fullScreen"
              onClick={() => toggleFullScreen(ref.current)}
            >
              <BiFullscreen />
            </div> */}
          </div>
        </div>
      </div>
      {isPaused}
    </ContainerMrPlayer>
  )
}

export default MrPlayer
