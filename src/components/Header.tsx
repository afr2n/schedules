import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<header className="bg-gray-800 flex text-white py-4 w-full">
			<div className="container mx-auto w-100 flex justify-between items-center">
				<h1 className="text-xl font-bold ml-3 ">Schedules</h1>
				<FontAwesomeIcon className="mr-3 lg:mr-0" icon={faBars} />
			</div>
		</header>
	);
};

export default Header;
