import Card from "@/components/Card";
import { ScheduleItemType } from "@/types/schedule";
import { SingleOptionType } from "@/types/forms";
import { useState } from "react";
import CustomSelect from "@/components/Forms/CustomSelect";
import * as api from "@/api/api";

type ScheduleItemProps = {
	items: ScheduleItemType[];
	activeScheduleItemId: number | null;
	setActiveScheduleItemId: (arg0: number) => void;
	updateSchedules: () => void;
};

const Schedules = (props: ScheduleItemProps) => {
	const {
		items,
		activeScheduleItemId,
		setActiveScheduleItemId,
		updateSchedules,
	} = props;
	const [scheduleSelect, setScheduleSelect] = useState<SingleOptionType>({
		label: "All",
		value: "all",
	});

	const filterOptions = [
		{ label: "All", value: "all" },
		{ label: "Retired", value: "retire" },
		{ label: "Unretired", value: "unretire" },
	];

	const onchangeSelect = (selectedOption: SingleOptionType) => {
		setScheduleSelect(selectedOption);
	};

	const filteredItems = items.filter((item) => {
		if (scheduleSelect?.value === "all") {
			return true;
		} else if (scheduleSelect?.value === "retire") {
			return item.retire;
		} else if (scheduleSelect?.value === "unretire") {
			return !item.retire;
		}
		return false;
	});

	const onRetireToggle = (item: ScheduleItemType) => {
		const dataToPatch = {
			retire: !item.retire,
		};
		api
			.patch(`${api.schedules}/${item.id}`, dataToPatch)
			.then((res) => {
				console.log("updated", res);
				updateSchedules();
			})
			.catch((e) => {
				console.log("Error", e);
			});
	};

	return (
		<aside className="px-3 ">
			<div data-testid="retire-filter">
				<CustomSelect
					className="basic-single py-3  pr-2 lg:pr-6 "
					name="filter"
					onChange={(data) => onchangeSelect(data as SingleOptionType)}
					defaultValue={filterOptions.find((i) => i.value === "all")}
					options={filterOptions}
				/>
			</div>
			<div className="flex min-h-48 overflow-auto content-height flex flex-row lg:flex-col pt-0 pb-4">
				{filteredItems.map((item) => {
					return (
						<div
							key={"key" + item.id}
							onClick={() => setActiveScheduleItemId(item.id)}
							className="cursor-pointer mr-3 md:mr-4 "
						>
							<Card
								isActive={activeScheduleItemId === item.id}
								title={item.title}
								description={item.description}
								retired={item.retire}
								onButtonClick={() => onRetireToggle(item)}
							/>
						</div>
					);
				})}
			</div>
		</aside>
	);
};

export default Schedules;
