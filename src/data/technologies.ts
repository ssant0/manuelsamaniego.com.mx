import java from "../assets/icons/java.svg?raw";
import spring from "../assets/icons/spring-icon.svg?raw";
import postgresql from "../assets/icons/postgresql.svg?raw";
import typescript from "../assets/icons/typescript.svg?raw";
import html from "../assets/icons/html.svg?raw";
import css from "../assets/icons/css.svg?raw";
import astro from "../assets/icons/astro.svg?raw";
import js from "../assets/icons/js.svg?raw";

const processIcon = (svg: string) => {
	return svg
		.replace(/<\?xml.*?\?>/, "")
		.replace(/<!--[\s\S]*?-->/, "")
		.replace("<svg", `<svg class="w-12 h-12"`)
		.replace(/width="[^"]*"/, "")
		.replace(/height="[^"]*"/, "");
};

export const technologies = [
	{
		name: "Java",
		icon: processIcon(java),
	},
	{
		name: "Spring Boot",
		icon: processIcon(spring),
	},
	{
		name: "PostgreSQL",
		icon: processIcon(postgresql),
	},
	{
		name: "TypeScript",
		icon: processIcon(typescript),
	},
	{
		name: "HTML",
		icon: processIcon(html),
	},
	{
		name: "CSS",
		icon: processIcon(css),
	},
	{
		name: "Astro",
		icon: processIcon(astro),
	},
	{
		name: "JavaScript",
		icon: processIcon(js),
	},
];
