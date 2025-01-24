import { ActivityType } from "./activity-type";

export class Activity {
    id: number;
    type: ActivityType;
    monitor1Id: number;
    monitor2Id: number;
    date: Date;
    startingTime: string;
    endingTime: string;

    constructor(id: number, type: ActivityType, monitor1Id: number, monitor2Id: number, date: Date, startingTime: string, endingTime: string) {
        this.id = id;
        this.type = type;
        this.monitor1Id = monitor1Id;
        this.monitor2Id = monitor2Id;
        this.date = date;
        this.startingTime = startingTime;
        this.endingTime = endingTime;
    }
}
