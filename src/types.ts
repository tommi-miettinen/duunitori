export interface Job {
  id: string;
  heading: string;
  date_posted: string;
  date_ends: string;
  slug: string;
  municipality_name: string;
  company_name: string;
  descr: string;
  salary: {
    low_value: string;
    high_value: string;
    value_period: string;
  };
}

export type Jobs = Job[];
