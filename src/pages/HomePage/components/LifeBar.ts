const mockArr = [
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
]

const random = {
  between(min = 0, max = 100) {
    return min + Math.floor(Math.random() * (max - min))
  },
  choose(arr: any[]) {
    let index = this.between(0, arr.length)
    return arr[index]
  },
}

function genRandom(n: number = 20): Person[] {
  return new Array(n).fill(null).map((x) => {
    let nameArr = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟丘徐邱骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄曲家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰".split(
      ""
    )
    let start = random.between(1980, 2020)
    return {
      name: random.choose(nameArr) + random.choose(nameArr),
      start,
      end: start + random.between(1, 80),
    }
  })
}

interface Person {
  name: string
  start: number
  end: number
}

class LifeBar {
  list: Person[]
  min: number
  max: number
  canvasWidth: number
  rowHeight: number
  gutter: number
  rectList: any[]

  constructor({ arr = [], rowHeight = 16, gutter = 4, canvasWidth = 0 }) {
    // this.list = this.formatInput(arr)
    this.list = []
    this.min = -1
    this.max = -1
    this.rowHeight = rowHeight
    this.gutter = gutter
    this.canvasWidth = canvasWidth

    this.init(arr)
    this.rectList = this.getRectList()
  }

  init(arr: any[]) {
    this.list = this.formatInput(arr)
    let startList = this.list.map((x) => x.start)
    let endList = this.list.map((x) => x.end)
    this.min = Math.min(...startList)
    this.max = Math.max(...endList)
  }

  convertX(origin: number) {
    return Math.floor(
      ((origin - this.min) * this.canvasWidth) / (this.max - this.min)
    )
  }

  getRect(item: Person, itemIndex: number) {
    let x = this.convertX(item.start)
    let y = itemIndex * (this.rowHeight + this.gutter)
    let w = item.end - item.start
    let h = this.rowHeight
    return [x, y, w, h]
  }

  getRectList() {
    let rectList = this.list.map((item, index) => this.getRect(item, index))
    return rectList
  }

  formatInput(arr: any[]) {
    return genRandom(20).sort((a, b) => a.start - b.start)
    // return mockArr
  }
}
export default LifeBar
