// import { dummyData } from "@/lib/dummy-data";
// import { administrators, Administrator } from "@/schemas/adminstration-schema";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Form, useForm, FormProvider } from "react-hook-form";
// import { Input } from "../ui/input";
// import FormSectionTitle from "../causes/edit/form-section-title";
// import FormField from "../causes/edit/form-field";
// import { HeaderWrapper } from "../custom/header-wrapper";
// import Image from "next/image";
// import { Switch } from "../ui/switch";
// import { useState } from "react";
// import { Button } from "../ui/button";
// import { Trash2 } from "lucide-react";

// export const EditAdministrator = () => {
//     // Initialize form with validation schema
//     const form = useForm<Administrator>({
//       resolver: yupResolver(administrators),
//       defaultValues: dummyData,
//     });

//     const {
//       register,
//       handleSubmit,
//       formState: { errors },
//       setValue,
//       getValues,
//       trigger, // For manual revalidation
//     } = form;

//     // Handle form submission
//     const onSubmit = (data: Administrator) => {
//       console.log("Form Data:", data);
//       // Implement API call to update administrator here
//     };

//     // State for managing toggle switches
//     const [permissions, setPermissions] = useState({
//       dashboard: false,
//       causes: {
//         view: false,
//         create: false,
//         update: false,
//         delete: false,
//       },
//       rewards: {
//         topTier: { view: false },
//         charityLottery: { view: false },
//         nfts: { view: false, create: false },
//         staking: { view: false },
//       },
//       community: {
//         news: {
//           view: false,
//           create: false,
//           update: false,
//           delete: false,
//         },
//         users: {
//           view: false,
//           blockUnblock: false,
//         },
//         administrators: {
//           view: false,
//           create: false,
//           update: false,
//           updateOwnAccount: false,
//           delete: false,
//         },
//       },
//       dappGlobalSettings: {
//         causes: false,
//         governance: false,
//         rewards: false,
//         walletsManagement: false,
//       },
//     });

//     // Function to handle toggle switch changes
//     const handleToggle = async (path: string) => {
//         setPermissions((prev) => {
//           // Deep copy to ensure React state updates correctly
//           const newPermissions = JSON.parse(JSON.stringify(prev));

//           const keys = path.split(".");
//           let current: any = newPermissions;

//           // Navigate to the nested property
//           for (let i = 0; i < keys.length - 1; i++) {
//             if (!current[keys[i]]) current[keys[i]] = {}; // Ensure path exists
//             current = current[keys[i]];
//           }

//           // Toggle the value
//           current[keys[keys.length - 1]] = !current[keys[keys.length - 1]];

//           // Update form state
//           setValue(`permissions.${path}`, current[keys[keys.length - 1]]);

//           return newPermissions;
//         });

//         // Revalidate the form after updating permissions
//         await trigger(`permissions.${path}`);
//       };

//     return (
//       <div className="px-5">
//         {/* Header */}
//         <div className="mx-8 mt-2">
//           <HeaderWrapper
//             title="Edit Administrator"
//             description="Edit administrator details"
//             size={"xs"}
//           />
//         </div>

//         {/* Form Provider */}
//         <FormProvider {...form}>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-8 grid grid-cols-2 max-md:grid-cols-1 gap-4">
//               {/* Main Details Section */}
//               <FormSectionTitle title="Main details" className="col-span-2" />

//               </div>

//               {/* Permissions Section */}
//               <FormSectionTitle title="Permissions" className="col-span-2" />
//               <p className="text-muted-foreground col-span-2 text-xs">
//                 Select all the permissions that will be available for this user in
//                 the private administration area of the CharCoin ecosystem
//               </p>
//               <div className="col-span-2">
//                 {/* Dashboard */}
//                 <div className="border-b border-gray-800 py-3">
//                   <div className="flex items-center gap-4">
//                     <span>Dashboard</span>
//                     <Switch
//                       checked={permissions.dashboard}
//                       onCheckedChange={() => handleToggle("dashboard")}
//                     />
//                   </div>
//                 </div>

