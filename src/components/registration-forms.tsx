"use client";

import * as React from "react";
import {
  Registration,
  Sponsor,
  sponsorshipCategory,
  sponsorshipType,
  tShirtSizes,
  Volunteer,
  volunteerGroups,
} from "@/schema";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Checkbox } from "./checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PhoneInput } from "./phone-input";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorContent,
  MultiSelectorItem,
  MultiSelectorInput,
  MultiSelectorList,
} from "@/components/multi-select";
import { toast } from "sonner";
import { register } from "@/actions/register";
import { Loader2 } from "lucide-react";

async function onSubmitRegistration(
  collection: "register" | "sponsor" | "volunteer",
  values: Registration | Sponsor | Volunteer,
  reset: () => void
) {
  try {
    const response = await register(collection, values);

    if (!response.status) {
      toast.error(
        response?.message || "An error occurred request could not be completed."
      );
      return;
    }

    reset();
    toast.success(response?.message || "Thank you for filling the form.");
  } catch (error: any) {
    toast.error(
      error?.message || "An error occurred request could not be completed."
    );
  }
}

export function RegistrationForm() {
  const form = useForm<Registration>({
    resolver: zodResolver(Registration),
    defaultValues: {
      name: "",
      email: "",
      tel: "",
      gender: "" as unknown as any,
      metadata: {
        financial_goals: "",
      },
    },
  });

  const [super_key, setSuperKey] = React.useState(new Date().getTime());

  async function onSubmit(values: Registration) {
    return await onSubmitRegistration("register", values, () => {
      form.reset();
      setSuperKey(new Date().getTime());
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your full name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter an email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='tel'
          render={({ field }) => (
            <FormItem className='flex flex-col items-start space-y-1'>
              <FormLabel className='text-left'>Phone Number</FormLabel>
              <FormControl className='w-full'>
                <PhoneInput
                  defaultCountry='NG'
                  placeholder='Enter a phone number'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='gender'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select
                key={super_key + 1}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select an option' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='male'>Male</SelectItem>
                  <SelectItem value='female'>Female</SelectItem>
                  <SelectItem value='other'>Rather not say</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.financial_goals'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What is your biggest financial goal for the next 5 years?
              </FormLabel>
              <FormControl>
                <Textarea placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='pt-3'>
          <Button className='flex'>
            {form.formState.isSubmitting && (
              <Loader2 className='animate-spin' />
            )}
            <span>Register</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}

export function SponsorForm() {
  const form = useForm<Sponsor>({
    resolver: zodResolver(Sponsor),
    defaultValues: {
      name: "",
      email: "",
      tel: "",
      gender: "" as unknown as any,
      metadata: {
        website: "",
        contactPerson: "",
        location: "",
        brandingBooth: false,
        brandingBoothAssets: false,
        sponsorhip: {
          category: "" as unknown as any,
          custom: "",
          motivation: "",
          requests: "",
          type: "" as unknown as any,
          other: "",
          future: false,
        },
      },
    },
  });

  const [super_key, setSuperKey] = React.useState(new Date().getTime());

  async function onSubmit(values: Sponsor) {
    return await onSubmitRegistration("sponsor", values, () => {
      form.reset();
      setSuperKey(new Date().getTime());
    });
  }

  const category = form.watch("metadata.sponsorhip.category");
  const type = form.watch("metadata.sponsorhip.type");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name / Organization Name</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.contactPerson'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Contact Person <span className='text-sm'>(if applicable)</span>
              </FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter an email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='tel'
          render={({ field }) => (
            <FormItem className='flex flex-col items-start space-y-1'>
              <FormLabel className='text-left'>Phone Number</FormLabel>
              <FormControl className='w-full'>
                <PhoneInput
                  defaultCountry='NG'
                  placeholder='Enter a phone number'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='gender'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select
                key={super_key + 1}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select an option' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='male'>Male</SelectItem>
                  <SelectItem value='female'>Female</SelectItem>
                  <SelectItem value='other'>Rather not say</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.website'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Website / Social Media{" "}
                <span className='text-sm'>(if applicable)</span>
              </FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.location'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.sponsorhip.category'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sponsorship Category</FormLabel>
              <FormControl>
                <RadioGroup
                  key={super_key + 2}
                  onValueChange={(value) => {
                    field.onChange(value);

                    if (value !== "Custom") {
                      form.setValue("metadata.sponsorhip.custom", "");
                    }
                  }}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  {sponsorshipCategory.map((item) => (
                    <FormItem
                      key={item}
                      className='flex items-center space-x-3 space-y-0'
                    >
                      <FormControl>
                        <RadioGroupItem value={item} />
                      </FormControl>
                      <FormLabel className='font-normal'>{item}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {category === "Custom" && (
          <FormField
            control={form.control}
            name='metadata.sponsorhip.custom'
            render={({ field }) => (
              <FormItem className='pb-3'>
                <FormLabel>Please specify amount or type of support</FormLabel>
                <FormControl>
                  <Input placeholder='' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name='metadata.sponsorhip.type'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Sponsorship Type</FormLabel>
              <FormControl>
                <RadioGroup
                  key={super_key + 3}
                  onValueChange={(value) => {
                    field.onChange(value);

                    if (value !== "Other") {
                      form.setValue("metadata.sponsorhip.other", "");
                    }
                  }}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  {sponsorshipType.map((item) => (
                    <FormItem
                      key={item}
                      className='flex items-center space-x-3 space-y-0'
                    >
                      <FormControl>
                        <RadioGroupItem value={item} />
                      </FormControl>
                      <FormLabel className='font-normal'>{item}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {type === "Other" && (
          <FormField
            control={form.control}
            name='metadata.sponsorhip.other'
            render={({ field }) => (
              <FormItem className='pb-3'>
                <FormLabel>Please specify</FormLabel>
                <FormControl>
                  <Input placeholder='' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name='metadata.brandingBooth'
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center gap-2'>
                <FormControl>
                  <Checkbox
                    key={super_key + 4}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>
                  Would you like to have a booth or branding at the event?
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.brandingBoothAssets'
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center gap-2'>
                <FormControl>
                  <Checkbox
                    key={super_key + 5}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>
                  Will you provide your logo & branding materials?
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.sponsorhip.motivation'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Why do you want to sponsor the Kingdom Millionaires Convention?
              </FormLabel>
              <FormControl>
                <Textarea placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.sponsorhip.future'
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center gap-2'>
                <FormControl>
                  <Checkbox
                    key={super_key + 6}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className='leading-none'>
                  Are you open to future sponsorship opportunities?
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.sponsorhip.requests'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Any other comments or special requests?</FormLabel>
              <FormControl>
                <Textarea placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='pt-3'>
          <Button className='flex'>
            {form.formState.isSubmitting && (
              <Loader2 className='animate-spin' />
            )}
            <span>Register</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}

export function VolunteerForm() {
  const form = useForm<Volunteer>({
    resolver: zodResolver(Volunteer),
    defaultValues: {
      name: "",
      email: "",
      tel: "",
      gender: "" as unknown as any,
      metadata: {
        teams: {
          value: [],
          other: "",
        },
        expectations: "",
        futureInterest: false,
        motivation: "",
        shirt_size: "" as unknown as any,
        skills: "",
        availability: false,
      },
    },
  });

  const [super_key, setSuperKey] = React.useState(new Date().getTime());

  async function onSubmit(values: Volunteer) {
    return await onSubmitRegistration("volunteer", values, () => {
      form.reset();
      setSuperKey(new Date().getTime());
    });
  }

  const teamValue = form.watch("metadata.teams.value");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your full name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter an email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='tel'
          render={({ field }) => (
            <FormItem className='flex flex-col items-start'>
              <FormLabel className='text-left'>Phone Number</FormLabel>
              <FormControl className='w-full'>
                <PhoneInput
                  defaultCountry='NG'
                  placeholder='Enter a phone number'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='gender'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select
                key={super_key + 1}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select an option' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='male'>Male</SelectItem>
                  <SelectItem value='female'>Female</SelectItem>
                  <SelectItem value='other'>Rather not say</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.shirt_size'
          render={({ field }) => (
            <FormItem>
              <FormLabel>T-Shirt Size</FormLabel>
              <FormControl>
                <RadioGroup
                  key={super_key + 2}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  {tShirtSizes.map((item) => (
                    <FormItem
                      key={item}
                      className='flex items-center space-x-3 space-y-0'
                    >
                      <FormControl>
                        <RadioGroupItem value={item} />
                      </FormControl>
                      <FormLabel className='font-normal'>{item}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.skills'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What skill or experience do you have that will help in this
                role?
              </FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.motivation'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Why do you want to volunteer for the Kingdom Millionaires
                Convention?
              </FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.availability'
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center gap-2'>
                <FormControl>
                  <Checkbox
                    key={super_key + 3}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className='leading-none'>
                  Are you available for the full event duration (8 AM - 6 PM) on
                  June 14, 2025?
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.teams.value'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Which team would you like to serve in? (Select one or more)
              </FormLabel>
              <FormControl>
                <MultiSelector
                  onValuesChange={(value) => {
                    field.onChange(value);

                    if (!value.includes("Others")) {
                      form.setValue("metadata.teams.other", "");
                    }
                  }}
                  values={field.value}
                >
                  <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder='Select items' />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      {volunteerGroups.map((item) => (
                        <MultiSelectorItem key={item} value={item}>
                          {item}
                        </MultiSelectorItem>
                      ))}
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {teamValue?.includes("Others") && (
          <FormField
            control={form.control}
            name='metadata.teams.other'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Others (Please specify)</FormLabel>
                <FormControl>
                  <Input placeholder='' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name='metadata.expectations'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What do you hope to gain from this volunteering experience?
              </FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='metadata.futureInterest'
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center gap-2'>
                <FormControl>
                  <Checkbox
                    key={super_key + 5}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className='leading-none'>
                  Would you be interested in volunteering for future events?
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <div className='pt-3'>
          <Button className='flex'>
            {form.formState.isSubmitting && (
              <Loader2 className='animate-spin' />
            )}
            <span>Register</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
