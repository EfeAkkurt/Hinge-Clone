import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';
import VideoBackground from '@/components/video-background';
import { AppleIcon, FacebookfIcon, HingeLogo } from '@/constants/icons';
import { colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '@/components/spacer';
import Type from '@/components/type';
import { A } from '@expo/html-elements';
import { links } from '@/constants/links';
import Btn from '@/components/btn';

const SignInScreen = () => {
  const [isSingingIn, setIsSigningIn] = useState(false);

  const handleSignIn = () => {
    setIsSigningIn((prev) => !prev);
  };

  const handleSignInWithPhoneNumber = () => {
    router.push('/(auth)/phone-number');
  };

  return (
    <VideoBackground
      source={require('@/assets/videos/background.mp4')}
    >
      <SafeAreaView style={styles.content}>
        <Spacer size={130} />
        <View style={styles.branding} >
          <HingeLogo fill={colors.white} width={140} height={70} />
          <Spacer size={10} />
          <Type 
          
          variant="titleBold" color="white" textAlign="center">
            Designed to be deleted
          </Type>
        </View>
        <Type variant="caption" color="white" textAlign="center">
          by tapping 'Sign in' / 'Create account', you agree to our {' '}
          <A href={links.terms}>
            <Type variant="captionBold" color="white" textDecorationLine="underline">
              Terms of Service
            </Type>
          </A>
          {' '}Learn how we process your data in our {' '}
          <A href={links.privacy}>
            <Type variant="captionBold" color="white" textDecorationLine="underline">
              Privacy Policy
            </Type>
          </A>
          {' '}and{' '}
          <A href={links.policy}>
            <Type variant="captionBold" color="white" textDecorationLine="underline">
              Cookie Policy
            </Type>
          </A>.
        </Type>
        <Spacer size={20} />
        {!isSingingIn && (
          <Btn backgroundColor="primaryDark">
            <Type variant="bodyBold" color="white">
              Create account
            </Type>
          </Btn>
        )}
        {isSingingIn && (
          <View style={styles.signin}>
            <Btn backgroundColor="white" startIcon={<AppleIcon width={20} height={20} />}>
              <Type variant="bodyBold" color="black">
                Sign in with Apple
              </Type>
            </Btn>
            <Btn backgroundColor="facebookBlue" startIcon={<FacebookfIcon width={20} height={20} fill={colors.white} />}>
              <Type variant="bodyBold" color="white">
                Sign in with Facebook
              </Type>
            </Btn>
            <Btn backgroundColor="primaryDark" onPress={handleSignInWithPhoneNumber}>
              <Type variant="bodyBold" color="white">
                Sign in with Phone Number
              </Type>
            </Btn>
          </View>
        )}
        <Spacer size={10} />
        <Btn backgroundColor="transparent" onPress={handleSignIn}>
          <Type variant="bodyBold" color="white">
            {isSingingIn ? 'Back' : 'Sign in'}
          </Type>
        </Btn>
      </SafeAreaView>
    </VideoBackground>
  );
};

export default SignInScreen

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 40,
  },
  branding: {
    flex: 1,
    alignItems: 'center',
  },
  signin: {
    gap: 10,
  },
});