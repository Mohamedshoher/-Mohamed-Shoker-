
export enum AttendanceStatus {
  UNMARKED = 'UNMARKED',
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
  LATE = 'LATE',
}

export interface Student {
  id: number;
  name: string;
  avatar: string;
  status: AttendanceStatus;
}
