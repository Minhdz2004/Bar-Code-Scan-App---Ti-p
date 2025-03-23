import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SuccessScreen = () => {
  // Hàm xử lý khi nhấn "Download Invoice"
  const handleDownloadInvoice = () => {
    Alert.alert('Download Invoice', 'This feature is not implemented yet.');
    // Bạn có thể thêm logic để tải file invoice tại đây
  };

  // Hàm xử lý khi nhấn "Check Details"
  const handleCheckDetails = () => {
    Alert.alert('Check Details', 'Order details will be shown here.');
    // Bạn có thể thêm logic để hiển thị chi tiết đơn hàng
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>🎉</Text>
      </View>

      <Text style={styles.title}>Payment Success, Yayy!</Text>
      <Text style={styles.message}>
        We will send order details and invoice in your contact no. and registered email
      </Text>

      <TouchableOpacity style={styles.checkDetailsButton} onPress={handleCheckDetails}>
        <Text style={styles.checkDetailsText}>Check Details →</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadInvoice}>
        <Text style={styles.downloadButtonText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#F5F5F5' },
  iconContainer: { marginVertical: 30 },
  icon: { fontSize: 100 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  message: { fontSize: 16, color: '#888', textAlign: 'center', marginBottom: 20 },
  checkDetailsButton: { marginBottom: 20 },
  checkDetailsText: { fontSize: 16, color: '#007BFF' },
  downloadButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
  downloadButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default SuccessScreen;