//                 {/* Causes */}
//                 <div className="border-b border-gray-800 py-3">
//                   <div className="flex items-center gap-4">
//                     <span>
//                       Causes{" "}
//                       <span className="text-xs text-gray-400">(View)</span>
//                     </span>
//                     <Switch
//                       checked={permissions.causes.view}
//                       onCheckedChange={() => handleToggle("causes.view")}
//                     />
//                   </div>
//                   {permissions.causes.view && (
//                     <div className="ml-6 mt-2 space-y-2 flex gap-8">
//                       <div className="flex items-center gap-2">
//                         <span>Create</span>
//                         <Switch
//                           checked={permissions.causes.create}
//                           onCheckedChange={() => handleToggle("causes.create")}
//                         />
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span>Update</span>
//                         <Switch
//                           checked={permissions.causes.update}
//                           onCheckedChange={() => handleToggle("causes.update")}
//                         />
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span>Delete</span>
//                         <Switch
//                           checked={permissions.causes.delete}
//                           onCheckedChange={() => handleToggle("causes.delete")}
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Rewards */}
//                 <div className="border-b border-gray-800 py-3">
//                   <div className="flex items-center gap-4">
//                     <span>Rewards</span>
//                     <Switch
//                       checked={permissions.rewards.topTier.view}
//                       onCheckedChange={() =>
//                         handleToggle("rewards.topTier.view")
//                       }
//                     />
//                   </div>
//                   {permissions.rewards.topTier.view && (
//                     <div className="ml-6 mt-2 space-y-2 flex flex-wrap gap-8">
//                       <div className="flex items-center gap-4">
//                         <span>
//                           Top Tier{" "}
//                           <span className="text-xs text-gray-400">(View)</span>
//                         </span>
//                         <Switch
//                           checked={permissions.rewards.topTier.view}
//                           onCheckedChange={() =>
//                             handleToggle("rewards.topTier.view")
//                           }
//                         />
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span>
//                           Charity Lottery{" "}
//                           <span className="text-xs text-gray-400">(View)</span>
//                         </span>
//                         <Switch
//                           checked={permissions.rewards.charityLottery.view}
//                           onCheckedChange={() =>
//                             handleToggle("rewards.charityLottery.view")
//                           }
//                         />
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span>
//                           NFTs{" "}
//                           <span className="text-xs text-gray-400">(View)</span>
//                         </span>
//                         <Switch
//                           checked={permissions.rewards.nfts.view}
//                           onCheckedChange={() =>
//                             handleToggle("rewards.nfts.view")
//                           }
//                         />
//                       </div>
//                       {permissions.rewards.nfts.view && (
//                         <div className="ml-6 mt-2">
//                           <div className="flex items-center gap-2">
//                             <span>Create</span>
//                             <Switch
//                               checked={permissions.rewards.nfts.create}
//                               onCheckedChange={() =>
//                                 handleToggle("rewards.nfts.create")
//                               }
//                             />
//                           </div>
//                         </div>
//                       )}
//                       <div className="flex items-center justify-between">
//                         <span>
//                           Staking{" "}
//                           <span className="text-xs text-gray-400">(View)</span>
//                         </span>
//                         <Switch
//                           checked={permissions.rewards.staking.view}
//                           onCheckedChange={() =>
//                             handleToggle("rewards.staking.view")
//                           }
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Community */}
//                 <div className="border-b border-gray-800 py-3">
//                   <div className="flex items-center justify-between">
//                     <span>Community</span>
//                     <Switch
//                       checked={permissions.community.news.view}
//                       onCheckedChange={() =>
//                         handleToggle("community.news.view")
//                       }
//                     />
//                   </div>
//                   {permissions.community.news.view && (
//                     <div className="ml-6 mt-2 space-y-2">
//                       <div className="flex items-center justify-between">
//                         <span>Create</span>
//                         <Switch
//                           checked={permissions.community.news.create}
//                           onCheckedChange={() =>
//                             handleToggle("community.news.create")
//                           }
//                         />
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span>Update</span>
//                         <Switch
//                           checked={permissions.community.news.update}
//                           onCheckedChange={() =>
//                             handleToggle("community.news.update")
//                           }
//                         />
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span>Delete</span>
//                         <Switch
//                           checked={permissions.community.news.delete}
//                           onCheckedChange={() =>
//                             handleToggle("community.news.delete")
//                           }
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Dapp Global Settings */}
//                 <div className="border-b border-gray-800 py-3">
//                   <div className="flex items-center justify-between">
//                     <span>Dapp Global Settings</span>
//                     <Switch
//                       checked={permissions.dappGlobalSettings.causes}
//                       onCheckedChange={() =>
//                         handleToggle("dappGlobalSettings.causes")
//                       }
//                     />
//                   </div>
//                   {permissions.dappGlobalSettings.causes && (
//                     <div className="ml-6 mt-2 space-y-2">
//                       <div className="flex items-center justify-between">
//                         <span>Governance</span>
//                         <Switch
//                           checked={permissions.dappGlobalSettings.governance}
//                           onCheckedChange={() =>
//                             handleToggle("dappGlobalSettings.governance")
//                           }
//                         />
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span>Rewards</span>
//                         <Switch
//                           checked={permissions.dappGlobalSettings.rewards}
//                           onCheckedChange={() =>
//                             handleToggle("dappGlobalSettings.rewards")
//                           }
//                         />
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span>Wallets Management</span>
//                         <Switch
//                           checked={permissions.dappGlobalSettings.walletsManagement}
//                           onCheckedChange={() =>
//                             handleToggle("dappGlobalSettings.walletsManagement")
//                           }
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="flex justify-between mb-5 mt-4">
//               <Button
//                 type="submit"
//                 size={"lg"}
//               >
//                 Update administrator
//               </Button>
//               <Button
//                 size={"lg"}
//                 variant={"destructive"}
//                 type="button"
//               >
//                 <Trash2 className="h-4 w-4" />
//                 Delete
//               </Button>
//             </div>
//           </form>
//         </FormProvider>
//       </div>
//     );
//   };

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "react-hook-form";
import { Input } from "../ui/input";
import FormSectionTitle from "../causes/edit/form-section-title";
import FormField from "../causes/edit/form-field";
import { HeaderWrapper } from "../custom/header-wrapper";
import Image from "next/image";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { Administrator, administrators } from "@/schemas/adminstration-schema";
import { useTogglePermissions } from "@/stores/toggle-store";

