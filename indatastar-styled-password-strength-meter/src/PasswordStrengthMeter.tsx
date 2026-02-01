import { Text, View } from 'react-native';
import type { ViewStyle} from 'react-native';
import type {  StyleProp} from 'react-native';
import type {  TextStyle} from 'react-native';

type PasswordStrengthMeterProps = {
  password: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function PasswordStrengthMeter({
  password,
  containerStyle,
  textStyle,
}: PasswordStrengthMeterProps) {
  const strength =
    password.length > 10 ? 'Strong' : password.length > 5 ? 'Medium' : 'Weak';
  const strengthColor =
    strength === 'Strong' ? 'green' : strength === 'Medium' ? 'orange' : 'red';

  return (
    <View style={containerStyle}>
      <Text style={[{ fontWeight: 'bold' }, textStyle]}>
        Password Strength:{' '}
        <Text style={[{ color: strengthColor, fontWeight: 'bold' }, textStyle]}>
          {strength}
        </Text>
      </Text>
    </View>
  );
}
