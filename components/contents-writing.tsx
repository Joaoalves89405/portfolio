import React from 'react'
import { ArrowIcon } from './icons'

interface ItemProps {
	href?: string
	title?: string
	desc?: string
}

export default function Writing(props: ItemProps) {
	return (
		<div className='flex flex-col gap-2 md:flex-row md:gap-2'>
			<a
				rel='noopener noreferrer'
				target='_blank'
				href={props.href}
				className='flex w-full items-center justify-between rounded-lg border border-neutral-800 p-4  no-underline transition-all hover:bg-neutral-900  hover:text-white  hover:dark:bg-neutral-900 hover:dark:text-white'
			>
				<div className=' items-center'>
					<div className='ml-3 text-lg font-bold'>{props.title}</div>
					<div className='ml-3 mt-2 text-sm font-extralight'>{props.desc}</div>
				</div>
			</a>
		</div>
	)
}
