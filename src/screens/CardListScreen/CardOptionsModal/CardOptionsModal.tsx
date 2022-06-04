import { View } from 'react-native';
import React from 'react';
import BlurryModal from '../../../components/BluryModal';
import FoodCard from '../../../components/FoodCard';
import ActionButton from '../../../components/ActionButton';
import styles from './CardOptionsModal.styles';
import LoadingState from '../../../components/LoadingState';

const shareIcon = require('../../../../assets/icons/share.png');
const duplicateIcon = require('../../../../assets/icons/duplicate.png');
const deleteIcon = require('../../../../assets/icons/delete.png');

interface Props {
  cardName: string;
  visible: boolean;
  onClose: () => void;
  onShare: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
  loading: boolean;
}
const CardOptionsModal = ({
  cardName,
  visible,
  onClose,
  onShare,
  onDuplicate,
  onDelete,
  loading,
}: Props) => {
  return (
    <BlurryModal visible={visible} onClose={onClose}>
      <FoodCard title={cardName} type="close" onOptionsPress={onClose} />
      <View style={styles.buttonsContainer}>
        <ActionButton
          style={styles.button}
          text="Share"
          image={shareIcon}
          onPress={onShare}
        />
        <ActionButton
          style={styles.button}
          text="Duplicate"
          image={duplicateIcon}
          onPress={onDuplicate}
        />
        <ActionButton text="Delete" image={deleteIcon} onPress={onDelete} />
      </View>
      {loading ? <LoadingState /> : null}
    </BlurryModal>
  );
};

export default CardOptionsModal;
