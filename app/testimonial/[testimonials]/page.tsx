import NotFound from '@/app/not-found'
import React from 'react'


export default async function page({params,}: {params: Promise<{testimonials:string}>}) {
    const {testimonials} = await params
    if (parseInt(testimonials) > 50){
        NotFound()
    }
  return (
    <div>
      this is the testimonial content {testimonials}
    </div>
  )
}
