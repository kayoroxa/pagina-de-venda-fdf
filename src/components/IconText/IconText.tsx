import React from 'react'

import { ContainerIconText } from './styles-icon-text'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
interface IProps {
  text: string
  link: string
}
const IconText = ({ text, link }: IProps) => {
  return (
    <ContainerIconText>
      <div className="icon">
        <CardGiftcardIcon />
      </div>
      <div className="text">{text}</div>
    </ContainerIconText>
  )
}

export default IconText
