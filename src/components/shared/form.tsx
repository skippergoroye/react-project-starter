"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import CustomFormField, { FormFieldType } from "@/components/shared/CustomFormField";
import SubmitButton from "@/components/shared/SubmitButton";
import { SelectItem } from "@/components/ui/select";
import { WorkLocation } from "@/constants";
import { Form } from "../ui/form";

const ProfileSchema = z.object({
  first_name: z.string(),
  file: z.any().nullable(),
});

const FormData = () => {
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      first_name: "",
      file: null,
    },
  });

  const onSubmit = (values: z.infer<typeof ProfileSchema>) => {
    console.log(values);
  };

  return (
    <div className="mt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="last_name"
            label="Last Name"
            placeholder="Enter your Last Name"
            variant="h-[40px] w-full bg-white"
          />

          <CustomFormField
            fieldType={FormFieldType.DATE}
            control={form.control}
            name="From"
            label="From"
            placeholder="YYYY-MM-DD"
            variant="w-full"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone_Number"
            label="Phone Number"
            placeholder="e.g., 0901 234 5678"
            variant="h-[40px] w-full bg-white"
          />

          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="transactionType"
            label="Transaction Type"
            placeholder="Select Transaction Type"
            variant="h-[40px] w-full"
            // defaultValue={userInfo?.data?.No_Employees || ""}
          >
            {WorkLocation.map((location, index) => (
              <SelectItem key={location + index} value={location}>
                {location}
              </SelectItem>
            ))}
          </CustomFormField>

          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="company_bio"
            label="Company's Bio"
            placeholder="Enter your company's Bio"
            variant="h-20 w-full bg-primary/10"
          />

          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="company_bio"
            label="Company's Bio"
            placeholder="Enter your company's Bio"
            variant="h-20 w-full"
          />

          <div className="mt-6 flex gap-4">
            <SubmitButton
              // clickFn={cancelModal}
              loadingText="Cancelling..."
              className="w-[150px] h-[50px] text-md cursor-pointer border border-primary hover:bg-white bg-white text-primary"
            >
              Cancel
            </SubmitButton>

            <SubmitButton
              loadingText="Deleting..."
              // clickFn={handleDelete}
              className="w-[300px] h-[50px] text-md cursor-pointer bg-red-700 hover:bg-red-700 text-white"
            >
              Yes, Delete
            </SubmitButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormData;
