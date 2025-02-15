"use server";

import { prisma } from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";

export async function CreatePotentialUser(
    prevState: { message: string },
    formData: FormData
) {
    try {
        // get the data out from the formData
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const address = formData.get("address");

        // validate data
        if (typeof name != "string" || name.length < 4) {
            return { message: "Please provide your full name." };
        }
        if (typeof email != "string" || email.length < 4) {
            return { message: "Please provide valid email." };
        }
        if (typeof phone != "string" || phone.length != 10) {
            return { message: "Please provide valid phone number." };
        }
        if (typeof address != "string" || address.length < 8) {
            return { message: "Please provide your full address." };
        }

        await prisma.callbackRequest.create({
            data: {
                name,
                email,
                phone,
                address,
            },
        });

        revalidatePath("/");
        return { message: "Request submitted successfully!" };
    } catch (error: unknown) {
        return {
            message:
                "Internal server error, please try after a while. Thankyou!",
            error,
        };
    }
}
