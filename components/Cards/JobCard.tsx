"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/Button";
import { JobData } from "@/types";
import Link from "next/link";

interface JobCardProps extends JobData {
  className?: string;
}
const JobCard = ({
  company_name,
  location,
  is_remote,
  experience,
  role,
  company_logo,
  className,
  id,
}: JobCardProps) => {
  return (
    <div
      className={cn(
        "border-border-card rounded-[10px] border-[3px] border-solid px-3 py-6",
        className,
      )}
    >
      <Image
        src={company_logo}
        width="205"
        height="52"
        alt={company_name}
        loading="lazy"
      />
      <div className="border-border-heading my-3 border-[1.5px]" />
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center justify-between">
          <p className="font-medium">{company_name}</p>
          {is_remote && (
            <p className="bg-background-gray rounded px-3 py-2 text-sm font-medium">
              Remote
            </p>
          )}
        </div>
        <p className="text-2xl font-semibold">{role}</p>
        <div className="flex items-center gap-x-2">
          <p className="text-text-label-2 font-medium">Location</p>
          <p>
            <span className="text-text-sub-heading">{location?.city}</span>,{" "}
            {location?.country}
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-text-label-2 font-medium">Experience</p>
          <p className="text-text-sub-heading">{experience}</p>
        </div>
      </div>
      <Link href={`/jobs/${id}`}>
        <button
          className={cn(
            buttonVariants(),
            "mt-[10px] border-2 border-solid border-border",
          )}
        >
          View Details
          <Image
            src="/assets/icons/right_arrow.svg"
            width="11"
            height="11"
            alt=""
            className="ml-1"
            loading="lazy"
          />
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
