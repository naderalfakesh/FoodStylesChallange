import { View } from 'react-native';
import React from 'react';
import BlurryModal from '../../../components/BluryModal';
import FoodCard from '../../../components/FoodCard';
import ActionButton from '../../../components/ActionButton';
import styles from './CardOptionsModal.styles';
import { Card } from '../../../models/card';

const shareIcon = require('../../../../assets/icons/share.png');
const duplicateIcon = require('../../../../assets/icons/duplicate.png');
const deleteIcon = require('../../../../assets/icons/delete.png');

interface Props {
  item: Card;
  visible: boolean;
  onClose: () => void;
  onShare: (item: Card) => void;
  onDuplicate: (item: Card) => void;
  onDelete: (item: Card) => void;
}
const CardOptionsModal = ({
  item,
  visible,
  onClose,
  onShare,
  onDuplicate,
  onDelete,
}: Props) => {
  return (
    <BlurryModal visible={visible} onClose={onClose}>
      <FoodCard title="Nader" type="close" onOptionsPress={onClose} />
      <View style={styles.buttonsContainer}>
        <ActionButton
          style={styles.button}
          text="Share"
          image={shareIcon}
          onPress={() => onShare(item)}
        />
        <ActionButton
          style={styles.button}
          text="Duplicate"
          image={duplicateIcon}
          onPress={() => onDuplicate(item)}
        />
        <ActionButton
          text="Delete"
          image={deleteIcon}
          onPress={() => onDelete(item)}
        />
      </View>
    </BlurryModal>
  );
};

export default CardOptionsModal;
