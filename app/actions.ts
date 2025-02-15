"use server"

export async function submitGreeting(formData: FormData) {
  const name = formData.get("name") as string
  return `Have a good day ${name}!`
}
//New comment

