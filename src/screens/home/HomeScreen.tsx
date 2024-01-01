import {ScrollView, StatusBar, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../../store/store';
import {getCategoryFromData, getCoffeeList} from '../../utils/helper';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import styles from './HomeScreen.style';
import {COLORS} from '../../theme/theme';

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);

  const [categories, setCategories] = useState(getCategoryFromData(CoffeeList));
  const [searchText, setSearchText] = useState(undefined);
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* App Header */}
      </ScrollView>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
