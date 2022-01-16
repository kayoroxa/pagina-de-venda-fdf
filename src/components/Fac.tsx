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
        pergunta="Posso assistir o curso em qualquer dispositivo?"
        resposta="Sim! O Curso está hospedado na hotmart e é compatível com todos dispositivos: Celular, Tablet, Notebook, Computador etc. Além disso, também é Cross-Browser ou seja, compátivel com todos os navegadores."
      />
      <SubFac
        pergunta="Qual o formato do curso, é online?"
        resposta="Sim nosso curso é 100% online em videoaulas através da plataforma de ensino a distância da hotmart. Uma plataforma completa, onde você tem total controle do seu aprendizado onde e quando quiser."
      />
      <SubFac
        pergunta="Este curso é realmente completo?"
        resposta="Sim, a ideia principal do Curso é você dominar absolutamente tudo para você se tornar fluente no inglês através de um único curso."
      />
      <SubFac
        pergunta="Quanto tempo terei acesso ao curso?"
        resposta="Acesso ilimitado, sempre você terá acesso ao curso"
      />
      <SubFac
        pergunta="É confiável efetuar a compra?"
        resposta="Sim. O curso está hospedado na Hotmart, o pagamento e a entrega também é feito pela Hotmart a maior plataforma de cursos online no brasil. E ainda por cima você receberá 7 dias de garantia."
      />
      <SubFac
        pergunta="Como vou receber o curso?"
        resposta="Você receberá o link de acesso ao curso em seu e-mail assim que o pagamento for confirmado."
      />
      <SubFac
        pergunta="Posso assistir pelo celular?"
        resposta="Sim, você pode acessar o curso a través do aplicativo da hotmart: Sparkle, disponível na loja de aplicativos android e IOS, ou você pode acessar pelo navegador do celular, quando você adquirir o curso vai receber um link de acesso no seu email."
      />
      <SubFac
        pergunta="Não sei nada sobre inglês, posso me inscrever?"
        resposta="Sim! o curso é estruturado do nível ZERO até o AVANÇADO, não importa seu nível no inglês."
      />
    </List>
  )
}
