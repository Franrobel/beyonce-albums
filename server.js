const express = require("express");
const app = express();
app.use(express.json())

const albumsData = [
    {
      albumId: "10",
      artistName: "Beyoncé",
      collectionName: "Lemonade",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
      releaseDate: "2016-04-25T07:00:00Z",
      primaryGenreName: "Pop",
      url:
        "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
    },
    {
      albumId: "11",
      artistName: "Beyoncé",
      collectionName: "Dangerously In Love",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
      releaseDate: "2003-06-24T07:00:00Z",
      primaryGenreName: "Pop",
      url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
    },
];

app.use(express.json()); // before our routes definition
 
app.get("/albums", function (req, res) {
    res.send(albumsData);
  });
  app.get("/albums/:albumId", (req, res) => {
 const albumId = req.params.albumId
 const givenId = albumsData.find(album => album.albumId === albumId)
 res.send(givenId)
   })
   app.post("/albums", (req, res) => {  

const albumData = {
    albumId: albumsData.length+10 ,
      artistName: req.body.artistName,
      collectionName: req.body.collectionName,
      artworkUrl100: req.body.artworkUrl100,
      releaseDate: req.body.releaseDate,
      primaryGenreName: req.body.primaryGenreName,
      url: req.body.url,
}
    albumsData.push(albumData);
  return res.send(albumData);
});

app.delete("/albums/:albumId", (req,res)=>{
    const albumId = req.params.albumId
    const index = albumsData.findIndex(album=> album.albumId ===  albumId)
    const deleted = albumsData.splice(index, 1)
    console.log("album", index);
    res.send({success: true, albumDeleted: deleted});
})

app.listen(3000, () => console.log("beyonce albums"))