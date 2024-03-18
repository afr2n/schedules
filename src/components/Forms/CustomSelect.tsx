import Select, {
	GroupBase,
	OptionsOrGroups,
	StylesConfig,
} from "react-select";
import { SingleOptionType, MultiValueOptions } from "@/types/forms";

type CustomSelectProps = {
	options: SingleOptionType[];
	onChange: (selectedOptions: SingleOptionType | MultiValueOptions) => void;
	value?: SingleOptionType | MultiValueOptions;
	defaultValue?: SingleOptionType;
	placeholder?: string;
	name: string;
	className: string;
	allowMultiple?: boolean;
};

interface OptionType {
	label: string;
	value: string;
}

const customStyles: StylesConfig<OptionType, boolean> = {
	control: (provided, state) => ({
		...provided,
		borderColor: state.isFocused ? "#1F2937" : "#C5c5c5", // Change border color on focus and blur
		"&:hover": {
			borderColor: "#1F2937", // Change border color on hover
		},
		// boxShadow: state.isFocused ? "0 0 0 2px rgba(74, 144, 226, 0.5)" : "none",
		// "&:hover": {
		// 	borderColor: "#4A90E2", // Change border color on hover
		// },
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected
			? "#1F2937"
			: state.isFocused
			? "#657286"
			: "white",
		color: state.isSelected ? "white" : state.isFocused ? "white" : "black",
		"&:hover": {
			backgroundColor: "#657286",
		},
	}),
};

const CustomSelect = (props: CustomSelectProps) => {
	const {
		options,
		onChange,
		name,
		placeholder,
		value,
		className,
		defaultValue,
		allowMultiple = false,
	} = props;
	return (
		<Select
			// components={customComponents}
			placeholder={placeholder}
			name={name}
			className={className}
			defaultValue={defaultValue}
			value={value as SingleOptionType}
			classNamePrefix="select"
			options={
				options as
					| OptionsOrGroups<
							{ label: string; value: string },
							GroupBase<{ label: string; value: string }>
					  >
					| undefined
			}
			onChange={onChange as any}
			isMulti={allowMultiple}
			styles={customStyles}
		/>
	);
};

export default CustomSelect;
