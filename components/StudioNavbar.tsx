import Link from "next/link";
import React from "react";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="h-[24px] w-[24px] text-[#F7AB0A] mr-2" />
          Voltar para o site
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
