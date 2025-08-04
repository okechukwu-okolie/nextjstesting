'use client'

import React from 'react'

export default function ClickMe() {
  return (
    <div>
      <button onClick={()=>alert('this button has been clicked')}></button>
    </div>
  )
}
