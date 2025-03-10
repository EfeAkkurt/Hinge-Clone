import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { colors } from '@/constants/Colors';
import { HeartIcon, HingeIcon, StarIcon, MessageIcon, PersonIcon } from '@/constants/icons'; // Eksik importlar eklendi



{/* bu kısım uygulamanın en altında bulunan geçiş kısımları için yapılşmıştır
                      yani beğenenler kısmı mesajlar kısmı vs vs */}
const TabLayout = () => {
  return <Redirect href= "/(auth)/sign-in"/> // XR Auto'dan bir yönlendirme bileşeni döndür ve href'i kapalı olarak ayarla
                    // yani kısacası ilk girişte kullanıcıyı oturum açma sayfasına sokuyor
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.darkGrey1,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.darkGrey2,
        tabBarShowLabel: false,
        tabBarIcon: ({color}) => {
          switch (route.name) {
            case 'index':
              return <HingeIcon fill={color} />;
            case 'standouts':
              return <StarIcon fill={color} />;
            case 'likes':
              return <HeartIcon fill={color} />;
            case 'matches':
              return <MessageIcon fill={color} />;
            case 'account':
              return <PersonIcon fill={color} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="standouts" />

      <Tabs.Screen name="likes" />
      <Tabs.Screen name="matches" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
};

export default TabLayout
