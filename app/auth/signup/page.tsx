'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Logo from "/app/asset/logo.png";
import Input from "../../Components/Form/Input";
import { CiMail } from "react-icons/ci";
import { HiLockClosed } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { ErrorMessage } from "@/app/Components/error";

export default function SignUp() {
  const router = useRouter();  
  
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

    const newErrors = {
      name: "",
      password: "",
      confirmPassword: ""
    };

    if (!name.trim()) {
      newErrors.name = "Can’t be empty";
    }

    if (!password.trim()) {
      newErrors.password = "Please check again";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (newErrors.name || newErrors.password || newErrors.confirmPassword) {
      setErrors(newErrors);
    } else  {
      // Clear form
      setName("");
      setPassword("");
      setConfirmPassword("");
      setErrors({
        name: "",
        password: "",
        confirmPassword: ""
      });
      
      // Navigate to home page on successful sign-up
      router.push('/link');
    }
  };

  return (
    <div className="bg-background flex justify-center items-center align-middle my-auto h-screen">
      <div className="lg:w-[35%] md:w-3/6 sm:w-4/6 w-full m-5  max-w-3xl">
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
              label={errors.name ? <ErrorMessage errorText='Email address'/> : <p>Email address</p>}
              onChange={handleChange}
              prefix={<CiMail />}
              placeholder="e.g. alex@email.com"
              value={name}
              id="name"
              type="email"
              className={` ${errors.name ? 'border-red-500' : 'border-foreground'}`}
              suffix={<ErrorMessage errorText={errors.name}/>}
            />
            
            <Input
              label={errors.password ? <ErrorMessage errorText='Create password'/> : <p>Create password</p>}
              type="password"
              onChange={handleChange}
              prefix={<HiLockClosed />}
              placeholder="At least 8 characters"
              value={password}
              id="password"
              className={` ${errors.password ? 'border-red-500' : 'border-foreground'}`}
              suffix={<ErrorMessage errorText={errors.password}/>}
            />
            
            <Input
              label="Confirm password"
              type="password"
              onChange={handleChange}
              prefix={<HiLockClosed />}
               placeholder="Re-enter your password"
              value={confirmPassword}
              id="confirmPassword"
              suffix={<ErrorMessage errorText={errors.confirmPassword}/>}
              
            />
            
            <p className="pb-3 pt-2 text-gray-500">Password must contain at least 8 characters</p>
            
            <Button type="submit" className="w-full hover:bg-primary-foreground text-white py-4">Create new account</Button>
            <p className="py-4 text-center block">Already have an account?  <Link href='/' className="text-primary">Login</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
}
