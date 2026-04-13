import './App.css'
import UploadIcon from './components/UploadIcon'
import File from './components/File'

function App() {
  return (
    <>
      <nav className='shadow-xl/10 h-14 flex fixed top-0 left-0 w-full'>
        <div className="container m-auto flex">
          <a href="#" className='font-bold text-2xl m-auto text-blue-950'>Importador de arquivos</a>
        </div>
      </nav>
      <header className='m-30'>
        <form action="" method="post" className='py-10'>
          <div className="w-full grid grid-rows-1 grid-cols-1">
            <div className="bg-blue-500 rounded-3xl flex flex-col m-auto p-15">
              <UploadIcon />
              <input type="file" name="" id="" className='m-auto text-white' />
            </div>
          </div>
        </form>
      </header>
      <div className="w-full bg-black">
        <File></File>
      </div>
    </>
  )
}

export default App
