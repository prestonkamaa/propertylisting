import Link from "next/link";

type Props = {
  btnTitle: string;
  icon: React.ReactNode;
  btnLink: string;
}

export default function OutlineButton({ btnTitle,icon,btnLink}: Props) {
  return (
    <Link href={`${btnLink}`}>
      <div className=" border border-gray-300 rounded-full inline-flex px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors items-center gap-2">
        {btnTitle} {icon}
      </div>
    </Link>
  )
}
