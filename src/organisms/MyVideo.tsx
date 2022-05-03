import { Grid, Paper } from '@material-ui/core'
import MrPlayer from './MrPlayer'
interface IProps {
  src?: string
  ytID?: string
  callBack?: () => void
}

export default function MyVideo({ src, ytID, callBack }: IProps) {
  return (
    <>
      {src && (
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Paper elevation={3} className="video" style={{ padding: 0 }}>
            <div
              style={{
                position: 'relative',
                width: '1px',
                minWidth: '100%',
                paddingBottom: '56.25%',
              }}
            >
              <div
                className="block-video"
                style={{
                  // backgroundColor: '#ff0000',
                  width: 'max(22%, 140px)',
                  height: 'max(15%, 34px)',
                  bottom: '0',
                  right: 0,
                  position: 'absolute',
                  zIndex: 20,
                }}
              />
              <iframe
                allow="autoplay"
                className="spotlightr"
                allowTransparency={true}
                style={{
                  //"width: 1px; min-width: 100%; height: 100%; position: absolute"
                  position: 'absolute',
                  width: '1px',
                  minWidth: '100%',
                  height: '100%',
                }}
                allowFullScreen={false}
                src={src}
                // src="https://if.cdn.spotlightr.com/watch/MTIyMTYxNw==?fallback=true"
                // src="https://if.cdn.spotlightr.com/watch/MTIwNTY1OA==?fallback=true"
                frameBorder="0"
                scrolling="no"
                name="videoPlayerframe"
              ></iframe>
            </div>
          </Paper>
        </Grid>
      )}

      {ytID && (
        <Paper elevation={3} className="video" style={{ padding: 0 }}>
          <MrPlayer videoId={ytID} callBack={callBack} />
        </Paper>
      )}
    </>
  )
}
