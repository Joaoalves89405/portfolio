/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Badge from './Badge'

interface ProjectProps {
	title: string
	desc: string
	image: string
	href: string
	stack?: React.ReactNode
}

const Projects = (props: ProjectProps) => {
	return (
		<>
			<a href={props.href}>
				<div className='flex w-full rounded-lg no-underline  transition-all'>
					<div className=''>
						<img src={props.image} width={170} height={170} className='w-full rounded-lg' alt='Project Image' />
						<div className='mb-1 ml-[10px] mt-3 flex flex-col gap-2'>
							<div className='text-lg font-bold hover:text-zinc-600'>{props.title}</div>

							<p className='flex-grow text-sm text-neutral-500'>{props.desc}</p>

							{props.stack && <div>{props.stack}</div>}
						</div>
					</div>{' '}
				</div>
			</a>
		</>
	)
}

export default Projects
