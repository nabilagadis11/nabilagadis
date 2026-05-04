import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email & password harus diisi');
      return;
    }
    Alert.alert('Login Berhasil', `Selamat datang ${email}`);
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <View style={styles.logoContainer}>
            <Ionicons name="logo-react" size={40} color="#61DAFB" />
          </View>
          
          <Text style={styles.title}>Selamat Datang</Text>
          <Text style={styles.subtitle}>Silakan masuk ke akun Anda</Text>

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

          <Link href="/forgot" asChild>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Lupa Password?</Text>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>MASUK</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Belum punya akun? </Text>
            <Link href="/register" asChild>
              <TouchableOpacity>
                <Text style={styles.registerLink}>Daftar</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    padding: 20 
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
  subtitle: { fontSize: 14, textAlign: 'center', marginBottom: 24, color: '#5f6368' },
  label: { fontSize: 14, color: '#202124', fontWeight: '600', marginBottom: 8 },
  inputContainer: {
    flexDirection: 'row', alignItems: 'center', borderWidth: 1, 
    borderColor: '#dadce0', borderRadius: 8, paddingHorizontal: 12,
    marginBottom: 16, height: 50
  },
  icon: { marginRight: 8 },
  input: { flex: 1, fontSize: 16, color: '#202124' },
  forgotText: { color: '#1a73e8', fontWeight: '600', fontSize: 14, textAlign: 'right', marginBottom: 20 },
  button: { backgroundColor: '#1a73e8', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: '600', fontSize: 14 },
  registerContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  registerText: { color: '#5f6368' },
  registerLink: { color: '#1a73e8', fontWeight: 'bold' }
});