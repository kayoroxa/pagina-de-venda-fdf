import Button from '../components/Button'
import ButtonPop from '../components/ButtonPop'

interface IProps {
  href: string
  title: string
  // styleClass: any
  color: string
  showPopup: boolean
  myRef: string | string[] | undefined
  styleInject?: any
  fullWidth?: boolean
  icon?: any
  variant?: 'outlined' | 'fill'
}

export default function MyButton({
  href,
  myRef,
  title,
  color,
  // fill,
  // onClick,
  // styleClass,
  showPopup,
  styleInject,
  // icon,
  variant,
}: // styleInject,
IProps) {
  return (
    <ButtonPop
      affiliated={myRef === 'E53339888M'}
      href={href}
      showPopup={showPopup}
      colorButton={color}
      buttonTitle={title}
    >
      <Button
        variant={variant || 'fill'}
        style={styleInject}
        // className={styleClass}
        // startIcon={icon || <CheckBoxIcon />}
        id="button-to-checkout"
      >
        {title}
      </Button>
    </ButtonPop>
  )
}
