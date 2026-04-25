import cucii from "../assets/img/cucii.png";
import labstudiomedia from "../assets/img/labstudiomedia.png";
import cocinasmodulares from "../assets/img/cocinasmodulares.png";
import cybercafe10m from "../assets/img/cybercafe10m.png";
import cuciiOnline from "../assets/img/cucii-online.png";
import type {Project} from "../types/Project";

export const allProjects: Project[] = [
	{
		title: "labstudiomedia.com",
		longDescription:
			"Sitio web corporativo para agencia de marketing digital Labstudiomedia. Implementé arquitectura moderna con Astro y TypeScript para máximo rendimiento, configuré infraestructura completa en Cloudflare (dominio + CDN + Pages) y optimicé SEO con Google Analytics. Colaboré con equipo de diseño para crear portafolio visual atractivo que genera leads cualificados.",
		shortDescription:
			"Agencia de marketing digital desarrollada con Astro + TypeScript, desplegada en Cloudflare Pages con CDN global y optimización SEO.",
		image: labstudiomedia,
		liveLink: "https://labstudiomedia.com/",
		technologies: [
			"Astro",
			"TypeScript",
			"Bootstrap",
			"CSS",
			"Google Analytics",
			"AOS",
			"Cloudflare Pages",
		],
		keywords: [
			"Astro",
			"TypeScript",
			"Bootstrap",
			"CSS",
			"Google Analytics",
			"AOS",
			"Cloudflare",
			"CDN",
			"Performance",
			"Domain Management",
			"SEO",
			"Marketing Digital",
			"Agencia",
			"Diseño Web",
			"Full-stack",
		],
		repoLink: "https://github.com/ssant0/labstudio-landing",
	},
	{
		title: "cocinasmodulares.com.mx",
		longDescription:
			"Proyecto completo para empresa familiar de cocinas modulares en Los Mochis. Desarrollé sitio con HTML/CSS/JavaScript vanilla, gestioné configuración completa (dominio + hosting + email empresarial) y optimicé imágenes profesionales colaborando con equipo de fotografía. Implementé diseño responsive enfocado en elegancia y conversión de clientes.",
		shortDescription:
			"Sitio corporativo para empresa de cocinas modulares con desarrollo vanilla, configuración completa de hosting y optimización de imágenes.",
		image: cocinasmodulares,
		liveLink: "https://cocinasmodulares.mx/",
		technologies: ["HTML", "CSS", "JavaScript"],
		keywords: [
			"HTML",
			"CSS",
			"JavaScript",
			"Responsive Design",
			"SEO",
			"Image Optimization",
			"Domain Management",
			"Hosting",
			"Email Configuration",
			"Cocinas Modulares",
			"E-commerce",
			"Full-stack",
		],
	},
	{
		title: "cybercafe10m.com",
		longDescription:
			"Proyecto de modernización completa para cybercafe10m. Migré de vanilla JavaScript a Astro para mejorar rendimiento y mantenibilidad, implementé diseño responsive con Bootstrap 5, integré API de Google Maps personalizada y configuré hosting en Cloudflare Pages. Colaboré con equipo de diseño gráfico para crear interfaz moderna que facilita servicios de documentación y trámites.",
		shortDescription:
			"Modernización de cybercafe con migración vanilla → Astro, integración Google Maps API y hosting Cloudflare Pages.",
		image: cybercafe10m,
		liveLink: "https://cybercafe10m.com/",
		technologies: ["Astro", "Bootstrap 5", "CSS", "Google Maps API", "Cloudflare Pages"],
		keywords: [
			"Astro",
			"Bootstrap 5",
			"CSS",
			"Google Maps API",
			"Cloudflare Pages",
			"Modernization",
			"Migration",
			"Performance",
			"Cybercafe",
			"Sinaloa",
			"Full-stack",
		],
	},
	{
		title: "cucii.mx",
		longDescription:
			"Desarrollo front-end completo para universidad privada CUCII. Migré de vanilla JavaScript a arquitectura Astro + Bootstrap 5 para mejor mantenibilidad, adapté plantilla existente según requerimientos del cliente e implementé cambios iterativos basados en feedback. Optimicé rendimiento y accesibilidad para estudiantes y personal académico.",
		shortDescription:
			"Sitio universitario desarrollado con Astro + Bootstrap 5, adaptación de plantilla existente y optimización para experiencia de usuario.",
		image: cucii,
		liveLink: "https://cucii.mx/",
		technologies: ["Astro", "Bootstrap 5", "CSS", "Google Fonts"],
		keywords: [
			"Astro",
			"Bootstrap 5",
			"CSS",
			"Google Fonts",
			"Template Adaptation",
			"Client Communication",
			"Iterative Development",
			"Education",
			"University",
			"Responsive Design",
			"SEO",
		],
	},
	{
		title: "cucii.online",
		longDescription:
			"Despliegue completo de plataforma educativa LMS Moodle para CUCII. Configuré servidor VPS Ubuntu con Apache, implementé seguridad SSL con Let's Encrypt y scripts de auto-renovación, y administro mantenimiento continuo vía SSH. Solución integral que sirve a miles de estudiantes con alta disponibilidad y seguridad.",
		shortDescription:
			"Plataforma LMS Moodle con administración VPS, configuración SSL auto-renovable y mantenimiento vía SSH.",
		image: cuciiOnline,
		liveLink: "https://aula.cucii.mx/",
		technologies: ["Moodle", "Ubuntu", "Apache", "Let's Encrypt", "SSH"],
		keywords: [
			"Moodle",
			"LMS",
			"VPS",
			"Ubuntu",
			"Apache",
			"SSL",
			"Let's Encrypt",
			"SSH",
			"Server Administration",
			"Linux",
			"DevOps",
			"Education",
			"Platform Management",
			"Security",
		],
	},
];