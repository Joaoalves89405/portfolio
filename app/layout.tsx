import Sidebar from '@/components/sidebar'
import './globals.css'
import clsx from 'clsx'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Metadata } from 'next'

const jakarta = Plus_Jakarta_Sans({
	weight: ['400', '700'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Joao Miguel Cerca Alves',
	description: "Joao Alves's personal website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div
					className={clsx(
						'mx-4 mb-40 mt-8 flex max-w-4xl flex-col antialiased md:flex-row lg:mx-auto lg:mt-[100px] lg:w-[1000px]',
						jakarta.className
					)}>
					<Providers>
						<main className="flex w-full">
							<Sidebar />
							{children}
							<Analytics />
						</main>
					</Providers>
				</div>
			</body>
		</html>
	)
}
