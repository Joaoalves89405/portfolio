'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { IconMoon, IconSun } from './icons'

const Items = {
	'/': {
		name: 'home',
		x: 0,
		y: 0,
		w: '64px',
	},
	'/about': {
		name: 'about',
		x: 63,
		y: 35,
		w: '65px',
	},
	'/experience': {
		name: 'experience',
		x: 127,
		y: 69,
		w: '110px',
	},
	'/projects': {
		name: 'projects',
		x: 127 + 107,
		y: 69 + 34,
		w: '90px',
	},
}

export default function Sidebar() {
	let pathname = usePathname() || '/'
	if (pathname.includes('/blog/')) {
		pathname = '/blog'
	}
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<aside className="z-50 -mx-4 md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0">
			<div className="lg:sticky lg:top-20">
				<div className="mb-2 ml-2 flex flex-row items-start space-y-10 px-4 md:mb-4 md:ml-[12px] md:flex-row md:px-0 ">
					<Image alt="Logo" width={54} height={54} className="rounded-full" src="/img/profilePhoto.jpeg" />
					<button
						className="border-thin dark:hover:border-accent-200 dark:hover:text-accent-200 hover:border-accent-200 hover:text-accent-200 rounded-md p-2.5 focus:outline-none"
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
						{theme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
					</button>
				</div>
				<nav
					className="fade relative flex scroll-pr-6 flex-row items-start overflow-hidden px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0 "
					id="nav">
					<div className="mb-2 mt-2 flex flex-row space-x-0 pr-10 md:mt-0 md:flex-col">
						{Items[pathname] && (
							<>
								<div className="hidden md:block">
									<motion.div
										className="absolute z-[-1]  h-[34px] rounded-md bg-neutral-800"
										layoutId="test2"
										initial={{ opacity: 0, y: Items[pathname].y }}
										animate={{
											opacity: 1,
											y: Items[pathname].y,
											width: Items[pathname].w,
										}}
										transition={{
											type: 'spring',
											stiffness: 350,
											damping: 30,
										}}
									/>
								</div>
								<div className="block md:hidden">
									<motion.div
										className="absolute z-[-1]  h-[34px] rounded-md bg-neutral-800"
										layoutId="test"
										initial={{ opacity: 0, x: Items[pathname].x }}
										animate={{
											opacity: 1,
											x: Items[pathname].x,
											width: Items[pathname].w,
										}}
										transition={{
											type: 'spring',
											stiffness: 350,
											damping: 30,
										}}
									/>
								</div>
							</>
						)}
						{Object.entries(Items).map(([path, { name }]) => {
							const isActive = path === pathname
							return (
								<Link
									key={path}
									href={path}
									className={clsx('px-[10px]  py-[5px]  text-black transition-all', {
										'text-neutral-500': !isActive,
										'font-bold text-white': isActive,
									})}>
									{name}
								</Link>
							)
						})}
					</div>
				</nav>
			</div>
		</aside>
	)
}
