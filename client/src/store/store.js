import { create } from "zustand";

export const usePostedJobStore = create((set) => ({
  posted_job: null,
  posted_job_id: null,
  storePostedJob: (posted_job) => set({ posted_job }),
  storePostedJobId: (posted_job_id) => set({ posted_job_id }),
}));

export default usePostedJobStore;
