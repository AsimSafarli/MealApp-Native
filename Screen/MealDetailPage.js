import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../Data/Data'
import MealDetails from '../Components/MealDetails'
import Subtitle from '../Components/Subtitle'
import List from '../Components/List'
function MealDetailPage({ route }) {
    const mealId = route.params.mealId
    const selectMeal = MEALS.find((meal)=> meal.id ===  mealId)
   
      return (
    <ScrollView>
      <Image source={{uri:selectMeal.imageUrl}} style={styles.image}/>
      <Text style={styles.title}>{selectMeal.title}</Text>
      <MealDetails duration={selectMeal.duration} complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}/>
        <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectMeal.steps} />
        </View>
      </View>
     </ScrollView>
  )
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
      },
      title:{
        fontWeight:'bold',
        fontSize:24,
        textAlign:'center'
      }
})
export default MealDetailPage