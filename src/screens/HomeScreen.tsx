import {Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  console.log(CoffeeList.length);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
