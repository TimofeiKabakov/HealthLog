// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
// import img1 from "../imgs/img1.png";
// import img2 from "../imgs/img2.png";
// import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    path: "/home",
  },
  {
    icon: UilClipboardAlt,
    heading: "Workout Plans",
    path: "/training",
  },
  {
    icon: UilUsersAlt,
    heading: "Recipes",
    path: "/diet",
  },
  {
    icon: UilPackage,
    heading: "Journal",
    path: "/home",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    cardType: "Calories",
    title: "Calories",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #2e325c 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 1,
    value: "2,650\nRemaining",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    cardType: "Macros",
    title: "Macros",
    color: {
      backGround: "linear-gradient(180deg, #252849 0%, #2e325c 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    cardType: "Nutritions",
    title: "Nutrition",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
export const dashboardcardsData = [
  {
    cardType: "DashBoard",
    title: "Calories",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #2e325c 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 1,
    value: "2,650\nRemaining",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    cardType: "DashBoard",
    title: "Macros",
    color: {
      backGround: "linear-gradient(180deg, #252849 0%, #2e325c 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    cardType: "DashBoard",
    title: "Nutrition",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
// export const UpdatesData = [
//   {
//     img: img1,
//     name: "Andrew Thomas",
//     noti: "has ordered Apple smart watch 2500mh battery.",
//     time: "25 seconds ago",
//   },
//   {
//     img: img2,
//     name: "James Bond",
//     noti: "has received Samsung gadget for charging battery.",
//     time: "30 minutes ago",
//   },
//   {
//     img: img3,
//     name: "Iron Man",
//     noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
//     time: "2 hours ago",
//   },
// ];
