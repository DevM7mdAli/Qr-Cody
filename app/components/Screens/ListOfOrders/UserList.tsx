import { FlatList, View } from 'react-native';
import {TextBold , TextRegular} from '../../UI/TextFont';

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
    ListEmptyComponent={<TextBold>You don't have any confirmed order</TextBold>}
    ItemSeparatorComponent={() => (<View className='h-6' />)}
    renderItem={({item}) => (
      <View className='items-center bg-secondary p-4 rounded-xl'>
        <TextRegular className='text-accent'>
          {item.name}
        </TextRegular>
      </View>
    )}
    
    />
      
  );
}


export default UserList;
