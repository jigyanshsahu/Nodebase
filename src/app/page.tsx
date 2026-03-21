import prisma from "@/lib/db"


const page = async() => {
  const users = await prisma.user.findMany();
  return (
    <div className=" flex h-screen justify-center items-center">
  
    </div>
  )
}

export default page
