import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Logo() {
  return (
    <Link href="/">
        <Image src="/logo.png" width={200} height={200} alt='logo' className='object-contain h-30 w-fit'/>
    </Link>
  )
}
