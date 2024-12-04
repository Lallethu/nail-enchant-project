import React from 'react';
import instagram from '../Assets/svgs/instagram.svg';
import tiktok from '../Assets/svgs/tiktok.svg';

export const LandingPage = () => {
	return (
		<main className="container landing-page">
			<div className="hero-wrapper">
				<div className="block-1">
					<h1 className="hero-title">
						Sublimez vos ongles,
						<br />
						Révélez votre élégance
					</h1>
					<p className="hero-text">
						Que ce soit pour un événement spécial ou pour illuminer
						votre quotidien, Anaïs met son expertise et sa passion
						au service de vos mains.
					</p>
					<a
						className="btn-cta"
						href="/services"
						title="Voir les prestations"
						aria-label="Voir les prestations"
					>
						Voir les prestations
					</a>
				</div>
				<div className="block-2">
					<img
						src="/images/hero-image.jpg"
						alt="Pose d'ongles press-on"
					/>
				</div>
			</div>

			<div className="social-networks">
				<h2 className="social-networks-title">
					Retrouvez les dernières créations sur les réseaux sociaux
				</h2>

				<div className="wrapper-icon">
					<a
						href="https://instagram.com/_nail_enchantment_"
						target="_blank"
						rel="noreferrer"
						title="Direction mon compte Instagram"
					>
						<img
							src={instagram}
							alt="Direction mon compte Instagram"
						/>
					</a>
					<a
						href="https://www.tiktok.com/@nail.enchantment6"
						target="_blank"
						rel="noreferrer"
						title="Direction mon compte TikTok"
					>
						<img src={tiktok} alt="Direction mon compte TikTok" />
					</a>
				</div>
				<p className="social-networks-text">
					Un like, un abonnement, un partage, ça fait toujours plaisir
					et ça permet de soutenir mon travail.
					<br />
					Merci à vous !
				</p>
			</div>
		</main>
	);
};
