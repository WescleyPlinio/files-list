function handlerFile (event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    
    if(!files || files.length === 0){
        return
    }
    const file = files[0]

    console.log(file.name)
    console.log(file.type)
    console.log(file.size)
}

export default function InputFile(){
    return(
        <input onChange={handlerFile}
        type="file" name="input"
        id="inputFile" />
    )
}