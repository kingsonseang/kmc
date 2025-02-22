"use server";

import { Registration, Sponsor, Volunteer } from "@/schema";

export async function register(
  collection: "register" | "sponsor" | "volunteer",
  payload: Registration | Sponsor | Volunteer
) {
  try {
    const BASE_URL = process.env.BASE_URL;

    if (!BASE_URL) {
      throw new Error("Environment variables are not properly configured.");
    }

    const response = await fetch(`${BASE_URL}/${collection}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorDetails = await response.text();

      if (errorDetails) {
        const errorDetailsJson = JSON.parse(errorDetails);
        if (errorDetailsJson && errorDetailsJson?.error?.[0]?.message)
          return {
            status: false,
            message: errorDetailsJson?.error?.[0]?.message,
          };
      }
      throw new Error(
        `Failed to register: ${response.status} ${response.statusText}. Details: ${errorDetails}`
      );
    }

    const data = await response.json();
    return {
      status: true,
      message: data?.message || "Thank you for filling the form!",
      data: data?.data,
    };
  } catch (error: unknown) {
    console.error("Error during registration:", error);
    return {
      status: false,
      message: "An error occurred request could not be completed.",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
