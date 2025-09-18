import {View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../theme/theme';
import {CalendarDaysIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {MapIcon} from 'react-native-heroicons/solid';

export default function Index() {
    const [showSearch, toggleSearch] = useState(false);
    const [locations, setLocations] = useState([1,2,3]);

    const handleLocation = (loc: number)=>{
        console.log('location', loc);
    }
    return (
        <View className="flex-1 relative">
            <StatusBar barStyle="light-content" />
            <Image blurRadius={70} source={require('../assets/images/bg.png')} className="absolute h-full w-full"/>
            <SafeAreaView className="flex flex-1">
                {/* Buscador */}
                <View style={{height: '7%'}} className='mx-4 relative z-50'>
                    <View className='flex-row justify-end items-center rounded-full' style={{backgroundColor: showSearch? theme.bgWhite(0.2): 'transparent'}}>
                        {
                            showSearch?(
                                <TextInput placeholder='Buscar ciudad' placeholderTextColor={'lightgray'} className='pl-6 h-10 pb-1 flex-1 text-base text-white'/>          
                            ):null
                        }  
                        <TouchableOpacity onPress={() => toggleSearch(!showSearch)} style={{backgroundColor: theme.bgWhite(0.3)}} className='rounded-full p-3 m-1'>
                            <MagnifyingGlassIcon size='25' color='white' />
                        </TouchableOpacity>
                    </View>
                    {
                        locations.length>0 && showSearch?(
                            <View className='absolute w-full bg-gray-300 top-16 rounded-3xl'>
                                {
                                    locations.map((loc, index)=>{
                                        let showBorder = index+1 !== locations.length;
                                        let borderClass = showBorder? 'border-b-2 border-b-gray-400': '';
                                        return(
                                            <TouchableOpacity onPress={()=> handleLocation(loc)}key={index} className={'flex-row items-center border-0 p-3 px-4 mb-1' + borderClass}>
                                                <MapIcon size='20' color='gray'/>
                                                <Text className='text-black text-lg ml-2'>Londres, Reino Unido</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        ):null
                    }
                </View>
                {/* Contenido principal */}
                <View className='mx-4 flex justify-around flex-1 mb-2'>
                    {/* Ciudad actual */}
                    <Text className='text-white text-center text-2xl font-bold'>
                        Londres
                        <Text className='text-lg font-semibold text-gray-300'>
                            Reino Unido
                        </Text>
                    </Text>
                    {/*Imagen de clima*/}
                    <View className='flex-row justify-center'>
                        <Image source={require('../assets/images/partlycloudy.png')} className='h-52 w-52'/>
                    </View>
                    {/* Temperatura actual */}
                    <View className='space-y-2'>
                        <Text className='text-white text-center text-6xl font-bold ml-5'>
                            15°
                        </Text>
                        <Text className='text-white text-center text-xl tracking-widest'>
                            Parcialmente nublado
                        </Text>
                    </View>
                    {/*Otras estadisticas*/}
                    <View className='flex-row justify-between mx-4'>
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/wind.png')} className='h-6 w-6'/>
                            <Text className='text-white text-base font-semibold'>
                                22km
                            </Text>
                        </View>    
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/drop.png')} className='h-6 w-6'/>
                            <Text className='text-white text-base font-semibold'>
                                23%
                            </Text>
                        </View>   
                        <View className='flex-row space-x-2 items-center'>
                            <Image source={require('../assets/icons/sun.png')} className='h-6 w-6'/>
                            <Text className='text-white text-base font-semibold'>
                                6:05 AM
                            </Text>
                        </View>   
                    </View>
                </View>
                {/* Dia siguiente*/}
                <View className='mb-2 space-y-3'>
                    <View className='flex-row items-center mx-5 space-x-2'>
                        <CalendarDaysIcon size='22' color='white'/>
                        <Text className='text-white text-base'>
                            Pronóstico para los próximos días
                        </Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15}}>
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4' style={{backgroundColor: theme.bgWhite(0.15)}}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11'/>
                            <Text className='text-white'>
                                Lunes
                            </Text>
                            <Text className='text-white text-xl font-semibold'>
                                12°
                            </Text>
                        </View>
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4' style={{backgroundColor: theme.bgWhite(0.15)}}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11'/>
                            <Text className='text-white'>
                                Lunes
                            </Text>
                            <Text className='text-white text-xl font-semibold'>
                                12°
                            </Text>
                        </View>
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4' style={{backgroundColor: theme.bgWhite(0.15)}}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11'/>
                            <Text className='text-white'>
                                Lunes
                            </Text>
                            <Text className='text-white text-xl font-semibold'>
                                12°
                            </Text>
                        </View>
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4' style={{backgroundColor: theme.bgWhite(0.15)}}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11'/>
                            <Text className='text-white'>
                                Lunes
                            </Text>
                            <Text className='text-white text-xl font-semibold'>
                                12°
                            </Text>
                        </View>
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4' style={{backgroundColor: theme.bgWhite(0.15)}}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11'/>
                            <Text className='text-white'>
                                Lunes
                            </Text>
                            <Text className='text-white text-xl font-semibold'>
                                12°
                            </Text>
                        </View>
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4' style={{backgroundColor: theme.bgWhite(0.15)}}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11'/>
                            <Text className='text-white'>
                                Lunes
                            </Text>
                            <Text className='text-white text-xl font-semibold'>
                                12°
                            </Text>
                        </View>
                        <View className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4' style={{backgroundColor: theme.bgWhite(0.15)}}>
                            <Image source={require('../assets/images/heavyrain.png')} className='h-11 w-11'/>
                            <Text className='text-white'>
                                Lunes
                            </Text>
                            <Text className='text-white text-xl font-semibold'>
                                12°
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    )    
}
