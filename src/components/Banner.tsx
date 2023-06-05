import React from "react";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Felipe&lsquo;s Daily Blog</h1>
        <h2 className="mt-5 md:mt-2">
          Bem vindo ao blog favorito dos{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            desenvolvedores!
          </span>
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Conteúdo novo todos os dias | Tudo sobre tecnologia & muito mais!
      </p>
    </div>
  );
}
