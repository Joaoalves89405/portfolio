import Image from 'next/image'
import React from 'react'

interface Props {
	name?: string
	message?: string
	image?: string
}

export const GuestMessage = ({ name = 'Name', image = '/img/default.png', message = 'message' }: Props) => {
	return (
		<div className='inline-flex items-center gap-[10px]'>
			<Image alt='Guest Image' src={image || ''} width={100} height={100} className='h-[40px] w-[40px] rounded-full' />
			<span className='font-bold'>{name} : </span>
			<span>{message}</span>
		</div>
	)
}
