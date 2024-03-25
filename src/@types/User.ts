interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  // profilePicture?: { URL: string; public_Id: string };
  public_id?: string;
  hometown?: string;
  travelDates?: Date;
  likes?: string;
  requests?: string;
  connections?: string;
}
