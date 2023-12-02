import { useForm } from "react-hook-form";
import { useUserRegisterMutation } from "../redux/features/user/userApi";
import { useDispatch } from "react-redux";
import { userAdded } from "../redux/features/user/userSlice";
// import { useCreateUserMutation } from "../redux/features/user/userApi";

const Register = () => {
  const [createUser] = useUserRegisterMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      const result = await createUser(data).unwrap();
      if (result.data) {
        dispatch(userAdded(result.data));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center item-center p-16 ">
      <form
        className="mx-auto w-[580px] border border-primary p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-4xl font-semibold text-primary text-center mb-6">
          Register
        </p>
        <div>
          <label
            className="text-xl text-primary font-semibold py-3"
            htmlFor="name"
          >
            Name
          </label>{" "}
          <br />
          <input
            className=" appearance-none border rounded w-full mt-2 mb-4 border-1 py-4 px-3 border-primary leading-tight focus:outline-none focus:shadow-outline"
            {...register("name")}
          />
        </div>

        <div>
          <label
            className="text-xl text-primary font-semibold py-4"
            htmlFor="email"
          >
            Email
          </label>{" "}
          <br />
          <input
            className=" appearance-none border rounded w-full mt-2 mb-4 border-1 py-4 px-3 border-primary leading-tight focus:outline-none focus:shadow-outline"
            {...register("email")}
          />
        </div>

        <div>
          <label
            className="text-xl text-primary font-semibold py-4"
            htmlFor="password"
          >
            Password
          </label>{" "}
          <br />
          <input
            className=" appearance-none border rounded w-full mt-2 mb-4 border-1 py-4 px-3 border-primary leading-tight focus:outline-none focus:shadow-outline"
            {...register("password")}
          />
        </div>
        <div>
          <label
            className="text-xl text-primary font-semibold py-4"
            htmlFor="address"
          >
            Address
          </label>{" "}
          <br />
          <input
            className=" appearance-none border rounded w-full mt-2 mb-4 border-1 py-4 px-3 border-primary leading-tight focus:outline-none focus:shadow-outline"
            {...register("address")}
          />
        </div>

        <input
          className="px-6 py-3 mt-4 border-primary hover:bg-primary hover:border-primary hover:text-white text-2xl border  rounded-md text-primary"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Register;
