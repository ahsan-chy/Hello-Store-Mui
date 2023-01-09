import React from 'react'
import Button from '@mui/material/Button';

const SubmitButton = ({ label, icon, type, onClick, variant, color, sx, style, className }) => {
  return (
    <>
      <Button type={type} onClick={onClick} variant={variant} color={color} sx={sx} style={style} className={className}>
      {icon} {label}
      </Button>
    </>
  )
}

export default SubmitButton
