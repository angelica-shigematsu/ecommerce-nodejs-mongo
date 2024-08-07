export interface IUserEntity{
  name: string;
  dateBirth: Date;  
  cpf: string;
  phone: string;
  email: string;
  password: string;
  active: boolean;
  level: string;
  address: IAddress;
}


interface IAddress {
  streetAddress: string;
  city: string;
  state : string;
  numberHouse: number;
  postalCode: string;
  complement?: string;
}

export interface IUserOrder{
  name: string;
  cpf: string;
  phone: string;
  email: string;
  level: string;
  address: IAddress;
}

