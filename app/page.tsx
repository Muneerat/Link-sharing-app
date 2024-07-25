"use client";
import Image from "next/image";
import Logo from "../app/asset/logo.png";
 import Input from "./Components/Form/Input";
import { useState } from "react";
import Log from "./asset/icon";
import { CiMail } from "react-icons/ci";
import { HiLockClosed } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SignIn from "./Components/signIn";



export default function Home() {

  return (
  <SignIn />
  );
}

