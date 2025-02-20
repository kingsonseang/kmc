import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

// match URLs with optional http, https, and www
const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/;

export const defaultSchema = z.object({
  name: z.string().min(2, { message: "required" }),
  email: z.string().email(),
  tel: z.string().refine(
    (phoneNumber) => {
      try {
        const parsedNumber = parsePhoneNumberFromString(phoneNumber);
        return (
          parsedNumber &&
          parsedNumber.isValid() &&
          parsedNumber.format("E.164") === phoneNumber
        );
      } catch {
        return false;
      }
    },
    {
      message: "Invalid phone number format.",
    }
  ),
  gender: z.enum(["male", "female", "other"], { message: "Select an option" }),
});

export const Registration = defaultSchema.extend({
  metadata: z.object({
    financial_goals: z.string().min(2, { message: "required" }),
  }),
});
export type Registration = z.infer<typeof Registration>;

export const sponsorshipType = [
  "Financial",
  "Product",
  "Service",
  "Venue",
  "Other",
] as const;
export const sponsorshipCategory = [
  "Platinum",
  "Gold",
  "Silver",
  "Bronze",
  "Custom",
] as const;

export const Sponsor = defaultSchema.extend({
  metadata: z.object({
    contactPerson: z.string(),
    website: z.string().regex(urlRegex, { message: "Provide a proper url" }),
    location: z.string().min(2, { message: "required" }),
    sponsorhip: z.object({
      category: z.enum(sponsorshipCategory, {
        message: "Select an option",
      }),
      custom: z.string(),
      type: z.enum(sponsorshipType, {
        message: "Select an option",
      }),
      other: z.string(),
      motivation: z.string().min(2, { message: "required" }),
      requests: z.string().min(2, { message: "required" }),
      future: z.boolean(),
    }),
    brandingBooth: z.boolean(),
    brandingBoothAssets: z.boolean(),
  }),
});
export type Sponsor = z.infer<typeof Sponsor>;

export const tShirtSizes = ["XS", "S", "M", "L", "XL", "XXL"] as const;
export const volunteerGroups = [
  "Registration & Check-in",
  "Ushering & Guest Support",
  "Logistics & Set-up",
  "Media & Content Creation",
  "Prayer & Spiritual Support",
  "Others",
] as const;

export const Volunteer = defaultSchema.extend({
  metadata: z.object({
    shirt_size: z.enum(tShirtSizes, {
      message: "Select an option",
    }),
    skills: z.string().min(2, { message: "required" }),
    motivation: z.string().min(2, { message: "required" }),
    availability: z.boolean(),
    teams: z.object({
      value: z.array(z.string()).min(1, { message: "Select at least one" }),
      other: z.string(),
    }),
    expectations: z.string().min(2, { message: "required" }),
    futureInterest: z.boolean(),
  }),
});
export type Volunteer = z.infer<typeof Volunteer>;
