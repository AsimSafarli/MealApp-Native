import { View ,Text,StyleSheet, FlatList } from "react-native";
import { MEALS } from "../Data/Data";
import MealItem from "../Components/MealItem";

function MealsOverview({route}) {
    const catID =route.params.categoryId

    const displayMeal = MEALS.filter((item)=>{
        return item.categoryIds.indexOf(catID) >= 0
    })
    function renderMealItem(itemData) {
        const item = itemData.item;
    
        const mealItemProps = {
          id:item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration: item.duration
        };
        return (
          <MealItem {...mealItemProps} />
        );
      }
  return (
    <View>
       <FlatList data={displayMeal} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealsOverview