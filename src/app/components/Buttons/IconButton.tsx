import Link from "next/link";

type Props = {
  btnTitle: string;
  icon: React.ReactNode;
  btnLink: string;
}

export default function IconButton({btnTitle,icon,btnLink}: Props) {
  return (
    <Link href={`${btnLink}`}>
      <div className=" gap-2 px-4 py-2 bg-primary rounded-full  inline-flex items-center ">
        {btnTitle} {icon}
      </div>
    </Link>
  )
}
