import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Forgot() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Email wajib diisi');
      return;
    }
    
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Format email tidak valid');
      return;
    }


    Alert.alert(
      'Email Terkirim', 
      `Link reset password sudah dikirim ke ${email}. Cek inbox/spam kamu.`,
      [{ text: 'OK', onPress: () => router.back() }]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#202124" />
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Ionicons name="logo-react" size={40} color="#61DAFB" />
        </View>
        
        <Text style={styles.title}>Lupa Password?</Text>
        <Text style={styles.subtitle}>
    
        </Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#5f6368" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Masukkan email terdaftar"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>KIRIM LINK RESET</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Ingat password? </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.loginLink}>Kembali ke Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa'
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backBtn: { 
    position: 'absolute', 
    top: 50, 
    left: 20,
    zIndex: 10
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    elevation: 3,
  },
  logoContainer: { 
    backgroundColor: '#20232a',
    width: 60, height: 60, borderRadius: 12,
    alignSelf: 'center', justifyContent: 'center', alignItems: 'center',
    marginBottom: 20 
  },
  title: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginBottom: 8, color: '#202124' },
  subtitle: { fontSize: 14, textAlign: 'center', marginBottom: 24, color: '#5f6368', lineHeight: 20 },
  label: { fontSize: 14, color: '#202124', fontWeight: '600', marginBottom: 8 },
  inputContainer: {
    flexDirection: 'row', alignItems: 'center', borderWidth: 1, 
    borderColor: '#dadce0', borderRadius: 8, paddingHorizontal: 12,
    marginBottom: 16, height: 50
  },
  icon: { marginRight: 8 },
  input: { flex: 1, fontSize: 16, color: '#202124' },
  button: { backgroundColor: '#1a73e8', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  buttonText: { color: 'white', fontWeight: '600', fontSize: 14 },
  loginContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  loginText: { color: '#5f6368' },
  loginLink: { color: '#1a73e8', fontWeight: 'bold' }
});