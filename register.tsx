import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Register() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleDaftar = () => {
    if (!nama || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Semua field wajib diisi');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password minimal 6 karakter');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Konfirmasi password tidak sama');
      return;
    }

    Alert.alert('Sukses', `Akun ${nama} berhasil dibuat!`, [
      { text: 'OK', onPress: () => router.replace('/') }
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.card}>
        {/* Logo React sama kayak di foto login lu */}
        <View style={styles.logoContainer}>
          <Ionicons name="logo-react" size={40} color="#61DAFB" />
        </View>
        
        <Text style={styles.title}>Buat Akun Baru</Text>
        <Text style={styles.subtitle}>Silakan isi data untuk mendaftar</Text>

        <Text style={styles.label}>Nama Lengkap</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#5f6368" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Masukkan nama lengkap"
            value={nama}
            onChangeText={setNama}
          />
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#5f6368" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Masukkan email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#5f6368" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Masukkan password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons 
              name={showPassword ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color="#5f6368" 
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Konfirmasi Password</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#5f6368" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Masukkan ulang password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons 
              name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color="#5f6368" 
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonDaftar} onPress={handleDaftar}>
          <Text style={styles.buttonText}>BUAT AKUN</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.textBiasa}>Sudah punya akun? </Text>
          <TouchableOpacity onPress={() => router.replace('/')}>
            <Text style={styles.linkBiru}>Login di sini</Text>
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
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  logoContainer: { 
    backgroundColor: '#20232a',
    width: 60,
    height: 60,
    borderRadius: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20 
  },
  title: { 
    fontSize: 22, 
    fontWeight: '600', 
    textAlign: 'center', 
    marginBottom: 8,
    color: '#202124'
  },
  subtitle: { 
    fontSize: 14, 
    textAlign: 'center', 
    marginBottom: 24,
    color: '#5f6368'
  },
  label: {
    fontSize: 14,
    color: '#202124',
    fontWeight: '600',
    marginBottom: 8
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: '#dadce0', 
    borderRadius: 8, 
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 50
  },
  icon: { marginRight: 8 },
  input: { 
    flex: 1,
    fontSize: 16,
    color: '#202124'
  },
  buttonDaftar: { 
    backgroundColor: '#1a73e8', 
    padding: 14, 
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8
  },
  buttonText: { 
    color: 'white', 
    fontWeight: '600',
    fontSize: 14
  },
  loginContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 24 
  },
  textBiasa: { color: '#5f6368' },
  linkBiru: { color: '#1a73e8', fontWeight: 'bold' }
});