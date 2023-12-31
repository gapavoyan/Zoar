const plan = [
    {
        id:1,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_9.png&w=1536&q=100",
        home:"Բնակարան - 51Մ2",
        corridor:"Միջանցք - 5,3Մ2",
        bedroom:"Ննջասենյակ - 14,3Մ2",
        livingRoomKitchen:"Հյուրասենյակ-Խոհանոց - 25Մ2",
        bathroom:"Սանհանգույց - 4,5Մ2"
    },
    {
        id:2,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_2.png&w=640&q=100",
        home:"Բնակարան - 59Մ2",
        corridor:"Միջանցք - 5,3Մ2",
        bedroom:"Ննջասենյակ - 14,3Մ2",
        livingRoomKitchen:"Հյուրասենյակ-Խոհանոց - 25Մ2",
        bathroom:"Սանհանգույց - 4,5Մ2"
    },
    {
        id:3,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_3.png&w=640&q=100",
        home:"Բնակարան - 62,5Մ2",
        corridor:"Միջանցք - 8,5Մ2",
        bedroom:"Ննջասենյակ - 11Մ2",
        livingRoomKitchen:"Հյուրասենյակ-Խոհանոց - 27,7Մ2",
        bathroom:"Սանհանգույց - 10,6Մ2"
    },
    {
        id:4,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_4.png&w=640&q=100",
        home:"Բնակարան - 63,5Մ2",
        corridor:"Միջանցք - 8,5Մ2",
        bedroom:"Ննջասենյակ - 11,2",
        livingRoomKitchen:"Հյուրասենյակ-Խոհանոց - 25,5Մ2",
        bathroom:"Սանհանգույց - 1 - 3,6Մ2",
        balcony:"Պատշգամբ - 14,7Մ2"
    },
    {
        id:5,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_5.png&w=640&q=100",
        home:"Բնակարան - 53,9Մ2",
        corridor:"Միջանցք - 2,5Մ2",
        bedroom:"Ննջասենյակ - 11Մ2 11Մ2",
        closet:"Քլոզեթ - 2,6Մ2",
        livingRoomKitchen:"Հյուրասենյակ-Խոհանոց - 21,7Մ2",
        bathroom:"Սանհանգույց - 3,7Մ2",
        balcony:"Պատշգամբ - 12,4Մ2"
    },
    {
        id:6,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_6.png&w=640&q=100",
        home:"Բնակարան - 62,3Մ2",
        corridor:"Միջանցք - 6,2Մ2",
        bedroom:"Ննջասենյակ - 12,3Մ2",
        closet:"Քլոզեթ - 2,5Մ2",
        livingRoomKitchen:"Հյուրասենյակ-Խոհանոց - 24Մ2",
        bathroom:"Սանհանգույց - 5Մ2",
        balcony:"Պատշգամբ - 12,4Մ2"
    },
    {
        id:7,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_7.png&w=640&q=100",
        home:"Բնակարան - 62Մ2",
        corridor:"Միջանցք - 6,8Մ2",
        bedroom:"Ննջասենյակ - 16,3Մ2",
        livingRoomKitchen:"Հյուրասենյակ-Խոհանոց - 29Մ2",
        bathroom:"Սանհանգույց - 5,1Մ2",
        balcony:"Պատշգամբ - 12,4Մ2",
        storageRoom:"Խորդանոց - 2,2Մ2"
    },
    {
        id:8,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_8.png&w=640&q=100",
        home:"Բնակարան - 77Մ2",
        corridor:"Միջանցք - 9,6Մ2",
        bedroom:"Ննջասենյակ - 1 - 13Մ2",
        bedroom2:"Ննջասենյակ - 2 - 11Մ2",
        livingRoomKitchen:"Հյուրասենյակ-Խոհանոց - 29,6Մ2",
        bathroom:"Սանհանգույց - 4,8Մ2",
        balcony:"Պատշգամբ - 9Մ2"
    },
    {
        id:9,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_9.png&w=640&q=100",
        home:"Բնակարան - 112,8Մ2",
        corridor:"Միջանցք - 11Մ2",
        bedroom:"Ննջասենյակ - 1 - 14Մ2",
        bedroom2:"Ննջասենյակ - 2 - 17Մ2",
        bathroom:"Սանհանգույց - 1 - 5Մ2",
        bathroom2:"Սանհանգույց - 1 - 4,5Մ2",
        livingRoomKitchen:"Հյուրասենյակ-Խոհանոց - 46Մ2",
        balcony:"Պատշգամբ - 6,7Մ2"
    },
    {
        id:10,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_10.png&w=640&q=100",
        home:"Բնակարան - 139Մ2",
        corridor:"Միջանցք - 9,2Մ2",
        bedroom:"Ննջասենյակ - 1 - 19Մ2",
        bedroom2:"Ննջասենյակ - 2 - 23Մ2",
        bathroom:"Սանհանգույց - 1 - 5,2Մ2",
        bathroom2:"Սանհանգույց - 1 - 5,2Մ2",
        livingRoom:"Հյուրասենյակ - 52Մ2",
        kitchen:"Խոհանոց - 13,82",
        balcony:"Պատշգամբ - 9Մ2"
    },
    {
        id:11,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_11.png&w=640&q=100",
        home:"Բնակարան - 119,4Մ2",
        corridor:"Միջանցք - 9Մ2",
        bedroom:"Ննջասենյակ - 1 - 17Մ2",
        bedroom2:"Ննջասենյակ - 2 - 15Մ2",
        bathroom:"Սանհանգույց - 1 - 4,8Մ2",
        livingRoomKitchen:"Հյուրասենյակ-Խոհանոց - 44Մ2",
        balcony:"Պատշգամբ - 27,7Մ2"
    },
    {
        id:12,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_12.png&w=640&q=100",
        home:"Բնակարան - 112,8Մ2",
        corridor:"Միջանցք - 11Մ2",
        bedroom:"Ննջասենյակ - 1 - 14Մ2",
        bedroom2:"Ննջասենյակ - 2 - 17Մ2",
        bathroom:"Սանհանգույց - 1 - 4,5Մ2",
        livingRoom:"Հյուրասենյակ - 46Մ2",
        kitchen:"Խոհանոց - 12,22",
        balcony:"Պատշգամբ - 6,7Մ2"
    },
    {
        id:13,
        link:"https://zoar.am/_vercel/image?url=/images/apartaments/apartament_zoom_13.png&w=640&q=100",
        home:"Բնակարան - 112,8Մ2",
        corridor:"Միջանցք - 11Մ2",
        bedroom:"Ննջասենյակ - 1 - 14Մ2",
        bedroom2:"Ննջասենյակ - 2 - 17Մ2",
        bathroom:"Սանհանգույց - 1 - 5",
        bathroom2:"Սանհանգույց - 1 - 4,5Մ2",
        livingRoomKitchen:"Հյուրասենյակ-Խոհանոց - 46Մ2",
        balcony:"Պատշգամբ - 6,7Մ2"
    },
]
export default plan