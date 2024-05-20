
export default function App(){
  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2x1">
        <h1 className="text-4x1 font-medium text-white">Clientes</h1>

        <form className="flex flex-col my-6">
          <label className="font-medium text-white">Nome:</label>
          <input 
            type="text"
            placeholder="Digite seu nome completo..."
            className="w-full mb-5 p-2 rounded"
          />

          <label className="font-medium text-white">Email:</label>
          <input 
            type="email"
            placeholder="Digite seu email..."
            className="w-full mb-5 p-2 rounded"
          />

          <input 
            type="submit"
            placeholder="Cadastrar"
            className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
          />
        </form>

        <section className="flex flex-col">
          <article className="w-full bg-white rounded p-2">
            <p><span className="font-medium">Nome:</span> Eder</p>
            <p><span className="font-medium">Email:</span> eder@teste.com</p>
            <p><span className="font-medium">Status:</span> Ativo</p>
          </article>
        </section>
      </main>
    
    </div>
  )
}
