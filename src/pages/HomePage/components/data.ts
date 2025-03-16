// import { log } from "../../../common/utils/debug"
import { BarDataModel } from "./LifeBar";
const raw = `
1. 夏朝 前2100年 - 前1600年 
　　2. 商朝 前1600年 - 前1066年 
　　3. 周朝 前1066年 - 前221年 
　　1. 西周 前1066年 - 前771年 
　　2. 东周 前770年 - 前256年 
　　1. 春秋 前770年 - 前476年
　　2. 战国 前475年 - 前221年 
　　4. 秦朝 前221年 - 前206年 
　　1. 西楚 前206年 - 前202年 
　　5. 汉朝 前206年 - 220年 
　　1. 西汉 前206年 - 23年 
　　2. 新朝 8年 - 23年 
　　3. 东汉 25年 - 220年 
　　6. 三国 220年 - 280年 
　　1. 曹魏 220年 - 265年 
　　2. 西蜀 221年 - 263年 
　　3. 孙吴 222年 - 280年 
　　7. 晋朝 265年 - 420年 
　　1. 西晋 265年 - 316年 
　　2. 东晋 317年 - 420年 
　　8. 十六国 304年 - 439年 
　　1. 汉前赵 304年 - 330年 
　　2. 成汉 304年 - 347年 
　　3. 前凉 314年 - 376年 
　　4. 后赵 319年 - 350年 
　　5. 前燕 337年 - 370年 
　　6. 前秦 350年 - 394年 
　　7. 后秦 384年 - 416年 
　　8. 后燕 384年 - 407年 
　　9. 西秦 385年 - 431年 
　　10. 后凉 385年 - 403年 
　　11. 南凉 397年 - 414年 
　　12. 南燕 398年 - 410年 
　　13. 西凉 407年 - 421年 
　　14. 夏 407年 - 431年 
　　15. 北燕 407年 - 436年 
　　16. 北凉 401年 - 439年 
　　9. 南北朝 420年 - 581年 
　　1. 南朝宋 420年 - 479年 
　　2. 南朝齐 479年 - 502年 
　　3. 南朝梁 502年 - 557年 
　　4. 南朝陈 557年 - 589年 
　　1. 北魏 386年 - 534年 
　　2. 东魏 534年 - 550年 
　　3. 北齐 550年 - 577年 
　　4. 西魏 535年 - 557年 
　　5. 北周 557年 - 581年 
　　10. 隋朝 581年 - 618年 
　　11. 唐朝 618年 - 907年 
　　12. 五代十国 907年 - 979年 
　　1. 五代 907年 - 960年 
　　1. 后梁 907年 - 923年 
　　2. 后唐 923年 - 936年 
　　3. 后晋 936年 - 946年 
　　4. 后汉 947年 - 950年 
　　5. 后周 951年 - 960年 
　　2. 十国(902年 - 979年) 
　　1. 吴越(904年-978年) 
　　2. 闽国[[909年-945年，
　　3. 荆南（906年-963年) 
　　4. 楚国(907年-951年，
　　5. 吴国(904年-937年) 
　　6. 南唐(937年-975年) 
　　7. 南汉(917年-971年) 
　　8. 北汉(951年-979年) 
　　9. 前蜀(907年-925年) 
　　10. 后蜀(934年-965年) 
　　1. 北宋 960年 - 1127年 
　　2. 南宋 1127年 - 1279年 
　　3. 辽 916年 - 1125年 
　　4. 西夏 1032年 - 1227年 
　　5. 金朝 1115年 - 1234年 
　　14. 元朝 1260年 - 1368年 
　明 1368 - 1644 
　　清 1644 - 1911`;

// function main(input: string) {
//   return input
//     .split(/\n+/g)
//     .map((x) =>
//       x
//         .replace(/[\(\)\[\]（年，]/g, "")
//         // .replace("年", "")
//         .replace(/(\d+\.)/g, "")
//         .replace(/\s+/g, "")
//         .replace("-", "|")
//         .replace(/前(\d+)/g, /-$1/)
//         .replace(/([\u4e00-\u9fa5]{1,})/g, /$1/)
//         .replace(/\//g, "|")
//     )
//     .filter((o) => o)
//     .map((x) => {
//       let arr = x.split("|").filter((o) => o)
//       return {
//         name: arr[0],
//         start: Number(arr[1]),
//         end: Number(arr[2]),
//       }
//     })
// }
const log = console.log.bind(console);
// log(main(raw))

