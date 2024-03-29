import { constructors } from '@/data/constructors'

interface SingleTabProps {
	position: string
	givenName?: string
	constructorId: string
	familyName?: string
	points: string
	constructorName?: string
}

const SingleTab: React.FC<SingleTabProps> = ({
	constructorId,
	familyName,
	givenName,
	points,
	position,
	constructorName
}) => {
	return (
		<div className='text-xl bg-blue-200 py-6 flex items-center rounded-xl space-x-10'>
			<span
				className={`${position === '1' ? 'text-gold' : ''} ${
					position === '2' ? 'text-silver' : ''
				} ${
					position === '3' ? 'text-bronze' : ''
				}  border-r-1 pl-8 pr-10 py-4 w-[10%] text-center border-black text-2xl`}
			>
				{position}
			</span>
			<div className='flex items-center justify-between w-full pr-10'>
				<div className='flex flex-col'>
					{givenName && familyName && (
						<>
							<span>{givenName}</span>
							<span
								className={`text-2xl md:text-3xl  ${
									constructors[constructorId as keyof typeof constructors]
								}`}
							>
								{familyName}
							</span>
						</>
					)}

					{constructorName && (
						<span
							className={`text-2xl md:text-3xl ${
								(constructors as any)[constructorId]
							}`}
						>
							{constructorName}
						</span>
					)}
				</div>

				<div>
					<span className='text-3xl'>{points}</span>
				</div>
			</div>
		</div>
	)
}

export default SingleTab
