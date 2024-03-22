import dbConnect from "@/lib/connectDB";
import UserModel from "@/models/users";

type param = {
  input: {
    email: string;
    password: string;
    userName: string;
  };
};
type updateUser = {
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  hometown?: string;
  travelDates?: Date;
  favDestinations?: string;
};

const resolvers = {
  Query: {
    users: async () => {
      try {
        await dbConnect();
        const users = await UserModel.find({});
        return users;
      } catch (error) {
        console.log(error);
      }
    },
    // find one user by id
    user: async (parent: any, args: param) => {
      try {
        await dbConnect();
        const user = await UserModel.findById({});
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createUser: async (_: undefined, params: param) => {
      console.log(params);
      try {
        await dbConnect();
        const user = await UserModel.create(params.input);
        return user;
      } catch (error) {
        console.log(error);
      }
    },
    updateUsersEmail: async (
      _: undefined,
      params: { id: string; email: string }
    ) => {
      try {
        await dbConnect();
        const updatedUser = await UserModel.findByIdAndUpdate(
          // TODO - do this with the token and not the id (or get the session of a user from next auth)
          params.id,
          { email: params.email },
          { new: true }
        );
        return updatedUser;
      } catch (error) {
        console.log(error);
      }
    },
    signup: async (_: undefined, params: param) => {
      // TODO: implement JWT and add token
      console.log(params);
      try {
        const userAlreadyExists = await UserModel.findOne({
          email: params.input.email,
        });
        if (userAlreadyExists) {
          throw new Error("User already exists");
        }
        await dbConnect();
        const newUser = await UserModel.create(params.input);
        return newUser;
      } catch (error) {
        console.log(error);
      }
    },
    completeUserSignup: async (_: undefined, params: updateUser) => {
      console.log(params);
      try {
        await dbConnect();
        const user = await UserModel.updateOne(params);
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default resolvers;
