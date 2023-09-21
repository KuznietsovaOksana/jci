import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
// import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';

// const dataProvider = simpleRestProvider('https://jcibackend-jci.koyeb.app/');
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      //   name='donate-links-editor'
      name='users'
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation='name'
    />
    {/* <Resource
      name='posts'
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation='title'
    />
    <Resource name='comments' list={ListGuesser} edit={EditGuesser} /> */}
  </Admin>
);

export default AdminApp;
