import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileImage, faTrash, faFilePdf, faFileExcel } from "@fortawesome/free-solid-svg-icons"

export default function File() {
    return (
        <div className="grid grid-cols-7">
            <div className="flex">
                <FontAwesomeIcon className='m-auto text-2xl text-blue-600 mx-auto' icon={faFileImage} />
            </div>
            <div className="col-span-3">
                Muito texto
            </div>
            <div>
                729mb
            </div>
            <div>
                PNG
            </div>
            <div className="flex">
                <FontAwesomeIcon className='m-auto text-2xl text-blue-600 mx-auto' icon={faTrash} />
            </div>
        </div>
    )
}