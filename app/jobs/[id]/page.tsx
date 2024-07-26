import { buttonVariants } from "@/components/Button";
import JobCard from "@/components/Cards/JobCard";
import { jobDetails, jobsList } from "@/lib/mock_data";
import { cn } from "@/lib/utils";
import {
  BriefcaseBusiness,
  Building,
  IndianRupee,
  LocateFixed,
} from "lucide-react";
import Image from "next/image";

export default async function page() {
  const {
    company_logo,
    company_name,
    company_size_domain,
    compensation,
    level,
    location,
    responsibilites,
    role,
    skills,
  } = jobDetails;

  return (
    <div>
      <section
        id="job-header"
        className="mx-6 mt-14 flex w-full flex-col justify-center lg:mx-32 lg:max-w-2xl"
      >
        <Image
          src={company_logo}
          alt={company_name}
          loading="lazy"
          width="153"
          height="39"
        />
        <h2 className="mt-3 text-2xl font-medium lg:text-5xl">{role}</h2>
        <div className="mt-4 flex items-center justify-start gap-5 text-sm lg:text-lg">
          <BriefcaseBusiness className="h-6 w-7" />
          <span className="font-medium">{level}</span>
        </div>
        <div className="mt-2 flex items-center justify-start gap-5 text-sm lg:text-lg">
          <Building className="h-6 w-7" />
          <span className="font-medium">{company_size_domain}</span>
        </div>
        <div className="mt-2 flex items-center justify-start gap-5 text-sm lg:text-lg">
          <LocateFixed className="h-6 w-7" />
          <span className="font-medium">{location}</span>
        </div>
        <div className="mt-2 flex items-center justify-start gap-5 text-sm lg:text-lg">
          <IndianRupee className="h-5 w-7" />
          <span className="font-medium">{compensation}</span>
        </div>
      </section>
      <div className="mx-6 mt-5 max-w-2xl text-lg font-medium lg:mx-32 lg:text-2xl">
        Job Role: Lead Frontend Engineer - Payments
      </div>
      <section
        id="job-responsibilities"
        className="mx-6 mt-5 flex w-full flex-col text-xs lg:mx-32 lg:max-w-3xl lg:text-base"
      >
        <span className="font-medium">Roles and Responsibilities:</span>
        <ul className="ml-4 mt-4 w-full max-w-[312px] list-disc lg:ml-8 lg:max-w-[713px]">
          {responsibilites.map((resp, i) => (
            <li key={`responsibility_${i}`}>{resp}</li>
          ))}
        </ul>
      </section>
      <section
        id="job-skills-and-experience"
        className="mx-6 mt-5 flex w-full flex-col text-xs lg:mx-32 lg:max-w-3xl lg:text-base"
      >
        <span className="font-medium">Desired skills and experience:</span>
        <ul className="ml-4 mt-4 w-full max-w-[312px] list-disc lg:ml-8 lg:max-w-[713px]">
          {skills.map((skill, i) => (
            <li key={`skills_${i}`}>{skill}</li>
          ))}
        </ul>
      </section>
      <div className="mx-6 mt-6 lg:mx-32">
        <button
          className={cn(
            buttonVariants(),
            "mt-[10px] flex h-12 w-36 justify-between border-2 border-solid border-border text-sm font-medium lg:h-14 lg:w-56 lg:text-[20px]",
          )}
        >
          Apply now
          <Image
            src="/assets/icons/right_arrow.svg"
            width="17"
            height="17"
            alt=""
            className="ml-1"
            loading="lazy"
          />
        </button>
      </div>

      <section id="job-similar" className="mx-4 mt-24 lg:mx-32">
        <h2 className="text-4xl font-medium">Similar Roles</h2>
        <div className="carousel carousel-center mt-4 flex max-w-full justify-between gap-7 lg:grid lg:grid-cols-4 lg:gap-4">
          {jobsList?.length > 0 &&
            jobsList
              .slice(0, 4)
              .map((job, i) => (
                <JobCard
                  key={i}
                  {...job}
                  className="carousel-item min-w-[280px] lg:min-w-min"
                />
              ))}
        </div>
      </section>

      <section id="job-popular" className="mx-4 mt-24 lg:mx-32 lg:mb-32">
        <h2 className="text-4xl font-medium">Most Popular</h2>
        <div className="carousel carousel-center mt-4 flex max-w-full justify-between gap-7 lg:grid lg:grid-cols-4 lg:gap-4">
          {jobsList?.length > 0 &&
            jobsList
              .slice(0, 4)
              .map((job, i) => (
                <JobCard
                  key={i}
                  {...job}
                  className="carousel-item min-w-[280px] lg:min-w-min"
                />
              ))}
        </div>
      </section>
    </div>
  );
}
