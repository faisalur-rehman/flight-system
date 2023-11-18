import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import HeroCard from '../../components/HeroCard';
import HomeHeader from '../../components/HomeHeader';
import {HomeTabs} from '../../components/HomeTabs';
import {colors} from '../../utils/theme';
import LimitedOffers from './LimitedOffers';
import Places from './Places';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <HeroCard />
        <HomeTabs />
        <LimitedOffers />
        <Places />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flexGrow: 1,
  },
});
