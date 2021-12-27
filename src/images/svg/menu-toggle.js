import * as React from 'react'

function MenuToggleIcon(props) {
  return (
    <svg
      width={40}
      height={40}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g opacity={0.1} fill='#19C3FF'>
        <path d='M28.68 0C35.46 0 40 4.76 40 11.84v16.342C40 35.24 35.46 40 28.68 40H11.34C4.56 40 0 35.24 0 28.182V11.84C0 4.76 4.56 0 11.34 0h17.34zm-.32 14c-.68-.68-1.8-.68-2.48 0l-8.26 8.26-3.5-3.5c-.68-.68-1.8-.68-2.48 0-.68.68-.68 1.78 0 2.48l4.76 4.74c.34.34.78.5 1.22.5.46 0 .9-.16 1.24-.5l9.5-9.5c.68-.68.68-1.78 0-2.48z' />
        <path d='M8 9h24v20H8V9z' />
      </g>
      <path
        d='M16.736 21.176c1.128 0 2.032.913 2.032 2.049v2.727A2.038 2.038 0 0116.736 28h-2.704C12.912 28 12 27.08 12 25.952v-2.727c0-1.136.912-2.05 2.032-2.05h2.704zm9.232 0c1.12 0 2.032.913 2.032 2.049v2.727A2.043 2.043 0 0125.968 28h-2.704a2.038 2.038 0 01-2.032-2.048v-2.727c0-1.136.904-2.05 2.032-2.05h2.704zM16.736 12c1.128 0 2.032.92 2.032 2.049v2.727a2.033 2.033 0 01-2.032 2.048h-2.704A2.038 2.038 0 0112 16.776V14.05C12 12.92 12.912 12 14.032 12h2.704zm9.232 0c1.12 0 2.032.92 2.032 2.049v2.727a2.038 2.038 0 01-2.032 2.048h-2.704a2.033 2.033 0 01-2.032-2.048V14.05c0-1.129.904-2.049 2.032-2.049h2.704z'
        fill='#19C3FF'
      />
    </svg>
  )
}

export default MenuToggleIcon
