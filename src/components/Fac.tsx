import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import SubFac from './SubFac'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 800,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
)

export default function fac() {
  const classes = useStyles()

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Perguntas frequentes
        </ListSubheader>
      }
      className={classes.root}
    >
      <SubFac
        pergunta="Posso acessar o curso de qualquer lugar?"
        resposta="Sim! A plataforma de ensino a distância da hotmart é compátivel com todos os dispositivos: Celular, Tablet, Notebook, Desktop etc. Além disso, também é Cross-Browser ou seja, compátivel com todos os navegadores."
      />
      <SubFac
        pergunta="Qual o formato do curso?"
        resposta="O curso é 100% em videoaulas através da plataforma de ensino a distância da hotmart. Uma plataforma completa, onde você tem total controle do seu aprendizado onde e quando quiser."
      />
      <SubFac
        pergunta="Este curso é realmente completo?"
        resposta="Sim, a idéia principal do Curso é você dominar absolutamente tudo para você se tornar fluente no inglês através de um único curso."
      />
      <SubFac
        pergunta="Quanto tempo terei acesso ao curso"
        resposta="A partir do momento que você receber acesso ao curso você tem acesso 1 ano. Ou seja, tempo suficiente para ver todas as aulas com calma e pratica-la."
      />
      <SubFac
        pergunta="É confiável efetuar a compra?"
        resposta="Sim. O curso está hospedado na Hotmart, o pagamento e a entrega também é feito pela Hotmart a maior plataforma de cursos online no brasil. E ainda por cima você receberá 7 dias de garantia."
      />
    </List>
  )
}
