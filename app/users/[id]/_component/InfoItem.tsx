type Props = {
  icon?: React.ReactNode;
  label: string;
  value: string;
};

export default function InfoItem({ icon, label, value }: Props) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="flex items-center justify-center bg-neutral-800 min-w-12 min-h-12 rounded-lg w-12 h-12">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm">{label}</span>
        <span className="mt-2 font-medium break-all leading-5 text-neutral-50">
          {value}
        </span>
      </div>
    </div>
  );
}
