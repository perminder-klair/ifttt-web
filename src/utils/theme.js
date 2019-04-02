import { createGlobalStyle } from 'styled-components';

// http://chir.ag/projects/name-that-color/
export const colors = {
  primaryColor: '#1d3557',
  secondaryColor: "#e63946",
  backgroundColor: '#FFFFFF',
  darkenBackgroundColor: '#f1faee',
  extraPrimaryColor: '#457b9d',
  extraSecondaryColor: '#a8dadc',
  borderColor: '#CED5DF',
  primaryFontColor: '#040E1D',
  secondaryFontColor: '#333F50',
  inputBackgroundColor: '#F9FBFE'
};

export const fonts = {
  headerFontSize: '24px',
  labelfontSize: '14px',
  borderRadiusSize: '4px',
  fontWeightSize: '400'
};

export default {
  primary: colors.primaryColor,
  secondary: colors.secondaryColor,
  background: colors.backgroundColor,
  darkenBackground: colors.darkenBackgroundColor,
  primaryColor: colors.extraPrimaryColor,
  secondaryColor: colors.extraSecondaryColor,
  border: colors.borderColor,
  primaryFont: colors.primaryFontColor,
  secondaryFont: colors.secondaryFontColor,
  inputBackground: colors.inputBackgroundColor,
  headerFont: fonts.headerFontSize,
  labelFont: fonts.labelfontSize,
  borderRadius: fonts.borderRadiusSize,
  fontWeight: fonts.fontWeightSize
};

export const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
    padding: 0;
    font-size: 17px;
    font-family: 'Muli', sans-serif;
    }
`;