import { FlatList, View } from 'react-native';
import TextFont from '../../UI/TextFont';

const UserList = () => {
    const data = [
      {name: 'iphone'},
      {name: 'galaxy'},
      {name: 'surface'},
      {name: 'razer'},
    ]

  return (
    <FlatList 
    data={data}
    className='px-3'
    ListEmptyComponent={<TextFont>You don't have any confirmed order</TextFont>}
    ItemSeparatorComponent={() => (<View className='h-6' />)}
    renderItem={({item}) => (
      <View className='items-center bg-secondary p-4 rounded-xl'>
        <TextFont className='text-accent'>
          {item.name}
        </TextFont>
      </View>
    )}
    
    />
      
  );
}


export default UserList;
