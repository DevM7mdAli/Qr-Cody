import { View , FlatList, ViewToken } from "react-native";
import { router } from "expo-router";
import Btn, { TextBtn } from "../components/UI/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageScroller from "../components/OnBoarding/ImageScroller";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import { CAMERA, SHAKE } from "@/constants/images";

const dataOfFeatures = [
  {
    name: 'Camera',
    description: 'scan the Qr using camera',
    icon: CAMERA
  },
  {
    name: 'Expand experience',
    description: 'let costumers and casher be happy',
    icon: SHAKE
  },
  {
    name: 'Camera',
    description: 'scan the Qr using camera',
    icon: CAMERA
  },
]

const checkedIfComeBefore = async () => {
  return await AsyncStorage.getItem('viewedOnBoarding') ? true : false
}

const registerIfComeBefore = async () => {
  await AsyncStorage.setItem('viewedOnBoarding' , '1')
  router.replace('/(auth)')
}

export default function Index() {
  const [currentIndex , setCurrentIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const checkIfViewed = async () => {
      if (await checkedIfComeBefore()) {
        router.replace('/(auth)');
      }
      setLoading(false)
    };
    checkIfViewed();
  }, []);

  const handleNextPress = () => {
    if(currentIndex < dataOfFeatures.length - 1){
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 })
    }else{
      registerIfComeBefore()
    }
  }

  const onViewItemChange = useRef(( {viewableItems} : {viewableItems: ViewToken[] } ) => {
    if(viewableItems && viewableItems.length > 0){
      setCurrentIndex(viewableItems[0].index ?? 0)
    }
  }).current

  const viewConfigRef = useRef( { viewAreaCoveragePercentThreshold : 50} ).current


  if(loading)
    return <View 
    className="flex-1 bg-primary"
    />

  return (
    <SafeAreaView className="flex-1 bg-primary pb-3">
        {/* Photos slider */}
        <FlatList 
          data={dataOfFeatures}
          ref={flatListRef}
          onViewableItemsChanged={onViewItemChange}
          viewabilityConfig={viewConfigRef}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          renderItem={({item}) => {
            return(
              <ImageScroller 
              icon={item.icon}
              name={item.name}
              description={item.description}
              />
            )
          }}
        />

        {/* Bottom screen */}
        <View className="flex flex-row justify-between items-center px-3">
            <TextBtn functionality={() => {
              registerIfComeBefore()
              }}>
              Skip
            </TextBtn>
            {/* Dots */}
            <View className="flex flex-row justify-center gap-x-3">
            {
                dataOfFeatures.map((_, index) => (
                  <View
                  key={index}
                  className={index === currentIndex ?  'w-10 h-4 bg-secondary rounded-full' : 'w-4 h-4 bg-secondary/40 rounded-full'  }
                  />
                )
              )
            }
            </View>
            <Btn functionality={() => {
              handleNextPress()
              }}>
              Next
            </Btn>
        </View>
    </SafeAreaView>
  );
}
