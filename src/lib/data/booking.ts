export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface BookingFormData {
  serviceCategory: string;
  serviceId: string;
  staffId: string;
  date: Date | null;
  timeSlot: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  instagram: string;
  notes: string;
  depositOption: "deposit" | "full" | "later";
  giftCard: string;
}

export const defaultBookingForm: BookingFormData = {
  serviceCategory: "",
  serviceId: "",
  staffId: "",
  date: null,
  timeSlot: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  instagram: "",
  notes: "",
  depositOption: "deposit",
  giftCard: "",
};

export const availableTimeSlots: TimeSlot[] = [
  { id: "t1", time: "09:00", available: true },
  { id: "t2", time: "09:30", available: false },
  { id: "t3", time: "10:00", available: true },
  { id: "t4", time: "10:30", available: true },
  { id: "t5", time: "11:00", available: false },
  { id: "t6", time: "11:30", available: true },
  { id: "t7", time: "12:00", available: true },
  { id: "t8", time: "12:30", available: false },
  { id: "t9", time: "13:00", available: true },
  { id: "t10", time: "13:30", available: true },
  { id: "t11", time: "14:00", available: false },
  { id: "t12", time: "14:30", available: true },
  { id: "t13", time: "15:00", available: true },
  { id: "t14", time: "15:30", available: true },
  { id: "t15", time: "16:00", available: false },
  { id: "t16", time: "16:30", available: true },
];

export const blockedDates: Date[] = [
  new Date(2024, 5, 15),
  new Date(2024, 5, 16),
  new Date(2024, 5, 22),
];

export const depositAmount = 500;
export const depositPercentage = 0.3;
