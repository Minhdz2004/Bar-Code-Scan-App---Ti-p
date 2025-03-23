import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();

  // State để lưu thông tin thẻ
  const [cardNumber, setCardNumber] = useState('5261 4141 0151 8472');
  const [cardholderName, setCardholderName] = useState('Christie Doe');
  const [expiryDate, setExpiryDate] = useState('06 / 2024');
  const [cvv, setCvv] = useState('915');

  // Hàm xử lý khi nhấn nút "Pay for the Order"
  const handlePayment = () => {
    // Kiểm tra thông tin thẻ (có thể thêm logic kiểm tra phức tạp hơn)
    if (!cardNumber || !cardholderName || !expiryDate || !cvv) {
      Alert.alert('Error', 'Please fill in all card details.');
      return;
    }

    // Chuyển sang màn hình Success
    navigation.navigate('Success');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Checkout</Text>
        <Text style={styles.amount}>₹ 1,527</Text>
        <Text style={styles.gst}>Including GST (18%)</Text>
      </View>

      <View style={styles.paymentOptions}>
        <TouchableOpacity style={[styles.optionButton, styles.selectedOption]}>
          <Text style={styles.optionText}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="Enter card number"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Cardholder Name</Text>
      <TextInput
        style={styles.input}
        value={cardholderName}
        onChangeText={setCardholderName}
        placeholder="Enter cardholder name"
      />

      <View style={styles.row}>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>Expiry Date</Text>
          <TextInput
            style={styles.halfInput}
            value={expiryDate}
            onChangeText={setExpiryDate}
            placeholder="MM / YYYY"
          />
        </View>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>CVV / CVC</Text>
          <TextInput
            style={styles.halfInput}
            value={cvv}
            onChangeText={setCvv}
            placeholder="CVV"
            keyboardType="numeric"
          />
        </View>
      </View>

      <Text style={styles.infoText}>
        We will send you an order details to your email after the successful payment
      </Text>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay for the Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5' },
  header: { marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  amount: { fontSize: 20, fontWeight: 'bold', marginTop: 5 },
  gst: { fontSize: 14, color: '#888' },
  paymentOptions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  optionButton: { flex: 1, padding: 15, borderRadius: 10, alignItems: 'center', marginHorizontal: 5 },
  selectedOption: { backgroundColor: '#E0F7E9', borderColor: '#28A745', borderWidth: 1 },
  optionText: { fontSize: 16, fontWeight: 'bold' },
  label: { fontSize: 16, marginBottom: 5, marginTop: 10 },
  input: { borderWidth: 1, borderColor: '#DDD', borderRadius: 10, padding: 10, fontSize: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  halfInputContainer: { flex: 1, marginHorizontal: 5 },
  halfInput: { borderWidth: 1, borderColor: '#DDD', borderRadius: 10, padding: 10, fontSize: 16 },
  infoText: { fontSize: 14, color: '#888', textAlign: 'center', marginVertical: 20 },
  payButton: { backgroundColor: '#28A745', padding: 15, borderRadius: 10, alignItems: 'center' },
  payButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default PaymentScreen;