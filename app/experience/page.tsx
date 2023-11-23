import React from 'react'

export default function ExperiencePage() {
	return (
		<>
			<h1 className="text-[36px] font-bold">Experience</h1>
			<p className="mt-3">Here are some of my experience.</p>
			<div className="flex-col">
				<h3 className="mt-4 text-lg font-semibold text-gray-900">
					Frontend Engineer Streams - <span className="text-md font-normal">Shopee International</span>
				</h3>
				<p className="mb-1 mt-2 text-sm font-normal leading-none  text-gray-400">October 2023 - February 2024</p>
				<p className="mb-4 text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400">
					This is an internship program from Shopee International. The Labs Bootcamp consists of a four-month long
					program covering the software engineering fundamentals, best coding practices on common tech stacks and tools
					used in the enterprise development center, and near-the-job training through simulated projects by the end of
					the program.
					<ul className="mt-4 max-w-md list-inside list-disc space-y-1 text-gray-500">
						{/* <li>Create designs for management website using Figma</li>
            <li>implement design to code using ReactJs with Typescript</li>
            <li>integrate client side to server side via REST API</li>
            <li>integrate client side to hardware side via Firebase RTDB</li>
            <li>implement features for management website (CRUD) </li> */}
					</ul>
				</p>
				<div className="my-4 border" />
				<h3 className="mt-4 text-lg font-semibold text-gray-900">
					Front End Developer - <span className="text-md font-normal">Universitas Diponegoro</span>
				</h3>
				<p className="mb-1 mt-2 text-sm font-normal leading-none  text-gray-400">December 2022 - April 2023</p>
				<p className="mb-4 text-base font-normal leading-relaxed text-gray-500">
					In this project, I work with 1 backend engineer and 1 hardware engineer to create an internal web app for
					Diponegoro University (Computer Engineering Department). The web app function is to manage documents
					accreditations.
					<ul className="mt-4 max-w-md list-inside list-disc space-y-1  text-gray-500">
						<li>Create designs for management website using Figma</li>
						<li>implement design to code using ReactJs with Typescript</li>
						<li>integrate client side to server side via REST API</li>
						<li>integrate client side to hardware side via Firebase RTDB</li>
						<li>implement features for management website (CRUD) </li>
					</ul>
				</p>
				<div className="my-4 border" />

				<h3 className="mt-4 text-lg font-semibold text-gray-900">
					Mobile Developer Intern - <span className="text-md font-normal">PT Errai Pasifik</span>
				</h3>
				<time className="mb-1 mt-2 text-sm font-normal leading-none  text-gray-400">July 2022 - October 2023</time>
				<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					In this project, I work with 1 Backend Engineer, 2 UI/UX Designer, and 1 Project Manager to create an app
					using Flutter. The app function is to find tailor nearby.
					<ul className=" mt-4 list-inside list-disc space-y-1  leading-relaxed text-gray-500">
						<li>Designing UI (mobile app) for some screen and discussed it with Product Manager</li>
						<li>Slicing from design to a reusable</li>
						<li>clean code and build features such as making an appointment</li>
						<li>connect to REST APIs with Provider as State Manager</li>
					</ul>
				</p>
			</div>
		</>
	)
}
