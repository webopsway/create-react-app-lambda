import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
							We think our story is
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="star" />
							</span>
						</span>
						worth sharing with you
					</h2>
					<p>
						Créer en 2024 ..... 
						creative and tech-savvy solutions to help businesses succeed in the ever-changing digital
						landscape.
					</p>
				</div>

				<div className="row">
					<StoryPhotos />
				</div>

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;
