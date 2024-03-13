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
}

// {
// brand: "Samsung",
//         image: "/assets/images/repair/Samsung/Samsung-Logo.svg",
//         models: [
//         {//tab  
//         name: "Samsung Tab",
//                 image: "/assets/images/repair/Samsung/Samsung-Tab.jpg",
//                 series: [
//                 {
//                 name: "Samsung Tab Pro",
//                         image: "/assets/images/repair/Samsung/Tab/Pro/tab-pro-8.4-2014.png",
//                         devices: [
//                         { name: "Tab Pro 8.4 (2014)", image: "/assets/images/repair/Samsung/Tab/Pro/tab-pro-8.4-2014.png" },
//                         { name: "Tab Pro 10.1 (2014)", image: "/assets/images/repair/Samsung/Tab/Pro/tab-pro-10.1-2014.png" },
//                         { name: "Tab Pro 12.2 (2014)", image: "/assets/images/repair/Samsung/Tab/Pro/tab-pro-12.2-2014.png" }
//                         ]
//                 },
//                 {
//                 name: "Samsung Tab A Series",
//                         image: "/assets/images/repair/Samsung/Tab/A/tab-a-8.0-2019.png",
//                         devices: [
//                         { name: "Tab A 8.0 (2019)", image: "/assets/images/repair/Samsung/Tab/A/tab-a-8.0-2019.png" },
//                         { name: "Tab A 8.0 (2018)", image: "/assets/images/repair/Samsung/Tab/A/tab-a-8.0-2018.png" },
//                         { name: "Tab A 8.0 (2017)", image: "/assets/images/repair/Samsung/Tab/A/tab-a-8.0-2017.png" },
//                         { name: "Tab A 8.0 (2015)", image: "/assets/images/repair/Samsung/Tab/A/tab-a-8.0-2015.png" },
//                         { name: "Tab A 7.0 (2016)", image: "/assets/images/repair/Samsung/Tab/A/tab-a-7.0-2016.png" },
//                         { name: "Tab A 10.5 (2018)", image: "/assets/images/repair/Samsung/Tab/A/tab-a-10.5-2018.png" }
//                         ]
//                 },
//                 {
//                 name: "Other Samsung Tabs",
//                         image: "/assets/images/repair/Samsung/Tab/tab-4-8.0-2014.png",
//                         devices: [
//                         { name: "Tab 4 8.0 (2014)", image: "/assets/images/repair/Samsung/Tab/tab-4-8.0-2014.png" },
//                         { name: "Tab 4 10.1 (2014)", image: "/assets/images/repair/Samsung/Tab/tab-4-10.1-2014.png" },
//                         { name: "Tab 8.9 (2011)", image: "/assets/images/repair/Samsung/Tab/tab-8.9-2011.png" },
//                         { name: "Tab 10.1 (2011)", image: "/assets/images/repair/Samsung/Tab/tab-10.1-2011.png" },
//                         { name: "Tab A7 10.4", image: "/assets/images/repair/Samsung/Tab/tab-a7-10.4.png" },
//                         { name: "Tab Active 3 (2020)", image: "/assets/images/repair/Samsung/Tab/tab-active-3-2020.png" },
//                         { name: "Tab E 8.0 (2016)", image: "/assets/images/repair/Samsung/Tab/tab-e-8.0-2016.png" },
//                         { name: "Tab E 9.6 (2015)", image: "/assets/images/repair/Samsung/Tab/tab-e-9.6-2015.png" },
//                         { name: "Tab S2 8.0 (2015)", image: "/assets/images/repair/Samsung/Tab/tab-s2-8.0-2015.png" },
//                         { name: "Tab S2 9.7 (2015)", image: "/assets/images/repair/Samsung/Tab/tab-s2-9.7-2015.png" },
//                         { name: "Tab S3 9.7 (2017)", image: "/assets/images/repair/Samsung/Tab/tab-s3-9.7-2017.png" },
//                         { name: "Tab S4 10.5 (2018)", image: "/assets/images/repair/Samsung/Tab/tab-s4-10.5-2018.png" },
//                         { name: "Tab S5e 10.5 (2019)", image: "/assets/images/repair/Samsung/Tab/tab-s5e-10.5-2019.png" },
//                         { name: "Tab S6 10.5 (2019)", image: "/assets/images/repair/Samsung/Tab/tab-s6-10.5-2019.png" },
//                         { name: "Tab S6 Lite (2020)", image: "/assets/images/repair/Samsung/Tab/tab-s6-lite-2020.png" },
//                         { name: "Tab S7", image: "/assets/images/repair/Samsung/Tab/tab-s7.png" },
//                         { name: "Tab S 8.4 (2014)", image: "/assets/images/repair/Samsung/Tab/tab-s-8.4-2014.png" },
//                         { name: "Tab S 10.5 (2014)", image: "/assets/images/repair/Samsung/Tab/tab-s-10.5-2014-t800.png" },
//                         { name: "Tab 4 7.0 (2014)", image: "/assets/images/repair/Samsung/Tab/tab-4-7.0-2014.png" },
//                         { name: "Tab 2 7.0 (2012)", image: "/assets/images/repair/Samsung/Tab/tab-2-7.0-2012.png" },
//                         { name: "Tab 2 10.1 (2012)", image: "/assets/images/repair/Samsung/Tab/tab-2-10.1-2012.png" },
//                         { name: "Tab 3 7.0 (2013)", image: "/assets/images/repair/Samsung/Tab/tab-3-7.0-2013.png" },
//                         { name: "Tab 3 8.0 (2013)", image: "/assets/images/repair/Samsung/Tab/tab-3-8.0-2013.png" },
//                         { name: "Tab 3 10.1 (2013)", image: "/assets/images/repair/Samsung/Tab/tab-3-10.1-2013.png" },
//                         { name: "Tab 3 Lite (2014)", image: "/assets/images/repair/Samsung/Tab/tab-3-lite-2014.png" }
//                         ]
//                 }
//                 ]
//         },
//         {//samsung note
//         name: "Samsung Note",
//                 image: "/assets/images/repair/Samsung/Samsung-Galaxy-Note.jpg",
//                 devices: [
//                 { name: "Samsung Note 8.0 (2013)", image: "/assets/images/repair/Samsung/Samsung%20Note/note-8.0-2013.png" },
//                 { name: "Samsung Note 10.1 (2012)", image: "/assets/images/repair/Samsung/Samsung%20Note/note-10.1-2012.png" },
//                 { name: "Samsung Note 10.1 (2014)", image: "/assets/images/repair/Samsung/Samsung%20Note/Note-10.1-2014.jpg" },
//                 { name: "Samsung Note Pro 12.2 (2014)", image: "/assets/images/repair/Samsung/Samsung%20Note/Note-Pro-12.2-2014.jpg" }
//                 ]
//         }

