export type Address = string;

export interface Project {
  timestampCreated: number;
  title: string;
  quote: string; // denoted in DAI (mvp)
  description: string;
  tags: string[];
  language: string;
  isStarted: boolean;
  creatorAddress: string;
  closed: boolean;
  applicants: Address[];
  disputeActive: boolean;
}

// retrieveable by adddress
export interface User {
  address: Address;
  creatorRating: number;
  collaboratorRating: number;
}

export interface Applicant {}

// flow
// 1. create a Task

// dispute can only be created by the member
