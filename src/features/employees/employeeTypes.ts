export interface Employee {
  id: string;
  name: string;
  email: string;
  job_title: string;
  salary: number;
  joinedDate?: string;
  isDeleted?: boolean;
}
