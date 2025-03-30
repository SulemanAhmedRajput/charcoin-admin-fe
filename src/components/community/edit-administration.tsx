import { dummyData } from "@/lib/dummy-data";
import { administrators, Administrator } from "@/schemas/adminstration-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, useForm, FormProvider } from "react-hook-form";
import { Input } from "../ui/input";
import FormSectionTitle from "../causes/edit/form-section-title";
import FormField from "../causes/edit/form-field";
import { HeaderWrapper } from "../custom/header-wrapper";

export const EditAdministrator = () => {
  const form = useForm<Administrator>({
    resolver: yupResolver(administrators),
    defaultValues: dummyData,
  });

  const {
    register,
    formState: { errors },
    setValue,
    getValues,
  } = form;

  const onSubmit = (data: Administrator) => {
    console.log(data);
  };
  return (
    <div className="px-5">
      {/* Header */}
          <div className="mx-8 mt-2">
          <HeaderWrapper
        title="Edit Administrator"
        description="Edit administrator details"
        size={"xs"}
      />
      </div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-8 grid grid-cols-2 max-md:grid-cols-1 gap-4">
            <FormSectionTitle title="Main details"  className="col-span-2" />

            <FormField
              id="username"
              label="Username"
              description="Choose a unique username"
              error={errors.username?.message as string | undefined}
            >
              <Input
                variant="newly_secondary"
                inputSize="lg"
                id="username"
                className="bg-gray-800 border-gray-700 text-white"
                {...register("username")}
              />
            </FormField>
            <FormField
              id="name"
              label="Name"
              description="Enter a full name"
              error={errors.name?.message as string | undefined}
            >
              <Input
                variant="newly_secondary"
                inputSize="lg"
                id="name"
                className="bg-gray-800 border-gray-700 text-white"
                {...register("name")}
              />
            </FormField>
            <FormField
              id="email"
              label="Email"
              description="Enter a CharCoin official email to receive OTP verifications"
              error={errors.email?.message as string | undefined}
            >
              <Input
                variant="newly_secondary"
                inputSize="lg"
                id="email"
                className="bg-gray-800 border-gray-700 text-white"
                {...register("email")}
              />
            </FormField>
            <FormField
              id="phone"
              label="Phone"
              description="Enter a phone to to receive SMS OTP verifications"
              error={errors.phone?.message as string | undefined}
            >
              <Input
                variant="newly_secondary"
                inputSize="lg"
                id="phone"
                className="bg-gray-800 border-gray-700 text-white"
                {...register("phone")}
              />
            </FormField>
            <FormField
              id="accessPin"
              label="Access PIN"
              description="Enter a six digits PIN code"
              error={errors.accessPin?.message as string | undefined}
            >
              <Input
                variant="newly_secondary"
                inputSize="lg"
                type="password"
                id="accessPin"
                className="bg-gray-800 border-gray-700 text-white"
                {...register("accessPin")}
              />
            </FormField>
            <FormField
              id="password"
              label="Password"
              description="Enter a safe password"
              error={errors.password?.message as string | undefined}
            >
              <Input
                variant="newly_secondary"
                inputSize="lg"
                type="password"
                id="password"
                className="bg-gray-800 border-gray-700 text-white"
                {...register("password")}
              />
            </FormField>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
