import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ListingList } from "./listing/ListingList";
import { ListingCreate } from "./listing/ListingCreate";
import { ListingEdit } from "./listing/ListingEdit";
import { ListingShow } from "./listing/ListingShow";
import { WishlistList } from "./wishlist/WishlistList";
import { WishlistCreate } from "./wishlist/WishlistCreate";
import { WishlistEdit } from "./wishlist/WishlistEdit";
import { WishlistShow } from "./wishlist/WishlistShow";
import { TripList } from "./trip/TripList";
import { TripCreate } from "./trip/TripCreate";
import { TripEdit } from "./trip/TripEdit";
import { TripShow } from "./trip/TripShow";
import { EventoList } from "./evento/EventoList";
import { EventoCreate } from "./evento/EventoCreate";
import { EventoEdit } from "./evento/EventoEdit";
import { EventoShow } from "./evento/EventoShow";
import { LugarList } from "./lugar/LugarList";
import { LugarCreate } from "./lugar/LugarCreate";
import { LugarEdit } from "./lugar/LugarEdit";
import { LugarShow } from "./lugar/LugarShow";
import { ProductoList } from "./producto/ProductoList";
import { ProductoCreate } from "./producto/ProductoCreate";
import { ProductoEdit } from "./producto/ProductoEdit";
import { ProductoShow } from "./producto/ProductoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"guiapateperro"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Listing"
          list={ListingList}
          edit={ListingEdit}
          create={ListingCreate}
          show={ListingShow}
        />
        <Resource
          name="Wishlist"
          list={WishlistList}
          edit={WishlistEdit}
          create={WishlistCreate}
          show={WishlistShow}
        />
        <Resource
          name="Trip"
          list={TripList}
          edit={TripEdit}
          create={TripCreate}
          show={TripShow}
        />
        <Resource
          name="Evento"
          list={EventoList}
          edit={EventoEdit}
          create={EventoCreate}
          show={EventoShow}
        />
        <Resource
          name="Lugar"
          list={LugarList}
          edit={LugarEdit}
          create={LugarCreate}
          show={LugarShow}
        />
        <Resource
          name="Producto"
          list={ProductoList}
          edit={ProductoEdit}
          create={ProductoCreate}
          show={ProductoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
