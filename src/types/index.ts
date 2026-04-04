export type Status = "live" | "beta" | "coming-soon";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio?: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  status: Status;
  url: string;
};
