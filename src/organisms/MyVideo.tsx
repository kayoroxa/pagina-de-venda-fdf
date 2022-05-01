import { Grid, Paper } from '@material-ui/core'
import MrPlayer from './MrPlayer'
interface IProps {
  src?: string
  ytID?: string
}

export default function MyVideo({ src, ytID }: IProps) {
  return (
    <Grid item lg={7} md={7} sm={12} xs={12}>
      <Paper elevation={3} className="video" style={{ padding: 0 }}>
        {src && (
          <>
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
          </>
        )}

        {ytID && <MrPlayer videoId={ytID} />}
      </Paper>
    </Grid>
  )
}