//         ]
// },
// {
// name: "Samsung Z Series",
//         image: "/assets/images/repair/Samsung/Samsung-Galaxy-Z-Series.jpg",
//         series: [
//         {
//         name: "Samsung Z Fold",
//                 image: "/assets/mages/repair/Samsung/Z Series/Galaxy-Z-Fold-4.jpg"",
//                 devices: [
//                 { name: "Galaxy Z Fold 2", image: "/assets/images/repair/Samsung/Z%20Series/fold/Galaxy-Z-Fold-2.jpg" },
//                 { name: "Galaxy Z Fold 3", image: "/assets/images/repair/Samsung/Z%20Series/fold/Galaxy-Z-Fold-3.jpg" },
//                 { name: "Galaxy Z Fold 4 (1)", image: "/assets/images/repair/Samsung/Z%20Series/fold/Galaxy-Z-Fold-4%20(1).jpg" },
//                 { name: "Galaxy Z Fold 4g", image: "/assets/images/repair/Samsung/Z%20Series/fold/Galaxy-Z-Fold-4g.jpg" },
//                 { name: "Galaxy Z Fold 5g", image: "/assets/images/repair/Samsung/Z%20Series/fold/Galaxy-Z-Fold-5g.jpg" }
//                 ]
//         },
//         {
//         name: "Samsung Z Flip",
//                 image: "/assets/images/repair/Samsung/Z Series/Galaxy-Z-Flip.jpg",
//                 devices: [
//                 { name: "Galaxy Z Flip 3", image: "/assets/images/repair/Samsung/Z%20Series/flip/Galaxy-Z-Flip-3.jpg" },
//                 { name: "Galaxy Z Flip 4", image: "/assets/images/repair/Samsung/Z%20Series/flip/Galaxy-Z-Flip-4.jpg" },
//                 { name: "Galaxy Z Flip 4g", image: "/assets/images/repair/Samsung/Z%20Series/flip/Galaxy-Z-Flip-4g.jpg" },
//                 { name: "Galaxy Z Flip 5g", image: "/assets/images/repair/Samsung/Z%20Series/flip/Galaxy-Z-Flip-5g.jpg" }
//                 ]
//         },
//         {
//         name: "Samsung S Series",
//                 image: "/assets/images/repair/Samsung/Samsung-Galaxy-S-Series.jpg",
//                 series: [
//                 {
//                 name: "Samsung Z Fold",
//                         image: "",
//                         devices: [
//                         { name: "Galaxy S4", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S4.jpg" },
//                         { name: "Galaxy S4 Active", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S4-Active.jpg" },
//                         { name: "Galaxy S5", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s5.png" },
//                         { name: "Galaxy S5 Active", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s5-active.png" },
//                         { name: "Galaxy S5 Mini", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s5-mini.png" },
//                         { name: "Galaxy S5 Neo", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s5-neo.png" },
//                         { name: "Galaxy S6", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s6.png" },
//                         { name: "Galaxy S6 Active", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S6-Active.jpg" },
//                         { name: "Galaxy S6 Edge", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s6-edge.png" },
//                         { name: "Galaxy S6 Edge Plus", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s6-edge-plus.png" },
//                         { name: "Galaxy S7", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s7.png" },
//                         { name: "Galaxy S7 Active", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s7-active.png" },
//                         { name: "Galaxy S7 Edge", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s7-edge.png" },
//                         { name: "Galaxy S8", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s8.png" },
//                         { name: "Galaxy S8 Active", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s8-active.png" },
//                         { name: "Galaxy S8 Plus", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s8-plus.png" },
//                         { name: "Galaxy S9", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s9.png" },
//                         { name: "Galaxy S9 Plus", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s9-plus.png" },
//                         { name: "Galaxy S10", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s10.png" },
//                         { name: "Galaxy S10e", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s10e.png" },
//                         { name: "Galaxy S10 Lite", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S10-Lite.jpg" },
//                         { name: "Galaxy S10 Plus", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s10-plus.png" },
//                         { name: "Galaxy S20", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s20.png" },
//                         { name: "Galaxy S20 FE", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S20-FE.jpg" },
//                         { name: "Galaxy S20 Plus", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s20-plus.png" },
//                         { name: "Galaxy S20 Ultra", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s20-ultra.png" },
//                         { name: "Galaxy S21", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s21.png" },
//                         { name: "Galaxy S21 FE", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S21-FE.jpg" },
//                         { name: "Galaxy S21 Plus", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s21-plus.png" },
//                         { name: "Galaxy S21 Ultra", image: "/assets/images/repair/Samsung/S%20Series/galaxy-s21-ultra.png" },
//                         { name: "Galaxy S22", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S22.jpg" },
//                         { name: "Galaxy S22 Plus", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S22-Plus.jpg" },
//                         { name: "Galaxy S22 Ultra", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S22-Ultra.jpg" },
//                         { name: "Galaxy S23", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S23.jpg" },
//                         { name: "Galaxy S23 Plus", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S23-Plus.jpg" },
//                         { name: "Galaxy S23 Ultra", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S23-Ultra.jpg" },
//                         { name: "Galaxy S3", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S3.jpg" },
//                         { name: "Galaxy S3 Mini", image: "/assets/images/repair/Samsung/S%20Series/Galaxy-S3-Mini.jpg" }

