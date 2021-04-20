import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import FlashOnIcon from '@material-ui/icons/FlashOn'

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
        icon={<CardGiftcardIcon />}
        text="Grupo para praticar no telegram"
      />
      <Item
        icon={<AllInclusiveIcon />}
        text="Assista as aulas quantas vezes você quiser"
      />
      <Item
        icon={<TimelapseIcon />}
        text="Aprenda montar frase em qualquer tempo verbal"
      />
      <Item
        icon={<CheckCircleIcon />}
        text="Fique fluente no inglês de uma vez por toda"
      />
      <Item
        icon={<FlashOnIcon />}
        text="Aprenda tudo necessário do inglês em 60 aulas"
      />
    </List>
  )
}
