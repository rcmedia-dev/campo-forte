import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Logo() {
  return (
    <Link href="/">
        <Image src="/logo.png" width={100} height={100} alt='logo' className='object-cover h-12 w-fit'/>
    </Link>
  )
}
