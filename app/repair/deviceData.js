//repair/deviceData.js

const deviceTypes = [
    {
        brand: "Apple",
        image: "/assets/images/repair/Apple/Apple-Logo.svg",
        models: [
            {
                name: "iPhone",
                devices: [
                    {name: "iPhone 15 Pro Max", /*TODO: Add image*/},
                    {name: "iPhone 15 Pro", /*TODO: Add image*/},
                    {name: "iPhone 15", /*TODO: Add image*/},
                    //TODO: OTHER MODELS
                ],
            },
            {
                name: "iPad",
                devices: [
                    {name: "iPad Pro", /*TODO: Add image*/},
                    {name: "iPad Air", /*TODO: Add image*/},
                    {name: "iPad", /*TODO: Add image*/},
                ],
            },
            //TODO: OTHER DEVICES
        ],
    },
    {
        brand: "Samsung",
        image: "/assets/images/repair/Samsung/Samsung-Logo.svg",
        models: [
            {
                name: "Galaxy",
            },
        ],
    },
    {
        brand: "Google",
        image: "/assets/images/repair/Google/Google-Logo.svg",
        models: [
            {
                name: "Google Phone",
            },
        ],
    },
    {
        brand: "LG",
        image: "/assets/images/repair/LG/LG-Logo.svg",
        models: [
            {
                name: "LG Phone",
            },
        ],
    },
    {
        brand: "Huawei",
        image: "/assets/images/repair/Huawei/Huawei-Logo.svg",
        models: [
            {
                name: "Huawei Phone",
            },
        ],
    },
    {
        brand: "Others",
        image: "/assets/images/repair/Other/Other-Logo.svg",
        models: [
            {
                name: "Other Phones",
            },
        ],
    },
];

export default deviceTypes;