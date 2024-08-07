import * as React from "react";
import { Calendar } from "@/components/ui/calendar"; // Adjust the import path as necessary

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Calendar</h3>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}

export default Calendar;
