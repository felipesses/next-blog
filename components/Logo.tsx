import Image from "next/image";
import React from "react";

export default function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full"
        height={50}
        width={50}
        src="https://media.licdn.com/dms/image/C4E03AQEbuFeqUG9NvA/profile-displayphoto-shrink_200_200/0/1651065770250?e=1691625600&v=beta&t=wi1Lgrx-nLzmumtuvtzOBdw0_9YdVP5Hfv9kZ2iJ6Fg"
        unoptimized
        alt="logo"
      />
      {<>{renderDefault(props)}</>}
    </div>
  );
}
