
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Logo from "/app/asset/logo.png";
import Input from "./Form/Input";
import { CiMail } from "react-icons/ci";
import { HiLockClosed } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ErrorMessage } from "./error";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation"; 

export default function SignIn() {
  //  const router = useRouter(); 
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient()
  const router = useRouter();  

  const [errors, setErrors] = useState({
    name: "" as string,
    password: "" as any,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "name") setName(value);
    if (id === "password") setPassword(value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // redirect('/signup')
    const newErrors = {
      name: "",
      password: "",
    };

    if (!name.trim() ) {
      newErrors.name = "Can’t be empty";
    }

    if (!password.trim()) {
      newErrors.password = "Please check again";
    }

    if (newErrors.name || newErrors.password) {
      setErrors(newErrors);
    }else  {
      try{
        const {error } = await supabase.auth.signInWithPassword({
          email: name,
          password: password
        })
        if (error){
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: error.message,
          }));
        }else{
         
          setName("");
          setPassword("");
          setErrors({
            name: "",
            password: "",
          });
           router.push('/link');
        }
      }catch(error){
        console.error("sign In failed:", error);
      }
    // Clear form
    // setName("");
    // setPassword("");
    // setConfirmPassword("");
    // setErrors({
    //   name: "",
    //   password: "",
    //   confirmPassword: ""
    // });
    
    // Navigate to home page on successful sign-up
    // router.push('/link');
  }
    // } else  {
    //   setName("");
    //   setPassword("");
    //   setErrors({
    //     name: "",
    //     password: "",
    //   });
    //   //  Router.push("/home");
    //   //   redirect('/')
    //   // router.push("/home");
    //     // Navigate to home page on successful sign-up
    //     //router.push('/link');
    // }
    // return redirect('/')
  };

  return (
    <div className="bg-background flex justify-center items-center align-middle my-auto h-screen">
      <div className="lg:w-[35%] md:w-3/6 w-5/6 max-w-3xl">
        <div className="flex md:justify-center my-10">
          <Image src={Logo} alt="Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="sm:bg-secondary-foreground text-destructive sm:p-10">
            <div className="pb-4">
              <h1 className="font-bold text-2xl">Login</h1>
              <p className="text-border">
                Add your details below to get back into the app
              </p>
            </div>

            <Input
             label={errors.name ? <ErrorMessage errorText='Email address' /> : <p>Email address</p>}
              onChange={handleChange}
              prefix={<CiMail />}
              placeholder="e.g. alex@email.com"
              value={name}
              id="name"
              type="email"
              className={` ${errors.name ? 'border-red-500' : 'border-foreground'}`}
              suffix={errors.name &&  <ErrorMessage errorText={errors.name} /> }
            />
            
            <Input
              label={errors.password ? <ErrorMessage errorText='Password ' /> : <p>Password</p>}
              type="password"
              onChange={handleChange}
              prefix={<HiLockClosed />}
              placeholder="Enter your password"
              value={password}
              id="password"
              className={` ${errors.password ? 'border-red-500' : 'border-foreground'}`}
              suffix={errors.password && <ErrorMessage errorText={errors.password} />}
            />
            <Button type="submit" className="w-full hover:bg-primary-foreground text-white py-4">Login</Button>
            <p className="py-4 text-center">Don’t have an account? <Link href='/auth/signup' className="text-primary">Create account</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
}
