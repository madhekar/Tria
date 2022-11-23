import React, {FC, useCallback} from 'react';
import styled from 'styled-components';
import {
  FlatList,
  ListRenderItemInfo,
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Device} from 'react-native-ble-plx';
import { colors } from '../colors';
import { ScreenWidth, ScreenHeight } from '../shared';

type DeviceModalListItemProps = {
  item: ListRenderItemInfo<Device>;
  connectToPeripheral: (device: Device) => void;
  closeModal: () => void;
};

type DeviceModalProps = {
  devices: Device[];
  visible: boolean;
  connectToPeripheral: (device: Device) => void;
  closeModal: () => void;
};

const DeviceModalListItem: FC<DeviceModalListItemProps> = props => {
  const {item, connectToPeripheral, closeModal} = props;

  const connectAndCloseModal = useCallback(() => {
    connectToPeripheral(item.item);
    closeModal();
  }, [closeModal, connectToPeripheral, item.item]);

  return (
    <TouchableOpacity
      onPress={connectAndCloseModal}
      style={modalStyle.ctaButton}>
      <Text style={modalStyle.ctaButtonText}>{item.item.name}</Text>
    </TouchableOpacity>
  );
};

const InputSectionBackground = styled(View)`
   padding-horizontal: 20px;
   width: ${ScreenWidth*.99}px;
   flex: 1;
`;

const DeviceModal: FC<DeviceModalProps> = (props) => {
  const {devices, visible, connectToPeripheral, closeModal} = props;

  const renderDeviceModalListItem = useCallback(
    (item: ListRenderItemInfo<Device>) => {
      return (
        <DeviceModalListItem
          item={item}
          connectToPeripheral={connectToPeripheral}
          closeModal={closeModal}
        />
      );
    },
    [closeModal, connectToPeripheral],
  );

  return (
    <Modal
      style={modalStyle.modalContainer}
      animationType="slide"
      transparent={false}
      visible={visible}>
      <SafeAreaView style={modalStyle.modalTitle}>
      <InputSectionBackground>
        <Text style={modalStyle.modalTitleText}>
          click bluetooth device to connect,
        </Text>
        <FlatList
          contentContainerStyle={modalStyle.modalFlatlistContiner}
          data={devices}
          renderItem={renderDeviceModalListItem}
        />
        </InputSectionBackground>
    </SafeAreaView>
    </Modal>
  );
};

const modalStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  modalFlatlistContiner: {
    flex: 1,
    justifyContent: 'center',
  },
  modalCellOutline: {
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
  },
  modalTitle: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  modalTitleText: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: 'bold',
    marginHorizontal: 70,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default DeviceModal;