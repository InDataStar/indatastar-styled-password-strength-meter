import type {StyleProp} from 'react-native';
import type {TextStyle} from 'react-native';
import type {ViewStyle} from 'react-native';
import type {StrengthLevel} from './utils/passwordRules';

export type PasswordStrengthMeterProps={
  password:string;
  containerStyle?:StyleProp<ViewStyle>;
  textStyle?:StyleProp<TextStyle>;
  onChangeStrength?:()=>void;
}

export type PasswordStrengthBarProps={
  strength:StrengthLevel;
  colors?:{
    Weak?:string;
    Medium?:string;
    Strong?:string;
  };
  style?:StyleProp<ViewStyle>;
}
