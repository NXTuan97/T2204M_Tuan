var obj = {
    name: 'Nguyễn Xuân Tuấn',
    age: 20,
    address: 'Mê Linh',
    girlFriend:[
        "Ngọc Trinh",
        "Phương Trang",
        "Tiểu Vy",
    ],
    salary:{
        level:"Senior",
        money:50000000,
    },
    classGroup:{
        name:"T2204M",
        subject:{
            name:"HCJS",
            room:"B10",
            mark:[12,5,3]

        },
    },

};
console.log(obj.name);
console.log(obj.age);
console.log(obj.address);
console.log(obj.girlFriend[0]);
console.log(obj.salary.level);
console.log(obj.classGroup.subject.name);
for(var i=0;i<obj.classGroup.subject.mark.length;i++){
    console.log(obj.classGroup.subject.mark[i]);
}



var currentWeather = {
    coord: {
        lon: 105.8412,
        lat: 21.0245
    },
    weather: [
        {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: 10n
        }
    ],
    base: "stations",
    main: {
        temp: 27,
        feels_like: 30.32,
        temp_min: 27,
        temp_max: 27,
        pressure: 1002,
        humidity: 86,
        sea_level: 1002,
        grnd_level: 1000
    },
    visibility: 10000,
    wind: {
        speed: 3.18,
        deg: 117,
        gust: 6.84
    },
    clouds: {
        all: 98
    },
    dt: 1653912863,
    sys: {
        type: 1,
        id: 9308,
        country: "VN",
        sunrise: 1653862511,
        sunset: 1653910404
    },
    timezone: 25200,
    id: 1581130,
    name: "Hanoi",
    cod: 200
}
console.log(currentWeather.name+","+currentWeather.sys.country);
console.log(currentWeather.main.temp);
console.log(currentWeather.main.humidity);
console.log(currentWeather.main.sea_level);
console.log(currentWeather.weather[0].description);


var h=document.getElementById("tit");
h.innerText = "Xin chào các bạn";
h.style.color = "red";