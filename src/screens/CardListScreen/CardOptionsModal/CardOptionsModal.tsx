import { Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
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
  const animatedValue = useRef(new Animated.Value(500)).current;
  const slideIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideIn();
  });

  return (
    <BlurryModal visible={visible} onClose={onClose}>
      <FoodCard title={cardName} type="close" onOptionsPress={onClose} />
      <Animated.View
        style={[
          styles.buttonsContainer,
          { transform: [{ translateX: animatedValue }] },
        ]}>
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
      </Animated.View>
      {loading ? <LoadingState /> : null}
    </BlurryModal>
  );
};

export default CardOptionsModal;
