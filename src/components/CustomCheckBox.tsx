import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  CheckboxProps
} from '@mui/material'
import React, { useState } from 'react'

interface CustomCheckboxTypes extends CheckboxProps {
  label?: string
  name: string
  value: boolean
  onChange: any
  helperText?: string
  validateSubmit?: boolean
}

const CustomCheckbox = ({
  label,
  name,
  value,
  helperText,
  required,
  validateSubmit,
  onChange
}: CustomCheckboxTypes) => {
  const [touched, setTouched] = useState(false)
  const onChangeCustom = (e: any) => {
    setTouched(true)
    onChange(e)
  }
  const requiredCondition = (touched || validateSubmit) && !value && required
  return (
    <FormControl
      required={required}
      error={requiredCondition}
      component="fieldset"
      variant="standard"
    >
      <FormControlLabel
        control={<Checkbox onChange={onChangeCustom} value={value} name={name} />}
        label={label}
      />
      {(helperText || requiredCondition) && (
        <FormHelperText sx={{ mt: -1, mb: 1.5 }}>
          {requiredCondition ? '* Required' : helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default CustomCheckbox