export const dynastyList: BarDataModel[] = [
  { name: "夏朝", start: -2100, end: -1600 },
  { name: "商朝", start: -1600, end: -1066 },
  { name: "周朝", start: -1066, end: -221 },
  { name: "西周", start: -1066, end: -771 },
  { name: "东周", start: -770, end: -256 },
  { name: "春秋", start: -770, end: -476 },
  { name: "战国", start: -475, end: -221 },
  { name: "秦朝", start: -221, end: -206 },
  { name: "西楚", start: -206, end: -202 },
  { name: "汉朝", start: -206, end: 220 },
  { name: "西汉", start: -206, end: 23 },
  { name: "新朝", start: 8, end: 23 },
  { name: "东汉", start: 25, end: 220 },
  { name: "三国", start: 220, end: 280 },
  { name: "曹魏", start: 220, end: 265 },
  { name: "西蜀", start: 221, end: 263 },
  { name: "孙吴", start: 222, end: 280 },
  { name: "晋朝", start: 265, end: 420 },
  { name: "西晋", start: 265, end: 316 },
  { name: "东晋", start: 317, end: 420 },
  { name: "十六国", start: 304, end: 439 },
  { name: "汉前赵", start: 304, end: 330 },
  { name: "成汉", start: 304, end: 347 },
  { name: "前凉", start: 314, end: 376 },
  { name: "后赵", start: 319, end: 350 },
  { name: "前燕", start: 337, end: 370 },
  { name: "前秦", start: 350, end: 394 },
  { name: "后秦", start: 384, end: 416 },
  { name: "后燕", start: 384, end: 407 },
  { name: "西秦", start: 385, end: 431 },
  { name: "后凉", start: 385, end: 403 },
  { name: "南凉", start: 397, end: 414 },
  { name: "南燕", start: 398, end: 410 },
  { name: "西凉", start: 407, end: 421 },
  { name: "夏", start: 407, end: 431 },
  { name: "北燕", start: 407, end: 436 },
  { name: "北凉", start: 401, end: 439 },
  { name: "南北朝", start: 420, end: 581 },
  { name: "南朝宋", start: 420, end: 479 },
  { name: "南朝齐", start: 479, end: 502 },
  { name: "南朝梁", start: 502, end: 557 },
  { name: "南朝陈", start: 557, end: 589 },
  { name: "北魏", start: 386, end: 534 },
  { name: "东魏", start: 534, end: 550 },
  { name: "北齐", start: 550, end: 577 },
  { name: "西魏", start: 535, end: 557 },
  { name: "北周", start: 557, end: 581 },
  { name: "隋朝", start: 581, end: 618 },
  { name: "唐朝", start: 618, end: 907 },
  { name: "五代十国", start: 907, end: 979 },
  { name: "五代", start: 907, end: 960 },
  { name: "后梁", start: 907, end: 923 },
  { name: "后唐", start: 923, end: 936 },
  { name: "后晋", start: 936, end: 946 },
  { name: "后汉", start: 947, end: 950 },
  { name: "后周", start: 951, end: 960 },
  { name: "十国", start: 902, end: 979 },
  { name: "吴越", start: 904, end: 978 },
  { name: "闽国", start: 909, end: 945 },
  { name: "荆南", start: 906, end: 963 },
  { name: "楚国", start: 907, end: 951 },
  { name: "吴国", start: 904, end: 937 },
  { name: "南唐", start: 937, end: 975 },
  { name: "南汉", start: 917, end: 971 },
  { name: "北汉", start: 951, end: 979 },
  { name: "前蜀", start: 907, end: 925 },
  { name: "后蜀", start: 934, end: 965 },
  { name: "北宋", start: 960, end: 1127 },
  { name: "南宋", start: 1127, end: 1279 },
  { name: "辽", start: 916, end: 1125 },
  { name: "西夏", start: 1032, end: 1227 },
  { name: "金朝", start: 1115, end: 1234 },
  { name: "元朝", start: 1260, end: 1368 },
  { name: "明", start: 1368, end: 1644 },
  { name: "清", start: 1644, end: 1911 },
  // { name: "PRC", start: 1949, end: 0 },
];

