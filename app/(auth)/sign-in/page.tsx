"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
//import { toast } from "sonner";
import Logo from "@/components/logo-dark";
import { Loader2, Mail, Lock, Loader } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

export default function SignIn() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const toastId = toast("Signing in", {
      duration: 5000,
      icon: <Loader className="animate-spin" />,
    });

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!response?.ok) {
        toast.error(`${response?.error}|"Internal server error"`, {
          id: toastId,
          icon: "",
        });
      } else {
        toast.success("Sign in successful.", {
          icon: "",
          id: toastId,
        });
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.", {
        id: toastId,
      });
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Section (Logo) */}
      <div className="hidden md:block lg:col-span-1 bg-neutral-950">
        <div className="min-h-screen flex items-center justify-center">
          <Logo />
        </div>
      </div>
      {/* Right Section (Form) */}
      <div className="col-span-1 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
        <Card className="w-full max-w-md bg-white shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-black">
              Sign in to your account
            </CardTitle>
            <CardDescription className="text-center text-gray-500">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    ref={inputRef}
                    placeholder="jhondoe@example.com"
                    autoComplete="email"
                    required
                    disabled={loading}
                    className="pl-10 bg-gray-50 border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    id="password"
                    name="password"
                    placeholder="********"
                    type={"password"}
                    autoComplete="current-password"
                    required
                    disabled={loading}
                    className="pl-10 pr-10 bg-gray-50 border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" disabled={loading} />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button
                className="w-full bg-black hover:bg-gray-800 text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link href={"/sign-up"}>
                <span className="text-black hover:underline">
                  Create an account
                </span>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
