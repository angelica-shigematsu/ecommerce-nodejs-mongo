export interface IUserEntity{
  name: string;
  dateBirth: Date;  
  cpf: string;
  phone: string;
  email: string;
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
