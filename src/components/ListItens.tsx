import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
// import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import InsightsIcon from '@mui/icons-material/Insights'
import FlashOnIcon from '@mui/icons-material/FlashOn'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
  })
)

interface IItem {
  icon: any
  text: string
}

export function Item({ icon, text }: IItem) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default function ListItens() {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      <Item
        icon={<InsightsIcon />}
        text="Fique fluente utilizando os padrões coringas do inglês"
      />
      <Item
        icon={<AllInclusiveIcon />}
        text="Assista as aulas quantas vezes você quiser"
      />
      <Item
        icon={<TimelapseIcon />}
        text="Consiga entender nativos falando em qualquer velocidade"
      />
      <Item
        icon={<CheckCircleIcon />}
        text="Não importa seu nível atual no inglês"
      />
      <Item
        icon={<FlashOnIcon />}
        text="Aprenda apenas o necessário para ser fluente, em pouco tempo, sem enrolação"
      />
    </List>
  )
}
