import { MultiValue, SingleValue } from "react-select";

export type SingleOptionType = SingleValue<{ label: string; value: string }>;

export type MultiValueOptions = MultiValue<
	{ label: string; value: string; priority: number } | undefined
>;
