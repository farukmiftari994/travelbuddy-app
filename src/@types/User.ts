interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  profilePicture?: { URL: string; publicId: string };
  homeTown?: string;
  travelDates?: Date;
}
