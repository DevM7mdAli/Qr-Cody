import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserList from '../../components/Screens/ListOfOrders/UserList';
import AdminMakerList from '../../components/Screens/ListOfOrders/AdminMakerList';

const List = () => {
  return (
    <SafeAreaView className='bg-primary flex-1'>
      {
        true ? 
        (
          <UserList />
        )
        :
        (
          <AdminMakerList />
        )
      }
    </SafeAreaView>
  );
}

export default List;
