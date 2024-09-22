import SignUpForm from "../components/SignUpForm";
import bg_login from "../assests/RectangleLoginPage.webp";
import Image from "next/image";

const SignUp: React.FC = () => {
  return (
    <main
      lang="fa-IR"
      className="absolute flex text-black w-full min-h-screen flex-col items-center sm-min:p-6"
    >
      <Image
        className="relative top-0 w-full h-[280px] flex flex-col self-start rounded-none sm-min:rounded-xl"
        src={bg_login}
        alt={"bg_login"}
        width={1392}
        height={280}
      />
      <SignUpForm />
    </main>
  );
};

export default SignUp;