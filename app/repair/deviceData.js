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
              {
                name: "iPhone 15 Pro Max",
                image: "/assets/images/repair/Apple/iPhone/15/15ProMax.png",
              }, //TODO: Add image
              {
                name: "iPhone 15 Pro",
                image: "/assets/images/repair/Apple/iPhone/15/15ProMax.png",
              }, //TODO: Add image
              {
                name: "iPhone 15 Plus",
                image: "/assets/images/repair/Apple/iPhone/15/iPhone-15.jpg",
              }, //TODO: Add image
              {
                name: "iPhone 15",
                image: "/assets/images/repair/Apple/iPhone/15/iPhone-15.jpg",
              }, //TODO: Add image
            ],
          },
          {
            name: "iPhone 14",
            image: "/assets/images/repair/Apple/iPhone/14/14ProMax.png",
            devices: [
              {
                name: "iPhone 14 Pro Max",
                image: "/assets/images/repair/Apple/iPhone/14/14ProMax.png",
              },
              {
                name: "iPhone 14 Pro",
                image: "/assets/images/repair/Apple/iPhone/14/14Pro.jpg",
              },
              {
                name: "iPhone 14 Plus",
                image: "/assets/images/repair/Apple/iPhone/14/14Plus.jpg",
              },
              {
                name: "iPhone 14",
                image: "/assets/images/repair/Apple/iPhone/14/iPhone-14.jpg",
              },
            ],
          },
          {
            name: "iPhone 13",
            image: "/assets/images/repair/Apple/iPhone/13/13ProMax.png",
            devices: [
              {
                name: "iPhone 13 Pro Max",
                image: "/assets/images/repair/Apple/iPhone/13/13ProMax.png",
              },
              {
                name: "iPhone 13 Pro",
                image: "/assets/images/repair/Apple/iPhone/13/13Pro.jpg",
              },
              {
                name: "iPhone 13 mini",
                image: "/assets/images/repair/Apple/iPhone/13/13Mini.jpg",
              },
              {
                name: "iPhone 13",
                image: "/assets/images/repair/Apple/iPhone/13/iPhone-13.jpg",
              },
            ],
          },
          {
            name: "iPhone 12",
            image: "/assets/images/repair/Apple/iPhone/12/12ProMax.png",
            devices: [
              {
                name: "iPhone 12 Pro Max",
                image: "/assets/images/repair/Apple/iPhone/12/12ProMax.png",
              },
              {
                name: "iPhone 12 Pro",
                image: "/assets/images/repair/Apple/iPhone/12/12Pro.png",
              },
              {
                name: "iPhone 12 mini",
                image: "/assets/images/repair/Apple/iPhone/12/12Mini.png",
              },
              {
                name: "iPhone 12",
                image: "/assets/images/repair/Apple/iPhone/12/iPhone-12.png",
              },
            ],
          },
          {
            name: "iPhone 11",
            image: "/assets/images/repair/Apple/iPhone/11/11ProMax.png",
            devices: [
              {
                name: "iPhone 11 Pro Max",
                image: "/assets/images/repair/Apple/iPhone/11/11ProMax.png",
              },
              {
                name: "iPhone 11 Pro",
                image: "/assets/images/repair/Apple/iPhone/11/11Pro.png",
              },
              {
                name: "iPhone 11",
                image: "/assets/images/repair/Apple/iPhone/11/iPhone-11.png",
              },
            ],
          },
          {
            name: "iPhone X",
            image: "/assets/images/repair/Apple/iPhone/X/iPhone-X.png",
            devices: [
              {
                name: "iPhone X",
                image: "/assets/images/repair/Apple/iPhone/X/iPhone-X.png",
              },
              {
                name: "iPhone XS",
                image: "/assets/images/repair/Apple/iPhone/X/XS.png",
              },
              {
                name: "iPhone XR",
                image: "/assets/images/repair/Apple/iPhone/X/XR.png",
              },
              {
                name: "iPhone XS Max",
                image: "/assets/images/repair/Apple/iPhone/X/XSMax.png",
              },
            ],
          },
          {
            name: "iPhone SE",
            image: "/assets/images/repair/Apple/iPhone/SE/SE.png",
            devices: [
              {
                name: "iPhone SE (1st Generation)",
                image: "/assets/images/repair/Apple/iPhone/SE/SE.png",
              },
              {
                name: "iPhone SE (2nd Generation)",
                image: "/assets/images/repair/Apple/iPhone/SE/SE2.png",
              },
              {
                name: "iPhone SE (3rd Generation)",
                image: "/assets/images/repair/Apple/iPhone/SE/SE3.jpg",
              },
            ],
          },
          {
            name: "iPhone 8",
            image: "/assets/images/repair/Apple/iPhone/8/iPhone-8Plus.png",
            devices: [
              {
                name: "iPhone 8",
                image: "/assets/images/repair/Apple/iPhone/8/iPhone-8.png",
              },
              {
                name: "iPhone 8 Plus",
                image: "/assets/images/repair/Apple/iPhone/8/iPhone-8Plus.png",
              },
            ],
          },
          {
            name: "iPhone 7",
            image: "/assets/images/repair/Apple/iPhone/7/iPhone-7Plus.png",
            devices: [
              {
                name: "iPhone 7",
                image: "/assets/images/repair/Apple/iPhone/7/iPhone-7.jpg",
              },
              {
                name: "iPhone 7 Plus",
                image: "/assets/images/repair/Apple/iPhone/7/iPhone-7Plus.png",
              },
            ],
          },
        ],
      },
      {
        name: "iPad",
        image: "/assets/images/repair/Apple/iPad/iPadPro/iPadPro.png",
        series: [
          {
            name: "iPad Pro",
            image: "/assets/images/repair/Apple/iPad/iPadPro/iPadPro.png",
            devices: [
              {
                name: "iPad Pro 12.9'' (6th Generation)",
                image: "/assets/images/repair/Apple/iPad/iPadPro/iPadPro.png",
              },
              {
                name: "iPad Pro 12.9'' (5th Generation)",
                image:
                  "/assets/images/repair/Apple/iPad/iPadPro/Pro-12.9-5th.jpg",
              },
              {
                name: "iPad Pro 12.9'' (4th Generation)",
                image:
                  "/assets/images/repair/Apple/iPad/iPadPro/Pro-12.9-4th.png",
              },
              {
                name: "iPad Pro 12.9'' (3rd Generation)",
                image:
                  "/assets/images/repair/Apple/iPad/iPadPro/Pro-12.9-3rd.png",
              },
              {
                name: "iPad Pro 12.9'' (2nd Generation)",
                image:
                  "/assets/images/repair/Apple/iPad/iPadPro/Pro-12.9-2nd.png",
              },
              {
                name: "iPad Pro 12.9'' (1st Generation)",
                image:
                  "/assets/images/repair/Apple/iPad/iPadPro/Pro-12.9-1st.png",
              },
              {
                name: "iPad Pro 11'' (2nd Generation)",
                image:
                  "/assets/images/repair/Apple/iPad/iPadPro/Pro-11-2nd.png",
              },
              {
                name: "iPad Pro 11'' (1st Generation)",
                image:
                  "/assets/images/repair/Apple/iPad/iPadPro/Pro-11-1st.png",
              },
              {
                name: "iPad Pro 10.5''",
                image: "/assets/images/repair/Apple/iPad/iPadPro/Pro-10.5.png",
              },
              {
                name: "iPad Pro 9.7''",
                image: "/assets/images/repair/Apple/iPad/iPadPro/Pro-9.7.png",
              },
            ],
          },
          {
            name: "iPad Mini",
            image: "/assets/images/repair/Apple/iPad/iPadMini/iPad-Mini.jpg",
            devices: [
              {
                name: "iPad Mini 6",
                image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-6.jpg",
              },
              {
                name: "iPad Mini 5",
                image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-5.png",
              },
              {
                name: "iPad Mini 4",
                image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-4.png",
              },
              {
                name: "iPad Mini 3",
                image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-3.png",
              },
              {
                name: "iPad Mini 2",
                image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-2.png",
              },
              {
                name: "iPad Mini 1",
                image: "/assets/images/repair/Apple/iPad/iPadMini/Mini-1.png",
              },
            ],
          },
          {
            name: "iPad",
            image: "/assets/images/repair/Apple/iPad/iPad/7.png",
            devices: [
              {
                name: "iPad 7",
                image: "/assets/images/repair/Apple/iPad/iPad/7.png",
              },
              {
                name: "iPad 6",
                image: "/assets/images/repair/Apple/iPad/iPad/6.png",
              },
              {
                name: "iPad 5",
                image: "/assets/images/repair/Apple/iPad/iPad/5.png",
              },
              {
                name: "iPad 4",
                image: "/assets/images/repair/Apple/iPad/iPad/4.png",
              },
              {
                name: "iPad 3",
                image: "/assets/images/repair/Apple/iPad/iPad/3.png",
              },
              {
                name: "iPad 2",
                image: "/assets/images/repair/Apple/iPad/iPad/2.png",
              },
            ],
          },
          {
            name: "iPad Air",
            image: "/assets/images/repair/Apple/iPad/iPadAir/iPad-Air.jpg",
            devices: [
              {
                name: "iPad Air 5",
                image: "/assets/images/repair/Apple/iPad/iPadAir/5.png",
              },
              {
                name: "iPad Air 4",
                image: "/assets/images/repair/Apple/iPad/iPadAir/4.jpg",
              },
              {
                name: "iPad Air 3",
                image: "/assets/images/repair/Apple/iPad/iPadAir/3.png",
              },
              {
                name: "iPad Air 2",
                image: "/assets/images/repair/Apple/iPad/iPadAir/2.png",
              },
              {
                name: "iPad Air 1",
                image: "/assets/images/repair/Apple/iPad/iPadAir/1.png",
              },
            ],
          },
        ],
      },
      {
        name: "Apple Watch",
        image: "/assets/images/repair/Apple/Watch/Apple-Watch.png",
        series: [
          {
            name: "Apple Watch",
            image: "/assets/images/repair/Apple/Watch/Series-8-45.jpg",
            devices: [
              {
                name: "Series 8 (45mm)",
                image: "/assets/images/repair/Apple/Watch/Series-8-45.jpg",
              },
              {
                name: "Series 8 (41mm)",
                image: "/assets/images/repair/Apple/Watch/Series-8-41.jpg",
              },
              {
                name: "Series 7 (45mm)",
                image: "/assets/images/repair/Apple/Watch/Series-7-45.jpg",
              },
              {
                name: "Series 7 (41mm)",
                image: "/assets/images/repair/Apple/Watch/Series-7-41.jpg",
              },
              {
                name: "Series 6 (44mm)",
                image: "/assets/images/repair/Apple/Watch/Series-6-44.jpg",
              },
              {
                name: "Series 6 (40mm)",
                image: "/assets/images/repair/Apple/Watch/Series-6-40.jpg",
              },
              {
                name: "Series 5 (44mm)",
                image: "/assets/images/repair/Apple/Watch/Series-5-44.jpg",
              },
              {
                name: "Series 5 (40mm)",
                image: "/assets/images/repair/Apple/Watch/Series-5-40.jpg",
              },
              {
                name: "Series 4 (44mm)",
                image: "/assets/images/repair/Apple/Watch/Series-4-44.jpg",
              },
              {
                name: "Series 4 (40mm)",
                image: "/assets/images/repair/Apple/Watch/Series-4-40.jpg",
              },
              {
                name: "Series 3 (42mm)",
                image: "/assets/images/repair/Apple/Watch/Series-3-42.jpg",
              },
              {
                name: "Series 3 (38mm)",
                image: "/assets/images/repair/Apple/Watch/Series-3-38.jpg",
              },
              {
                name: "Series 2 (42mm)",
                image: "/assets/images/repair/Apple/Watch/Series-2-42.jpg",
              },
              {
                name: "Series 2 (38mm)",
                image: "/assets/images/repair/Apple/Watch/Series-2-38.jpg",
              },
              {
                name: "Series 1 (42mm)",
                image: "/assets/images/repair/Apple/Watch/Series-1-42.jpg",
              },
              {
                name: "Series 1 (38mm)",
                image: "/assets/images/repair/Apple/Watch/Series-1-38.jpg",
              },
            ],
          },
          {
            name: "Apple Watch SE",
            image: "/assets/images/repair/Apple/Watch/SE/SE-2-44.jpg",
            devices: [
              {
                name: "SE Gen 2 (44mm)",
                image: "/assets/images/repair/Apple/Watch/SE/SE-2-44.jpg",
              },
              {
                name: "SE Gen 2 (40mm)",
                image: "/assets/images/repair/Apple/Watch/SE/SE-2-40.jpg",
              },
              {
                name: "SE Gen 1 (44mm)",
                image: "/assets/images/repair/Apple/Watch/SE/SE-1-44.jpg",
              },
              {
                name: "SE Gen 1 (40mm)",
                image: "/assets/images/repair/Apple/Watch/SE/SE-1-40.jpg",
              },
            ],
          },
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
        name: "Galaxy S Series",
        image: "/assets/images/repair/Samsung/Samsung-Galaxy-S-Series.jpg",
        series: [
          {
            name: "Galaxy S23",
            image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S23.jpg",
            devices: [
              {
                name: "Galaxy S23 Ultra",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S23-Ultra.jpg",
              },
              {
                name: "Galaxy S23 Plus",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S23-Plus.jpg",
              },
              {
                name: "Galaxy S23",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S23.jpg",
              },
            ],
          },
          {
            name: "Galaxy S22",
            image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S22.jpg",
            devices: [
              {
                name: "Galaxy S22 Ultra",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S22-Ultra.jpg",
              },
              {
                name: "Galaxy S22 Plus",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S22-Plus.jpg",
              },
              {
                name: "Galaxy S22",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S22.jpg",
              },
            ],
          },
          {
            name: "Galaxy S21",
            image:
              "/assets/images/repair/Samsung/S%20Series/galaxy-s21-plus.png",
            devices: [
              {
                name: "Galaxy S21 Ultra",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s21-ultra.png",
              },
              {
                name: "Galaxy S21 Plus",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s21-plus.png",
              },
              {
                name: "Galaxy S21 FE",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S21-FE.jpg",
              },
              {
                name: "Galaxy S21",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s21.png",
              },
            ],
          },
          {
            name: "Galaxy S20",
            image: "/assets/images/repair/Samsung/S%20Series/galaxy-s20.png",
            devices: [
              {
                name: "Galaxy S20 Ultra",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s20-ultra.png",
              },
              {
                name: "Galaxy S20 Plus",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s20-plus.png",
              },
              {
                name: "Galaxy S20 FE",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S20-FE.jpg",
              },
              {
                name: "Galaxy S20",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s20.png",
              },
            ],
          },
          {
            name: "Galaxy S10",
            image: "/assets/images/repair/Samsung/S%20Series/galaxy-s10.png",
            devices: [
              {
                name: "Galaxy S10 Plus",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s10-plus.png",
              },
              {
                name: "Galaxy S10 Lite",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S10-Lite.jpg",
              },
              {
                name: "Galaxy S10e",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s10e.png",
              },
              {
                name: "Galaxy S10",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s10.png",
              },
            ],
          },
          {
            name: "Galaxy S9",
            image: "/assets/images/repair/Samsung/S%20Series/galaxy-s9-plus.png",
            devices: [
              {
                name: "Galaxy S9 Plus",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s9-plus.png",
              },
              {
                name: "Galaxy S9",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s9.png",
              },
            ],
          },
          {
            name: "Galaxy S8",
            image: "/assets/images/repair/Samsung/S%20Series/galaxy-s8-plus.png",
            devices: [
              {
                name: "Galaxy S8 Plus",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s9-plus.png",
              },
              {
                name: "Galaxy S8 Active",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s8-active.png",
              },
              {
                name: "Galaxy S8",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s8.png",
              },
            ],
          },
          {
            name: "Galaxy S7",
            image: "/assets/images/repair/Samsung/S%20Series/galaxy-s7.png",
            devices: [
              {
                name: "Galaxy S7 Edge",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s7-edge.png",
              },
              {
                name: "Galaxy S7 Active",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s7-active.png",
              },
              {
                name: "Galaxy S7",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s7.png",
              },
            ],
          },
          {
            name: "Galaxy S6",
            image: "/assets/images/repair/Samsung/S%20Series/galaxy-s6.png",
            devices: [
              {
                name: "Galaxy S6 Edge Plus",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s6-edge-plus.png",
              },
              {
                name: "Galaxy S6 Edge",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s6-edge.png",
              },
              {
                name: "Galaxy S6 Active",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S6-Active.jpg",
              },
              {
                name: "Galaxy S6",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s6.png",
              },
            ],
          },
          {
            name: "Galaxy S5",
            image: "/assets/images/repair/Samsung/S%20Series/galaxy-s5.png",
            devices: [
              {
                name: "Galaxy S5 Neo",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s5-neo.png",
              },
              {
                name: "Galaxy S5 Mini",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s5-mini.png",
              },
              {
                name: "Galaxy S5 Active",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s5-active.png",
              },
              {
                name: "Galaxy S5",
                image:
                  "/assets/images/repair/Samsung/S%20Series/galaxy-s5.png",
              },
            ],
          },
          {
            name: "Galaxy S4",
            image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S4.jpg",
            devices: [
              {
                name: "Galaxy S4 Active",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S4-Active.jpg",
              },
              {
                name: "Galaxy S4",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S4.jpg",
              },
            ],
          },
          {
            name: "Galaxy S3",
            image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S3.jpg",
            devices: [
              {
                name: "Galaxy S3 Mini",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S3-Mini.jpg",
              },
              {
                name: "Galaxy S3",
                image:
                  "/assets/images/repair/Samsung/S%20Series/Galaxy-S3.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Galaxy Z Series",
        image: "/assets/images/repair/Samsung/Samsung-Galaxy-Z-Series.jpg",
        series: [
          {
            name: "Galaxy Z Fold",
            image: "/assets/images/repair/Samsung/Z%20Series/fold/Galaxy-Z-Fold-5g.jpg",
            devices: [
              {
                name: "Galaxy Z Fold 5G",
                image:
                  "/assets/images/repair/Samsung/Z%20Series/fold/Galaxy-Z-Fold-5g.jpg",
              },
              {
                name: "Galaxy Z Fold 4G",
                image:
                  "/assets/images/repair/Samsung/Z%20Series/fold/Galaxy-Z-Fold-4g.jpg",
              },
              {
                name: "Galaxy Z Fold 4",
                image:
                  "/assets/images/repair/Samsung/Z%20Series/fold/Galaxy-Z-Fold-4%20(1).jpg",
              },
              {
                name: "Galaxy Z Fold 3",
                image:
                  "/assets/images/repair/Samsung/Z%20Series/fold/Galaxy-Z-Fold-3.jpg",
              },
              {
                name: "Galaxy Z Fold 2",
                image:
                  "/assets/images/repair/Samsung/Z%20Series/fold/Galaxy-Z-Fold-2.jpg",
              },
            ],
          },
          {
            name: "Galaxy Z Flip",
            image: "/assets/images/repair/Samsung/Z Series/Galaxy-Z-Flip.jpg",
            devices: [
              {
                name: "Galaxy Z Flip 5G",
                image:
                  "/assets/images/repair/Samsung/Z%20Series/flip/Galaxy-Z-Flip-5g.jpg",
              },
              {
                name: "Galaxy Z Flip 4G",
                image:
                  "/assets/images/repair/Samsung/Z%20Series/flip/Galaxy-Z-Flip-4g.jpg",
              },
              {
                name: "Galaxy Z Flip 4",
                image:
                  "/assets/images/repair/Samsung/Z%20Series/flip/Galaxy-Z-Flip-4.jpg",
              },
              {
                name: "Galaxy Z Flip 3",
                image:
                  "/assets/images/repair/Samsung/Z%20Series/flip/Galaxy-Z-Flip-3.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Galaxy Note",
        image: "/assets/images/repair/Samsung/Samsung-Galaxy-Note.jpg",
        series: [
          {
            name: "Galaxy Note 20",
            image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-20.png",
            devices: [
              {
                name: "Galaxy Note 20 Ultra",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-20-ULTRA.jpg",
              },
              {
                name: "Galaxy Note 20",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-20.png",
              },
            ],
          },
          {
            name: "Galaxy Note 10",
            image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-10-plus.png",
            devices: [
              {
                name: "Galaxy Note 10 Plus",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-10-plus.png",
              },
              {
                name: "Galaxy Note 10 Lite",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-10-LITE.jpg",
              },
              {
                name: "Galaxy Note 10",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-10.png",
              },
            ],
          },
          {
            name: "Galaxy Note 5-9",
            image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-9.png",
            devices: [
              {
                name: "Galaxy Note 9",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-9.png",
              },
              {
                name: "Galaxy Note 8",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-8.png",
              },
              {
                name: "Galaxy Note 7",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-7.png",
              },
              {
                name: "Galaxy Note 5",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-5.png",
              },
            ],
          },
          {
            name: "Galaxy Note 1-4",
            image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-4.png",
            devices: [
              {
                name: "Galaxy Note 4",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-4.png",
              },
              {
                name: "Galaxy Note 4 Mini",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-4-MINI.jpg",
              },
              {
                name: "Galaxy Note 3 Neo",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-3-NEO.jpg",
              },
              {
                name: "Galaxy Note 3",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-3.png",
              },
              {
                name: "Galaxy Note 3 Mini",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-3-MINI.jpg",
              },
              {
                name: "Galaxy Note 2",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-2.png",
              },
              {
                name: "Galaxy Note Edge",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-edge.png",
              },
            ],
          },
        ],
      },
      {
        name: "Galaxy A Series",
        image: "/assets/images/repair/Samsung/Samsung-Galaxy-A-Series.jpg",
        series: [
          {
            name: "Galaxy A70's",
            image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A73.jpg",
            devices: [
              {
                name: "Galaxy A73",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A73.jpg",
              },
              {
                name: "Galaxy A72",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A72.jpg",
              },
              {
                name: "Galaxy A71",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a71.png",
              },
              {
                name: "Galaxy A70",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a70.png",
              },
            ],
          },
          {
            name: "Galaxy A50's",
            image: "/assets/images/repair/Samsung/A%20Series/galaxy-a50s.png",
            devices: [
              {
                name: "Galaxy A53",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A53.jpg",
              },
              {
                name: "Galaxy A52",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A52.jpg",
              },
              {
                name: "Galaxy A51",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a51.png",
              },
              {
                name: "Galaxy A50",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a50.png",
              },
            ],
          },
          {
            name: "Galaxy A30's",
            image: "/assets/images/repair/Samsung/A%20Series/galaxy-a30s.png",
            devices: [
              {
                name: "Galaxy A33",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A33.jpg",
              },
              {
                name: "Galaxy A32",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A32.jpg",
              },
              {
                name: "Galaxy A31",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A31.jpg",
              },
              {
                name: "Galaxy A30",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a30s.png",
              },
            ],
          },
          {
            name: "Galaxy A20's",
            image: "/assets/images/repair/Samsung/A%20Series/galaxy-a20s.png",
            devices: [
              {
                name: "Galaxy A23",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A23.jpg",
              },
              {
                name: "Galaxy A22",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A22.jpg",
              },
              {
                name: "Galaxy A21",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A21.jpg",
              },
              {
                name: "Galaxy A20",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a20.png",
              },
            ],
          },
          {
            name: "Galaxy A10's",
            image: "/assets/images/repair/Samsung/A%20Series/galaxy-a10s.png",
            devices: [
              {
                name: "Galaxy A14",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A14.jpg",
              },
              {
                name: "Galaxy A13",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A13.jpg",
              },
              {
                name: "Galaxy A12",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A12.jpg",
              },
              {
                name: "Galaxy A11",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a11.png",
              },
              {
                name: "Galaxy A10 S",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a10s.png",
              },
              {
                name: "Galaxy A10 E",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a10e.png",
              },
              {
                name: "Galaxy A10",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a10.png",
              },
            ],
          },
          {
            name: "Galaxy A 0-9s",
            image: "/assets/images/repair/Samsung/A%20Series/galaxy-a9-pro.png",
            devices: [
              {
                name: "Galaxy A9 Pro",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a9-pro.png",
              },
              {
                name: "Galaxy A9",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a9.png",
              },
              {
                name: "Galaxy A8 Plus",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a8-plus.png",
              },
              {
                name: "Galaxy A8",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a8-2018.png",
              },
              {
                name: "Galaxy A7",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a7-2018.png",
              },
              {
                name: "Galaxy A6 Plus",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a6-plus.png",
              },
              {
                name: "Galaxy A5",
                image:
                  "/assets/images/repair/Samsung/A%20Series/galaxy-a5-2017.png",
              },
              {
                name: "Galaxy A3 S",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A03-S.jpg",
              },
              {
                name: "Galaxy A3 Core",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A03-Core.jpg",
              },
              {
                name: "Galaxy A3",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A03.jpg",
              },
              {
                name: "Galaxy A2 S",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A02-S.jpg",
              },
              {
                name: "Galaxy A2",
                image:
                  "/assets/images/repair/Samsung/A%20Series/Galaxy-A02.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Samsung Tab",
        image: "/assets/images/repair/Samsung/Samsung-Tab.jpg",
        series: [
          {
            name: "Samsung Tab Pro",
            image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-20.png",
            devices: [
              {
                name: "Samsung Tab A",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-20-ULTRA.jpg",
              },
              {
                name: "Galaxy Note 20",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-20.png",
              },
            ],
          },
          {
            name: "Galaxy Note 10",
            image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-10-plus.png",
            devices: [
              {
                name: "Galaxy Note 10 Plus",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-10-plus.png",
              },
              {
                name: "Galaxy Note 10 Lite",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-10-LITE.jpg",
              },
              {
                name: "Galaxy Note 10",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-10.png",
              },
            ],
          },
          {
            name: "Galaxy Note 5-9",
            image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-9.png",
            devices: [
              {
                name: "Galaxy Note 9",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-9.png",
              },
              {
                name: "Galaxy Note 8",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-8.png",
              },
              {
                name: "Galaxy Note 7",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-7.png",
              },
              {
                name: "Galaxy Note 5",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-5.png",
              },
            ],
          },
          {
            name: "Galaxy Note 1-4",
            image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-4.png",
            devices: [
              {
                name: "Galaxy Note 4",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-4.png",
              },
              {
                name: "Galaxy Note 4 Mini",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-4-MINI.jpg",
              },
              {
                name: "Galaxy Note 3 Neo",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-3-NEO.jpg",
              },
              {
                name: "Galaxy Note 3",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-3.png",
              },
              {
                name: "Galaxy Note 3 Mini",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-3-MINI.jpg",
              },
              {
                name: "Galaxy Note 2",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-2.png",
              },
              {
                name: "Galaxy Note Edge",
                image:
                  "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-edge.png",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    brand: "Google",
    image: "/assets/images/repair/Google/Google-Logo.svg",
    models: [
      {
        name: "Google Phone",
        // Add Google Phone series and devices here
      },
    ],
  },
  {
    brand: "LG",
    image: "/assets/images/repair/LG/LG-Logo.svg",
    models: [
      {
        name: "LG Phone",
      // Add LG Phone series and devices here
      },
    ],
  },
  {
    brand: "Huawei",
    image: "/assets/images/repair/Huawei/Huawei-Logo.svg",
    models: [
      {
        name: "Huawei Phone",
        // Add Huawei Phone series and devices here
      },
    ],
  },
  {
    brand: "Others",
    image: "/assets/images/repair/Other/Other-Logo.png",
    models: [
      {
        name: "Other Phones",
        // Add Other Phone series and devices here
      },
    ],
  },
];

export default deviceTypes;
