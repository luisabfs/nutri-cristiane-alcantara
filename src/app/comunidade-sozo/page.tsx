import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';

export default function SozoCommunity() {
	return (
		<div className="flex flex-1 flex-col h-full">
			<Navigation />
			<div className="w-full h-[100vh]">
				<iframe
					src="https://comunidadesozo.notion.site/ebd/23f906322bdc8066b31bf141a6f93c50"
					className="w-full h-full border-0"
					loading="lazy"
					allowFullScreen
					title="Comunidade Sozo"
				></iframe>
			</div>
			{/* <Footer /> */}
		</div>
	);
}
