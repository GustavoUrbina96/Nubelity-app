import { INationalities } from "../Interfaces/userInterface";
import http from "./httpService";

const apiMethods = {
  users: "/api",
  usersByNationality: "/api?nat=",
};

export async function getUsers() {
  const params = { results: 10 };

  const { data } = await http.get(apiMethods.users, { params });
  return data;
}

export function getNationalities() {
  const data: INationalities[] = [
    { code: "MX", name: "México" },
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
  ];
  return data;
}

export async function getUsersByNationality(nationality: string) {
  const params = { results: 10 };
  const { data } = await http.get(apiMethods.usersByNationality + nationality, {
    params,
  });

  return data;
}
