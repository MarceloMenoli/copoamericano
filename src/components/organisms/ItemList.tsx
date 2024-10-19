import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import ListItem from '../molecules/ListItem';

interface Item {
  id: string;
  title: string;
  description: string;
}

interface ItemListProps {
  data: Item[];
}

const ItemList: React.FC<ItemListProps> = ({data}) => {
  const renderItem = ({item}: ListRenderItemInfo<Item>) => (
    <ListItem
      title={item.title}
      description={item.description}
      onPress={() => handleItemPress(item)}
    />
  );

  const handleItemPress = (item: Item) => {
    console.log('Item clicado:', item);
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ItemList;
