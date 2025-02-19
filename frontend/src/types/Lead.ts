export enum LeadStatus {
    Invited = 0,
    Accepted = 1,
    Declined = 2,
  }
  
  export interface Lead {
    id: number;
    firstName: string;
    fullName?: string;
    phone?: string;
    email?: string;
    dateCreated: string;
    suburb: string;
    category: string;
    description: string;
    price: number;
    status: LeadStatus;
  }
  