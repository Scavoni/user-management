import { useState } from "react";
import { Background, Card, Panel, ProfilePic } from "./style";
interface User {
  atended: boolean;
  cell: string;
  deleted: boolean;
  dob: {
    age: number;
    date: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    street: string;
    city: string;
    country: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    date: string;
    age: number;
  };
}

interface selectedInfo {
  info: string;
  value: string;
}

export const UserCard = (props: { user: User }) => {
  const [selectedInfo, setSelectedInfo] = useState<selectedInfo>({
    info: "",
    value: "",
  });

  function changeSelectedInfo(){

  }
  return (
    <>
      <Background>
        <Card>
          <h1>Card</h1>
          <ProfilePic src="" alt="" />
          <h1>Hy my {selectedInfo.info} is</h1>
          <h2>{selectedInfo.value}</h2>
          <Panel>
            <h1>Pessoa</h1>
            <h1>Email</h1>
            <h1>Aniversario</h1>
            <h1>Endereço</h1>
            <h1>Telefone</h1>
            <h1>Senha</h1>
          </Panel>
        </Card>
      </Background>
    </>
  );
};