export const chinaList2 = [
  { name: "夏", start: -2070, end: -1600 },
  { name: "商", start: -1600, end: -1046 },
  { name: "周", start: -1046, end: -256, children: ["西周", "东周"] },
  { name: "西周", start: -1046, end: -771 },
  { name: "东周", start: -770, end: -256, children: ["春秋", "战国"] },
  { name: "春秋", start: -770, end: -476 },
  { name: "战国", start: -475, end: -221 },
  { name: "秦", start: -221, end: -207 },
  {
    name: "汉",
    start: -202,
    end: 220,
    children: ["西汉", "新", "玄汉", "东汉"],
  },
  { name: "西汉", start: -202, end: 8 },
  { name: "新", start: 8, end: 23 },
  { name: "玄汉", start: 23, end: 25 },
  { name: "东汉", start: 25, end: 220 },
  { name: "三国", start: 220, end: 280, children: ["曹魏", "蜀汉", "孙吴"] },
  { name: "曹魏", start: 220, end: 265 },
  { name: "蜀汉", start: 221, end: 263 },
  { name: "孙吴", start: 229, end: 280 },
  { name: "晋", start: 265, end: 420, children: ["西晋", "东晋"] },
  { name: "西晋", start: 265, end: 316 },
  { name: "东晋", start: 317, end: 420 },
  {
    name: "十六国",
    start: 304,
    end: 439,
    children: [
      "成汉",
      "前赵",
      "后赵",
      "前凉",
      "前燕",
      "前秦",
      "后秦",
      "后燕",
      "西秦",
      "后凉",
      "南凉",
      "南燕",
      "西凉",
      "胡夏",
      "北燕",
      "北凉",
    ],
  },
  { name: "成汉", start: 304, end: 347 },
  { name: "前赵", start: 304, end: 329 },
  { name: "后赵", start: 319, end: 351 },
  { name: "前凉", start: 301, end: 376 },
  { name: "前燕", start: 337, end: 370 },
  { name: "前秦", start: 351, end: 394 },
  { name: "后秦", start: 384, end: 417 },
  { name: "后燕", start: 384, end: 407 },
  { name: "西秦", start: 385, end: 431 },
  { name: "后凉", start: 386, end: 403 },
  { name: "南凉", start: 397, end: 414 },
  { name: "南燕", start: 398, end: 410 },
  { name: "西凉", start: 400, end: 421 },
  { name: "胡夏", start: 407, end: 431 },
  { name: "北燕", start: 407, end: 436 },
  { name: "北凉", start: 397, end: 439 },
  {
    name: "南北朝",
    start: 386,
    end: 589,
    children: [
      "刘宋",
      "南齐",
      "南梁",
      "南陈",
      "北魏",
      "东魏",
      "西魏",
      "北齐",
      "北周",
    ],
  },
  { name: "刘宋", start: 420, end: 479 },
  { name: "南齐", start: 479, end: 502 },
  { name: "南梁", start: 502, end: 557 },
  { name: "南陈", start: 557, end: 589 },
  { name: "北魏", start: 386, end: 534 },
  { name: "东魏", start: 534, end: 550 },
  { name: "西魏", start: 535, end: 556 },
  { name: "北齐", start: 550, end: 577 },
  { name: "北周", start: 557, end: 581 },
  { name: "隋", start: 581, end: 618 },
  { name: "唐", start: 618, end: 907 },
  { name: "武周", start: 690, end: 705 },
  {
    name: "五代",
    start: 907,
    end: 960,
    children: ["后梁", "后唐", "后晋", "后汉", "后周"],
  },
  { name: "后梁", start: 907, end: 923 },
  { name: "后唐", start: 923, end: 936 },
  { name: "后晋", start: 936, end: 947 },
  { name: "后汉", start: 947, end: 950 },
  { name: "后周", start: 951, end: 960 },
  {
    name: "十国",
    start: 902,
    end: 979,
    children: [
      "南吴",
      "南唐",
      "吴越",
      "闽",
      "南楚",
      "南汉",
      "南平",
      "北汉",
      "前蜀",
      "后蜀",
    ],
  },
  { name: "南吴", start: 902, end: 937 },
  { name: "南唐", start: 937, end: 975 },
  { name: "吴越", start: 907, end: 978 },
  { name: "闽", start: 909, end: 945 },
  { name: "南楚", start: 907, end: 951 },
  { name: "南汉", start: 917, end: 971 },
  { name: "南平", start: 924, end: 963 },
  { name: "北汉", start: 951, end: 979 },
  { name: "前蜀", start: 907, end: 925 },
  { name: "后蜀", start: 934, end: 965 },
  { name: "宋", start: 960, end: 1279, children: ["北宋", "南宋"] },
  { name: "北宋", start: 960, end: 1127 },
  { name: "南宋", start: 1127, end: 1279 },
  { name: "辽", start: 907, end: 1125 },
  { name: "西辽", start: 1124, end: 1218 },
  { name: "西夏", start: 1038, end: 1227 },
  { name: "金", start: 1115, end: 1234 },
  { name: "元", start: 1271, end: 1368 },
  { name: "明", start: 1368, end: 1644 },
  { name: "清", start: 1636, end: 1912 },
];

