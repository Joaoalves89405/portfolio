import Image from 'next/image'
import React from 'react'
import { getLeetcode } from '@/lib/metrics'
import { IconLeetcode } from './icons'

interface ItemProps {
	icon?: any
	value?: string
	label?: string
}
const Item = ({ icon, value = 'value', label = 'label' }: ItemProps) => (
	<div className='inline-flex gap-[8px] text-sm'>
		{icon} <span className='font-bold'>{value}</span>
		<span>{label}</span>
	</div>
)

export default async function BioLeet() {
	const leetData = await getLeetcode()

	return (
		<a rel='noopener noreferrer' target='_blank' href='https://leetcode.com/yaffalhakim1/'>
			<div className='inline-flex h-[134px] w-[312px] items-center justify-center gap-[27px] rounded-lg border border-zinc-500'>
				<IconLeetcode width='60px' height='60px' className='ml-0' />
				<div className='flex flex-col gap-2'>
					<Item
						icon={
							<>
								<span className='inline-flex items-center rounded-full bg-blue-100 p-1.5 text-sm font-semibold text-green-500 dark:bg-gray-700 dark:text-green-400'>
									<svg
										aria-hidden='true'
										className='h-3.5 w-3.5'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='sr-only'>Icon description</span>
								</span>
							</>
						}
						value={leetData.easySolved}
						label='Easy solved'
					/>
					<Item
						icon={
							<>
								<span className='inline-flex items-center rounded-full bg-blue-100 p-1.5 text-sm font-semibold text-yellow-500 dark:bg-gray-700 dark:text-yellow-400'>
									<svg
										aria-hidden='true'
										className='h-3.5 w-3.5'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='sr-only'>Icon description</span>
								</span>
							</>
						}
						value={leetData?.mediumSolved}
						label='Medium solved'
					/>
					<Item
						icon={
							<>
								<span className='inline-flex items-center rounded-full bg-blue-100 p-1.5 text-sm font-semibold text-red-500 dark:bg-gray-700 dark:text-red-400'>
									<svg
										aria-hidden='true'
										className='h-3.5 w-3.5'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='sr-only'>Icon description</span>
								</span>
							</>
						}
						value={leetData?.hardSolved}
						label='Hard solved'
					/>
				</div>
			</div>
		</a>
	)
}
