import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>Acerca De Mí</SectionTitle>
				<p className="text-sm md:text-md text-gray-600 dark:text-gray-300">
					Estudiante de 19 años, actualmente estudiando una carrera de
					Ingeniería en Desarrollo de Software con enfoque especializado en el
					desarrollo web. Poseo conocimientos en tecnologías acerca de
					programación web y también conocimiento en herramientas no code. Busco
					oportunidades que me permitan aplicar mi conocimiento técnico,
					aprovechar mi destreza en la resolución de problemas y seguir
					aprendiendo mientras contribuyó al éxito de proyectos innovadores en
					el desarrollo web.
				</p>
				<a
					href="mailto:larioacostaa@gmail.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					lariosacostaa@gmail.com
				</a>
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