//                         ]
//                 }
//                 },
//                 {//galaxy note
//                 name: "Galaxy Note",
//                         image: "/assets/images/repair/Samsung/Samsung-Galaxy-Note.jpg",
//                         devices: [
//                         { name: "Galaxy Note 20 ULTRA", image: "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-20-ULTRA.jpg" },
//                         { name: "Galaxy Note Edge", image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-edge.png" },
//                         { name: "Galaxy Note 2", image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-2.png" },
//                         { name: "Galaxy Note 3", image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-3.png" },
//                         { name: "Galaxy Note 3 MINI", image: "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-3-MINI.jpg" },
//                         { name: "Galaxy Note 3 NEO", image: "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-3-NEO.jpg" },
//                         { name: "Galaxy Note 4", image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-4.png" },
//                         { name: "Galaxy Note 4 MINI", image: "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-4-MINI.jpg" },
//                         { name: "Galaxy Note 5", image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-5.png" },
//                         { name: "Galaxy Note 7", image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-7.png" },
//                         { name: "Galaxy Note 8", image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-8.png" },
//                         { name: "Galaxy Note 9", image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-9.png" },
//                         { name: "Galaxy Note 10", image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-10.png" },
//                         { name: "Galaxy Note 10 LITE", image: "/assets/images/repair/Samsung/Galaxy%20Note/Galaxy-Note-10-LITE.jpg" },
//                         { name: "Galaxy Note 10 Plus", image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-10-plus.png" },
//                         { name: "Galaxy Note 20", image: "/assets/images/repair/Samsung/Galaxy%20Note/galaxy-note-20.png" }

//                         ]
//                 }


