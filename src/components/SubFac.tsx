import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import { createStyles } from '@material-ui/styles'
import { makeStyles, Theme } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
)

interface IProps {
  pergunta: string
  resposta: string
}

export default function SubFac({ pergunta, resposta }: IProps) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ContactSupportIcon />
        </ListItemIcon>
        <ListItemText primary={pergunta} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary={resposta} />
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}
