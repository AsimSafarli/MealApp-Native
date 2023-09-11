import React from 'react'
import { Text } from 'react-native'

function MealDetailPage({ route }) {
    const mealId = route.params.mealId
    const mealTitle = route.params.mealTitle

      return (
    <Text> MealDetailPage meal - {mealId} </Text>
  )
}

export default MealDetailPage