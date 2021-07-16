const urlCollection = [];
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const characterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-','_'];

class ShortenerController {
    static getAllUrls(req, res) {
        return res.status(200).json({
            urlCollection,
              message: "All the urls",
        });
  }

  static encode(req, res) {
    //return res.status(200).json({nameId: 'ade'});  
    const findUrl = urlCollection.find(url => url.longUrl === req.body.url);
    let URL = '';
      if(findUrl)
      {
          return res.status(200).json({
              url: findUrl.shorturl
          });
      }
      else
      {
        var obj = new ShortenerController;
        for (var i = 0; i < 10; i++)
        {
            let randomIndex = obj.getRandomInt(3);
            if(randomIndex == 1)
            {
                randomIndex = obj.getRandomInt(numberList.length);
                URL = URL + numberList[randomIndex]; 
            }
            else
            {
                randomIndex = obj.getRandomInt(characterList.length);
                URL = URL + characterList[randomIndex]; 
            }
        }
        const newUrl = {id: urlCollection.length + 1, longUrl: req.body.url, shorturl: URL};
        urlCollection.push(newUrl);
        return res.status(200).json({
            url: URL
        });
      }
  } //end encode

  static decode(req, res) {
    const findUrl = urlCollection.find(url => url.shorturl === req.body.url);
    if(findUrl)
      {
          return res.status(200).json({
              url: findUrl.longUrl
          });
      }
      else
      {
          return res.status(404).json({message: "Url not found"});
      }
  } //end decode

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  } //end getRandomInt

} //end class ShortenerController

module.exports = ShortenerController; 