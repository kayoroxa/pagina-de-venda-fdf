import Button from '@material-ui/core/Button'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import ButtonPop from '../components/ButtonPop'

interface IProps {
  href: string
  title: string
  styleClass: any
  color: string
  showPopup: boolean
  myRef: string | string[] | undefined
  styleInject?: any
  fullWidth?: boolean
  icon?: any
}

export default function MyButton({
  href,
  myRef,
  title,
  color,
  // fill,
  // onClick,
  styleClass,
  showPopup,
  styleInject,
  fullWidth,
  icon,
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
        variant="outlined"
        fullWidth={fullWidth}
        style={styleInject}
        size="large"
        className={styleClass}
        startIcon={icon || <CheckBoxIcon />}
        id="button-to-checkout"
      >
        {title}
      </Button>
    </ButtonPop>
  )
}
