export default function getRandomColor(){
    const colors=[
        "#f032fd",
        "#ae0312"
    ];

    const random = Math.floor(Math.random()*2);
    return colors[random];
}