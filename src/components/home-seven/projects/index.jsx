import ThumbImg1 from "../../../assets/images/v7/slider-thumb1.png";
import ThumbImg2 from "../../../assets/images/v7/slider-thumb2.png";
import ThumbImg3 from "../../../assets/images/v7/slider-thumb3.png";
import ThumbImg4 from "../../../assets/images/v7/slider-thumb4.png";
import ThumbImg5 from "../../../assets/images/v7/slider-thumb5.png";
import ThumbImg6 from "../../../assets/images/v7/slider-thumb6.png";
import ThumbImg7 from "../../../assets/images/v7/slider-thumb7.png";
import ThumbImg8 from "../../../assets/images/v7/slider-thumb8.png";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		id: crypto.randomUUID(),
		img: ThumbImg1,
		title: "#ZenithZest Campaign",
		description:
			"Comprehensive advertising strategy, contributing to a well-rounded and effective marketing campaign.",
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg2,
		title: "#VerveVista Venture",
		description:
			"Comprehensive advertising strategy, contributing to a well-rounded and effective marketing campaign.",
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg3,
		title: "#Project Luminosity",
		description:
			"Comprehensive advertising strategy, contributing to a well-rounded and effective marketing campaign.",
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg4,
		title: "#InnoVibes Campaign",
		description:
			"Comprehensive advertising strategy, contributing to a well-rounded and effective marketing campaign.",
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg5,
		title: "#EpicEcho Initiative",
		description:
			"Comprehensive advertising strategy, contributing to a well-rounded and effective marketing campaign.",
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg6,
		title: "#MomentumXperience",
		description:
			"Comprehensive advertising strategy, contributing to a well-rounded and effective marketing campaign.",
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg7,
		title: "#PulseFusion Project",
		description:
			"Comprehensive advertising strategy, contributing to a well-rounded and effective marketing campaign.",
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg8,
		title: "#NexGen Nexus",
		description:
			"Comprehensive advertising strategy, contributing to a well-rounded and effective marketing campaign.",
	},
];

import { useEffect, useRef } from "react";

function Projects() {
	const wrappers = useRef(null);

	useEffect(() => {
		wrappers.current = document.querySelectorAll(".aximo-image-resizing-item");
		const wrapArray = Array.from(wrappers.current);

		wrapArray.forEach((item) => {
			const text = item.childNodes[0];

			item.addEventListener("mouseover", function () {
				wrapArray.filter((others) => {
					if (others !== item) {
						others.classList.remove("expand");
					}
				});
				this.classList.add("expand");
				text.classList.add("active");
			});

			item.addEventListener("mouseout", function () {
				this.classList.remove("expand");
				text.classList.remove("active");
			});
		});
	}, []);
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center bricolage-font">
					<h2>Take a look at our most recent work</h2>
				</div>
			</div>
			<div className="img-container-wrap">
				{projectsData.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}

export default Projects;
