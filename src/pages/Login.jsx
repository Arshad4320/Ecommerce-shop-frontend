import { useForm } from "react-hook-form";
import { useUserLoginMutation } from "../redux/features/user/userApi";
import { useDispatch } from "react-redux";
import { userAdded } from "../redux/features/user/userSlice";

const Login = () => {
  const [loginUser] = useUserLoginMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      const result = await loginUser(data).unwrap();
      if (result.data) {
        console.log(result.data);
        dispatch(userAdded(result.data));
      }
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-24 ">
      <p className="text-4xl font-semibold text-primary text-center">Login</p>
      <form className="mx-auto w-1/2 " onSubmit={handleSubmit(onSubmit)}>
        <label className="text-xl text-primary py-2" htmlFor="email">
          Email
        </label>
        <br />
        <input
          className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("email")}
        />{" "}
        <br />
        <label className="text-xl text-primary py-2" htmlFor="email">
          Password
        </label>
        <br />
        <input
          className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("password")}
        />
        <br />
        <input
          className="px-6 py-3 mt-6 border-primary hover:bg-primary hover:border-primary hover:text-white text-2xl border  rounded-md text-primary"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Login;
