export interface IPrayerRequest {
  id: number | null;
  author: any;
  isAnonymous: boolean;
  title: string;
  content: string;
  createdAt: string;
  isPraying: boolean;
  numberOfPrays: number;
  replies: any;
  isApproved?: boolean;
}

export const DEFAULT_PRAYERREQUEST = {
  id: null,
  author: null,
  isAnonymous: false,
  title: "",
  content: "",
  createdAt: "",
  isPraying: false,
  numberOfPrays: 0,
  replies: [],
  isApproved: false,
};
