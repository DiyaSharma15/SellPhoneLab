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
                { name: "iPhone 14 Pro Max", image: "/assets/images/repair/Apple/iPhone/14/14ProMax.png" },
                { name: "iPhone 14 Pro", image: "/assets/images/repair/Apple/iPhone/14/14Pro.jpg" }, 
                { name: "iPhone 14 Plus", image: "/assets/images/repair/Apple/iPhone/14/14Plus.jpg" },
                { name: "iPhone 14", image: "/assets/images/repair/Apple/iPhone/14/iPhone-14.jpg" } 
              ]
            },
            {
                name: "iPhone 13",
                image: "/assets/images/repair/Apple/iPhone/13/13ProMax.png",
                devices: [
                    { name: "iPhone 13 Pro Max", image: "/assets/images/repair/Apple/iPhone/13/13ProMax.png" }, 
                    { name: "iPhone 13 Pro", image: "/assets/images/repair/Apple/iPhone/13/13Pro.jpg" }, 
                    { name: "iPhone 13 mini", image: "/assets/images/repair/Apple/iPhone/13/13Mini.jpg" }, 
                    { name: "iPhone 13", image: "/assets/images/repair/Apple/iPhone/13/iPhone-13.jpg" } 
                ]
            },
            {
                name: "iPhone 12",
                image: "/assets/images/repair/Apple/iPhone/12/12ProMax.png",
                devices: [
                    { name: "iPhone 12 Pro Max", image: "/assets/images/repair/Apple/iPhone/12/12ProMax.png" }, 
                    { name: "iPhone 12 Pro", image: "/assets/images/repair/Apple/iPhone/12/12Pro.png" }, 
                    { name: "iPhone 12 mini", image: "/assets/images/repair/Apple/iPhone/12/12Mini.png" }, 
                    { name: "iPhone 12", image: "/assets/images/repair/Apple/iPhone/12/iPhone-12.png" } 
                ]
            },
            {
                name: "iPhone 11",
                image: "/assets/images/repair/Apple/iPhone/11/11ProMax.png",
                devices: [
                    { name: "iPhone 11 Pro Max", image: "/assets/images/repair/Apple/iPhone/11/11ProMax.png" }, 
                    { name: "iPhone 11 Pro", image: "/assets/images/repair/Apple/iPhone/11/11Pro.png" },
                    { name: "iPhone 11", image: "/assets/images/repair/Apple/iPhone/11/iPhone-11.png" } 
                ]
            },
            {
                name: "iPhone X",
                image: "/assets/images/repair/Apple/iPhone/X/iPhone-X.png",
                devices: [
                    { name: "iPhone X", image: "/assets/images/repair/Apple/iPhone/X/iPhone-X.png" }, 
                    { name: "iPhone XS", image: "/assets/images/repair/Apple/iPhone/X/XS.png" }, 
                    { name: "iPhone XR", image: "/assets/images/repair/Apple/iPhone/X/XR.png" },
                    { name: "iPhone XS Max", image: "/assets/images/repair/Apple/iPhone/X/XSMax.png" }, 
                ]
            },
            {
                name: "iPhone SE",
                image: "/assets/images/repair/Apple/iPhone/SE/SE.png",
                devices: [
                    { name: "iPhone SE (1st Generation)", image: "/assets/images/repair/Apple/iPhone/SE/SE.png" }, 
                    { name: "iPhone SE (2nd Generation)", image: "/assets/images/repair/Apple/iPhone/SE/SE2.png" }, 
                    { name: "iPhone SE (3rd Generation)", image: "/assets/images/repair/Apple/iPhone/SE/SE3.jpg" }, 
                ]
            },
            {
                name: "iPhone 8",
                image: "/assets/images/repair/Apple/iPhone/8/iPhone-8Plus.png",
                devices: [
                    { name: "iPhone 8", image: "/assets/images/repair/Apple/iPhone/8/iPhone-8.png" }, 
                    { name: "iPhone 8 Plus", image: "/assets/images/repair/Apple/iPhone/8/iPhone-8Plus.png" } 
                ]
            },
            {
                name: "iPhone 7",
                image: "/assets/images/repair/Apple/iPhone/7/iPhone-7Plus.png",
                devices: [
                    { name: "iPhone 7", image: "/assets/images/repair/Apple/iPhone/7/iPhone-7.jpg" },
                    { name: "iPhone 7 Plus", image: "/assets/images/repair/Apple/iPhone/7/iPhone-7Plus.png" } 
                ]
            },
          ]
        },
        {
          name: "iPad",
          image: "/assets/images/repair/Apple/iPad/iPadPro/iPadPro.png",
          series: [
            {
              name: "iPad Pro",
              image: "/assets/images/repair/Apple/iPad/iPadPro/iPadPro.png",
              devices: [
                { name: "iPad Pro 12.9'' (6th Generation)", image: "/assets/images/repair/Apple/iPad/iPadPro/iPadPro.png" }, 
                { name: "iPad Pro 12.9'' (5th Generation)", image: "/assets/images/repair/Apple/iPad/iPadPro/Pro-12.9-5th.jpg" }, 
                { name: "iPad Pro 12.9'' (4th Generation)", image: "/assets/images/repair/Apple/iPad/iPadPro/Pro-12.9-4th.png" }, 
                { name: "iPad Pro 12.9'' (3rd Generation)", image: "/assets/images/repair/Apple/iPad/iPadPro/Pro-12.9-3rd.png" }, 
                { name: "iPad Pro 12.9'' (2nd Generation)", image: "/assets/images/repair/Apple/iPad/iPadPro/Pro-12.9-2nd.png" }, 
                { name: "iPad Pro 12.9'' (1st Generation)", image: "/assets/images/repair/Apple/iPad/iPadPro/Pro-12.9-1st.png" },
                { name: "iPad Pro 11'' (2nd Generation)", image: "/assets/images/repair/Apple/iPad/iPadPro/Pro-11-2nd.png" }, 
                { name: "iPad Pro 11'' (1st Generation)", image: "/assets/images/repair/Apple/iPad/iPadPro/Pro-11-1st.png" },
                { name: "iPad Pro 10.5''", image: "/assets/images/repair/Apple/iPad/iPadPro/Pro-10.5.png" }, 
                { name: "iPad Pro 9.7''", image: "/assets/images/repair/Apple/iPad/iPadPro/Pro-9.7.png" } 
              ]
            },
            {
              name: "iPad Mini",
              image: "/assets/images/repair/Apple/iPad/iPadMini/iPad-Mini.jpg",
              devices: [
                { name: "iPad Mini 6", image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-6.jpg" }, 
                { name: "iPad Mini 5", image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-5.png" }, 
                { name: "iPad Mini 4", image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-4.png" }, 
                { name: "iPad Mini 3", image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-3.png" }, 
                { name: "iPad Mini 2", image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-2.png" },
                { name: "iPad Mini 1", image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-1.png" }
              ]
            },
            {
              name: "iPad",
              image: "/assets/images/repair/Apple/iPad/iPad/iPad.jpg",
              devices: [
                { name: "iPhone 15 Pro Max", image: "/assets/images/repair/Apple/iPhone/15/15ProMax.png"}, //TODO: Add image
                { name: "iPhone 15 Pro", image: "/assets/images/repair/Apple/iPhone/15/15ProMax.png" }, //TODO: Add image
                { name: "iPhone 15 Plus", image: "/assets/images/repair/Apple/iPhone/15/iPhone-15.jpg" }, //TODO: Add image
                { name: "iPhone 15", image: "/assets/images/repair/Apple/iPhone/15/iPhone-15.jpg" } //TODO: Add image
              ]
            },
            {
              name: "iPad Air",
              image: "/assets/images/repair/Apple/iPad/iPadAir/iPad-Air.jpg",
              devices: [
                { name: "iPhone 15 Pro Max", image: "/assets/images/repair/Apple/iPhone/15/15ProMax.png"}, //TODO: Add image
                { name: "iPhone 15 Pro", image: "/assets/images/repair/Apple/iPhone/15/15ProMax.png" }, //TODO: Add image
                { name: "iPhone 15 Plus", image: "/assets/images/repair/Apple/iPhone/15/iPhone-15.jpg" }, //TODO: Add image
                { name: "iPhone 15", image: "/assets/images/repair/Apple/iPhone/15/iPhone-15.jpg" } //TODO: Add image
              ]
            },
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
  