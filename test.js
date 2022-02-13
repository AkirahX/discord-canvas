const Canvas = require("./index.js")
const fs = require('fs')

async function generated(){
    const image = await new Canvas.RankCard()
      
      .setXP("current", 4)
      .setXP("needed", 5)
      .setLevel(8)
      .setRank(5)
      .setReputation(5)
      .setRankName("a")
      .setUsername("a")
      .toAttachment();
  
      const attachment = image.toBuffer()

      fs.writeFileSync('img.png', attachment)
}
generated()

