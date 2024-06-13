import { Subject } from "../service/types";

export const transformEvents = (scheduleInfo: Subject[]) => {
  return scheduleInfo.map((event) => ({
    title: event.subjectName,
    start: event.startTime,
    end: event.endTime,
    status: event.status,
  }));
};
