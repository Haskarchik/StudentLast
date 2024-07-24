export interface Review {
  id: number;
  photo: string;
  userName: string;
  text: string;
  typeOfWork: string;
  stars?: number;
  date: number;
}
