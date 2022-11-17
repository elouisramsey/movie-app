import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { COLORS } from 'src/Styles/styles'
import Layout from './Layout'

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4
}

// So that it stretches in landscape mode.
const width = Layout.window.width - 2

type Props = {
  tabs: any
  onChange: (val: any) => void
  currentIndex: number
  segmentedControlBackgroundColor: string
  paddingVertical: number
  activeSegmentBackgroundColor: string
}

function MovieDate({
  tabs,
  onChange,
  currentIndex,
  segmentedControlBackgroundColor,
  paddingVertical,
  activeSegmentBackgroundColor,
}: Props) {
  const translateValue = (width - 4) / tabs?.length
  const [tabTranslate, setTabTranslate] = React.useState(new Animated.Value(0))

  // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
  const memoizedTabPressCallback = React.useCallback((index) => {
    onChange(index)
  }, [])

  useEffect(() => {
    // Animating the active index based current index
    Animated.spring(tabTranslate, {
      toValue: currentIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true
    }).start()
  }, [currentIndex])

  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        styles.segmentedControlWrapper,
        { paddingVertical: paddingVertical }
      ]}
    >
      {tabs.map((tab: any, index: number) => {
        const isCurrentIndex = currentIndex === index
        return (
          <TouchableOpacity
            key={index}
            style={[styles.textWrapper, {backgroundColor: isCurrentIndex ? activeSegmentBackgroundColor : segmentedControlBackgroundColor}]}
            onPress={() => memoizedTabPressCallback(index)}
            activeOpacity={0.8}
          >
            <Text
              numberOfLines={1}
              style={[
                styles.textStyles,
                {
                  color: '#fff',
                  opacity: isCurrentIndex ? 1 : 0.7,
                  marginBottom: 5
                },
                isCurrentIndex && { color: '#0F1B2B' }
              ]}
            >
              {tab.day}
            </Text>
            <Text
              numberOfLines={1}
              style={[
                styles.textStyles,
                {
                  color: '#fff',
                  fontSize: 14,
                  opacity: isCurrentIndex ? 1 : 0.5,
                  textTransform: 'uppercase'
                },
                isCurrentIndex && { color: '#0F1B2B' }
              ]}
            >
              {tab.weekday}
            </Text>
          </TouchableOpacity>
        )
      })}
    </Animated.ScrollView>
  )
}

export { MovieDate }

const styles = StyleSheet.create({
  segmentedControlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
    width: 88,
    marginRight: 10,
    borderRadius: 4,
    borderColor: COLORS.grayed,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  textStyles: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'SF_Pro',
    textTransform: 'capitalize'
  }
})

MovieDate.defaultProps = {
  tabs: [],
  onChange: () => {},
  currentIndex: 0,
  segmentedControlBackgroundColor: 'transparent',
  activeSegmentBackgroundColor: '#F8C42F',
  textColor: '#333',
  activeTextColor: '#fff',
  paddingVertical: 12
}
