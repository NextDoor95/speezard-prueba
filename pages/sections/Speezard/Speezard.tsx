import React from 'react'
import Image from 'next/image'

import wordings from '../../../utils/wordings'
const {
	speezard: { heading2,heading3, span, span2, alt, items, subtitle, why },
} = wordings


const Speezard = () => {
	return (
		<section className="speezard" id="speezard">
			<div className="speezard__top">
				<div className="speezard__top-left">
					<h2 className="speezard__top-left-title">
						{heading2} <span>{span}</span>?
					</h2>
					<h5 className="speezard__top-left-subtitle">
						{subtitle}
					</h5>
					{why.map(item => (
						<div key={item.id}>
							<h2 className="speezard__top-left-subtext">
								<div className="triangle" />
								{item.heading5}
							</h2>
							<p className="speezard__top-left-text">
								{item.text}
							</p>
						</div>
					))}
				</div>
				<div className="speezard__top-right">
					<div className='first'>
						<Image
						src="/vectorsV1.5/group-98.svg"
						width={600}
						height={400}
						alt='background'
					/>
					</div>
					<div className="second">
						<Image
							src="/vectorsV1.5/Man_1_.svg"
							width={300}
							height={200}
							alt='Man'
						/>
					</div>
				</div>
			</div>
			<div>
				<h2 className="speezard__top-left-title">
					{heading3} <span>{span2}</span>
				</h2>
			</div>
			<div className="speezard__bottom">
				{items.map(item => (
					<div className="speezard__bottom-item" key={item.id}>
						<h5 className="speezard__bottom-item-title">
							{item.heading5}
						</h5>
						<div>
							<Image 
								src={item.image}
								width={398}
								height={264} 
								alt={item.alt}
								className="speezard__bottom-item-image"
							/>
						</div>
						<p className="speezard__bottom-item-text">
							{item.text}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Speezard
