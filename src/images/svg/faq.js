import * as React from 'react'

function FAQIcon(props) {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.416 11.088a3.612 3.612 0 015.168 0l.778.797 1.112-.013a3.613 3.613 0 013.656 3.655l-.013 1.113.795.777a3.613 3.613 0 010 5.168l-.796.778.014 1.113a3.612 3.612 0 01-3.656 3.655l-1.112-.013-.778.795a3.612 3.612 0 01-5.168 0l-.778-.796-1.112.014a3.613 3.613 0 01-3.656-3.655l.013-1.113-.795-.778a3.613 3.613 0 010-5.168l.796-.777-.014-1.113a3.613 3.613 0 013.656-3.655l1.112.012.778-.795v-.001zm1.336 12.664a1.25 1.25 0 112.502 0 1.25 1.25 0 01-2.502 0zm2.003-2.534c-.062.482-.272.784-.692.784-.472 0-.732-.397-.732-.932v-.137c0-.91.384-1.51 1.158-2.052.767-.55 1.027-.953 1.027-1.656 0-.798-.525-1.355-1.287-1.355-.688 0-1.145.403-1.343 1.142-.136.455-.365.638-.705.638-.428.001-.681-.308-.681-.8 0-.313.056-.584.174-.862.383-.997 1.348-1.612 2.623-1.612 1.677 0 2.828 1.127 2.828 2.784 0 1.12-.47 1.889-1.312 2.482-.81.557-1.008.908-1.058 1.576z'
        fill='#19C3FF'
      />
    </svg>
  )
}

export default FAQIcon