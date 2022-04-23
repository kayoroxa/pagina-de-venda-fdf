import { Grid, Paper } from '@material-ui/core'
import ListItens from '../components/ListItens'
import Valor from '../components/Valor'

interface IProps {
  showVideoAndPrice: boolean
}

export default function MyPlan({ showVideoAndPrice }: IProps) {
  return (
    <Grid item lg={4} md={5} sm={12} xs={12}>
      <Paper elevation={3} className="more">
        <ListItens />
        {showVideoAndPrice && <Valor notColor avista />}
      </Paper>
    </Grid>
  )
}