//                 {//galaxy a 
//                 name: "Galaxy A Series",
//                         image: "/assets/images/repair/Samsung/Samsung-Galaxy-A-Series.jpg",
//                         devices: [
//                         { name: "Galaxy A50s", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a50s.png" },
//                         { name: "Galaxy A51", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a51.png" },
//                         { name: "Galaxy A52", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A52.jpg" },
//                         { name: "Galaxy A53", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A53.jpg" },
//                         { name: "Galaxy A70", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a70.png" },
//                         { name: "Galaxy A71", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a71.png" },
//                         { name: "Galaxy A72", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A72.jpg" },
//                         { name: "Galaxy A73", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A73.jpg" },
//                         { name: "Galaxy A02", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A02.jpg" },
//                         { name: "Galaxy A02 S", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A02-S.jpg" },
//                         { name: "Galaxy A03", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A03.jpg" },
//                         { name: "Galaxy A03 Core", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A03-Core.jpg" },
//                         { name: "Galaxy A03 S", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A03-S.jpg" },
//                         { name: "Galaxy A3", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A3.jpg" },
//                         { name: "Galaxy A5", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A5.jpg" },
//                         { name: "Galaxy A5 2015", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a5-2015.png" },
//                         { name: "Galaxy A5 2017", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a5-2017.png" },
//                         { name: "Galaxy A6 Plus", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a6-plus.png" },
//                         { name: "Galaxy A7 2016", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a7-2016.png" },
//                         { name: "Galaxy A7 2017", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a7-2017.png" },
//                         { name: "Galaxy A7 2018", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a7-2018.png" },
//                         { name: "Galaxy A8 2016", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a8-2016.png" },
//                         { name: "Galaxy A8 2018", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a8-2018.png" },
//                         { name: "Galaxy A8 Plus", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a8-plus.png" },
//                         { name: "Galaxy A9", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a9.png" },
//                         { name: "Galaxy A9 Pro", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a9-pro.png" },
//                         { name: "Galaxy A10", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a10.png" },
//                         { name: "Galaxy A10e", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a10e.png" },
//                         { name: "Galaxy A10s", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a10s.png" },
//                         { name: "Galaxy A11", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a11.png" },
//                         { name: "Galaxy A12", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A12.jpg" },
//                         { name: "Galaxy A13", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A13.jpg" },
//                         { name: "Galaxy A14", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A14.jpg" },
//                         { name: "Galaxy A20", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a20 (1).png" },
//                         { name: "Galaxy A20", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a20.png" },
//                         { name: "Galaxy A20s", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a20s.png" },
//                         { name: "Galaxy A21", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A21.jpg" },
//                         { name: "Galaxy A21 S", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A21-S.jpg" },
//                         { name: "Galaxy A22", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A22.jpg" },
//                         { name: "Galaxy A23", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A23.jpg" },
//                         { name: "Galaxy A30s", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a30s.png" },
//                         { name: "Galaxy A31", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A31.jpg" },
//                         { name: "Galaxy A32", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A32.jpg" },
//                         { name: "Galaxy A33", image: "/assets/images/repair/Samsung/A%20Series/Galaxy-A33.jpg" },
//                         { name: "Galaxy A50", image: "/assets/images/repair/Samsung/A%20Series/galaxy-a50.png" }


//                         ]
//                 },
//                 {
//                 brand: "Google",
//                         image: "/assets/images/repair/Google/Google-Logo.svg",
//                         models: [
//                         {
//                         name: "Google Phone",
//                                 // Add Google Phone series and devices here
//                                 { name: "Google Pixel 5a", image: "/assets/images/repair/Google/pixel/Google-Pixel-5a.jpg" }, Google
//                         { name: "Google Pixel 6", image: "/assets/images/repair/Google/pixel/Google-Pixel-6.jpg" },
//                         { name: "Google Pixel 6a", image: "/assets/images/repair/Google/pixel/Google-Pixel-6a.jpg" },
//                         { name: "Google Pixel 6 Pro", image: "/assets/images/repair/Google/pixel/Google-Pixel-6-Pro.jpg" },
//                         { name: "Google Pixel 7", image: "/assets/images/repair/Google/pixel/Google-Pixel-7.jpg" },
//                         { name: "Google Pixel 7 Pro", image: "/assets/images/repair/Google/pixel/Google-Pixel-7-Pro.jpg" },
//                         { name: "Google Pixel 1", image: "/assets/images/repair/Google/pixel/pixel-1.png" },
//                         { name: "Google Pixel 2", image: "/assets/images/repair/Google/pixel/pixel-2.png" },
//                         { name: "Google Pixel 2 XL", image: "/assets/images/repair/Google/pixel/pixel-2-xl.png" },
//                         { name: "Google Pixel 3", image: "/assets/images/repair/Google/pixel/pixel-3.png" },
//                         { name: "Google Pixel 3a", image: "/assets/images/repair/Google/pixel/pixel-3a.png" },
//                         { name: "Google Pixel 3a XL", image: "/assets/images/repair/Google/pixel/pixel-3a-xl.png" },
//                         { name: "Google Pixel 3 XL", image: "/assets/images/repair/Google/pixel/pixel-3-xl.png" },
//                         { name: "Google Pixel 4", image: "/assets/images/repair/Google/pixel/pixel-4.png" },
//                         { name: "Google Pixel 4a", image: "/assets/images/repair/Google/pixel/pixel-4a.png" },
//                         { name: "Google Pixel 4a 5g", image: "/assets/images/repair/Google/pixel/pixel-4a-5g.png" },
//                         { name: "Google Pixel 4 XL", image: "/assets/images/repair/Google/pixel/pixel-4-xl.png" },
//                         { name: "Google Pixel 5", image: "/assets/images/repair/Google/pixel/pixel-5.png" },
//                         { name: "Google Pixel XL", image: "/assets/images/repair/Google/pixel/pixel-xl.png" }

