//repair/deviceData.js

const deviceTypes = [
    {
      brand: "Apple",
      image: "/assets/images/repair/Apple/Apple-Logo.svg",
      models: [
        {
          name: "iPhone",
          image: "/assets/images/repair/Apple/iPhone/Apple-iPhone.png",
          series: [
            {
              name: "iPhone 15",
              image: "/assets/images/repair/Apple/iPhone/15/15ProMax.png",
              devices: [
                { name: "iPhone 15 Pro Max", image: "/assets/images/repair/Apple/iPhone/15/15ProMax.png"}, //TODO: Add image
                { name: "iPhone 15 Pro", image: "/assets/images/repair/Apple/iPhone/15/15ProMax.png" }, //TODO: Add image
                { name: "iPhone 15 Plus", image: "/assets/images/repair/Apple/iPhone/15/iPhone-15.jpg" }, //TODO: Add image
                { name: "iPhone 15", image: "/assets/images/repair/Apple/iPhone/15/iPhone-15.jpg" } //TODO: Add image
              ]
            },
            {
              name: "iPhone 14",
              image: "/assets/images/repair/Apple/iPhone/14/14ProMax.png",
              devices: [
                { name: "iPhone 14 Pro Max" }, //TODO: Add image
                { name: "iPhone 14 Pro" }, //TODO: Add imageone 15
                { name: "iPhone 14 Plus" }, //TODO: Add image
                { name: "iPhone 14" } //TODO: Add image
              ]
            },
            {
                name: "iPhone 13",
                image: "/assets/images/repair/Apple/iPhone/13/13ProMax.png",
                devices: [
                    { name: "iPhone 13 Pro Max"}, //TODO: Add image
                    { name: "iPhone 13 Pro" }, //TODO: Add image
                    { name: "iPhone 13 mini" }, //TODO: Add image
                    { name: "iPhone 13" } //TODO: Add image
                ]
            },
            {
                name: "iPhone 12",
                image: "/assets/images/repair/Apple/iPhone/12/12ProMax.png",
                devices: [
                    { name: "iPhone 12 Pro Max" }, //TODO: Add image
                    { name: "iPhone 12 Pro" }, //TODO: Add image
                    { name: "iPhone 12 mini" }, //TODO: Add image
                    { name: "iPhone 12" } //TODO: Add image
                ]
            },
            {
                name: "iPhone 11",
                image: "/assets/images/repair/Apple/iPhone/11/11ProMax.png",
                devices: [
                    { name: "iPhone 11 Pro Max" }, //TODO: Add image
                    { name: "iPhone 11 Pro" }, //TODO: Add image
                    { name: "iPhone 11" } //TODO: Add image
                ]
            },
            {
                name: "iPhone X",
                image: "/assets/images/repair/Apple/iPhone/X/iPhone-X.png",
                devices: [
                    { name: "iPhone X" }, //TODO: Add image
                    { name: "iPhone XS" }, //TODO: Add image
                    { name: "iPhone XR" }, //TODO: Add image
                    { name: "iPhone XS Max" }, //TODO: Add image
                ]
            },
            {
                name: "iPhone SE",
                image: "/assets/images/repair/Apple/iPhone/SE/SE.png",
                devices: [
                    { name: "iPhone SE" }, //TODO: Add image
                    { name: "iPhone SE 2" }, //TODO: Add image
                    { name: "iPhone SE 3" }, //TODO: Add image
                ]
            },
            {
                name: "iPhone 8",
                image: "/assets/images/repair/Apple/iPhone/8/iPhone-8Plus.png",
                devices: [
                    { name: "iPhone 8" }, //TODO: Add image
                    { name: "iPhone 8 Plus" } //TODO: Add image
                ]
            },
            {
                name: "iPhone 7",
                image: "/assets/images/repair/Apple/iPhone/7/iPhone-7Plus.png",
                devices: [
                    { name: "iPhone 7" }, //TODO: Add image
                    { name: "iPhone 7 Plus" } //TODO: Add image
                ]
            },
          ]
        },
        {
          name: "iPad",
          image: "/assets/images/repair/Apple/iPad/Apple-iPad.png",
          devices: [
            { name: "iPad Pro" }, //TODO: Add image
            { name: "iPad Air" }, //TODO: Add image
            { name: "iPad" } //TODO: Add image
          ]
        },
        {
          name: "Apple Watch",
          image: "/assets/images/repair/Apple/Watch/Apple-Watch.png",
          devices: [
            // It looks like these were mistakenly named as iPad models; consider updating these to Apple Watch models
            { name: "Apple Watch Series 7" }, //TODO: Add image
            { name: "Apple Watch SE" }, //TODO: Add image
            // Add more Apple Watch models here
          ]
        }
        //TODO: OTHER DEVICES
      ]
    },
    {
      brand: "Samsung",
      image: "/assets/images/repair/Samsung/Samsung-Logo.svg",
      models: [
        {
          name: "Galaxy",
          // Add Galaxy series and devices here
        }
      ]
    },
    {
      brand: "Google",
      image: "/assets/images/repair/Google/Google-Logo.svg",
      models: [
        {
          name: "Google Phone",
          // Add Google Phone series and devices here
        }
      ]
    },
    {
      brand: "LG",
      image: "/assets/images/repair/LG/LG-Logo.svg",
      models: [
        {
          name: "LG Phone",
          // Add LG Phone series and devices here
        }
      ]
    },
    {
      brand: "Huawei",
      image: "/assets/images/repair/Huawei/Huawei-Logo.svg",
      models: [
        {
          name: "Huawei Phone",
          // Add Huawei Phone series and devices here
        }
      ]
    },
    {
      brand: "Others",
      image: "/assets/images/repair/Other/Other-Logo.png",
      models: [
        {
          name: "Other Phones",
          // Add Other Phone series and devices here
        }
      ]
    }
  ];
  
  export default deviceTypes;
  