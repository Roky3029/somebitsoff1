import { getDriverStandings } from '@/data/getStandings'
import { constructors as constructorList } from '@/data/constructors'
import Link from 'next/link'
import DriverItem from './DriverItem'

interface ConstructorListProps {
	constructorId: string
	name: string
}

const ConstructorList: React.FC<ConstructorListProps> = async ({
	constructorId,
	name
}) => {
	const { standingList } = await getDriverStandings()

	return (
		<div className='bg-blue-200 rounded-lg shadow-lg p-5 flex items-center justify-center flex-col space-y-5'>
			<p className={`text-2xl ${(constructorList as any)[constructorId]}`}>
				{name}
			</p>

			<div
				className={`grid gap-10 ${
					constructorId === 'alphatauri'
						? 'md:grid-cols-2 xl:grid-cols-4'
						: 'grid-cols-1 md:grid-cols-2'
				}`}
			>
				{standingList.map(driver => (
					<DriverItem
						constructorNameDriver={driver.Constructors[0].name}
						constructorName={name}
						driverId={driver.Driver.driverId}
						givenName={driver.Driver.givenName}
						familyName={driver.Driver.familyName}
						driverCode={driver.Driver.code}
						key={driver.Driver.code}
					/>
				))}
			</div>
			<img
				src={`/cars/${constructorId}.png`}
				alt={`Car of ${name}`}
				height={100} // 195px original photo
				width={563} // 658px original photo
			/>
		</div>
	)
}

export default ConstructorList