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
              image: "/assets/images/repair/Apple/iPad/iPad/7.png",
              devices: [
                { name: "iPad 7", image: "/assets/images/repair/Apple/iPad/iPad/7.png"}, 
                { name: "iPad 6", image: "/assets/images/repair/Apple/iPad/iPad/6.png" }, 
                { name: "iPad 5", image: "/assets/images/repair/Apple/iPad/iPad/5.png" }, 
                { name: "iPad 4", image: "/assets/images/repair/Apple/iPad/iPad/4.png" },
                { name: "iPad 3", image: "/assets/images/repair/Apple/iPad/iPad/3.png" },
                { name: "iPad 2", image: "/assets/images/repair/Apple/iPad/iPad/2.png" }
              ]
            },
            {
              name: "iPad Air",
              image: "/assets/images/repair/Apple/iPad/iPadAir/iPad-Air.jpg",
              devices: [
                { name: "iPad Air 5", image: "/assets/images/repair/Apple/iPad/iPadAir/5.png"}, 
                { name: "iPad Air 4", image: "/assets/images/repair/Apple/iPad/iPadAir/4.jpg" }, 
                { name: "iPad Air 3", image: "/assets/images/repair/Apple/iPad/iPadAir/3.png" }, 
                { name: "iPad Air 2", image: "/assets/images/repair/Apple/iPad/iPadAir/2.png" },
                { name: "iPad Air 1", image: "/assets/images/repair/Apple/iPad/iPadAir/1.png" }
              ]
            },
          ]
        },
        {
          name: "Apple Watch",
          image: "/assets/images/repair/Apple/Watch/Apple-Watch.png",
          series: [
            {
              name: "Apple Watch",
              image: "/assets/images/repair/Apple/Watch/Series-8-45.jpg",
              devices: [
                { name: "Series 8 (45mm)", image: "/assets/images/repair/Apple/Watch/Series-8-45.jpg" }, 
                { name: "Series 8 (41mm)", image: "/assets/images/repair/Apple/Watch/Series-8-41.jpg" }, 
                { name: "Series 7 (45mm)", image: "/assets/images/repair/Apple/Watch/Series-7-45.jpg" }, 
                { name: "Series 7 (41mm)", image: "/assets/images/repair/Apple/Watch/Series-7-41.jpg" },
                { name: "Series 6 (44mm)", image: "/assets/images/repair/Apple/Watch/Series-6-44.jpg" },
                { name: "Series 6 (40mm)", image: "/assets/images/repair/Apple/Watch/Series-6-40.jpg" },
                { name: "Series 5 (44mm)", image: "/assets/images/repair/Apple/Watch/Series-5-44.jpg" },
                { name: "Series 5 (40mm)", image: "/assets/images/repair/Apple/Watch/Series-5-40.jpg" },
                { name: "Series 4 (44mm)", image: "/assets/images/repair/Apple/Watch/Series-4-44.jpg" },
                { name: "Series 4 (40mm)", image: "/assets/images/repair/Apple/Watch/Series-4-40.jpg" },
                { name: "Series 3 (42mm)", image: "/assets/images/repair/Apple/Watch/Series-3-42.jpg" },
                { name: "Series 3 (38mm)", image: "/assets/images/repair/Apple/Watch/Series-3-38.jpg" },
                { name: "Series 2 (42mm)", image: "/assets/images/repair/Apple/Watch/Series-2-42.jpg" },
                { name: "Series 2 (38mm)", image: "/assets/images/repair/Apple/Watch/Series-2-38.jpg" },
                { name: "Series 1 (42mm)", image: "/assets/images/repair/Apple/Watch/Series-1-42.jpg" },
                { name: "Series 1 (38mm)", image: "/assets/images/repair/Apple/Watch/Series-1-38.jpg" }
              ]
            },
            {
              name: "Apple Watch SE",
              image: "/assets/images/repair/Apple/Watch/SE/SE-2-44.jpg",
              devices: [
                { name: "SE Gen 2 (44mm)", image: "/assets/images/repair/Apple/Watch/SE/SE-2-44.jpg" }, 
                { name: "SE Gen 2 (40mm)", image: "/assets/images/repair/Apple/Watch/SE/SE-2-40.jpg" }, 
                { name: "SE Gen 1 (44mm)", image: "/assets/images/repair/Apple/Watch/SE/SE-1-44.jpg" }, 
                { name: "SE Gen 1 (40mm)", image: "/assets/images/repair/Apple/Watch/SE/SE-1-40.jpg" }
              ]
            },
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
  