"use client";

import {
  RegistrationForm,
  SponsorForm,
  VolunteerForm,
} from "@/components/registration-forms";

interface Props {
  collection: "register" | "sponsor" | "volunteer";
}

export function PageClient(props: Props) {
  switch (props.collection) {
    case "register":
      return <RegistrationForm />;
    case "sponsor":
      return <SponsorForm />;
    case "volunteer":
      return <VolunteerForm />;

    default:
      return <></>;
  }
}
