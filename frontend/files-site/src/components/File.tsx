import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileImage, faTrash, faFilePdf, faFileExcel } from "@fortawesome/free-solid-svg-icons"

export default function File() {
    return (
        <div className="grid grid-cols-8">
            <div>
                <FontAwesomeIcon className='text-white mx-auto' icon={faFileImage} />
            </div>
            <div className="col-span-4">
                Muito texto
            </div>
            <div>
                729mb
            </div>
            <div>
                PNG
            </div>
            <div>
                <FontAwesomeIcon className='text-white mx-auto' icon={faTrash} />
            </div>
        </div>
    )
}