import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req) => {
  const updatedAtInput = {
    set: new Date(),
  };
  try {
    const data = await req.json();
    console.log(data.id)
    const updatedChannel = await prisma.channel.update({
      where: { _id: data.id },
      data: { updated_at: updatedAtInput, ...data },
    });

    return new Response(JSON.stringify(updatedChannel), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
