import React from 'react';

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
		</main>
	);
};
