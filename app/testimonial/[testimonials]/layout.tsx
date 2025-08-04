import React from 'react'

export default function TestLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
      {children}
      <h2>Featured Products</h2>
    </div>
  )
}
