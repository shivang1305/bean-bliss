import React from 'react';
import {Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styles from './SignupScreen.style';

const SignupScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#8B6A46"
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#8B6A46"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#8B6A46"
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#8B6A46"
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.linkText}>Login</Text>
      </Text>
    </ScrollView>
  );
};

export default SignupScreen;
