export type Participant = {
  id: number;
  bookingId: number;
  name: string;
  age: number;
};

export const NULL_PARTICIPANT: Participant = {
  id: 0,
  bookingId: 0,
  name: '',
  age: 0,
};
