"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useActionState, useEffect, useState } from "react";
import { Label } from "./ui/label";
import * as action from "@/actions";
import { Toaster } from "./ui/toaster";

interface RentalRequestFormProps {
    isOpen: boolean;
    onClose: () => void;
    singleProduct: {
        available: boolean;
        description: string;
        image: string;
        name: string;
        price: number;
    };
}

const RentalRequestForm = ({
    isOpen,
    onClose,
    singleProduct,
}: RentalRequestFormProps) => {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        address: "",
        name: "",
    });

    const [formState, formAction] = useActionState<
        { message: string },
        FormData
    >(action.CreatePotentialUser, {
        message: "",
    });

    useEffect(() => {
        if (formState.message === "Request submitted successfully!") {
            onClose();
            <Toaster />;
        }
        // console.log(formState);
    }, [formState.message, onClose]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Rent {singleProduct.name}</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Please provide your details and preferred rental duration.
                    Our team will contact you shortly.
                </DialogDescription>
                <form action={formAction} className="space-y-4">
                    <div className="space-y-2">
                        <Label className="px-1">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <Label className="px-1">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email address"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <Label className="px-1">Phone</Label>
                        <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <Label className="px-1">Address</Label>
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Your full address"
                            value={formData.address}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    address: e.target.value,
                                })
                            }
                        />
                    </div>
                    {formState.message && (
                        <div className="text-xs text-red-500">
                            {formState.message}
                        </div>
                    )}
                    <DialogFooter>
                        <Button type="submit" className="mt-2">
                            Request a Call
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default RentalRequestForm;
