# 🔒 indatastar-styled-password-strength-meter

A lightweight, customizable **password strength meter** for React Native apps.  

## ⚡ Installation


```bash
npm install indatastar-styled-password-strength-meter
# or
yarn add indatastar-styled-password-strength-meter
```


## 🛠️ Usage


```js
import React, { useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { PasswordStrengthMeter } from 'indatastar-styled-password-strength-meter';

export default function App() {
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder="Enter your password"
      />
      <PasswordStrengthMeter
        password={password}
        containerStyle={styles.meterContainer}
        textStyle={styles.meterText}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    width: 200,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  meterContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  meterText: {
    fontSize: 16,
    fontFamily: 'Roboto',
  },
});

```

## 📦 Props

| Prop            | Type   | Default | Description |
|-----------------|--------|---------|-------------|
| `password`      | string | `''`    | The password string to evaluate. |
| `containerStyle`| object | `{}`    | Custom styles for the meter container. |
| `textStyle`     | object | `{}`    | Custom styles for the strength text. |


## ✨ Features

- ⚡ Real-time password strength evaluation.
- 🎨 Fully customizable container and text styles.
- 🪶 Lightweight and easy to integrate in React Native apps.

## 🤝 Contributing

- 🛠️ [Development workflow](CONTRIBUTING.md#development-workflow)
- 📤 [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- 📜 [Code of conduct](CODE_OF_CONDUCT.md)

## 📝 License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
