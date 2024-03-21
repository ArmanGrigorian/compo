import { useState } from "react";

const LikeButton = ({ extended }: { extended: boolean }) => {
	const [isLiked, setIsLiked] = useState(false);

	return (
		<button
			onClick={() => setIsLiked(!isLiked)}
			className={`${
				extended && "bg-custom-blue-light p-4 rounded-lg shadow"
			} hover:opacity-80 active:scale-95`}>
			<img
				src={`${isLiked ? "/icons/liked.png" : "/icons/heart.png"}`}
				alt="heart icon png"
				className="w-8 h-8 max-xl:w-6 max-xl:h-6"
			/>
		</button>
	);
};

export default LikeButton;
