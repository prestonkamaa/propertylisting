import Link from "next/link";

type Props = {
  btnTitle: string;
}

export default function OutlineButton({ btnTitle}: Props) {
  return (
    <Link href="#">
      <div className="border border-gray-300 rounded-full inline-block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
        {btnTitle}
      </div>
    </Link>
  )
}
