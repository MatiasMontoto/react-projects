import React, { useState } from "react";

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const direction = isOpen ? "down" : "right";

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <span onClick={handleClick}>
        <i className="green folder icon"></i>
        <i className={`chevron ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: "16px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = ({ name }) => {
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp4: "film",
    mp3: "music",
    jpeg: "file image",
    png: "file image outline",
  };
  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Folder name="Folder1">
        <Folder name="SubFolder1">
          <File name="audio.mp3" />
          <File name="movie.mp4" />
          <File name="image.jpeg" />
        </Folder>
        <File name="somefile.png" />
      </Folder>
      <Folder name="Folder2">
        <File name="anotherfile" />
      </Folder>
    </div>
  );
};

export default App;
