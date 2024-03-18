import { ScheduleLogEntriesType } from "@/types/schedule";
import { useState } from "react";
import { MultiValueOptions, SingleOptionType } from "@/types/forms";
import CustomSelect from "@/components/Forms/CustomSelect";

type ScheduleLogEntriesProps = {
	logEntryItems: ScheduleLogEntriesType[];
};

const ScheduleLogEntries = (props: ScheduleLogEntriesProps) => {
	const { logEntryItems } = props;
	const [filterSelect, setFilterSelect] = useState<MultiValueOptions>([]);

	const filterOptions = [
		{ label: "Date", value: "date", priority: 1 },
		{ label: "Time", value: "time", priority: 2 },
		{ label: "Activity", value: "activity", priority: 3 },
		{ label: "Location", value: "location", priority: 4 },
		{ label: "Presenters", value: "presenters", priority: 5 },
		{ label: "Audience", value: "audience", priority: 6 },
		{ label: "Purpose / Objective", value: "purpose_objective", priority: 7 },
		{ label: "Notes", value: "notes", priority: 8 },
	];

	const onchangeSelect = (selectedOptions: MultiValueOptions) => {
		let sortedFilters = [...selectedOptions];
		sortedFilters = sortedFilters.sort(
			(a, b) => (a?.priority ?? 0) - (b?.priority ?? 0)
		);
		setFilterSelect(sortedFilters);
	};

	return (
		<section className="">
			<div data-testid="entries-filter">
				<CustomSelect
					className="basic-single  py-3"
					placeholder="Filter fields to display"
					name="filter"
					options={filterOptions}
					allowMultiple={true}
					onChange={(data) => onchangeSelect(data as MultiValueOptions)}
				/>
			</div>
			<div className="overflow-x-auto min-h-96 content-height px-3 lg:px-1 col-span-full lg:col-span-9">
				<table className="table-auto min-w-full" data-testid="log-entry-table">
					<thead>
						{filterSelect?.length ? (
							<tr>
								{filterSelect.map((option) => (
									<th
										key={option?.value}
										data-testid={"table-col"}
										className="text-left px-4 py-2"
									>
										{option?.label}
									</th>
								))}
							</tr>
						) : (
							<tr>
								<th className="text-left px-4 py-2" data-testid={"table-col"}>
									Date
								</th>
								<th className="text-left px-4 py-2" data-testid={"table-col"}>
									Time
								</th>
								<th className="text-left px-4 py-2" data-testid={"table-col"}>
									Activity
								</th>
								<th
									className="text-left text-left px-4 py-2"
									data-testid={"table-col"}
								>
									Location
								</th>
								<th className="text-left px-4 py-2" data-testid={"table-col"}>
									Presenters
								</th>
								<th className="text-left px-4 py-2" data-testid={"table-col"}>
									Audience
								</th>
								<th className="text-left px-4 py-2" data-testid={"table-col"}>
									Purpose/Objective
								</th>
								<th className="text-left px-4 py-2" data-testid={"table-col"}>
									Notes
								</th>
							</tr>
						)}
					</thead>
					<tbody>
						{logEntryItems.map((item: ScheduleLogEntriesType) => {
							if (filterSelect?.length) {
								return (
									<tr
										key={"logEntry" + item.id}
										data-testid="schedule-log-entry"
									>
										{filterSelect.map((option?: SingleOptionType) => (
											<td key={option?.value} className="border px-4 py-2">
												{option?.value ? (item as any)[option?.value] : ""}
											</td>
										))}
									</tr>
								);
							}
							return (
								<tr key={"logEntry" + item.id} data-testid="schedule-log-entry">
									<td className="border px-4 py-2">{item.date}</td>
									<td className="border px-4 py-2">{item.time}</td>
									<td className="border px-4 py-2">{item.activity}</td>
									<td className="border px-4 py-2">{item.location}</td>
									<td className="border px-4 py-2">
										{item.presenters.join(",")}
									</td>
									<td className="border px-4 py-2">{item.audience}</td>
									<td className="border px-4 py-2">{item.purpose_objective}</td>
									<td className="border px-4 py-2">{item.notes}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ScheduleLogEntries;
