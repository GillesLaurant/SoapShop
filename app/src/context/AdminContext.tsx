import { createContext } from "react";

export const userLog = {
  loggin: false,
  admin: false,
};

export const UserContext = createContext({
  userLog,
  toggleLog: (e: string, v: boolean) => {},
});
