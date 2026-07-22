import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="max-w-3xl h-dvh mx-auto bg-white flex items-center">
      <div className="w-full max-w-sm mx-auto bg-purple-950 py-5 px-10 rounded-lg">
        <img
          className="h-10 block mx-auto mb-3"
          src=" /kla_computer_sidebar.png"
          alt="KLA Computer"
        />
        <h1 className="mb-5 font-bold text-2xl text-center text-white">
          Login to your account
        </h1>

        <form onSubmit={() => ""}>
          <FieldGroup className="text-white">
            <Field>
              <FieldLabel htmlFor="fieldgroup-username">Username</FieldLabel>
              <Input id="fieldgroup-username" placeholder="Type here..." />
            </Field>
            <Field>
              <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
              <Input
                id="fieldgroup-password"
                type="password"
                placeholder="Type here..."
              />
            </Field>
            <Field>
              <Button
                className="bg-yellow-500 hover:bg-white hover:text-black"
                type="submit"
              >
                Login
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default Login;
