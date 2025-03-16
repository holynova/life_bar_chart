export function genColorList(n = 6, alpha = 0.3) {
  let res = [];
  // let n = 6
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      for (var k = 0; k < n; k++) {
        let r = Math.floor(255 - (255 / n) * i);
        let g = Math.floor(255 - (255 / n) * j);
        let b = Math.floor(255 - (255 / n) * k);
        res.push(`rgba(${r},${g},${b},${alpha})`);
      }
    }
  }
  return res;
}

export const colorList1 = genColorList(6);
export const colorList2 = [
  "#FF0000",
  "#FFA07A",
  "#FA8072",
  "#E9967A",
  "#F08080",
  "#CD5C5C",
  "#DC143C",
  "#B22222",
  "#8B0000",
  "#FFC0CB",
  "#FFB6C1",
  "#FF69B4",
  "#FF1493",
  "#DB7093",
  "#C71585",
  "#FFA500",
  "#FF8C00",
  "#FF7F50",
  "#FF6347",
  "#FF4500",
  "#FFFF00",
  "#FFFFE0",
  "#FFFACD",
  "#FAFAD2",
  "#FFEFD5",
  "#FFE4B5",
  "#FFDAB9",
  "#EEE8AA",
  "#F0E68C",
  "#BDB76B",
  "#FFD700",
  "#800080",
  "#E6E6FA",
  "#D8BFD8",
  "#DDA0DD",
  "#EE82EE",
  "#DA70D6",
  "#FF00FF",
  "#FF00FF",
  "#BA55D3",
  "#9370DB",
  "#9966CC",
  "#8A2BE2",
  "#9400D3",
  "#9932CC",
  "#8B008B",
  "#7B68EE",
  "#6A5ACD",
  "#483D8B",
  "#4B0082",
  "#008000",
  "#98FB98",
  "#90EE90",
  "#9ACD32",
  "#ADFF2F",
  "#7FFF00",
  "#7CFC00",
  "#00FF00",
  "#32CD32",
  "#00FA9A",
  "#00FF7F",
  "#66CDAA",
  "#7FFFD4",
  "#20B2AA",
  "#3CB371",
  "#2E8B57",
  "#8FBC8F",
  "#228B22",
  "#006400",
  "#6B8E23",
  "#808000",
  "#556B2F",
  "#008080",
  "#0000FF",
  "#ADD8E6",
  "#B0E0E6",
  "#AFEEEE",
  "#48D1CC",
  "#40E0D0",
  "#00CED1",
  "#E0FFFF",
  "#00FFFF",
  "#00FFFF",
  "#008B8B",
  "#5F9EA0",
  "#B0C4DE",
  "#4682B4",
  "#87CEFA",
  "#87CEEB",
  "#00BFFF",
  "#1E90FF",
  "#6495ED",
  "#4169E1",
  "#0000CD",
  "#00008B",
  "#000080",
  "#191970",
  "#A52A2A",
  "#FFF8DC",
  "#FFEBCD",
  "#FFE4C4",
  "#FFDEAD",
  "#F5DEB3",
  "#DEB887",
  "#D2B48C",
  "#BC8F8F",
  "#F4A460",
  "#DAA520",
  "#B8860B",
  "#CD853F",
  "#D2691E",
  "#8B4513",
  "#A0522D",
  "#800000",
  "#FFFFFF",
  "#FFFAFA",
  "#F0FFF0",
  "#F5FFFA",
  "#F0FFFF",
  "#F0F8FF",
  "#F8F8FF",
  "#F5F5F5",
  "#FFF5EE",
  "#F5F5DC",
  "#FDF5E6",
  "#FFFAF0",
  "#FFFFF0",
  "#FAEBD7",
  "#FAF0E6",
  "#FFF0F5",
  "#FFE4E1",
  "#808080",
  "#DCDCDC",
  "#D3D3D3",
  "#C0C0C0",
  "#A9A9A9",
  "#696969",
  "#778899",
  "#708090",
  "#2F4F4F",
  "#000000",
];

export const mockArr = [
  {
    name: "李白",
    start: 701,
    end: 762,
  },

  {
    name: "苏轼",
    start: 1037,
    end: 1101,
  },

  {
    name: "白居易",
    start: 772,
    end: 846,
  },
];
