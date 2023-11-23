import { ArrowIcon, EmailIcon, IconDocuments } from '@/components/icons'
import Bio from '@/components/bio'

export default function Home() {
	return (
		<div className="flex grow flex-col gap-12">
			<h1 className="mt-3 text-center text-5xl font-bold md:mt-0">João Alves</h1>
			<h3 className="text-center text-3xl font-bold">A Software Engineer</h3>
			<div className="mt-5 flex flex-col items-center justify-center md:flex-row  md:space-x-2">
				{/* @ts-expect-error Server Component */}
				<Bio />
				<div className="mt-3"></div>
			</div>
			<div className="mt-5 flex items-center justify-center space-x-2">
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://drive.google.com/file/d/1YdpDkMcEkoUlz9Crf4oz7QMLm6wnlbEU/view?usp=drive_link"
					className="flex w-full items-center justify-between rounded-lg border border-neutral-800 p-4 no-underline transition-all hover:bg-neutral-900   hover:text-white md:w-3/12">
					<div className="flex items-center">
						<IconDocuments />
						<div className="ml-3">CV</div>
					</div>
					<ArrowIcon />
				</a>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="mailto:jmca-2000@hotmail.com"
					className="flex w-full items-center justify-between rounded-lg border border-neutral-800 p-4 no-underline transition-all hover:bg-neutral-900   hover:text-white md:w-3/12">
					<div className="flex items-center">
						<EmailIcon />
						<div className="ml-3">Email</div>
					</div>
					<ArrowIcon />
				</a>
			</div>
		</div>
	)
}
