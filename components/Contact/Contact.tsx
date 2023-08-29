'use client'
import React from 'react';
import { useState } from 'react'
import Modal from 'react-modal'

import Image from 'next/image'

interface ContactProps {
	ctaText: string;
	buttonColor: string;
}

const Contact: React.FC<ContactProps> = ({ ctaText, buttonColor }) => {

	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const customStyles = {
		overlay: {
			backgroundColor: 'rgba(32, 32, 32, 0.4)',
		},
		content: {
			top: '50%',
			left: '50%',
			border: '1px solid #ccc',
			padding: '20px',
		},
	};

	return (
		<>
			<button
				onClick={openModal}
				className={`cta ${buttonColor === "white" ? "cta--white" : ""}`}
				style={{ backgroundColor: buttonColor }}
			>
				{ctaText}
			</button>
			<Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
				style={customStyles}
                className="modal"
                contentLabel="Burger Modal"
            >
				<div className="contact-container" id="contact">
					<button
						className="close-modal"
						onClick={closeModal}
					>
						<Image
							src='/icons/close-x.svg'
							alt="X-twitter"
							width={40}
							height={40}
						/>
					</button>
					<iframe
						frame-title="formulario de contacto"
						width="100%"
						height="100%"
						src="https://www.surveymonkey.com/r/FYKP5GX?embedded=1"
					></iframe>
				</div>
			</Modal>
		</>
	)
}

export default Contact
