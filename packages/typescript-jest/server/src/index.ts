import { commonfn } from "@xx-learning/typescript-jest-common";

export const serverfn = () => {
    return commonfn("world") + "!!"
}

console.log(serverfn())