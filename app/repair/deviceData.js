//repair/deviceData.js

const deviceTypes = [
    {
      brand: "Apple",
      image: "/assets/images/repair/Apple/Apple-Logo.svg",
      models: [
        {
          name: "iPhone",
          image: "/assets/images/repair/Apple/DeviceType/Apple-iPhone.png",
          series: [
            {
              name: "iPhone 15",
              devices: [
                { name: "iPhone 15 Pro Max" }, //TODO: Add image
                { name: "iPhone 15 Pro" }, //TODO: Add image
                { name: "iPhone 15 Plus" }, //TODO: Add image
                { name: "iPhone 15" } //TODO: Add image
              ]
            },
            {
              name: "iPhone 14",
              devices: [
                { name: "iPhone 14 Pro Max" }, //TODO: Add image
                { name: "iPhone 14 Pro" }, //TODO: Add image
                { name: "iPhone 14 Plus" }, //TODO: Add image
                { name: "iPhone 14" } //TODO: Add image
              ]
            },
            {
                name: "iPhone 13",
                devices: [
                    { name: "iPhone 13 Pro Max" }, //TODO: Add image
                    { name: "iPhone 13 Pro" }, //TODO: Add image
                    { name: "iPhone 13 mini" }, //TODO: Add image
                    { name: "iPhone 13" } //TODO: Add image
                ]
            },
            {
                name: "iPhone 12",
                devices: [
                    { name: "iPhone 12 Pro Max" }, //TODO: Add image
                    { name: "iPhone 12 Pro" }, //TODO: Add image
                    { name: "iPhone 12 mini" }, //TODO: Add image
                    { name: "iPhone 12" } //TODO: Add image
                ]
            },
            {
                name: "iPhone 11",
                devices: [
                    { name: "iPhone 11 Pro Max" }, //TODO: Add image
                    { name: "iPhone 11 Pro" }, //TODO: Add image
                    { name: "iPhone 11" } //TODO: Add image
                ]
            },
            {
                name: "iPhone X",
                devices: [
                    { name: "iPhone X" }, //TODO: Add image
                    { name: "iPhone XS" }, //TODO: Add image
                    { name: "iPhone XR" }, //TODO: Add image
                    { name: "iPhone XS Max" }, //TODO: Add image
                ]
            },
            {
                name: "iPhone SE",
                devices: [
                    { name: "iPhone SE" }, //TODO: Add image
                    { name: "iPhone SE 2" }, //TODO: Add image
                    { name: "iPhone SE 3" }, //TODO: Add image
                ]
            },
            {
                name: "iPhone 8",
                devices: [
                    { name: "iPhone 8" }, //TODO: Add image
                    { name: "iPhone 8 Plus" } //TODO: Add image
                ]
            },
            {
                name: "iPhone 7",
                devices: [
                    { name: "iPhone 7" }, //TODO: Add image
                    { name: "iPhone 7 Plus" } //TODO: Add image
                ]
            },
          ]
        },
        {
          name: "iPad",
          image: "/assets/images/repair/Apple/DeviceType/Apple-iPad.png",
          devices: [
            { name: "iPad Pro" }, //TODO: Add image
            { name: "iPad Air" }, //TODO: Add image
            { name: "iPad" } //TODO: Add image
          ]
        },
        {
          name: "Apple Watch",
          image: "/assets/images/repair/Apple/DeviceType/Apple-Watch.png",
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
      image: "/assets/images/repair/Other/Other-Logo.svg",
      models: [
        {
          name: "Other Phones",
          // Add Other Phone series and devices here
        }
      ]
    }
  ];
  
  export default deviceTypes;
  