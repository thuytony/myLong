export interface ColorScheme {
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  textPlaceHolder: string;
  border: string;
  background: string;
  backgroundLight: string;
  error: string;
  borderInput: string;
  colorLineToolbar: string;
  activeTab: string;
  inActiveTab: string;

  transparent: string;
  white: string;
  black: string;
  gray: string;
  red: string;
}

export const Colors: ColorScheme = {
  primary: '#03606A',
  secondary: '#0E3F6C',
  text: '#03606A',
  textSecondary: '#0E3F6C',
  textPlaceHolder: '#24444E',
  border: '#99E1E1',
  background: '#E3F8F4',
  backgroundLight: '#D8F4F7',
  error: '#FB4E4E',
  borderInput: '#C2D6DC',
  colorLineToolbar: '#E6E6E6',
  activeTab: '#000000',
  inActiveTab: '#868686',

  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#D1D1D1',
  red: '#FB4E4E',
}