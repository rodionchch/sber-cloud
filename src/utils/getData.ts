import data from "data/index.json";

export type BaseType = {
  id: number;
  name: string;
  description: string;
};

export type ServerType = BaseType & { updates?: BaseType[] };

type DataType = {
  user?: {
    id: number;
    login: string;
    password: string;
    name: string;
    email: string;
  };
  servers: ServerType[];
};

export const getData = (user?: string | null): DataType | undefined => {
  if (user) {
    return data.find((el) => el.user.login === user) as DataType;
  }
};
