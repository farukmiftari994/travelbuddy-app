import dbConnect from "@/lib/connectDB";
import UserModel from "@/models/users";

const resolvers = {
  Query: {
    users: async () => {
      try {
        await dbConnect;
        const users = await UserModel.find({});
        return users;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default resolvers;
