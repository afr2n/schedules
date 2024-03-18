import CustomButton from "@/components/Forms/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

type CardProps = {
	title: string;
	description: string;
	retired?: boolean;
	isActive: boolean;
	onButtonClick: () => void;
};

const Card = (props: CardProps) => {
	const { title, description, retired, isActive, onButtonClick } = props;
	return (
		<div
			data-testid="schedule-card"
			className={`bg-white p-4 rounded-lg bg-white border shadow-md my-4 border-2  ${
				isActive ? " border-bkg " : " border "
			}`}
		>
			<div className="w-64 lg:w-full">
				<div className="flex items-center mb-2">
					<FontAwesomeIcon icon={faCalendarAlt} />
					<h2 className="text-lg ml-2 font-semibold">{title}</h2>
				</div>
				<p>{description}</p>
				<div className="flex justify-end mt-2">
					<CustomButton
						onClick={onButtonClick}
						dataTestId="retire"
						type="button"
						btnText={retired ? "Retired" : "Retire"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Card;
