import React, { useState } from 'react'
import { GridList, GridTile, ImageList } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ZoomIn from "@mui/material/svg-icons/action/zoom-in"
import Dialog from '@mui/material/Dialog';
import FlatButton from "@mui/material/FlatButton";

const ImageResults = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("")

  const handleOpen = (img) => {
    setOpen(true);
    setCurrentImg(img);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <GridList cols={3}>
        {images.map(img => (
          <GridTile 
            title={img.tags}
            key={img.id}
            subtitle={
              <span>
                by <strong>{img.user}</strong>
              </span>
            }
            actionIcon={
              <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                <ZoomIn color="white" />
              </IconButton>
            }
          >
            <img src={img.largeImageURL} alt="" />
          </GridTile>
        ))}
      </GridList>

      <FlatButton label="Close" primary={true} onClick={handleClose} />

      <div>
        {ImageListContent}
        <Dialog actions={actions} modal={false} open={open} onRequestClose={handleClose}>
          <img src={currentImg} alt="" style={{ width: "100%" }} />
        </Dialog>
      </div>
    </>
  )
}


export default ImageResults