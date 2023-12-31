import { getConstructorStandings } from '@/data/getStandings'
import { type ConstructorStanding } from '@/types/constructorTypes'
import { useEffect, useState } from 'react'
import LoadingModal from '@/components/Loading'
import SingleTab from './SingleTab'

const constructors = {
	williams: 'text-williams',
	alfa: 'text-alfa',
	mercedes: 'text-mercedes',
	haas: 'text-haas',
	mclaren: 'text-mclaren',
	aston_martin: 'text-aston_martin',
	red_bull: 'text-red_bull',
	alphatauri: 'text-alphatauri',
	ferrari: 'text-ferrari',
	alpine: 'text-alpine'
}

const Drivers = () => {
	const [currentSeason, setCurrentSeason] = useState('')
	const [standingList, setCurrentStandingList] = useState<any[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const dataFetched = await getConstructorStandings()
			setCurrentSeason(dataFetched.currentSeason)
			setCurrentStandingList(dataFetched.standingList)
			setLoading(false)
		}
		fetchData()
	}, [])

	return (
		<>
			{!loading ? (
				<div className='flex flex-col items-center justify-center'>
					<div className='grid grid-cols-1 place-content-center text-center gap-5 text-2xl font-bold'>
						<span>Constructors' championship</span>{' '}
						<span>Season {currentSeason}</span>
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-2 w-[90%] place-content-center gap-3 pt-10'>
						{standingList.map((constructor: ConstructorStanding, i) => (
							<SingleTab
								constructorId={constructor.Constructor.constructorId}
								constructorName={constructor.Constructor.name}
								key={i}
								points={constructor.points}
								position={constructor.position}
							/>
						))}
					</div>
				</div>
			) : (
				<LoadingModal />
			)}
		</>
	)
}

export default Drivers