export const EditAdministrator = () => {
  const form = useForm<Administrator>({
    resolver: yupResolver(administrators),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      accessPin: "",
      password: "",
      phone: "",
      authenticatorApp: "",
      permissions: {
        dashboard: false,
        causes: {
          view: false,
          create: false,
          update: false,
          delete: false,
        },
        rewards: {
          topTier: { view: false },
          charityLottery: { view: false },
          nfts: { view: false, create: false },
          staking: { view: false },
        },
        community: {
          news: {
            view: false,
            create: false,
            update: false,
            delete: false,
          },
          users: {
            view: false,
            blockUnblock: false,
          },
          administrators: {
            view: false,
            create: false,
            update: false,
            updateOwnAccount: false,
            delete: false,
          },
        },
        dappGlobalSettings: {
          causes: false,
          governance: false,
          rewards: false,
          walletsManagement: false,
        },
      },
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = form;

  const onSubmit = (data: Administrator) => {
    console.log("Form Data:", data);
    // Implement API call to update administrator here
  };

  const { permissions, handleToggle } = useTogglePermissions(
    form.getValues().permissions,
    setValue as any,
    trigger as any
  );

  return (
    <div className="px-5">
      {/* Header */}
      <HeaderWrapper
        title="Edit Administrator"
        description="Edit administrator details"
        size={"xs"}
      />

      {/* Form Provider */}
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8 grid grid-cols-2 max-md:grid-cols-1 gap-4">
            {/* Main Details Section */}
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
              description="Enter a phone to receive SMS OTP verifications"
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
              description="Enter a six-digit PIN code"
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
            <FormField
              id="authenticatorApp"
              label="Authenticator Application"
              description="Choose your login OTP verification application"
              error={errors.authenticatorApp?.message as string | undefined}
            >
              <Input
                variant="newly_secondary"
                inputSize="lg"
                id="authenticatorApp"
                className="bg-gray-800 border-gray-700 text-white"
                {...register("authenticatorApp")}
              />
            </FormField>
            <div className="h-full flex items-center">
              <div className="text-xs">
                <h3>Verify your authenticator</h3>
                <p className="text-muted-foreground">
                  Scan the QR with your authenticator application and follow the
                  steps in your mobile phone
                </p>
              </div>
              <Image
                src="/feature-image.png"
                alt="qr"
                width={100}
                height={100}
                className="object-cover w-20 h-20 bg-foreground p-2"
              />
            </div>

            {/* Permissions Section */}
            <FormSectionTitle title="Permissions" className="col-span-2" />
            <p className="text-muted-foreground col-span-2 text-xs">
              Select all the permissions that will be available for this user in
              the private administration area of the CharCoin ecosystem
            </p>
            <div className="col-span-2">
              {/* Dashboard */}
              <div className="border-b border-gray-800 py-3">
                <div className="flex items-center gap-4">
                  <span>Dashboard</span>
                  <Switch
                    checked={permissions.dashboard}
                    onCheckedChange={() => handleToggle("dashboard")}
                  />
                </div>
              </div>

              {/* Causes */}
              <div className="border-b border-gray-800 py-3">
                <div className="flex items-center gap-4">
                  <span>
                    Causes <span className="text-xs text-gray-400">(View)</span>
                  </span>
                  <Switch
                    checked={permissions.causes.view}
                    onCheckedChange={() => handleToggle("causes.view")}
                  />
                </div>
                {permissions.causes.view && (
                  <div className="ml-6 mt-2 space-y-2 flex gap-8">
                    <div className="flex items-center gap-2">
                      <span>Create</span>
                      <Switch
                        checked={permissions.causes.create}
                        onCheckedChange={() => handleToggle("causes.create")}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Update</span>
                      <Switch
                        checked={permissions.causes.update}
                        onCheckedChange={() => handleToggle("causes.update")}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Delete</span>
                      <Switch
                        checked={permissions.causes.delete}
                        onCheckedChange={() => handleToggle("causes.delete")}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Rewards */}
              <div className="border-b border-gray-800 py-3">
                <div className="flex items-center gap-4">
                  <span>Rewards</span>
                  <Switch
                    checked={permissions.rewards.topTier.view}
                    onCheckedChange={() => handleToggle("rewards.topTier.view")}
                  />
                </div>
                {permissions.rewards.topTier.view && (
                  <div className="ml-6 mt-2 space-y-2 flex flex-wrap gap-8">
                    <div className="flex items-center gap-4">
                      <span>
                        Top Tier{" "}
                        <span className="text-xs text-gray-400">(View)</span>
                      </span>
                      <Switch
                        checked={permissions.rewards.topTier.view}
                        onCheckedChange={() =>
                          handleToggle("rewards.topTier.view")
                        }
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <span>
                        Charity Lottery{" "}
                        <span className="text-xs text-gray-400">(View)</span>
                      </span>
                      <Switch
                        checked={permissions.rewards.charityLottery.view}
                        onCheckedChange={() =>
                          handleToggle("rewards.charityLottery.view")
                        }
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <span>
                        NFTs{" "}
                        <span className="text-xs text-gray-400">(View)</span>
                      </span>
                      <Switch
                        checked={permissions.rewards.nfts.view}
                        onCheckedChange={() =>
                          handleToggle("rewards.nfts.view")
                        }
                      />
                    </div>
                    {permissions.rewards.nfts.view && (
                      <div className="ml-6 mt-2">
                        <div className="flex items-center gap-4">
                          <span>Create</span>
                          <Switch
                            checked={permissions.rewards.nfts.create}
                            onCheckedChange={() =>
                              handleToggle("rewards.nfts.create")
                            }
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-4">
                      <span>
                        Staking{" "}
                        <span className="text-xs text-gray-400">(View)</span>
                      </span>
                      <Switch
                        checked={permissions.rewards.staking.view}
                        onCheckedChange={() =>
                          handleToggle("rewards.staking.view")
                        }
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Community */}
              <div className="border-b border-gray-800 py-3">
                <div className="flex items-center gap-4">
                  <span>Community</span>
                  <Switch
                    checked={permissions.community.news.view}
                    onCheckedChange={() => handleToggle("community.news.view")}
                  />
                </div>
                {permissions.community.news.view && (
                  <div className="ml-6 mt-2 space-y-2 flex gap-8">
                    <div className="flex items-center gap-4">
                      <span>Create</span>
                      <Switch
                        checked={permissions.community.news.create}
                        onCheckedChange={() =>
                          handleToggle("community.news.create")
                        }
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <span>Update</span>
                      <Switch
                        checked={permissions.community.news.update}
                        onCheckedChange={() =>
                          handleToggle("community.news.update")
                        }
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <span>Delete</span>
                      <Switch
                        checked={permissions.community.news.delete}
                        onCheckedChange={() =>
                          handleToggle("community.news.delete")
                        }
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Dapp Global Settings */}
              <div className="border-b border-gray-800 py-3">
                <div className="flex items-center gap-4">
                  <span>Dapp Global Settings</span>
                  <Switch
                    checked={permissions.dappGlobalSettings.causes}
                    onCheckedChange={() =>
                      handleToggle("dappGlobalSettings.causes")
                    }
                  />
                </div>
                {permissions.dappGlobalSettings.causes && (
                  <div className="ml-6 mt-2 space-y-2 flex gap-8">
                    <div className="flex items-center gap-4">
                      <span>Governance</span>
                      <Switch
                        checked={permissions.dappGlobalSettings.governance}
                        onCheckedChange={() =>
                          handleToggle("dappGlobalSettings.governance")
                        }
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <span>Rewards</span>
                      <Switch
                        checked={permissions.dappGlobalSettings.rewards}
                        onCheckedChange={() =>
                          handleToggle("dappGlobalSettings.rewards")
                        }
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <span>Wallets Management</span>
                      <Switch
                        checked={
                          permissions.dappGlobalSettings.walletsManagement
                        }
                        onCheckedChange={() =>
                          handleToggle("dappGlobalSettings.walletsManagement")
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between mb-5 mt-4">
            <Button type="submit" size={"lg"}>
              Update administrator
            </Button>
            <Button size={"lg"} variant={"destructive"} type="button">
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
