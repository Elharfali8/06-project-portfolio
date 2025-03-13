import { StaticImageData } from "next/image";

import js from "@/assets/js.png";
import ts from "@/assets/ts.png";
import ex from "@/assets/ex.png";
import figma from "@/assets/figma.png";
import mongodb from "@/assets/mongodb.png";
import postgres from "@/assets/postgres.png";
import react from "@/assets/react.png";
import git from "@/assets/git.png";
import scss from "@/assets/scss.png";
import tailwind from "@/assets/tailwind.png";

type Skill = {
    id: number;
    image: StaticImageData;
};

export const skills: Skill[] = [
    { id: 1, image: js },
    { id: 2, image: ts },
    { id: 3, image: react },
    { id: 4, image: tailwind },
    { id: 5, image: scss },
    { id: 6, image: ex },
    { id: 7, image: mongodb },
    { id: 8, image: postgres },
    { id: 9, image: git },
    { id: 10, image: figma },
];
