import {
  SidebarContainer,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuLink,
  Button,
} from "./style";

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

export const Sidebar = (props: {
  users: User[];
  changeUsers: (filter: string) => {};
}) => {
  return (
    <SidebarContainer>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuLink href="#">
            <Button
              onClick={() => {
                props.changeUsers("all");
              }}
            >
              Todos
            </Button>
          </SidebarMenuLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuLink href="#">
            <Button
              onClick={() => {
                props.changeUsers("atended");
              }}
            >
              Atendidos
            </Button>
          </SidebarMenuLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuLink>
            <Button
              onClick={() => {
                props.changeUsers("deleted");
              }}
            >
              Lixeira
            </Button>
          </SidebarMenuLink>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};
