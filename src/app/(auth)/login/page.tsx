import { LoginForm } from "@/features/auth/components/login-form"
import { requireUnAuth } from "@/lib/auth-utils"


const page = async () => {
  await requireUnAuth();
  return (
    <div className=" bg-muted flex min-h-svh flex-col justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm/>
        </div>
    </div>
  )
}

export default page