//                         }
//                         ]
//                 },
//                 {
//                 brand: "LG",
//                         image: "/assets/images/repair/LG/LG-Logo.svg",
//                         models: [
//                         {
//                         name: "LG Phone",
//                                 image: "",
//                                 series :[
//                                 {
//                                 name: "LG X Series",
//                                         image: "/assets/images/repair/LG/LG-X-Series.jpg"",
//                                         devices: [
//                                         { name: "X Power", image: "/assets/images/repair/LG/X Series/x-power.png" },
//                                         { name: "X Power 2", image: "/assets/images/repair/LG/X Series/x-power-2.png" },
//                                         { name: "X Power 3", image: "/assets/images/repair/LG/X Series/x-power-3.png" },
//                                         { name: "X Venture", image: "/assets/images/repair/LG/X Series/x-venture.png" },
//                                         { name: "X Charge", image: "/assets/images/repair/LG/X Series/x-charge.png" }
//                                         ]
//                                 },
//                                 {
//                                 name: "LG V Series",
//                                         image: "/assets/images/repair/LG/LG-V-Series.jpg",
//                                         devices: [
//                                         { name: "V20", image: "/assets/images/repair/LG/V Series/v20.png" },
//                                         { name: "V20 Mini", image: "/assets/images/repair/LG/V Series/v20-mini.png" },
//                                         { name: "V30", image: "/assets/images/repair/LG/V Series/v30.png" },
//                                         { name: "V35 ThinQ", image: "/assets/images/repair/LG/V Series/v35-thinq.png" },
//                                         { name: "V40 ThinQ", image: "/assets/images/repair/LG/V Series/v40-thinq.png" },
//                                         { name: "V50s ThinQ 5G", image: "/assets/images/repair/LG/V Series/v50s-thinq-5g.png" },
//                                         { name: "V50 ThinQ 5G", image: "/assets/images/repair/LG/V Series/v50-thinq-5g.png" },
//                                         { name: "V60 ThinQ 5G", image: "/assets/images/repair/LG/V Series/v60-thinq-5g.png" },
//                                         { name: "V40 ThinQ 5G", image: "/assets/images/repair/LG/V Series/LG-V40-ThinQ-5G.jpg" },
//                                         { name: "V10", image: "/assets/images/repair/LG/V Series/v10.png" }

//                                         ]
//                                 },
//                                 {
//                                 name: "LG Tribute",
//                                         image: "/assets/images/repair/LG/LG-Tribute.jpg",
//                                         devices: [
//                                         { name: "Tribute Dynasty", image: "/assets/images/repair/LG/tribute/tribute-dynasty.png" },
//                                         { name: "Tribute HD", image: "/assets/images/repair/LG/tribute/tribute-hd.png" },
//                                         { name: "Tribute 5", image: "/assets/images/repair/LG/tribute/tribute-5.png" }
//                                         ]
//                                 },
//                                 {
//                                 name: "LG Stylo",
//                                         image: "",
//                                         devices: [
//                                         { name: "Stylo 2", image: "/assets/images/repair/LG/stylo/stylo-2.png" },
//                                         { name: "Stylo 2 Plus", image: "/assets/images/repair/LG/stylo/stylo-2-plus.png" },
//                                         { name: "Stylo 3", image: "/assets/images/repair/LG/stylo/stylo-3.png" },
//                                         { name: "Stylo 3 Plus", image: "/assets/images/repair/LG/stylo/stylo-3-plus.png" },
//                                         { name: "Stylo 4", image: "/assets/images/repair/LG/stylo/stylo-4.png" },
//                                         { name: "Stylo 4 Plus", image: "/assets/images/repair/LG/stylo/stylo-4-plus.png" },
//                                         { name: "Stylo 5", image: "/assets/images/repair/LG/stylo/stylo-5.png" },
//                                         { name: "Stylo 6", image: "/assets/images/repair/LG/stylo/stylo-6.png" },
//                                         { name: "Stylo 1", image: "/assets/images/repair/LG/stylo/stylo-1.png" }
//                                         ]
//                                 },
//                                 {
//                                 name: "LG Q Series"
//                                         image: "",
//                                         devices: [
//                                         { name: "Q6", image: "/assets/images/repair/LG/Q Series/q6.png" },
//                                         { name: "Q6 Plus", image: "/assets/images/repair/LG/Q Series/q6-plus.png" },
//                                         { name: "Q7", image: "/assets/images/repair/LG/Q Series/q7.png" },
//                                         { name: "Q7 Plus", image: "/assets/images/repair/LG/Q Series/q7-plus.png" },
//                                         { name: "Q8 2017", image: "/assets/images/repair/LG/Q Series/q8-2017.png" },
//                                         { name: "Q8 2018", image: "/assets/images/repair/LG/Q Series/q8-2018.png" },
//                                         { name: "Q70", image: "/assets/images/repair/LG/Q Series/q70.png" }
//                                         ]
//                                 },
//                                 {
//                                 name: "LG Phoenix",
//                                         image: "",
//                                         devices: [
//                                         { name: "Phoenix 2", image: "/assets/images/repair/LG/phoenix/phoenix-2.png" },
//                                         { name: "Phoenix 3", image: "/assets/images/repair/LG/phoenix/phoenix-3.png" },
//                                         { name: "Phoenix 4", image: "/assets/images/repair/LG/phoenix/phoenix-4.png" },
//                                         { name: "Phoenix Plus", image: "/assets/images/repair/LG/phoenix/phoenix-plus.png" }
//                                         ]
//                                 },
//                                 {
//                                 name: "LG Optimus",
//                                         image: "",
//                                         devices: [
//                                         { name: "Optimus G", image: "/assets/images/repair/LG/optimus/optimus-g.png" }

