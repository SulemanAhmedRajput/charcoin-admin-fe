import * as yup from "yup";

const campaignSchema = yup
  .object({
    name: yup.string().required("Campaign name is required"),
    year: yup
      .string().required("Year is Required"),
    endDate: yup
      .date()
      .required("End date is required")
      .min(new Date(), "End date must be after the current date") // End date cannot be before today
      .max(new Date("9999-12-31"), "End date is too far in the future"), // Set maximum end date
    annualSpecialCampaign: yup
      .boolean()
      .required("Annual special campaign status is required"), // Switch for annual campaign
  })
  .required();

export type CampaignSchemaType = yup.InferType<typeof campaignSchema>;

export { campaignSchema };
