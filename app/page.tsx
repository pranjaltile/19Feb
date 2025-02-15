"use client"

import { useState } from "react"
import { submitGreeting } from "./actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const [greeting, setGreeting] = useState<string>("")

  const handleSubmit = async (formData: FormData) => {
    const result = await submitGreeting(formData)
    setGreeting(result)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Greeting App</CardTitle>
          <CardDescription>Enter your name to receive a greeting</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            <Input type="text" name="name" placeholder="Enter your name" required />
            <Button type="submit" className="w-full" variant="blue">
              Submit
            </Button>
          </form>
          {greeting && <p className="mt-4 text-center text-lg font-semibold">{greeting}</p>}
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full max-w-md mt-8">
        <AccordionItem value="explanation">
          <AccordionTrigger>How it works</AccordionTrigger>
          <AccordionContent>
            <p>This Greeting App showcases several modern web development features:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Server Actions:</strong> When you submit the form, a server action processes your name and
                returns a personalized greeting, demonstrating Next.js 15.1's server-side capabilities [^1].
              </li>
              <li>
                <strong>Shadcn UI Components:</strong> We use Card, Input, Button, and Accordion components from Shadcn
                UI for a cohesive and modern design.
              </li>
              <li>
                <strong>Custom Styling:</strong> The submit button is customized to be blue, showcasing how Shadcn UI
                components can be tailored to specific design needs.
              </li>
              <li>
                <strong>React Hooks:</strong> We use the useState hook to manage the greeting state, updating it
                dynamically when the form is submitted.
              </li>
              <li>
                <strong>Responsive Design:</strong> The layout adjusts to different screen sizes, ensuring a good user
                experience on both desktop and mobile devices.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}

