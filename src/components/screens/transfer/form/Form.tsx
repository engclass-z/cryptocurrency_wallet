import React, { useState } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Container from '~components/parts/layout/container/Container';
import TextField from '~components/parts/field/textField/TextField';
import TextButton from "~components/parts/button/textButton/TextButton";

type Props = {
  style?: StyleProp<ViewStyle>,
};

type Form = {
  address: string,
  amount: string,
};

const Form: React.FC<Props> = ({ style }) => {
  const [form, setForm] = useState<Form>({
    address: '',
    amount: '',
  });

  const onChangeAddressHandler = (enteredText: string) => {
    setForm((prevValue) => {
      return { ...prevValue, address: enteredText };
    });
  };

  const onChangeAmountHandler = (enteredText: string) => {
    setForm((prevValue) => {
      return { ...prevValue, amount: enteredText };
    });
  };

  const onPressTransfer = () => {
    console.log('AAAAAAAAA')
  };

  return (
    <Container style={[styles.container, style]}>
      <TextField
        label="To Address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeAddressHandler}
        value={form.address}
      />
      <TextField
        label="Amount"
        keyboardType="decimal-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={form.amount + ''}
        onChangeText={onChangeAmountHandler}
        style={styles.field}
      />
      <TextButton style={styles.button} onPress={onPressTransfer}>
        Transfer
      </TextButton>
    </Container>
  );
}

export default Form;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
  field: {
    marginTop: 24,
  },
  button: {
    marginTop: 24,
  },
});
