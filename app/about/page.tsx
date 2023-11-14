import {
	ArrowIcon,
	GitHubIcon,
	LinkedinIcon,
	EmailIcon,
	IconNextjs,
	IconTailwind,
	IconSupabase,
	IconReactjs,
	IconFlutter,
	IconTypescript,
	IconDart,
} from '@/components/icons'
import React from 'react'

const page = () => {
	return (
		<div className='flex flex-col gap-[20px]'>
			<h1 className='text-[36px] font-bold'>About Me</h1>
			<p>
				I&apos;m Yafi, a <span className='font-bold'>Computer Engineering Student at Diponegoro University</span>
			</p>
			<p className='text-justify md:w-9/12'>
				I already have experience building web app and now currently i focused on pursuit my career as a Frontend
				Engineer.
			</p>
			<div className='my-4 border md:w-9/12' />
			<p className='text-justify md:w-9/12'>
				Hello and welcome to my website! My name is Muhammad Yafi Alhakim, and I&apos;m a Frontend Engineer based in
				Jakarta, Indonesia. I&apos;m passionate about good design and build things, and I love building for the web.
			</p>

			<p className='text-justify md:w-9/12'>
				On this website, you&apos;ll find some writings and things i have been build. I&apos;m excited to share
				Next/ReactJS knowledge with you.
			</p>

			<p className='text-justify md:w-9/12'>
				I&apos;m always learning and growing, and I&apos;m excited to see what the future holds. Thank you for visiting
				my website. If you have any questions or comments, please don&apos;t hesitate to contact me.
			</p>

			<h1 className='text-lg font-bold'>Current Tech Stack</h1>
			<div className='flex space-x-2'>
				<IconNextjs width='24px' height='24px' />
				<IconReactjs width='24px' height='24px' />
				<IconFlutter width='24px' height='24px' />
				<IconSupabase width='24px' height='24px' />

				<IconTailwind width='24px' height='24px' />
				<IconTypescript width='24px' height='24px' />
				<IconDart width='24px' height='24px' />
			</div>

			<div className='flex flex-col gap-2 md:flex-row md:gap-2'>
				<a
					rel='noopener noreferrer'
					target='_blank'
					href='https://www.linkedin.com/in/yafialhakim/'
					className='flex w-full items-center justify-between rounded-lg border border-neutral-800 p-4 no-underline transition-all hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900 hover:dark:text-white md:w-3/12'
				>
					<div className='flex items-center'>
						<LinkedinIcon />
						<div className='ml-3'>Linkedin</div>
					</div>
					<ArrowIcon />
				</a>
				<a
					rel='noopener noreferrer'
					target='_blank'
					href='https://github.com/yaffalhakim1'
					className='flex w-full items-center justify-between rounded-lg border border-neutral-800 p-4 no-underline  transition-all hover:bg-neutral-900  hover:text-white  hover:dark:bg-neutral-900  hover:dark:text-white md:w-3/12'
				>
					<div className='flex items-center'>
						<GitHubIcon />
						<div className='ml-3'>GitHub</div>
					</div>
					<ArrowIcon />
				</a>
				<a
					rel='noopener noreferrer'
					target='_blank'
					href='mailto:yafialhakim64@email.com'
					className='flex w-full items-center justify-between rounded-lg border border-neutral-800 p-4 no-underline  transition-all hover:bg-neutral-900 hover:text-white  hover:dark:bg-neutral-900  hover:dark:text-white md:w-3/12'
				>
					<div className='flex items-center'>
						<EmailIcon />
						<div className='ml-3'>Email</div>
					</div>
					<ArrowIcon />
				</a>
			</div>
		</div>
	)
}

export default page
