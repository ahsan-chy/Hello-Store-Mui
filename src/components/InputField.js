import React from 'react'
import TextField from '@mui/material/TextField';

const InputField = ({ label, icon, type, onClick, variant, color, sx, style, className }) => {
  return (
    <>
     <TextField
        type={type} variant={variant} sx={sx} style={style} className={className}
        fullWidth 
        name={name}
        value={value}
        onChange={onChange}
        size="small" 
        /> 
    </>
  )
}

export default InputField
