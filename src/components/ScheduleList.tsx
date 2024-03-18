import Schedules from "@/components/Schedules";
import ScheduleLogEntries from "@/components/ScheduleLogEntries";
import { useEffect, useState } from "react";
import { ScheduleItemType } from "@/types/schedule";
import * as api from "@/api/api";
import { ScheduleLogEntriesType } from "@/types/schedule";

function ScheduleList() {
	const [scheduleItems, setScheduleItems] = useState<ScheduleItemType[]>([]);
	const [logEntryItems, setLogEntryItems] = useState<ScheduleLogEntriesType[]>(
		[]
	);
	const [activeScheduleItemId, setActiveScheduleItemId] = useState<
		number | null
	>(null);

	const updateSchedules = () => {
		api
			.get(api.schedules)
			.then((res) => {
				setScheduleItems(res);
				setActiveScheduleItemId(res[0].id);
				api
					.get(api.scheduleLogs(res[0].id))
					.then((response) => {
						setLogEntryItems(response);
					})
					.catch((e) => {
						console.log("Error", e);
					});
			})
			.catch((e) => {
				console.log("Error", e);
			});
	};
	useEffect(() => {
		updateSchedules();
	}, []);

	useEffect(() => {
		api
			.get("scheduleLogs?scheduleId=" + activeScheduleItemId)
			.then((response) => {
				setLogEntryItems(response);
			})
			.catch((e) => {
				console.log("Error", e);
			});
	}, [activeScheduleItemId]);

	return (
		<div className="container-fluid lg:container mx-auto my-4 ">
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-full lg:col-span-3 overflow-x-auto">
					<Schedules
						items={scheduleItems}
						setActiveScheduleItemId={setActiveScheduleItemId}
						activeScheduleItemId={activeScheduleItemId}
						updateSchedules={updateSchedules}
					/>
				</div>
				<div className="col-span-full lg:col-span-9">
					<ScheduleLogEntries logEntryItems={logEntryItems} />
				</div>
			</div>
		</div>
	);
}

export default ScheduleList;
