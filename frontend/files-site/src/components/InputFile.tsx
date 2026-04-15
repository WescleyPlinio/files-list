import UploadIcon from "./UploadIcon";

function handlerFile(event: React.ChangeEvent<HTMLInputElement>) {
  const files = event.target.files;

  if (!files || files.length === 0) {
    return;
  }

  const file = files[0];

  console.log(file.name);
  console.log(file.type);
  console.log(file.size);
}

export default function InputFile() {
  return (
    <label
      htmlFor="inputFile"
      className="bg-blue-500 rounded-4xl flex flex-col m-auto cursor-pointer shadow-2xl"
    >
      <UploadIcon />

      <input
        onChange={handlerFile}
        type="file"
        name="input"
        id="inputFile"
        className="hidden"
      />
    </label>
  );
}