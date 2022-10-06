import React from "react";
import { FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";

const Categories = ({ commonCategories, setTerm, term }) => {
  return (
    <View>
      <FlatList
        data={commonCategories}
        renderItem={({ item, index }) => (
          <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={item.name === term}
            handlePress={() => setTerm(item.name)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    </View>
  );
};

export default Categories;
