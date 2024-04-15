import React, { useState, useEffect } from 'react';
import { View, Text, Button, Platform, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RappelMedicauxApp=()=> {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Permission to receive notifications was denied');
      return;
    }
    await Notifications.cancelAllScheduledNotificationsAsync();
  };

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const handleDatePicked = (date) => {
    setSelectedDate(date);
    hideDateTimePicker();
    scheduleNotification(date);
  };

  const scheduleNotification = async (date) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Rappel Médical',
        body: 'N\'oubliez pas votre rendez-vous médical!',
      },
      trigger: { date },
    });
  };

  const showAlert = () => {
    Alert.alert(
      'Notification',
      'N\'oubliez pas votre rendez-vous médical!',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{position:'relative', marginBottom:hp('2%')}}>Choisir une date et une heure pour le rappel :</Text>
      <Button title="Sélectionner la date" onPress={showDateTimePicker} />
      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="datetime"
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
      />
      {selectedDate && (
        <Text>Date et heure sélectionnées : {selectedDate.toString()}</Text>
      )}
      {Platform.OS === 'android' && (
        <Text style={{ marginTop: 20 }}>Notifications seront affichées sur Android.</Text>
      )}
    </View>
  );
};
export default RappelMedicauxApp;
