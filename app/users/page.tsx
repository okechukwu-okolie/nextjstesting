// 'use client'
import {Button} from '@/app/users/button'

import React from 'react'

export default async function Users() {

    const api = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await api.json()
    console.log(posts)
    return (
        <div>
            <Button/>
        {posts.map((post: {id:number, name: string})=>{
                <div>
                    <p>{post.name}</p>

                </div>
        })}
      
    </div>
  )
}
