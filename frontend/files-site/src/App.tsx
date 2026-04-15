import './App.css'
import UploadIcon from './components/UploadIcon'
import File from './components/File'
import InputFile from './components/InputFile'

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
            <div className="rounded-3xl flex flex-col m-auto p-15">
              <InputFile/>
            </div>
          </div>
        </form>
      </header>
      <main className='container mx-auto'>
        <div className="grid grid-cols-6 rounded">
          <div className='col-span-4 col-start-2 rounded-2xl py-2 bg-gray-200'>
            <File></File>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
