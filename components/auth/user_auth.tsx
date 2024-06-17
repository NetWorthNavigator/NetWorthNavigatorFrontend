"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { userparse } from "./create_user"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault(); // Prevent the default form submit behavior
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const inputted_email = formData.get('inputted_email'); // Use the 'get' method to retrieve the value
    const inputted_password = formData.get('inputted_password')
    console.log(inputted_email)
    console.log(inputted_password)

    setIsLoading(true)
    await userparse(inputted_email, inputted_password)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  async function onSubmitGoogle(event: React.SyntheticEvent){
    event.preventDefault()
    console.log("any googlers?")
    console.log("send to google")
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name = "inputted_email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name = "inputted_password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button>
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            or
          </span>
        </div>
      </div>
        <form onSubmit = {onSubmitGoogle}className = "grid gap-2">
          <Button className = "">
                Sign In with Google
          </Button>
        </form>
    </div>
  )
}