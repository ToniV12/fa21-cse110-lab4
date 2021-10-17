let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
// checks that the property starts with an r or if the value is
// odd then prints the value of that property
for(const val in statistics){
    if (val.startsWith("r") || (statistics[val] % 2) == 1){
        console.log(statistics[val]);
    }
}