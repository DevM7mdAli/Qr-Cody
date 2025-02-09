import { FlatList, Pressable, View } from 'react-native';
import {TextBold , TextRegular} from '../../UI/TextFont';
import { router } from 'expo-router';

const UserList = () => {
    const data = [
      {name: 'iphone', id: '123sdfsdfsdf'},
      {name: 'galaxy', id: '1284sdfsdf'},
      {name: 'surface', id: 'asdad'},
      {name: 'razer', id: 'sdfdsfdsfdf'},
    ]

  return (
    <FlatList 
    data={data}
    className='px-3'
    ListEmptyComponent={<TextBold>You don't have any confirmed order</TextBold>}
    ItemSeparatorComponent={() => (<View className='h-1 mb-4 mt-1 rounded-full bg-white'/>)}
    ListHeaderComponent={() => (<TextRegular className='text-3xl text-center'>Hello</TextRegular>)}
    renderItem={({item}) => (
      <Pressable 
      className='items-center bg-secondary p-4 rounded-xl'
      onPress={() => {router.push({pathname: '/pages/orders/[id]', params: {id: item.id}})}}
      >
        <TextRegular className='text-accent'>
          {item.name}
        </TextRegular>
      </Pressable>
    )}
    
    />
      
  );
}


export default UserList;
