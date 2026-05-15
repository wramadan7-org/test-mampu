import {
  ArrowLeft,
  BotMessageSquare,
  Building2,
  DoorOpen,
  Globe,
  Mail,
  Map,
  MapPin,
  Phone,
} from "lucide-react";
import { User } from "../_type/user";
import Link from "next/link";
import InfoItem from "./_component/InfoItem";
import { Metadata } from "next";
import NotFound from "./_component/NotFound";

type Props = {
  params: Promise<{ id: number }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      { next: { revalidate: 60 } },
    );
    const user: User = await response.json();

    return {
      title: `${user?.name} | Users`,
      description: `Detail page for ${user?.name}`,
    };
  } catch {
    return {
      title: "Users",
    };
  }
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { next: { revalidate: 60 } },
  );
  const user: User = await response.json();

  const splitName = user?.name?.split(" ");
  const initialName =
    splitName?.length > 1
      ? `${splitName?.[0]?.charAt(0)}${splitName?.[1]?.charAt(0)}`
      : `${splitName?.[0]?.charAt(0) ?? "-"}`;

  if (!user?.id) return <NotFound id={id} />;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-center py-6 sm:py-12 px-3 sm:px-16 bg-white dark:bg-black sm:items-start gap-4">
        <Link
          href={"/users/"}
          className="flex flex-row gap-1 items-center cursor-pointer hover:text-neutral-500 mr-auto"
        >
          <ArrowLeft size={16} /> Back to list
        </Link>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="rounded-full min-h-28 min-w-28 h-28 w-28 bg-neutral-800 flex items-center justify-center">
            <span className="text-4xl text-center font-semibold">
              {initialName}
            </span>
          </div>
          <div className="flex flex-col gap-1 text-center sm:text-start">
            <h3 className="font-bold text-3xl">{user?.name}</h3>
            <span className="text-neutral-400 text-sm">@{user?.username}</span>
            <span className="text-neutral-400 text-sm">{user?.email}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full border rounded-lg p-3 border-neutral-800 shadow shadow-neutral-800">
          <span className="text-xl font-bold underline">Personal Info</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <InfoItem
              icon={<Phone size={24} />}
              label="Phone"
              value={user?.phone}
            />
            <InfoItem
              icon={<Globe size={24} />}
              label="Website"
              value={user?.website}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full border rounded-lg p-3 border-neutral-800 shadow shadow-neutral-800">
          <span className="text-xl font-bold underline">Company</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <InfoItem
              icon={<Building2 size={24} />}
              label="Name"
              value={user?.company?.name ?? "-"}
            />
            <InfoItem
              icon={<BotMessageSquare size={24} />}
              label="Chatphrase"
              value={user?.company?.catchPhrase ?? "-"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full border rounded-lg p-3 border-neutral-800 shadow shadow-neutral-800">
          <span className="text-xl font-bold underline">Address</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <InfoItem
              icon={<MapPin size={24} />}
              label="Street"
              value={user?.address?.street ?? "-"}
            />
            <InfoItem
              icon={<DoorOpen size={24} />}
              label="Suite"
              value={user?.address?.suite ?? "-"}
            />
            <InfoItem
              icon={<Map size={24} />}
              label="City"
              value={user?.address?.city ?? "-"}
            />
          </div>
          <div className="border border-neutral-800 w-full"></div>
          <InfoItem
            icon={<Mail size={24} />}
            label="Zipcode"
            value={user?.address?.zipcode ?? "-"}
          />
        </div>
      </main>
    </div>
  );
}
