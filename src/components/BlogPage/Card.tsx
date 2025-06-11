import { stringToDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  author,
  date,
  description,
  image,
  title,
  slug,
}: {
  author: string;
  date: string;
  description?: string;
  image: string;
  title: string;
  slug?: string;
}) => {
  return (
    <Link
      href={`blogs/${slug}`}
      className="flex flex-col justify-between items-start w-full gap-3"
    >
      <Image
        width={120}
        height={120}
        className="w-full aspect-video rounded-lg"
        src={image || "/images/avatar.jpg"}
        alt="Blog Cover Page"
      />
      <div className="w-full flex justify-between items-center">
        <p className="text-xs text-zinc-400">{stringToDate(date)}</p>
        <p className="text-xs text-zinc-200 font-semibold">By {author}</p>
      </div>

      <h5 className="text-sm font-semibold">{description}</h5>
    </Link>
  );
};

export default Card;
