import { useState, useEffect } from 'react'
import './App.css';
import { Map, maps } from 'react-kakao-maps-sdk';



const { kakao } = window;
// var center = map.getCenter(); 

const MapTest = (props) => {
    //처음 지도 그리기
    useEffect(()=>{
        const options = { 
            center: new kakao.maps.LatLng(33.450701, 126.570667) ,
            level : 3
        };
        const container = document.getElementById('map');
        const kakaoMap = new kakao.maps.Map(container, options);

    },[])

    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapTest;