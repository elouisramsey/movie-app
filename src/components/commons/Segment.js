import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

export default function Segment({
  tabs,
  onChange,
  currentIndex,
  segmentedControlBackgroundColor,
  paddingVertical,
  activeSegmentBackgroundColor,
  textColor,
  activeTextColor
}) {
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
    <Animated.View
      style={[
        styles.segmentedControlWrapper,
        {
          paddingVertical: paddingVertical
        }
      ]}
    >
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            position: 'absolute',
            width: (width - 4) / tabs?.length,
            top: 0,
            marginVertical: 2,
            marginHorizontal: 2,
            backgroundColor: activeSegmentBackgroundColor,
            borderRadius: 8,
            ...shadow
          },
          {
            transform: [
              {
                translateX: tabTranslate
              }
            ]
          }
        ]}
      ></Animated.View>
      {tabs.map((tab, index) => {
        const isCurrentIndex = currentIndex === index
        return (
          <TouchableOpacity
            key={index}
            style={[styles.textWrapper]}
            onPress={() => memoizedTabPressCallback(index)}
            activeOpacity={0.8}
          >
            {tab.icon && (
              <View
                style={[
                  styles.iconWrapper,
                  isCurrentIndex && { color: activeTextColor }
                ]}
              >
                {tab.icon}
              </View>
            )}
            <Text
              numberOfLines={1}
              style={[
                styles.textStyles,
                {
                  color: textColor
                },
                isCurrentIndex && { color: activeTextColor }
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        )
      })}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  segmentedControlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor: '#2C3F5B',
    borderWidth: 1,
    marginVertical: 15,
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    // paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyles: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'SF_Pro'
  },
  iconWrapper: {
    marginRight: 5,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

Segment.propTypes = {
//   tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  segmentedControlBackgroundColor: PropTypes.string,
  activeSegmentBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  paddingVertical: PropTypes.number
}

Segment.defaultProps = {
  tabs: [],
  onChange: () => {},
  currentIndex: 0,
  segmentedControlBackgroundColor: 'transparent',
  activeSegmentBackgroundColor: '#D9251D',
  textColor: '#333',
  activeTextColor: '#fff',
  paddingVertical: 12
}

