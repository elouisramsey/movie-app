import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useForm, Controller } from 'react-hook-form'
import {
  AntDesign,
  Entypo,
  Ionicons,
  Foundation,
  Fontisto,
  MaterialIcons,
  Feather,
  SimpleLineIcons
} from '@expo/vector-icons'
import { Container } from 'src/components/commons/Container'
import Info from 'src/components/commons/Info'
import { Input } from 'src/components/commons/Input'
import Button from 'src/components/commons/Button'

type Props = {
  navigation: any
}

type AccountInfo = {
  username: string
  email: string
  phone: string
  birthdate: string
}

const AccountInformation = (props: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<AccountInfo>({
    defaultValues: {},
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  const onSubmit = (data: object) => console.log(data)
  return (
    <Container>
      <Info navigation={props.navigation}>{'Account Information'}</Info>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <View style={styles.imageHolder}>
            <Image
              source={require('assets/images/dp.jpeg')}
              style={styles.image}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.edit}>Change Photo</Text>
          </TouchableOpacity>
          <View style={styles.form}>
            <Controller
              name='username'
              defaultValue=''
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  icon={
                    <AntDesign
                      name='user'
                      size={24}
                      color='rgba(255, 255, 255, 0.2)'
                    />
                  }
                  labelStyle={styles.label}
                  error={Boolean(errors?.username)}
                  errorText={errors?.username?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Username'
                />
              )}
            />
            <Controller
              name='email'
              defaultValue=''
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  icon={
                    <Feather
                      name='mail'
                      size={24}
                      color='rgba(255, 255, 255, 0.2)'
                    />
                  }
                  labelStyle={styles.label}
                  error={Boolean(errors?.email)}
                  errorText={errors?.email?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Email'
                />
              )}
            />
            <Controller
              name='phone'
              defaultValue=''
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  icon={
                    <SimpleLineIcons
                      name='screen-smartphone'
                      size={24}
                      color='rgba(255, 255, 255, 0.2)'
                    />
                  }
                  labelStyle={styles.label}
                  error={Boolean(errors?.phone)}
                  errorText={errors?.phone?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Phone Number'
                />
              )}
            />
            <Controller
              name='birthdate'
              defaultValue=''
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  icon={
                    <AntDesign
                      name='calendar'
                      size={24}
                      color='rgba(255, 255, 255, 0.2)'
                    />
                  }
                  labelStyle={styles.label}
                  error={Boolean(errors?.birthdate)}
                  errorText={errors?.birthdate?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Date of Birth'
                />
              )}
            />
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Password')}>
            <Text style={styles.password}>Change Password</Text>
          </TouchableOpacity>
          <Button onPress={handleSubmit(onSubmit)} title={'Save Changes'} />
        </View>
      </ScrollView>
    </Container>
  )
}

export default AccountInformation

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  imageHolder: {
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 120 / 2,
    marginBottom: 25,
    marginTop: 20
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  edit: {
    fontSize: 14,
    color: '#47CFFF',
    fontFamily: 'SF_Pro',
    textAlign: 'center'
  },
  label: {
    fontSize: 12,
    opacity: 0.5,
    textTransform: 'uppercase',
    lineHeight: 18,
    letterSpacing: 1.5
  },
  form: {
    marginTop: 50
  },
  password: {
    color: '#E51937',
    fontSize: 16,
    fontFamily: 'SF_Pro',
    marginTop: 30,
    marginBottom: 10
  }
})