//                                         },
//                                         {
//                                         name: "LG K Series",
//                                                 image: "",
//                                                 devices: [
//                                                 { name: "K8 (2018)", image: "/assets/images/repair/LG/K%20Series/k8-2018.png" },
//                                                 { name: "K9", image: "/assets/images/repair/LG/K%20Series/k9.png" },
//                                                 { name: "K10 (2017)", image: "/assets/images/repair/LG/K%20Series/k10-2017.png" },
//                                                 { name: "K10 (2018)", image: "/assets/images/repair/LG/K%20Series/k10-2018.png" },
//                                                 { name: "K20 Plus (2016)", image: "/assets/images/repair/LG/K%20Series/k20-plus-2016.png" },
//                                                 { name: "K30 (2019)", image: "/assets/images/repair/LG/K%20Series/k30-2019.png" },
//                                                 { name: "K40 (2019)", image: "/assets/images/repair/LG/K%20Series/k40-2019.png" },
//                                                 { name: "K40s (2019)", image: "/assets/images/repair/LG/K%20Series/k40s-2019.png" },
//                                                 { name: "K50s (2019)", image: "/assets/images/repair/LG/K%20Series/k50s-2019.png" },
//                                                 { name: "K51s", image: "/assets/images/repair/LG/K%20Series/k51s.png" },
//                                                 { name: "K61 (2020)", image: "/assets/images/repair/LG/K%20Series/k61-2020.png" },
//                                                 { name: "K12 Plus", image: "/assets/images/repair/LG/K%20Series/LG-K12-Plus.jpg" },
//                                                 { name: "K7 (2016)", image: "/assets/images/repair/LG/K%20Series/k7-2016.png" },
//                                                 { name: "K8 (2017)", image: "/assets/images/repair/LG/K%20Series/k8-2017.png" }

//                                                 ]
//                                         },
//                                         {
//                                         name: "LG Aristo",
//                                                 image: "",
//                                                 devices: [
//                                                 { name: "Aristo 2", image: "/assets/images/repair/LG/aristo/aristo-2.png" },
//                                                 { name: "Aristo 2 Plus", image: "/assets/images/repair/LG/aristo/aristo-2-plus.png" },
//                                                 { name: "Aristo 3", image: "/assets/images/repair/LG/aristo/aristo-3.png" },
//                                                 { name: "Aristo 3 Plus", image: "/assets/images/repair/LG/aristo/aristo-3-plus.png" },
//                                                 { name: "Aristo 4 Plus", image: "/assets/images/repair/LG/aristo/aristo-4-plus.png" },
//                                                 { name: "Aristo", image: "/assets/images/repair/LG/aristo/aristo.png" }

//                                                 ]
//                                         },
//                                         {
//                                         name: "LG G Series",
//                                                 image: "",
//                                                 devices :[
//                                                 { name: "G8X ThinQ", image: "/assets/images/repair/LG/G Series/g8x-thinq.png" },
//                                                 { name: "G2", image: "/assets/images/repair/LG/G Series/g2.png" },
//                                                 { name: "G3", image: "/assets/images/repair/LG/G Series/g3.png" },
//                                                 { name: "G4", image: "/assets/images/repair/LG/G Series/g4.png" },
//                                                 { name: "G5", image: "/assets/images/repair/LG/G Series/g5.png" },
//                                                 { name: "G6", image: "/assets/images/repair/LG/G Series/g6.png" },
//                                                 { name: "G7 One", image: "/assets/images/repair/LG/G Series/g7-one.png" },
//                                                 { name: "G7 ThinQ", image: "/assets/images/repair/LG/G Series/g7-thinq.png" },
//                                                 { name: "G8S ThinQ", image: "/assets/images/repair/LG/G Series/g8s-thinq.png" },
//                                                 { name: "G8 ThinQ", image: "/assets/images/repair/LG/G Series/g8-thinq.png" }

//                                                 ]
//                                         }
//                                         ]
//                                 },
//                                 {
//                                 name : "LG G Pad",
//                                         image: "",
//                                 { name: "G Pad 8.3", image: "/assets/images/repair/LG/G Pad/g-pad-8.3.png" },
//                                 { name: "G Pad 10.1", image: "/assets/images/repair/LG/G Pad/g-pad-10.1.png" },
//                                 { name: "G Pad F2 8.0", image: "/assets/images/repair/LG/G Pad/g-pad-f2-8.0.png" },
//                                 { name: "G Pad X 2 Plus 8.0", image: "/assets/images/repair/LG/G Pad/g-pad-x-2-plus-8.0.png" },
//                                 { name: "G Pad X 8.0", image: "/assets/images/repair/LG/G Pad/g-pad-x-8.0.png" },
//                                 { name: "G Pad X 8.3", image: "/assets/images/repair/LG/G Pad/g-pad-x-8.3.png" },
//                                 { name: "G Pad X 10.1", image: "/assets/images/repair/LG/G Pad/g-pad-x-10.1.png" },
//                                 { name: "G Pad 7.0", image: "/assets/images/repair/LG/G Pad/g-pad-7.0.png" },
//                                 { name: "G Pad 8.0", image: "/assets/images/repair/LG/G Pad/g-pad-8.0.png" }

