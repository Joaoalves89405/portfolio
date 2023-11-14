import Projects from '@/components/projects-card'
import { ArrowIcon, EmailIcon, IconDocuments, IconNextjs, IconSupabase, IconTailwind } from '@/components/icons'
import Writing from '@/components/contents-writing'
import Badge from '@/components/Badge'
import Bio from '@/components/bio'
import BioLeet from '@/components/leet'

export default function Home() {
	return (
		<div className='flex flex-col '>
			<div className='flex grow flex-col gap-[20px] '>
				<h1 className='mt-3 text-center text-5xl font-bold md:mt-0'>João Alves</h1>
				<h3 className='text-center text-3xl font-bold'>A Frontend Engineer</h3>

				<p className='text-center leading-relaxed'>
					In my spare time, I train using LeetCode exercises and sharpening my Git skills by contributing to open-source
					projects. I also love to learn new things and try to implement them in my projects.
				</p>

				<div className='mt-5 flex flex-col items-center justify-center md:flex-row  md:space-x-2'>
					{/* @ts-expect-error Server Component */}
					<Bio />
					<div className='mt-3'></div>
				</div>

				<div className='mt-5 flex items-center justify-center space-x-2'>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='https://drive.google.com/file/d/1YdpDkMcEkoUlz9Crf4oz7QMLm6wnlbEU/view?usp=drive_link'
						className='flex w-full items-center justify-between rounded-lg border border-neutral-800 p-4 no-underline transition-all hover:bg-neutral-900   hover:text-white md:w-3/12'>
						<div className='flex items-center'>
							<IconDocuments />
							<div className='ml-3'>CV</div>
						</div>
						<ArrowIcon />
					</a>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='mailto:jmca-2000@hotmail.com'
						className='flex w-full items-center justify-between rounded-lg border border-neutral-800 p-4 no-underline transition-all hover:bg-neutral-900   hover:text-white md:w-3/12'>
						<div className='flex items-center'>
							<EmailIcon />
							<div className='ml-3'>Email</div>
						</div>
						<ArrowIcon />
					</a>
				</div>
			</div>
			<footer className='inset-x-0 bottom-0 z-50 mt-10'>
				<p className='flex items-center justify-center'>created with nextjs reactjs app dir</p>
			</footer>
		</div>
	)
}
