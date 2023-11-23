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
		<div className="flex flex-col gap-[20px]">
			<h1 className="text-[36px] font-bold">About Me</h1>
			<p>
				I'm Joao, a <span className="font-bold">MSc Software Engineering</span>
			</p>
			<p className="text-justify md:w-9/12">
				I have two years of front-end development experience, specialising in React and related libraries. I have a
				track record of creating user friendly, high performance interfaces and keeping up with industry trends.
				industry trends.
			</p>
			<div className="my-4 border md:w-9/12" />
			<p className="text-justify md:w-9/12">
				Welcome to my website! I am João Alves, a software engineer based in Portugal. My expertise lies in Frontend
				development, where I'm constantly keeping abreast of emerging frameworks and libraries. My passion drives my
				work in this field, fueling my commitment to stay current and create innovative solutions.
			</p>

			<p className="text-justify md:w-9/12">
				On this website you'll discover some of my written work and projects I've created. I'm excited to share insights
				and creations focused on Next.js and ReactJS, exploring their depth of knowledge and applications. and
				application with you. I thrive on continuous learning and growth, and am excited to see what the future holds.
				Your visit to my website means a lot to me. If you have any questions or thoughts, please do not hesitate to
				contact me - I would to connect and engage with you.
			</p>

			<h1 className="text-lg font-bold">Current Tech Stack</h1>
			<div className="flex space-x-2">
				<IconNextjs width="24px" height="24px" />
				<IconReactjs width="24px" height="24px" />
				<IconFlutter width="24px" height="24px" />
				<IconSupabase width="24px" height="24px" />
				<IconTailwind width="24px" height="24px" />
				<IconTypescript width="24px" height="24px" />
				<IconDart width="24px" height="24px" />
			</div>

			<div className="flex flex-col gap-2 md:flex-row md:gap-2">
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://www.linkedin.com/in/yafialhakim/"
					className="flex w-full items-center justify-between rounded-lg border border-neutral-800 p-4 no-underline transition-all hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900 hover:dark:text-white md:w-3/12">
					<div className="flex items-center">
						<LinkedinIcon />
						<div className="ml-3">Linkedin</div>
					</div>
					<ArrowIcon />
				</a>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://github.com/yaffalhakim1"
					className="flex w-full items-center justify-between rounded-lg border border-neutral-800 p-4 no-underline  transition-all hover:bg-neutral-900  hover:text-white  hover:dark:bg-neutral-900  hover:dark:text-white md:w-3/12">
					<div className="flex items-center">
						<GitHubIcon />
						<div className="ml-3">GitHub</div>
					</div>
					<ArrowIcon />
				</a>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="mailto:yafialhakim64@email.com"
					className="flex w-full items-center justify-between rounded-lg border border-neutral-800 p-4 no-underline  transition-all hover:bg-neutral-900 hover:text-white  hover:dark:bg-neutral-900  hover:dark:text-white md:w-3/12">
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

export default page
