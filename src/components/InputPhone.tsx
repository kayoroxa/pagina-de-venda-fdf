//remove typescrit check

import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import * as React from 'react'
import { IMaskInput } from 'react-imask'

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props
    return (
      <IMaskInput
        {...other}
        translate={(value: string) => {
          return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2')
        }}
        mask="(#0) # 0000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    )
  }
)

interface State {
  textmask: string
}

interface IProp {
  onChange?: (value: string) => void
}

export default function InputPhone({ onChange }: IProp) {
  const [values, setValues] = React.useState<State>({
    textmask: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  React.useEffect(() => {
    if (onChange) onChange(values.textmask)
  }, [values.textmask])

  React.useEffect(() => {
    document.querySelector('input')?.blur()
    const time = setTimeout(() => {
      document.querySelector('input')?.focus()
    }, 1500)

    return () => {
      clearTimeout(time)
    }
  }, [])

  return (
    // <Box
    //   sx={{
    //     '& > :not(style)': {
    //       m: 1,
    //     },
    //   }}
    // >
    <FormControl variant="standard" size="medium" fullWidth={true}>
      <InputLabel
        htmlFor="formatted-text-mask-input"
        style={{ fontSize: '130%' }}
      >
        Coloque seu Whatsapp Aqui...
      </InputLabel>
      <Input
        inputProps={{ inputMode: 'numeric' }}
        // onFocus={e => {
        //   e.target.blur()
        // }}
        placeholder="(00) 0 0000-0000"
        value={values.textmask}
        onChange={handleChange}
        name="textmask"
        id="formatted-text-mask-input"
        inputComponent={TextMaskCustom as any}
      />
    </FormControl>
    // </Box>
  )
}
