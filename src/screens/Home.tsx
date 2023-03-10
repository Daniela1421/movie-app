import React, { useContext, useEffect  } from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ImageColors from 'react-native-image-colors';

import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window')

export const Home = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies(); 
  const {top} = useSafeAreaInsets(); 
  const {setMainColors} = useContext(GradientContext)

  const getPosterColors = async(index : number) => {
    const movie = nowPlaying[index]; 
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    const [primary= 'green', secondary= 'orange'] = await getImageColors(uri);
    
    setMainColors({primary, secondary})
  }

  useEffect(() => {
    if(nowPlaying.length > 0){
      getPosterColors(0)
    }
  }, [nowPlaying])
  

  if(isLoading){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}} >
        <ActivityIndicator color='red' size={50}/>
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}> 
          {/* Carousel principal*/}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem= {({item}: any) => <MoviePoster movie={item}/>}
              sliderWidth= {windowWidth}
              itemWidth= {300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/*Peliculas populares */}
          <HorizontalSlider title='Populares' movies={popular}/>
          <HorizontalSlider title='Top rated' movies={topRated}/>
          <HorizontalSlider title='Upcoming' movies={upcoming}/>
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
