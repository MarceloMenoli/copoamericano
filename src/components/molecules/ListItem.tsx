import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import TitleText from '../atoms/TitleText';
import DescriptionText from '../atoms/DescriptionText';

interface ListItemProps {
  title: string;
  description: string;
  onPress: () => void;
  style?: ViewStyle;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <TitleText>{title}</TitleText>
      <DescriptionText>{description}</DescriptionText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default ListItem;
