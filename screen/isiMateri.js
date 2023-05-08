import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const isiMateri = () => {
    return (
        <View style={{ backgroundColor: '#F9F6EE', flex: 1, paddingHorizontal: 30, paddingTop: 30 }}>
          <Text style={{ fontFamily: 'SpaceGrotesk', color: '#212427', fontSize: 18, fontWeight: 'bold', textAlign: 'center', paddingBottom: 10 }}>What sound does this make?</Text>
          <View style={{ backgroundColor: '#93C572', alignSelf: 'center', width: 252, height: 263, borderRadius: 20, shadowColor: '#72A152', shadowOffset: { width: 0, height: 2 }, }}>
            <Text style={{ fontFamily: 'SpaceGrotesk', color: '#212427', fontSize: 96, fontWeight: 'bold', textAlign: 'center', marginTop: 75 }}>آ</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
            <View style={{ backgroundColor: '#F9F6EE', width: 89, height: 37, borderRadius: 10, shadowColor: '#72A152', shadowOffset: { width: 0, height: 2 }, borderWidth: 1, borderColor: '#72A152', }}>
              <Text style={{ fontFamily: 'SpaceGrotesk', color: '#212427', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>aa</Text>
            </View>
            <View style={{ backgroundColor: '#F9F6EE', width: 89, height: 37, borderRadius: 10, shadowColor: '#72A152', shadowOffset: { width: 0, height: 2 }, borderWidth: 1, borderColor: '#72A152', }}>
              <Text style={{ fontFamily: 'SpaceGrotesk', color: '#212427', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>ii</Text>
            </View>
            <View style={{ backgroundColor: '#F9F6EE', width: 89, height: 37, borderRadius: 10, shadowColor: '#72A152', shadowOffset: { width: 0, height: 2 }, borderWidth: 1, borderColor: '#72A152', }}>
              <Text style={{ fontFamily: 'SpaceGrotesk', color: '#212427', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>uu</Text>
            </View>
          </View>
        </View>
      );
};

export default isiMateri;
