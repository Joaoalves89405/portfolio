import React from 'react'

export default function ExperiencePage() {
	return (
		<div className="flex flex-col">
			<h1 className="text-[36px] font-bold">Experience</h1>
			<div className="flex-col">
				<div className="my-4 border" />
				<h3 className="mt-4 text-lg font-semibold text-gray-900">
					Front End Developer - <span className="text-md font-normal">EATON</span>
				</h3>
				<p className="mb-1 mt-2 text-sm font-normal leading-none  text-gray-400">May 2023 - Present</p>
				<p className="mb-4 text-base font-normal leading-relaxed text-gray-500">
					Worked on a project using React and other libraries within the React ecosystem, including Redux and ReduxSaga.
					Wrote tests for the various React components using the React Testing Library with Jest.
					<ul className="mt-4 list-inside list-disc space-y-1  leading-relaxed text-gray-500">
						<li>implemented components using ReactJs with Typescript</li>
						<li>integrated client side to server side via REST API using reduxSagas</li>
						<li>wrote unit tests using react testing library with jest</li>
						<li>wrote documentation and review of pull requests</li>
					</ul>
				</p>
				<div className="my-4 border" />
				<h3 className="mt-4 text-lg font-semibold text-gray-900">
					Front End Developer - <span className="text-md font-normal">Ubiwhere</span>
				</h3>
				<time className="mb-1 mt-2 text-sm font-normal leading-none  text-gray-400">April 2022 - Present</time>
				<p className="mb-4 text-base font-normal leading-relaxed text-gray-500">
					Worked on four different projects using React and other libraries within the React ecosystem. Wrote
					documentation for code I developed, as well as documenting project structures and explaining how to use
					certain libraries.
					<ul className="mt-4 list-inside list-disc space-y-1  leading-relaxed text-gray-500">
						<li>implemented components using ReactJs with Typescript</li>
						<li>integrated client side to server side via REST API using GraphQL</li>
						<li>wrote documentation and review of pull requests</li>
					</ul>
				</p>
				<div className="my-4 border" />
				<h3 className="mt-4 text-lg font-semibold text-gray-900">
					Front End Developer - <span className="text-md font-normal">Who-Knows</span>
				</h3>
				<time className="mb-1 mt-2 text-sm font-normal leading-none  text-gray-400">April 2022 - Present</time>
				<p className="mb-4 text-base font-normal leading-relaxed text-gray-500">
					Gained hands-on experience with React by freelancing and outsourcing projects for other companies.
				</p>
				<div className="my-4 border" />
				<h3 className="mt-4 text-lg font-semibold text-gray-900">
					Front End Developer - <span className="text-md font-normal">Digital Sign</span>
				</h3>
				<time className="mb-1 mt-2 text-sm font-normal leading-none  text-gray-400">June 2021 - October 2021</time>
				<p className="mb-4 text-base font-normal leading-relaxed text-gray-500">
					Gained hands-on experience with HTML, CSS, and JavaScript during this internship. Collaborated on front-end
					development tasks using Jira, helping to create and enhance user interfaces, and acquiring valuable skills in
					web technologies.
				</p>
			</div>
		</div>
	)
}