export const chinaList3 = [
  { name: "夏", start: -2070, end: -1600, type: "main" },
  { name: "商", start: -1600, end: -1046, type: "main" },
  {
    name: "周",
    start: -1046,
    end: -256,
    children: ["西周", "东周"],
    type: "main",
  },
  { name: "西周", start: -1046, end: -771, type: "sub" },
  {
    name: "东周",
    start: -770,
    end: -256,
    children: ["春秋", "战国"],
    type: "sub",
  },
  { name: "春秋", start: -770, end: -476, type: "sub" },
  { name: "战国", start: -475, end: -221, type: "sub" },

  { name: "秦", start: -221, end: -207, type: "main" },

  {
    name: "汉",
    start: -202,
    end: 220,
    children: ["西汉", "新", "玄汉", "东汉"],
    type: "main",
  },
  { name: "西汉", start: -202, end: 8, type: "sub" },
  { name: "新", start: 8, end: 23, type: "sub" },
  { name: "玄汉", start: 23, end: 25, type: "sub" },
  { name: "东汉", start: 25, end: 220, type: "sub" },

  {
    name: "三国",
    start: 220,
    end: 280,
    children: ["曹魏", "蜀汉", "孙吴"],
    type: "main",
  },
  { name: "曹魏", start: 220, end: 265, type: "sub" },
  { name: "蜀汉", start: 221, end: 263, type: "sub" },
  { name: "孙吴", start: 229, end: 280, type: "sub" },

  {
    name: "晋",
    start: 265,
    end: 420,
    children: ["西晋", "东晋"],
    type: "main",
  },
  { name: "西晋", start: 265, end: 316, type: "sub" },
  { name: "东晋", start: 317, end: 420, type: "sub" },

  {
    name: "十六国",
    start: 304,
    end: 439,
    children: [
      "成汉",
      "前赵",
      "后赵",
      "前凉",
      "前燕",
      "前秦",
      "后秦",
      "后燕",
      "西秦",
      "后凉",
      "南凉",
      "南燕",
      "西凉",
      "胡夏",
      "北燕",
      "北凉",
    ],
    type: "main",
  },
  { name: "成汉", start: 304, end: 347, type: "sub" },
  { name: "前赵", start: 304, end: 329, type: "sub" },
  { name: "后赵", start: 319, end: 351, type: "sub" },
  { name: "前凉", start: 301, end: 376, type: "sub" },
  { name: "前燕", start: 337, end: 370, type: "sub" },
  { name: "前秦", start: 351, end: 394, type: "sub" },
  { name: "后秦", start: 384, end: 417, type: "sub" },
  { name: "后燕", start: 384, end: 407, type: "sub" },
  { name: "西秦", start: 385, end: 431, type: "sub" },
  { name: "后凉", start: 386, end: 403, type: "sub" },
  { name: "南凉", start: 397, end: 414, type: "sub" },
  { name: "南燕", start: 398, end: 410, type: "sub" },
  { name: "西凉", start: 400, end: 421, type: "sub" },
  { name: "胡夏", start: 407, end: 431, type: "sub" },
  { name: "北燕", start: 407, end: 436, type: "sub" },
  { name: "北凉", start: 397, end: 439, type: "sub" },

  {
    name: "南北朝",
    start: 386,
    end: 589,
    children: [
      "刘宋",
      "南齐",
      "南梁",
      "南陈",
      "北魏",
      "东魏",
      "西魏",
      "北齐",
      "北周",
    ],
    type: "main",
  },
  { name: "刘宋", start: 420, end: 479, type: "sub" },
  { name: "南齐", start: 479, end: 502, type: "sub" },
  { name: "南梁", start: 502, end: 557, type: "sub" },
  { name: "南陈", start: 557, end: 589, type: "sub" },
  { name: "北魏", start: 386, end: 534, type: "sub" },
  { name: "东魏", start: 534, end: 550, type: "sub" },
  { name: "西魏", start: 535, end: 556, type: "sub" },
  { name: "北齐", start: 550, end: 577, type: "sub" },
  { name: "北周", start: 557, end: 581, type: "sub" },

  { name: "隋", start: 581, end: 618, type: "main" },

  { name: "唐", start: 618, end: 907, type: "main" },
  { name: "武周", start: 690, end: 705, type: "main" },

  {
    name: "五代",
    start: 907,
    end: 960,
    children: ["后梁", "后唐", "后晋", "后汉", "后周"],
    type: "main",
  },
  { name: "后梁", start: 907, end: 923, type: "sub" },
  { name: "后唐", start: 923, end: 936, type: "sub" },
  { name: "后晋", start: 936, end: 947, type: "sub" },
  { name: "后汉", start: 947, end: 950, type: "sub" },
  { name: "后周", start: 951, end: 960, type: "sub" },

  {
    name: "十国",
    start: 902,
    end: 979,
    children: [
      "南吴",
      "南唐",
      "吴越",
      "闽",
      "南楚",
      "南汉",
      "南平",
      "北汉",
      "前蜀",
      "后蜀",
    ],
    type: "main",
  },
  { name: "南吴", start: 902, end: 937, type: "sub" },
  { name: "南唐", start: 937, end: 975, type: "sub" },
  { name: "吴越", start: 907, end: 978, type: "sub" },
  { name: "闽", start: 909, end: 945, type: "sub" },
  { name: "南楚", start: 907, end: 951, type: "sub" },
  { name: "南汉", start: 917, end: 971, type: "sub" },
  { name: "南平", start: 924, end: 963, type: "sub" },
  { name: "北汉", start: 951, end: 979, type: "sub" },
  { name: "前蜀", start: 907, end: 925, type: "sub" },
  { name: "后蜀", start: 934, end: 965, type: "sub" },

  {
    name: "宋",
    start: 960,
    end: 1279,
    children: ["北宋", "南宋"],
    type: "main",
  },
  { name: "北宋", start: 960, end: 1127, type: "sub" },
  { name: "南宋", start: 1127, end: 1279, type: "sub" },

  { name: "辽", start: 907, end: 1125, type: "main" },
  { name: "西辽", start: 1124, end: 1218, type: "main" },
  { name: "西夏", start: 1038, end: 1227, type: "main" },
  { name: "金", start: 1115, end: 1234, type: "main" },

  { name: "元", start: 1271, end: 1368, type: "main" },
  { name: "明", start: 1368, end: 1644, type: "main" },
  { name: "清", start: 1636, end: 1912, type: "main" },
];
