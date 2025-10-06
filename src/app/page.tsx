"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
export default function Home() {
    const { 
        data: session } = authClient.useSession() 





  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () =>{
    authClient.signUp.email({
      email,
      name,
      password
    },{
      onError: () => {
        window.alert("Something went wrong");
      },
      onSuccess: () => {
        window.alert("Success");
      }
    });
  }
  const onLogin = () =>{
    authClient.signIn.email({
      email,
      password,
    },{
      onError: () => {
        window.alert("Something went wrong");
      },
      onSuccess: () => {
        window.alert("Success");
      }
    });
  }
if (session) {
  return (
    <div className="p-4 flex flex-col gap-y-4">
      <p>Logged in as {session.user.email}</p>
      <Button onClick={() => authClient.signOut()}>
      Sign out
      </Button>
    </div>
  );
}
  return (
    <div className="flex flex-col gap-y-10">
   <div className="p-4 flex flex-col gap-y-4">
    
    <Input 
    placeholder="email" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)} />


    <Input placeholder="password" 
    value={password} 
    onChange={(e) => setPassword(e.target.value)} />
    <Button onClick={onLogin}>
      Login
      </Button>
   </div>
    </div>
  )
}