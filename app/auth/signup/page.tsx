
'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Logo from "/app/asset/logo.png";
import Input from "../../Components/Form/Input";
import { CiMail } from "react-icons/ci";
import { HiLockClosed } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default function SignUp() {
  //  const router = useRouter(); 
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "name") setName(value);
    if (id === "password") setPassword(value);
    if (id === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // redirect('/signup')
    const newErrors = {
      name: "",
      password: "",
      confirmPassword: ""
    };

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!password.trim() && !confirmPassword.trim()) {
      newErrors.password = "Password is required";
      

    }

    if(newErrors.password !== newErrors.confirmPassword){
      newErrors.confirmPassword = "Password is wrong";
    }
    if (newErrors.name || newErrors.password) {
      setErrors(newErrors);
    } else  {
      setName("");
      setPassword("");
      setErrors({
        name: "",
        password: "",
        confirmPassword: ""
      });
      //  Router.push("/home");
        redirect('/')
      // router.push("/home");
    }
    redirect('/')
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
              <h1 className="text-bold text-2xl">Create account</h1>
              <p className="text-border">
              Let’s get you started sharing your links!
              </p>
            </div>

            <Input
              label={errors.name ? <p className="text-red-500">Email address</p> : <p>Email address</p>}
              onChange={handleChange}
              prefix={<CiMail />}
              placeholder="e.g. alex@email.com"
              value={name}
              id="name"
              type="email"
              className={` ${errors.name ? 'border-red-500' : 'border-foreground'}`}
              suffix={errors.name && <p className="text-red-500">Can’t be empty</p>}
            />
            
            <Input
              label={errors.password ? <p className="text-red-500">Create password</p> : <p>Create password</p>}
              type="password"
              onChange={handleChange}
              prefix={<HiLockClosed />}
              placeholder="At least 8 characters"
              value={password}
              id="password"
              className={` ${errors.password ? 'border-red-500' : 'border-foreground'}`}
              suffix={errors.password && <p className="text-red-500">Please check again</p>}
            />
               <Input
              label="Confirm password"
              type="password"
              onChange={handleChange}
              prefix={<HiLockClosed />}
              placeholder="At least 8 characters"
              value={confirmPassword}
              id="confirmPassword"
              suffix={errors.confirmPassword && <p className="text-red-500">Please check again</p>}
            />
            <p className="py-4">Password must contain at least 8 characters</p>
            <Button type="submit" className="w-full hover:bg-primary-foreground text-white py-4">Create new account</Button>
            <p className="py-4 text-center">Already have an account?  <Link href='/' className="text-primary">Login</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
}
