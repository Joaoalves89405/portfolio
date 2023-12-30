import Badge from '@/components/Badge'
import { IconNextjs, IconSupabase } from '@/components/icons'
import Projects from '@/components/projects-card'
import BlogContent from '@/components/projects-card'
import React from 'react'

const page = () => {
	return (
		<div>
			<h1 className="text-[36px] font-bold">Projects</h1>
			<p className="mt-3">
				Here are some of my projects. I&apos;m currently working on a few projects that I can&apos;t wait to share with
				you.
			</p>
			<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Projects
					title={'TurGranada'}
					desc={'Turism portal for the city of Granada.'}
					image={'/img/turgranada.jpg'}
					href="https://qa-turgranada.vercel.app/es"
				/>
				<Projects
					title={'Granada Interactive Map'}
					desc={'Interactive map for the city of Granada.'}
					image={'/img/granadaMap.jpg'}
					href="https://qa-mapa-granada.netlify.app/"
				/>
				<Projects
					title={'Urban Platform'}
					desc={'Platform to manage city events.'}
					image={'/img/urbanPlatform.png'}
					href="https://urbanplatform.city/"
				/>
				<BlogContent
					title={'WOSUP'}
					desc={'Application to remove garbage from the ocean.'}
					image={'/img/wosup.jpg'}
					href="https://wosup.eu/"
				/>
				{/* 				<BlogContent
					title={'Pokeredux'}
					desc={'Data fetching with redux toolkit.'}
					image={'/img/pokredux.png'}
					href="https://5gaas.eu/"
				/> */}
			</div>
		</div>
	)
}

export default page
