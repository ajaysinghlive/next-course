import React from 'react'

interface Props{
    params:{id: number; photoId: number;}
}

export default function PhotoPage({params:{id, photoId}}: Props) {
  return (
    <div>
      Photo Page {id} & {photoId}
    </div>
  )
}
