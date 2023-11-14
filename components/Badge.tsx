import React from 'react'

interface BadgeProps {
	techstack?: string | undefined
	logo1?: React.ReactNode
	logo2?: React.ReactNode
}

function Badge({ techstack, logo1, logo2 }: BadgeProps) {
	return (
		<span className='mr-2 inline-flex items-center rounded border border-gray-500 px-2.5 py-1 text-xs font-medium'>
			{logo1}
			{logo2}
			{techstack}
		</span>
	)
}

export default Badge
