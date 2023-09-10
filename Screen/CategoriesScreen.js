import { FlatList } from 'react-native';

import { CATEGORIES } from '../Data/Data';
import CategoryGridTile from '../Components/CategoryGrid';



function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
        function pressHandler(){
         navigation.navigate("Meals Overview")
        }
      return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
      );
    }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;