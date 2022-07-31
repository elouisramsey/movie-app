import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

type Props = {
  icon?: any
  value?: string | number
  onChangeText?: (text: string) => void
  onSubmitEditing?: () => void
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send'
  secureTextEntry?: boolean
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  autoCorrect?: boolean
  multiline?: boolean
  numberOfLines?: number
  inputStyle?: any
  error?: boolean
  label?: string
  errorText?: string
  maxlength?: number
    labelStyle?: any
    inputContainerStyle?: any
}

const Input = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
      <View
        style={[
          styles.inputContainer,
          props.inputContainerStyle,
          props.error && { borderColor: '#EE4B2B' }
        ]}
      >
        {props.icon && <>{props.icon}</>}
        <TextInput
          maxLength={props.maxlength}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType={props.returnKeyType}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          style={[styles.input, props.inputStyle]}
        />
      </View>

      {props.error && <Text style={styles.error}>{props.errorText}</Text>}
    </View>
  )
}

export { Input }

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 25
  },
  label: {
    fontSize: 14,
    fontFamily: 'SF_Pro',
    color: '#fff',
    marginBottom: 10
  },
  inputContainer: {
    width: '100%',
    height: 44,
    borderRadius: 4,
    backgroundColor: '#2b3543',
    paddingHorizontal: 15,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#2B3543'
  },
  input: {
    flex: 1,
    fontFamily: 'SF_Pro',
    fontSize: 16,
    color: '#fff'
  },
  error: {
    fontSize: 10,
    fontFamily: 'SF_Pro',
    color: 'red',
    marginTop: 3
  }
})