//                                 }
//                                 ]
//                         },
//                         {
//                         brand: "Huawei",
//                                 image: "/assets/images/repair/Huawei/Huawei-Logo.svg",
//                                 models: [
//                                 {
//                                 name: "Huawei Phone",
//                                         // Add Huawei Phone series and devices here
//                                         series:[
//                                         {
//                                         name:"Huawei Y Series",
//                                                 image:"",
//                                                 devices: [
//                                                 { "name": "Huawei Y9 2018", "image": "/assets/images/repair/Huawei/Y%20Series/0001_y9-2018.png" },
//                                                 { "name": "Huawei Y7 Pro", "image": "/assets/images/repair/Huawei/Y%20Series/0002_y7-pro.png" },
//                                                 { "name": "Huawei Y7 Prime", "image": "/assets/images/repair/Huawei/Y%20Series/0003_y7-prime.png" },
//                                                 { "name": "Huawei Y6 2019", "image": "/assets/images/repair/Huawei/Y%20Series/0004_y6-2019.png" },
//                                                 { "name": "Huawei Y6 2018", "image": "/assets/images/repair/Huawei/Y%20Series/0005_y6-2018.png" },
//                                                 { "name": "Huawei Y6 2017", "image": "/assets/images/repair/Huawei/Y%20Series/0006_y6-2017.png" },
//                                                 { "name": "Huawei Y6 2015", "image": "/assets/images/repair/Huawei/Y%20Series/0007_y6-2015.png" },
//                                                 { "name": "Huawei Y9 Pro", "image": "/assets/images/repair/Huawei/Y%20Series/Huawei-Y9-Pro.jpg" },
//                                                 { "name": "Huawei Y9 Prime", "image": "/assets/images/repair/Huawei/Y%20Series/0000_y9-prime.png" }
//                                                 ]},
//                                         {
//                                         name:"Huawei P Series",
//                                                 image:"",
//                                                 devices:[
//                                                 [
//                                                 { "name": "Huawei P40", "image": "/assets/images/repair/Huawei/P%20Series/0009_p40.png" },
//                                                 { "name": "Huawei P30 Pro", "image": "/assets/images/repair/Huawei/P%20Series/0010_p30-pro.png" },
//                                                 { "name": "Huawei P30 Lite", "image": "/assets/images/repair/Huawei/P%20Series/0011_p30-lite.png" },
//                                                 { "name": "Huawei P30", "image": "/assets/images/repair/Huawei/P%20Series/0012_p30.png" },
//                                                 { "name": "Huawei P20 Pro", "image": "/assets/images/repair/Huawei/P%20Series/0013_p20-pro.png" },
//                                                 { "name": "Huawei P20 Lite", "image": "/assets/images/repair/Huawei/P%20Series/0014_p20-lite.png" },
//                                                 { "name": "Huawei P20", "image": "/assets/images/repair/Huawei/P%20Series/0015_p20.png" },
//                                                 { "name": "Huawei P10 Plus", "image": "/assets/images/repair/Huawei/P%20Series/0016_p10-plus.png" },
//                                                 { "name": "Huawei P10 Lite", "image": "/assets/images/repair/Huawei/P%20Series/0017_p10-lite.png" },
//                                                 { "name": "Huawei P10", "image": "/assets/images/repair/Huawei/P%20Series/0018_p10.png" },
//                                                 { "name": "Huawei P9 Plus", "image": "/assets/images/repair/Huawei/P%20Series/0019_p9-plus.png" },
//                                                 { "name": "Huawei P9", "image": "/assets/images/repair/Huawei/P%20Series/0020_p9.png" },
//                                                 { "name": "Huawei P8 Lite", "image": "/assets/images/repair/Huawei/P%20Series/0021_p8-lite.png" },
//                                                 { "name": "Huawei P8", "image": "/assets/images/repair/Huawei/P%20Series/0022_p8.png" },
//                                                 { "name": "Huawei P7", "image": "/assets/images/repair/Huawei/P%20Series/0023_p7.png" },
//                                                 { "name": "Huawei P40 Pro", "image": "/assets/images/repair/Huawei/P%20Series/0008_p40-pro.png" }
//                                                 ]},
//                                                 {
//                                                 name:"Huawei Nova",
//                                                         image:"",
//                                                         devices:
//                                                 [
//                                                 { "name": "Huawei Nova 3i", "image": "/assets/images/repair/Huawei/Nova/Huawei-Nova-3i.jpg" },
//                                                 { "name": "Huawei Nova Plus", "image": "/assets/images/repair/Huawei/Nova/0024_nova-plus.png" },
//                                                 { "name": "Huawei Nova Lite", "image": "/assets/images/repair/Huawei/Nova/0025_nova-lite.png" },
//                                                 { "name": "Huawei Nova 5i Pro", "image": "/assets/images/repair/Huawei/Nova/0026_nova-5i-pro.png" },
//                                                 { "name": "Huawei Nova 4e", "image": "/assets/images/repair/Huawei/Nova/0027_nova-4e.png" },
//                                                 { "name": "Huawei Nova 3", "image": "/assets/images/repair/Huawei/Nova/0029_nova-3.png" }
//                                                 ]},
//                                                 {
//                                                 name:"Huawei Mate",
//                                                         image:"",
//                                                         devices:
//                                                 [

//                                                 { "name": "Huawei Mate 10", "image": "/assets/images/repair/Huawei/Mate/0035_mate-10.png.webp" },
//                                                 { "name": "Huawei Mate 9 Pro", "image": "/assets/images/repair/Huawei/Mate/0036_mate-9-pro.png.webp" },
//                                                 { "name": "Huawei Mate 9", "image": "/assets/images/repair/Huawei/Mate/0037_mate-9.png.webp" },
//                                                 { "name": "Huawei Mate 8", "image": "/assets/images/repair/Huawei/Mate/0038_mate-8.png.webp" },
//                                                 { "name": "Huawei Mate 30 Pro", "image": "/assets/images/repair/Huawei/Mate/0030_mate-30-pro.png.webp" },
//                                                 { "name": "Huawei Mate 30", "image": "/assets/images/repair/Huawei/Mate/0031_mate-30.png.webp" },
//                                                 { "name": "Huawei Mate 20 Pro", "image": "/assets/images/repair/Huawei/Mate/0032_mate-20-pro.png.webp" },
//                                                 { "name": "Huawei Mate 10 Pro", "image": "/assets/images/repair/Huawei/Mate/0033_mate-10-pro.png.webp" },
//                                                 { "name": "Huawei Mate 10 Lite", "image": "/assets/images/repair/Huawei/Mate/0034_mate-10-lite.png.webp" }
//                                                 ]},
//                                                 {
//                                                 name:"Huawei Honor",
//                                                         image:"",
//                                                         devices:
//                                                 [
//                                                 { "name": "Honor Play", "image": "/assets/images/repair/Huawei/Honor/0041_honor-play.png.webp" },
//                                                 { "name": "Honor 20 Pro", "image": "/assets/images/repair/Huawei/Honor/0042_honor-20-pro.png.webp" },
//                                                 { "name": "Honor 10 Lite", "image": "/assets/images/repair/Huawei/Honor/0043_honor-10-lite.png.webp" },
//                                                 { "name": "Honor 10", "image": "/assets/images/repair/Huawei/Honor/0044_honor-10.png.webp" },
//                                                 { "name": "Honor 9N", "image": "/assets/images/repair/Huawei/Honor/0045_honor-9n.png.webp" },
//                                                 { "name": "Honor 9i", "image": "/assets/images/repair/Huawei/Honor/0046_honor-9i.png.webp" },
//                                                 { "name": "Honor 9", "image": "/assets/images/repair/Huawei/Honor/0047_honor-9.png.webp" },
//                                                 { "name": "Honor 8X", "image": "/assets/images/repair/Huawei/Honor/0048_honor-8x.png.webp" },
//                                                 { "name": "Honor 8A", "image": "/assets/images/repair/Huawei/Honor/0049_honor-8a.png.webp" },
//                                                 { "name": "Honor 8", "image": "/assets/images/repair/Huawei/Honor/0050_honor-8.png.webp" },
//                                                 { "name": "Honor 7C", "image": "/assets/images/repair/Huawei/Honor/0051_honor-7c.png.webp" },
//                                                 { "name": "Honor 7A", "image": "/assets/images/repair/Huawei/Honor/0052_honor-7a.png.webp" },
//                                                 { "name": "Honor 5X Play", "image": "/assets/images/repair/Huawei/Honor/0053_honor-5x-play.png.webp" },
//                                                 { "name": "Honor V30 Pro", "image": "/assets/images/repair/Huawei/Honor/0039_honor-v30-pro.png.webp" },
//                                                 { "name": "Honor V8", "image": "/assets/images/repair/Huawei/Honor/0040_honor-v8.png.webp" }
//                                                 ]},
//                                                 {
//                                                 name:"Huawei Ascend",
//                                                         image:"",
//                                                         devices:

//                                                 [
//                                                 { "name": "Ascend Mate 7", "image": "/assets/images/repair/Huawei/Ascend/0054_ascend-mate-7.png.webp" },
//                                                 { "name": "Ascend Mate 2", "image": "/assets/images/repair/Huawei/Ascend/0055_ascend-mate-2.png.webp" }
//                                                 ]}


//                                                 }
//                                                 ]
//                                         },
//                                         {
//                                         brand: "Others",
//                                                 image: "/assets/images/repair/Other/Other-Logo.png",
//                                                 models: [
//                                                 {
//                                                 name: "Other Phones",
//                                                         // Add Other Phone series and devices here
//                                                 }
//                                                 ]
//                                         }
//                                         ];
//                                 ]
//                                         export default deviceTypes;
,]
export default deviceTypes;
